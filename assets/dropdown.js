/* dropdown click behavior for the navbar, shared by every page */

function closeAllDropdowns() {
  let dropdowns = document.querySelectorAll(".nav-dropdown");
  for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].classList.remove("aberto");
  }
}

function toggleDropdown(button) {
  let dropdown = button.parentElement;
  let wasOpen = dropdown.classList.contains("aberto");

  closeAllDropdowns();

  if (!wasOpen) {
    dropdown.classList.add("aberto");
  }
}
