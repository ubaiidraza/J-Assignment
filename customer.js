document.addEventListener("DOMContentLoaded", () => {
    // Edit Modal Elements
    const modal = document.getElementById("modal");
    const modalClose = document.getElementById("modal-close");
    const modalOk = document.getElementById("modal-ok");
    const modalInput = document.getElementById("item-name");
    let currentInputField = null;
  
    // Open edit modal when any ".open-modal" button is clicked
    document.querySelectorAll(".open-modal").forEach(btn => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        // Find the related select element within the same group
        currentInputField = event.target.closest(".input-icon-group").querySelector("select");
        if (currentInputField) {
          modalInput.value = currentInputField.value || "";
          modal.classList.remove("hidden");
        }
      });
    });
  
    // Close modal events
    modalClose.addEventListener("click", () => modal.classList.add("hidden"));
    modalOk.addEventListener("click", () => {
      if (currentInputField) {
        currentInputField.value = modalInput.value;
      }
      modal.classList.add("hidden");
    });
  
    // Delete Modal Elements
    const deleteModal = document.getElementById("deleteModal");
    const deleteConfirm = document.getElementById("deleteConfirm");
    const deleteCancel = document.getElementById("deleteCancel");
    let selectedField = null;
  
    // Open delete modal when any ".delete-item-btn" button is clicked
    document.querySelectorAll(".delete-item-btn").forEach(button => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        selectedField = event.target.closest(".input-icon-group").querySelector("select");
        if (selectedField) {
          deleteModal.classList.remove("hidden");
        }
      });
    });
  
    // Delete confirmation events
    deleteConfirm.addEventListener("click", () => {
      if (selectedField) {
        selectedField.value = "";
      }
      deleteModal.classList.add("hidden");
    });
    deleteCancel.addEventListener("click", () => deleteModal.classList.add("hidden"));
  });
  