// Add 'active' class to the current menu item
const menuItems = document.querySelectorAll('.menu li a');

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove('active');
    });
    item.classList.add('active');
  });
});
