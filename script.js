//your JS code here. If required.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// Check if credentials are saved in localStorage on page load
window.addEventListener("load", () => {
  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (savedUser && savedPass) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
});

// Handle form submission
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) return;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Show or hide "existing user" button based on saved data
  if (localStorage.getItem("username")) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }

  // Reset form
  document.getElementById("loginForm").reset();
});

// Handle existing user login
existingBtn.addEventListener("click", () => {
  const savedUser = localStorage.getItem("username");
  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  }
});
