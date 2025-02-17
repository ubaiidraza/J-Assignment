document.addEventListener("DOMContentLoaded", function () {
  /* --- Column Options Logic --- */
  const columnsBtn = document.getElementById("columnsBtn");
  const columnOptions = document.getElementById("columnOptions");
  const table = document.getElementById("customerTable");
  const headerCells = table.querySelectorAll("thead th");

  headerCells.forEach((th, index) => {
    const label = document.createElement("label");
    label.className = "flex items-center gap-2 p-1 cursor-pointer";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.colIndex = index;
    checkbox.checked = true;
    checkbox.className = "form-checkbox";

    const textNode = document.createTextNode(" " + th.innerText);
    label.appendChild(checkbox);
    label.appendChild(textNode);
    columnOptions.appendChild(label);

    checkbox.addEventListener("change", function () {
      const colIndex = this.dataset.colIndex;
      table.querySelectorAll("tr").forEach((row) => {
        const cell = row.children[colIndex];
        if (cell) {
          cell.style.display = this.checked ? "" : "none";
        }
      });
    });
  });

  columnsBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    columnOptions.classList.toggle("hidden");
  });

  document.addEventListener("click", function (e) {
    if (!columnOptions.contains(e.target) && e.target !== columnsBtn) {
      columnOptions.classList.add("hidden");
    }
  });

  /* --- View Modal Logic --- */
  const popupModal = document.getElementById("popupModal");
  const closeModal = document.getElementById("closeModal");
  const viewID = document.getElementById("viewID");
  const viewDate = document.getElementById("viewDate");
  const viewName = document.getElementById("viewName");
  const viewStatus = document.getElementById("viewStatus");
  const viewCell = document.getElementById("viewCell");
  const viewCategory = document.getElementById("viewCategory");
  const viewRent = document.getElementById("viewRent");
  const viewDeposit = document.getElementById("viewDeposit");
  const viewBeds = document.getElementById("viewBeds");

  document.querySelectorAll(".view-btn").forEach(button => {
    button.addEventListener("click", () => {
      const row = button.closest("tr");
      const cells = row.querySelectorAll("td");

      viewID.value = cells[0].textContent.trim();
      viewDate.value = cells[1].textContent.trim();
      viewName.value = cells[2].textContent.trim();
      viewStatus.value = cells[3].textContent.trim();
      viewCell.value = cells[4].textContent.trim();
      viewCategory.value = cells[5].textContent.trim();
      viewRent.value = cells[6].textContent.trim();
      viewDeposit.value = cells[7].textContent.trim();
      viewBeds.value = cells[8].textContent.trim();

      popupModal.classList.remove("hidden");
    });
  });

  closeModal.addEventListener("click", () => {
    popupModal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === popupModal) {
      popupModal.classList.add("hidden");
    }
  });

  /* --- Edit Modal Logic --- */
  const editModal = document.getElementById("editModal");
  const closeEditModal = document.getElementById("closeEditModal");
  const saveEditBtn = document.getElementById("saveEditBtn");

  const editID = document.getElementById("editID");
  const editDate = document.getElementById("editDate");
  const editName = document.getElementById("editName");
  const editStatus = document.getElementById("editStatus");
  const editCell = document.getElementById("editCell");
  const editCategory = document.getElementById("editCategory");
  const editRent = document.getElementById("editRent");
  const editDeposit = document.getElementById("editDeposit");
  const editBeds = document.getElementById("editBeds");

  document.querySelectorAll(".edit-btn").forEach(button => {
    button.addEventListener("click", () => {
      const row = button.closest("tr");
      const cells = row.querySelectorAll("td");

      editID.value = cells[0].textContent.trim();
      editDate.value = cells[1].textContent.trim();
      editName.value = cells[2].textContent.trim();
      editStatus.value = cells[3].textContent.trim();
      editCell.value = cells[4].textContent.trim();
      editCategory.value = cells[5].textContent.trim();
      editRent.value = cells[6].textContent.trim();
      editDeposit.value = cells[7].textContent.trim();
      editBeds.value = cells[8].textContent.trim();

      editModal.classList.remove("hidden");
    });
  });

  closeEditModal.addEventListener("click", () => {
    editModal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === editModal) {
      editModal.classList.add("hidden");
    }
  });

  saveEditBtn.addEventListener("click", () => {
    alert("Record updated successfully!");
    editModal.classList.add("hidden");
  });

  /* --- Additional Delegation for Edit Modal (Optional) --- */
  document.querySelector("tbody").addEventListener("click", function (event) {
    if (event.target.closest(".edit-btn")) {
      const row = event.target.closest("tr");
      if (!row) return;
      
      document.getElementById("editID").value = row.children[0].textContent.trim();
      document.getElementById("editDate").value = row.children[1].textContent.trim();
      document.getElementById("editName").value = row.children[2].textContent.trim();
      document.getElementById("editStatus").value = row.children[3].textContent.trim();
      document.getElementById("editCell").value = row.children[4].textContent.trim();
      document.getElementById("editCategory").value = row.children[5].textContent.trim();
      document.getElementById("editRent").value = row.children[6].textContent.trim();
      document.getElementById("editDeposit").value = row.children[7].textContent.trim();
      document.getElementById("editBeds").value = row.children[8].textContent.trim();

      editModal.classList.remove("hidden");
    }
  });
});