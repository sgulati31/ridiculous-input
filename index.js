
const slider = document.getElementById('mySlider');
const target = document.getElementById('earth');


function updateOpacity() {
  const value = parseInt(slider.value);

  if (value < 50) {
    target.style.opacity = 0;
  } else if (value > 50) {
    target.style.opacity = 1;
  } else {
    target.style.opacity = 0.5;
  }
}


slider.addEventListener('change', () => {
  const value = parseInt(slider.value);

  if (value < 50) {
    slider.value = 0;
  } else if (value > 50) {
    slider.value = 100;
  } else (value = 50);
 
  updateOpacity();
});


slider.addEventListener('input', () => {
  document.getElementById('sliderValue').textContent = slider.value;
  updateOpacity();
});
