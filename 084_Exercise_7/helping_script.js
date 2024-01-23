const slider = document.getElementById("slider");
const output = document.getElementById("labelSlider");
const incrementButton = document.getElementById("plusBtn");
const decrementButton = document.getElementById("minusBtn");
  // Update the slider value and output text
  function updateSliderValue() {
    output.textContent = slider.value;
  }

  // Event listener for slider input
  slider.addEventListener("input", updateSliderValue);

  // Event listener for increment button
  incrementButton.addEventListener("click", function() {
    if (parseInt(slider.value) < parseInt(slider.max)) {
      slider.value = parseInt(slider.value) + 1;
      updateSliderValue();
    }
  });

  // Event listener for decrement button
  decrementButton.addEventListener("click", function() {
    if (parseInt(slider.value) > parseInt(slider.min)) {
      slider.value = parseInt(slider.value) - 1;
      updateSliderValue();
    }
  });

  // Initial update
  updateSliderValue();