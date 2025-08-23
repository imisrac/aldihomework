import { test, expect } from '@playwright/test';

let createdTaskId: number;

test.describe('Task API Tests', () => {

  // POST /tasks - Create a new task
  test('Create a new task', async ({ request }) => {
    const response = await request.post('/tasks', {
      data: {
        title: 'New Task',
        description: 'Write API tests',
        completed: false,
      },
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.id).toBeDefined();
    expect(body.title).toBe('New Task');
    expect(body.completed).toBe(false);

    createdTaskId = body.id;
  });

  // GET /tasks/{id} - Retrieve a task by ID
  test('Retrieve an existing task', async ({ request }) => {
    const response = await request.get(`/tasks/${createdTaskId}`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(createdTaskId);
    expect(body.title).toBe('New Task');
  });

  // PUT /tasks/{id} - Update a task
  test('Update a task', async ({ request }) => {
    const response = await request.put(`/tasks/${createdTaskId}`, {
      data: {
        title: 'Updated Task',
        description: 'Updated details',
        completed: true,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(createdTaskId);
    expect(body.title).toBe('Updated Task');
    expect(body.completed).toBe(true);
  });

  // DELETE /tasks/{id} - Delete a task
  test('Delete a task', async ({ request }) => {
    const response = await request.delete(`/tasks/${createdTaskId}`);
    expect(response.status()).toBe(204);
  });

  // Negative scenario: delete task that had been deleted already
  test('Delete task not found', async ({ request }) => {
    const response = await request.delete(`/tasks/${createdTaskId}`);
    expect(response.status()).toBe(404);

    const body = await response.json();
    expect(body.error).toContain('not found');
  });

  // Negative scenario: retrieve a task that had been deleted already
  test('Retrieve task not found', async ({ request }) => {
    const response = await request.get(`/tasks/${createdTaskId}`);
    expect(response.status()).toBe(404);

    const body = await response.json();
    expect(body.error).toContain('not found');
  });

  // Negative scenario: update a task that had been deleted already
  test('Update task not found', async ({ request }) => {
    const response = await request.get(`/tasks/${createdTaskId}`);
    expect(response.status()).toBe(404);

    const body = await response.json();
    expect(body.error).toContain('not found');
  });

});

test.describe('Task API Other Negative Tests', () => {

  test('Create task without title', async ({ request }) => {
    const response = await request.post('/tasks', {
      data: { description: 'Missing title', completed: false },
    });
    expect(response.status()).toBe(400);

    const body = await response.json();
    expect(body.error).toContain('title');
  });

  test('Create task with invalid payload', async ({ request }) => {
    const response = await request.post('/tasks', {
      data: { title: 12345, description: 'Invalid title', completed: 'not-a-boolean' },
    });
    expect(response.status()).toBe(400);

    const body = await response.json();
    expect(body.error).toContain('invalid');
  });

  test('Get task with invalid ID format', async ({ request }) => {
    const response = await request.get('/tasks/abc');
    expect(response.status()).toBe(400);

    const body = await response.json();
    expect(body.error).toContain('Invalid task ID');
  });

  test('Delete task with invalid ID format', async ({ request }) => {
    const response = await request.delete('/tasks/xyz');
    expect(response.status()).toBe(400);

    const body = await response.json();
    expect(body.error).toContain('Invalid task ID');
  });
});
