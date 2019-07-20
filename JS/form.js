  function validatePostcode(p) {
    var postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
    return postcodeRegEx.test(p);
  }

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function submit() {
    var t1 = validatePostcode(document.getElementById('pcode').value);
    var t2 = validateEmail(document.getElementById('email').value);

    if (t1 === true && t2 === true) {
      $("#pop_title").text("Sent!");
      $("#pop_text").text("Sent to our servers successfully");
    } else if (t1 === false && t2 === false) {
      $("#pop_title").text("Error!");
      $("#pop_text").text("Both email and postcode are invalid");
    } else if (t1 === false) {
      $("#pop_title").text("Error!");
      $("#pop_text").text("Postcode is invalid");
    } else if (t2 === false) {
      $("#pop_title").text("Error!");
      $("#pop_text").text("Email is invalid");
    }
  }

  $(function () {
    //OPEN
    $('[data-popup-open]').on('click', function (e) {
      submit();
      var targeted_popup_class = jQuery(this).attr('data-popup-open');
      $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

      e.preventDefault();
    });

    //CLOSE
    $('[data-popup-close]').on('click', function (e) {
      var targeted_popup_class = jQuery(this).attr('data-popup-close');
      $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

      e.preventDefault();
    });
  });