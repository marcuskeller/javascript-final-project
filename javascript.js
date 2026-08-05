/* comportamentos globais do site, compartilhados por todas as páginas */

function toggleDropdown(button) {
  let dropdown = button.parentElement;
  let wasOpen = dropdown.classList.contains("aberto");

  closeAllDropdowns();

  if (!wasOpen) {
    dropdown.classList.add("aberto");
  }
}

function closeAllDropdowns() {
  let dropdowns = document.querySelectorAll(".nav-dropdown");
  for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].classList.remove("aberto");
  }
}

function updateCurrentYear() {
  let currentYear = new Date().getFullYear();
  document.getElementById("ano-atual").textContent = String(currentYear);
}

updateCurrentYear();
