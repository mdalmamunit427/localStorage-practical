// Select form elements
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");
const saveButton = document.getElementById("saveData");
const clearButton = document.getElementById("clearForm");

// Function to save form data to localStorage
function saveFormData() {
  const formData = {
    name: nameField.value,
    email: emailField.value,
    message: messageField.value,
  };

  // Save data as JSON string in localStorage
  localStorage.setItem("formData", JSON.stringify(formData));
  alert("Data saved successfully!");
}

// Function to load form data from localStorage
function loadFormData() {
  const savedData = localStorage.getItem("formData");
  if (savedData) {
    const { name, email, message } = JSON.parse(savedData);
    nameField.value = name || "";
    emailField.value = email || "";
    messageField.value = message || "";
  }
}

// Event listener for the save button
saveButton.addEventListener("click", saveFormData);

// Event listener for the clear button to clear localStorage
clearButton.addEventListener("click", () => {
  localStorage.removeItem("formData");
  alert("Data cleared successfully!");
});

// Load saved data on page load
document.addEventListener("DOMContentLoaded", loadFormData);
