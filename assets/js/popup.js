function showPopup(element) {
    event.preventDefault();
    const menuItem = element.parentElement.parentElement.parentElement;
    const popup = menuItem.querySelector('.popup');
    const popupBackdrop = menuItem.querySelector('.popup-backdrop');
    popup.style.display = 'block';
    popupBackdrop.style.display = 'block';
  }

  // Define the popupClose function
  function popupClose(element) {
    const menuItem = element.parentElement.parentElement.parentElement;
    const popup = menuItem.querySelector('.popup');
    const popupBackdrop = menuItem.querySelector('.popup-backdrop');
    popup.style.display = 'none';
    popupBackdrop.style.display = 'none';
  }