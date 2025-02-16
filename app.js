function openEditModal(button) {
    // Input ya select field ka reference lo
    const inputField = button.parentElement.querySelector("input, select");

    if (!inputField) return; // Agar input field na mile to return

    // Field ki current value lo
    const currentValue = inputField.value;

    // Modal ke input field me value dal do
    document.getElementById("leadNameInput").value = currentValue;

    // Modal open kar do
    document.getElementById("leadModal").classList.remove("hidden");
    document.getElementById("leadModal").classList.add("flex");

    // Save button me target field ka ID store kar do
    document.getElementById("saveLeadButton").setAttribute("data-target", inputField.id);
  }

  function closeEditModal() {
    document.getElementById("leadModal").classList.add("hidden");
    document.getElementById("leadModal").classList.remove("flex");
  }

  function saveEditedValue() {
    // Target input ka ID lo
    const targetId = document.getElementById("saveLeadButton").getAttribute("data-target");
    
    if (!targetId) return;

    // Modal ke input field ka new value lo
    const newValue = document.getElementById("leadNameInput").value;

    // Original field me new value update kar do
    document.getElementById(targetId).value = newValue;

    // Modal close kar do
    closeEditModal();
  }

  