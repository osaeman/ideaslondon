const hamburger_btn = document.querySelector(".hamburger-btn");

// Mobile Nav Slider
const mobile_nav_slider = document.querySelector(".mobile-nav-slider");
const slider_close_btn = document.querySelector(".slider-close-btn");

hamburger_btn.addEventListener("click", () => {
  mobile_nav_slider.classList.add("mobile_nav_slide_show");
});

slider_close_btn.addEventListener("click", () => {
  mobile_nav_slider.classList.remove("mobile_nav_slide_show");
  mobile_nav_dropdown.forEach((item, index) => {
    mobile_nav_dropdown[index].classList.remove("mobile-nav-dropdown-show");
    mobile_nav_link_i[index].innerHTML = `<i class="far fa-plus"></i>`;
    mobile_nav_link[index].childNodes[1].style.color = "white";
  });
});

// Form Attendee Btns
const currency_btns_toggle = document.querySelectorAll(".currency-btns-toggle");
currency_btns_toggle.forEach((item, index) => {
  item.addEventListener("click", () => {
    currency_btns_toggle.forEach((ele) => {
      ele.classList.remove("currency-btn-selected");
    });
    item.classList.add("currency-btn-selected");
  });
});

//  Sentence Animation
// List of sentences
var _CONTENT = ["Limitless Possibilities.", "Proven Success"];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Implements typing effect
function Type() {
  var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX++;

  // If full sentence has been displayed then start to delete the sentence after some time
  if (text === _CONTENT[_PART]) {
    clearInterval(_INTERVAL_VAL);
    setTimeout(function () {
      _INTERVAL_VAL = setInterval(Delete, 50);
    }, 1000);
  }
}

// Implements deleting effect
function Delete() {
  var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX--;

  // If sentence has been deleted then start to display the next sentence
  if (text === "") {
    clearInterval(_INTERVAL_VAL);

    // If last sentence then display the first one, else move to the next
    if (_PART == _CONTENT.length - 1) _PART = 0;
    else _PART++;
    _PART_INDEX = 0;

    // Start to display the next sentence after some time
    setTimeout(function () {
      _INTERVAL_VAL = setInterval(Type, 100);
    }, 200);
  }
}
// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);

// Modal
const modal = document.querySelector(".modal");
const hero_btn = document.querySelector(".hero-section");
const modal_overlay = document.querySelector(".modal-overlay");
const close_modal = document.querySelector(".close-modal");

hero_btn.addEventListener("click", () => {
  modal.classList.add("active");
  modal_overlay.classList.add("active");
});
close_modal.addEventListener("click", () => {
  modal.classList.remove("active");
  modal_overlay.classList.remove("active");
});
