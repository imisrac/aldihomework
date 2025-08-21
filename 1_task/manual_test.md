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

---

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

---

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

---