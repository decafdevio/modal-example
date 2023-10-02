const modalToggle = (modalId) => {
  console.log(modalId);
  const element = document.getElementById(modalId);
  const currentStyle = element.currentStyle || window.getComputedStyle(element);
  console.log(currentStyle.display);

  currentStyle.display === 'none'
    ? (element.style.display = 'flex') // toggle visible
    : (element.style.display = 'none'); // toggle hidden
};

const modalAction = (modalId) => {
  // actions to continue
  alert('Thank you, we have sent your confirmation details to your email.');
  // close modal
  document.getElementById(modalId).style.display = 'none';
};
