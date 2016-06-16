// EDIT THE STUFF BELOW IN ORDER TO MAKE THIS THING WORK. :)
// I PUT NOTES ON THE RIGHT OF EACH FIELD TO HELP YOU OUT.

var config = {
  'first_name': 'Derpington', // Shipping firstname
  'last_name': 'McYeezus', // Shipping surname
  'street_address_1': '2 Supreme St.', // main address for shipping address
  'street_address_2': 'Suite 6', // used for apartment #s, etc FOR SHIPPING
  'city': 'New York', // City for shipping information
  'state': 'New York', // State for shipping information
  'zipcode': '10013', // ZIP CODE for shipping information
  'phone_number': 'XXX-XXX-XXXX', // must be in this format
  'billing_address_1': '300 Supreme St', // main address for billing address
  'billing_address_2': '', // used for apartment #s, etc for BILLING
  'billing_city': 'Los Angeles', // City for billing information
  'billing_state': 'California', // State for billing information
  'billing_zipcode': '90036', // ZIP CODE for billing information
  'name_on_card': 'Hypebeast McSupreme', //FULL NAME as printed on the front of your Credit Card
  'card_number': 'STEALMYIDENTITY101', // Put your full Credit Card # in this field without spaces or dashes or anything
  'expires_month': 'January', // must be full month name to match adidas.com
  'expires_year': '2001', // Year the Credit Card expires
  'security_code': '404', // a 3 or 4 digit CVV code that is on the back of your Credit Card (4 Digits for AMEX on front)
};

// PLEASE DO NOT EDIT ANYTHING BELOW THIS
// PLEASE DO NOT EDIT ANYTHING BELOW THIS
// PLEASE DO NOT EDIT ANYTHING BELOW THIS
// PLEASE DO NOT EDIT ANYTHING BELOW THIS
// PLEASE DO NOT EDIT ANYTHING BELOW THIS

  // jank that reacts to URL changes
  function urlChecker() {
    if (window.urlChecker) return;

    var lastUrl = window.location.href;

    window.urlChecker = setInterval(function() {
      if (lastUrl !== window.location.href) {
        lastUrl = window.location.href;
        checkPage();
      }
    }, 500);
  }

  function checkPage() {
    console.log('CHECKING PAGE!');

    // on the product landing page, try to cop in our size
    if ($('div#productInfo').length) {
      lookForSizes();
    }
    // on the cart page! smash that checkout button
    else if (window.location.href.indexOf('Cart-Show') > -1) {
      $('button[name=dwfrm_cart_checkoutCart]').trigger('click');
    }
    // we're shipping.. lets make sure info is correct
    else if (window.location.href.indexOf('delivery-start') > -1) {
      addShipping();
    }
    // bruh we're so close. please.
    else if ($('li.active.step-2').length) {
      pay();
    }
    // keep trying if nothing
    else {
      setTimeout(function() {
        checkPage();
      }, 1000);
    }
  }
