  var link = document.querySelector(".search-btn");
  var popup = document.querySelector(".form");
  var date_in = popup.querySelector("[name='date-in']");
  var date_out = popup.querySelector("[name='date-out']");
  var form = popup.querySelector("form");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("form-show");
    popup.classList.remove("form-error");
    date_in.focus();
  });
  form.addEventListener("submit", function(event) {
    if (!date_in.value || !date_out.value) {
      event.preventDefault();
      popup.classList.remove("form-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("form-error");
  }
  });
  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("form-show")) {
        popup.classList.remove("form-show");
        popup.classList.remove("form-error");
      }
    }
  });
