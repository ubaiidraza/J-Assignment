const deleteModal = document.getElementById("deleteModal");
const deleteConfirm = document.getElementById("deleteConfirm");
const deleteCancel = document.getElementById("deleteCancel");

let selectedRow = null;

// Delete button event listener
document.querySelectorAll(".delete-btn").forEach(button => {
  button.addEventListener("click", (event) => {
    selectedRow = event.target.closest("tr");
    deleteModal.classList.remove("hidden");
  });
});

// Confirm delete
deleteConfirm.addEventListener("click", () => {
  if (selectedRow) {
    selectedRow.remove();
  }
  deleteModal.classList.add("hidden");
});

// Cancel delete
deleteCancel.addEventListener("click", () => {
  deleteModal.classList.add("hidden");
});

// Modal for editing
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");
const modalOk = document.getElementById("modal-ok");
const modalInput = document.getElementById("item-name");

let currentInputField = null;

// Edit button ke liye event listener
document.querySelectorAll(".open-modal").forEach(btn => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    currentInputField = event.target.closest(".form-group").querySelector("select, input");

    if (currentInputField) {
      modalInput.value = currentInputField.value || "";
      modal.classList.remove("hidden");
    }
  });
});

// Modal close karein
modalClose.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Modal se value update karein
modalOk.addEventListener("click", () => {
  if (currentInputField) {
    currentInputField.value = modalInput.value;
  }
  modal.classList.add("hidden");
});
