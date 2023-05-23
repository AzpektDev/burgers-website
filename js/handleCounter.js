const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const removeButton = counter.querySelector('.counter-remove');
  const counterText = counter.querySelector('.counter-text');
  const addButton = counter.querySelector('.counter-add');

  let count = 0;

  removeButton.addEventListener('click', () => {
    if (count > 0) {
      count--;
      counterText.textContent = count;
    }
  });

  addButton.addEventListener('click', () => {
    count++;
    counterText.textContent = count;
  });
});
