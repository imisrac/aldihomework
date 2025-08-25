# Docker

### Docker is a containerization platform.

In some aspects it is something like a virtualization platform:
- isolated
- controlled (resources, network etc.)
- can imitate production environments (without the risk of breaking a real production environment)
- state can be saved and restored (like a snapshot)

But it is more:
- scalable (multiple instances can serve the same goal)
- easy to setup (e.g. with docker compose)
- portable (they share the host operating system’s kernel)

### How would I set up a test environment with docker?

Hopefully the software to test is containerized too.
I would use some scripts (e.g. bash), docker-compose and a test runner (e.g. npx playwright)

* scripts are good to control the whole operation and are also gives the tester flexibility (e.g. to inject test data)
* docker-compose can handle dependencies (e.g. database, webservice) and deploy the software to test
* when the environment is ready, the script can also call the test runner
* the test runner will execute the tests then create and publish reports

---

# CI

I'm familiar with Jenkins and gitHub as CI tools.

Main ingredients I would use:
* git
* CI tool
* test report tool

### git
The right place for the test code.
It is a distributed version control system.

### CI tool
The CI tool can access the test code in git.
Can be triggered by a push in git.
Also, the CI tool should be able to run the tests (gitHub actions, jenkins runners)

### test report tool
It is very useful to see multiple test results at the same time. E.g. it can tell us when a failure happens the given software version where it appears first.
There are multiple solutions are out there already for this (e.g. Allure). But basically it is just a database and a web frontend (like playwright provides).

### when to run
* functional tests should run on every pull request (to prevent fails in main branch)
* integration tests and system tests should run whenever a component is about to release (to prevent release fails)
* non-functional tests should run as an acceptance test (internally released product, but not yet published)