document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll('[data-price]');
  const totalPrice = document.getElementById('total-price');
  const radios = document.querySelectorAll('input[type="radio"][name="unit"]');
  const addToCartBtn = document.getElementById("add-to-cart");
  const popup = document.getElementById("popup-modal");  // <- इथे "popup-modal" घ्या
  const closePopupBtn = document.getElementById("close-popup");

  function selectOption(option) {
    options.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');

    const price = option.dataset.price;
    if (price) {
      totalPrice.textContent = `$${price} USD`;
    }

    const radio = option.querySelector('input[type="radio"]');
    if (radio) {
      radio.checked = true;
    }
  }

  options.forEach(option => {
    option.addEventListener('click', function () {
      selectOption(option);
    });
  });

  radios.forEach(radio => {
    radio.addEventListener('change', function () {
      const parentOption = this.closest('[data-price]');
      if (parentOption) {
        selectOption(parentOption);
      }
    });
  });

  // Show popup on "Add to Cart" click
  addToCartBtn.addEventListener("click", function () {
    popup.style.display = "flex"; // popup visible करा (flex कारण modal मध्ये centering हवी)
  });

  // Close popup on "Close" button click
  closePopupBtn.addEventListener("click", function () {
    popup.style.display = "none"; // popup लपवा
  });

  // Optional: बाहेर क्लिक केल्यास popup बंद करा
  window.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
