const menuToggle = document.getElementById('menuToggle');
const navDrawer = document.getElementById('navDrawer');

menuToggle.addEventListener('click', () => {
  navDrawer.classList.toggle('open'); // Toggle "open" class
  console.log(navDrawer.classList); // Debug: Check the class list of navDrawer
});


