## Sample test cases - Add to shopping list feature 

### **Test Case 4: Add the same product multiple times (quantity increase scenario)**

**Test Case ID:** TC\_ADD\_004

**Title:** Verify that adding the same product increases its quantity instead of duplicating the entry

**Preconditions:**

* User is logged in.
* Shopping list is empty.

**Test Steps:**

1. Navigate to a product (e.g., “Orange Juice”).
2. Add it to the shopping list.
3. Add the same product again.
4. Go to the shopping list page.

**Expected Result:**

* The shopping list should show **one entry** for “Orange Juice.”
* Quantity should be updated to **2**.
* Total price should reflect updated quantity.

### **Test Case 5: Verify shopping list is accessible across different browsers/devices**

**Test Case ID:** TC\_ADD\_005

**Title:** Add item to shopping list, then login on another browser/device and verify list persistence

**Preconditions:**

* User has an ALDI account.
* Shopping list is empty.

**Test Steps:**

1. Open **Browser A** (e.g., Chrome).
2. Login and add a product (e.g., “Tomatoes”) to the shopping list.
3. Logout (optional).
4. Open **Browser B** (e.g., Firefox) or use another device.
5. Login with the same account.
6. Navigate to the shopping list page.

**Expected Result:**

* The shopping list in Browser B should show the same product (“Tomatoes”).
* List data is synced across browsers/devices for the same account.

### **Test Case 6: Verify shopping list persistence after logout & login**

**Test Case ID:** TC\_ADD\_006

**Title:** Add a product to shopping list and verify persistence after logging out and back in

**Preconditions:**

* User is logged in.
* Shopping list is empty.

**Test Steps:**

1. Add a product (e.g., “Cereal”) to the shopping list.
2. Logout from the website.
3. Log back in with the same account.
4. Navigate to the shopping list page.

**Expected Result:**

* The product (“Cereal”) should still be present in the shopping list.
* List persistence is maintained across sessions.

### **Test Case 7: Verify system behavior when user session expires and then tries to add a product to shopping list**

**Test Case ID:** TC\_ADD\_007

**Title:** Try to add a product to shopping list after session expired

**Preconditions:**

* User is logged in.
* User session lifetime is configured (e.g., 10 seconds of inactivity).
* Shopping list is empty.

**Test Steps:**

1. Navigate to a product category (e.g., "Dairy & Eggs").
2. Leave the browser idle until the session expires (e.g., 15 seconds of inactivity).
3. After timeout, attempt to add a product (e.g., “Milk 1 Gallon”) to the shopping list by clicking “Add to Shopping List.”

**Expected Result:**

* The system should not add the product to the shopping list.
* User should be redirected to the login page or shown a “Session expired – please log in again” message.
* Once logged back in, the user should be able to add the product successfully.

---

## Sample Bug Report – Shopping List Sync Issue

**Bug ID:** BUG\_ADD\_001

**Title:** Shopping list items do not sync across different browsers/devices

**Severity:** High

**Reported By:** Imre Csermőy-Németh

**Related Test Case IDs:** TC\_ADD\_005

**Environment:**

* Testing Environment: QA (qa.aldi.dev)
* Browser A: Chrome 116 (Windows 11)
* Browser B: Firefox 117 (macOS Ventura)
* Backend Version: API v2.3.1
* Frontend Version: Web App v5.4.2

**Preconditions:**

* User has a registered ALDI account.
* Shopping list is initially empty.

**Steps to Reproduce:**

1. Open **Browser A (Chrome)** and log in with valid credentials.
2. Add a product (e.g., “Tomatoes”) to the shopping list.
3. Logout (optional).
4. Open **Browser B (Firefox)** on another device or system.
5. Login with the same account.
6. Navigate to the shopping list page.

**Expected Result:**

* The shopping list should display “Tomatoes” in Browser B as well, synced with Browser A.

**Actual Result:**

* The shopping list in Browser B is empty.
* Items added in Browser A are not reflected across sessions/devices.

**Attachments:**

* Screenshot from Browser A showing “Tomatoes” in the shopping list.
* Screenshot from Browser B showing an empty shopping list.
* Console logs from both browsers.
