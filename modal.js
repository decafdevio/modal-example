const modalToggle = () => {
  const element = document.getElementById('modal');
  const currentStyle = element.currentStyle || window.getComputedStyle(element);

  currentStyle.display === 'none'
    ? (element.style.display = 'flex') // toggle visible
    : (element.style.display = 'none'); // toggle hidden
};

const modalAction = () => {
  // actions to continue
  alert('Thank you, we have sent your confirmation details to your email.');
};
