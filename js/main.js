const elsSitenavLink = document.querySelectorAll('.sitenav__link');

elsSitenavLink.forEach(function (elbutton) {
  elbutton.addEventListener('click', function (evt) {
    // evt.preventDefault();

    elbutton.classList.add('js-sitenav-link');

  });
});