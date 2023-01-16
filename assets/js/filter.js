// Get all menu items and filters
const menuItems = document.querySelectorAll('.menu-item');
const mainFilters = document.querySelectorAll('input[name="main-filter"]');
const nutritionFilters = document.querySelectorAll('input[type="checkbox"]');

// Function to apply filters
const applyFilters = () => {
  // Get selected main filter value
  const mainFilterValue = Array.from(mainFilters).find(f => f.checked).value;
  console.log(`Selected main filter value: ${mainFilterValue}`);

  // Get selected nutrition filter values
  const nutritionFilterValues = Array.from(nutritionFilters)
    .filter(f => f.checked)
    .map(f => f.value);
  console.log(`Selected nutrition filter values: ${nutritionFilterValues}`);

  // Show all menu items
  menuItems.forEach(item => {
    item.style.display = 'block';
  });

  // Hide menu items that do not match the selected main filter
  if (mainFilterValue !== '*') {
    menuItems.forEach(item => {
      if (!item.classList.contains(mainFilterValue.substring(1))) {
        console.log(`Hiding menu item: ${item.textContent}`);
        item.style.display = 'none';
      }
    });
  }

  // Hide menu items that do not match the selected nutrition filters
  nutritionFilterValues.forEach(filterValue => {
    menuItems.forEach(item => {
      if (!item.classList.contains(filterValue.substring(1))) {
        console.log(`Hiding menu item: ${item.textContent}`);
        item.style.display = 'none';
      }
    });
  });
};

// Add change event listeners to filters
mainFilters.forEach(filter => {
  filter.addEventListener('change', applyFilters);
});
nutritionFilters.forEach(filter => {
  filter.addEventListener('change', applyFilters);
});

applyFilters();

