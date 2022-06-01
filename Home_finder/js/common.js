// owl carousal

$(document).ready(function () {
  // var success = $("#success-stories");
  var latest = $("#latest-news");
  var trusted = $("#trusted-by");
  var fourthh = $("#fourth");

  latest.owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 1000,
    items: 3,
    margin: 20,
    nav: true,
    loop: true,
    dots: false,
    dotsdata: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  trusted.owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 1000,
    items: 2,
    margin: 20,
    nav: true,
    loop: true,
    dots: false,
    dotsdata: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
    },
  });
  fourthh.owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 1000,

    nav: true,
    loop: true,
    dots: false,
    dotsdata: true,
    autowidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },

      1000: {
        items: 4,
      },
    },
  });
});

$(function () {
  var benfits1 = $("#tab1-benefits");
  benfits1.owlCarousel({
    autoplay: 2000,
    items: 1,
    loop: true,
    dots: false,
    dotsdata: true,
    onInitialized: counter, //When the plugin has initialized.
    onTranslated: counter, //When the translation of the stage has finished.
    responsive: {
      0: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  function counter(event) {
    var element = event.target; // DOM element, in this example .owl-carousel
    var items = event.item.count; // Number of items
    var item = event.item.index + 1; // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
      item = item - items;
    }
    $("#countertab11").html(item + " / " + items);
  }
});

$(function () {
  var benfits2 = $("#tab2-benefits");
  benfits2.owlCarousel({
    autoplay: 2000,
    items: 1,
    loop: true,
    dots: false,
    dotsdata: true,
    onInitialized: counter, //When the plugin has initialized.
    onTranslated: counter, //When the translation of the stage has finished.
    responsive: {
      0: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  function counter(event) {
    var element = event.target; // DOM element, in this example .owl-carousel
    var items = event.item.count; // Number of items
    var item = event.item.index + 1; // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
      item = item - items;
    }
    $("#countertab12").html(item + " / " + items);
  }
});

$(function () {
  var benfits3 = $("#tab3-benefits");
  benfits3.owlCarousel({
    autoplay: 2000,
    items: 1,
    loop: true,
    dots: false,
    dotsdata: true,
    onInitialized: counter, //When the plugin has initialized.
    onTranslated: counter, //When the translation of the stage has finished.
    responsive: {
      0: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  function counter(event) {
    var element = event.target; // DOM element, in this example .owl-carousel
    var items = event.item.count; // Number of items
    var item = event.item.index + 1; // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
      item = item - items;
    }
    $("#countertab13").html(item + " / " + items);
  }
});

$(function () {
  var benfits11 = $("#tab1-benefits-mb");
  benfits11.owlCarousel({
    autoplay: 2000,
    items: 1,
    loop: true,
    dots: false,
    dotsdata: true,
    onInitialized: counter, //When the plugin has initialized.
    onTranslated: counter, //When the translation of the stage has finished.
    responsive: {
      0: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  function counter(event) {
    var element = event.target; // DOM element, in this example .owl-carousel
    var items = event.item.count; // Number of items
    var item = event.item.index + 1; // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
      item = item - items;
    }
    $("#countertab21").html(item + " / " + items);
  }
});

$(function () {
  var benfits12 = $("#tab2-benefits-mb");
  benfits12.owlCarousel({
    autoplay: 2000,
    items: 1,
    loop: true,
    dots: false,
    dotsdata: true,
    onInitialized: counter, //When the plugin has initialized.
    onTranslated: counter, //When the translation of the stage has finished.
    responsive: {
      0: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  function counter(event) {
    var element = event.target; // DOM element, in this example .owl-carousel
    var items = event.item.count; // Number of items
    var item = event.item.index + 1; // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
      item = item - items;
    }
    $("#countertab22").html(item + " / " + items);
  }
});

$(function () {
  var benfits13 = $("#tab3-benefits-mb");
  benfits13.owlCarousel({
    autoplay: 2000,
    items: 1,
    loop: true,
    dots: false,
    dotsdata: true,
    onInitialized: counter, //When the plugin has initialized.
    onTranslated: counter, //When the translation of the stage has finished.
    responsive: {
      0: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  function counter(event) {
    var element = event.target; // DOM element, in this example .owl-carousel
    var items = event.item.count; // Number of items
    var item = event.item.index + 1; // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
      item = item - items;
    }
    $("#countertab23").html(item + " / " + items);
  }
});

// sucess stories

$(function () {
  var success = $("#success-stories");
  success.owlCarousel({
    autoplay: 2000,
    items: 1,
    loop: true,
    dots: false,
    dotsdata: true,
    onInitialized: counter, //When the plugin has initialized.
    onTranslated: counter, //When the translation of the stage has finished.
  });

  function counter(event) {
    var element = event.target; // DOM element, in this example .owl-carousel
    var items = event.item.count; // Number of items
    var item = event.item.index + 1; // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
      item = item - items;
    }
    $("#countersuccessstudy").html(item + " / " + items);
  }
});

// case studies

$(function () {
  var studyss = $("#case-study11");
  studyss.owlCarousel({
    autoplay: 2000,
    items: 1,
    loop: true,
    dots: false,
    dotsdata: true,
    onInitialized: counter, //When the plugin has initialized.
    onTranslated: counter, //When the translation of the stage has finished.
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
    },
  });

  function counter(event) {
    var element = event.target; // DOM element, in this example .owl-carousel
    var items = event.item.count; // Number of items
    var item = event.item.index + 1; // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
      item = item - items;
    }
    $("#counterstudy").html(item + " / " + items);
  }
});

$(function () {
  var success = $("#success-stories");
  success.owlCarousel({
    autoplay: 2000,
    items: 1,
    loop: true,
    dots: false,
    dotsdata: true,
    onInitialized: counter, //When the plugin has initialized.
    onTranslated: counter, //When the translation of the stage has finished.
  });

  function counter(event) {
    var element = event.target; // DOM element, in this example .owl-carousel
    var items = event.item.count; // Number of items
    var item = event.item.index + 1; // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
      item = item - items;
    }
    $("#countersuccessstudy").html(item + " / " + items);
  }
});

//  responsive tabs

$(document).ready(function () {
  $("#horizontalTab").easyResponsiveTabs({
    type: "default", //Types: default, vertical, accordion
    width: "auto", //auto or any width like 600px
    fit: true, // 100% fit in a container
    closed: "accordion", // Start closed if in accordion view
    activate: function (event) {
      // Callback function if tab is switched
      var $tab = $(this);
      var $info = $("#tabInfo");
      var $name = $("span", $info);
      $name.text($tab.text());
      $info.show();
    },
  });
  $("#verticalTab").easyResponsiveTabs({
    type: "vertical",
    width: "auto",
    fit: true,
  });
});
$(document).ready(function () {
  $("#horizontalTab1").easyResponsiveTabs({
    type: "default", //Types: default, vertical, accordion
    width: "auto", //auto or any width like 600px
    fit: true, // 100% fit in a container
    closed: "accordion", // Start closed if in accordion view
    activate: function (event) {
      // Callback function if tab is switched
      var $tab = $(this);
      var $info = $("#tabInfo");
      var $name = $("span", $info);
      $name.text($tab.text());
      $info.show();
    },
  });
});
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementsByClassName("socialhousingsection")[0].style.zIndex = "0";
  document.getElementsByClassName("socialhousingsection")[1].style.zIndex = "0";
  document.getElementsByClassName("socialhousingsection")[2].style.zIndex = "0";
  document.getElementsByClassName("socialhousingsection")[3].style.zIndex = "0";
  document.getElementsByClassName("socialhousingsection")[4].style.zIndex = "0";
  document.getElementsByClassName("owl-carousel")[0].style.zIndex = "0";
  document.getElementsByClassName("owl-carousel")[1].style.zIndex = "0";
  document.getElementsByClassName("owl-carousel")[2].style.zIndex = "0";
  document.getElementsByClassName("owl-carousel")[3].style.zIndex = "0";
  document.getElementsByClassName("owl-carousel")[4].style.zIndex = "0";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementsByClassName("socialhousingsection")[0].style.zIndex =
    "10000";
  document.getElementsByClassName("socialhousingsection")[1].style.zIndex =
    "10000";
  document.getElementsByClassName("socialhousingsection")[2].style.zIndex =
    "10000";
  document.getElementsByClassName("socialhousingsection")[3].style.zIndex =
    "10000";
  document.getElementsByClassName("socialhousingsection")[4].style.zIndex =
    "10000";
  document.getElementsByClassName("owl-carousel")[0].style.zIndex = "1";
  document.getElementsByClassName("owl-carousel")[1].style.zIndex = "1";
  document.getElementsByClassName("owl-carousel")[2].style.zIndex = "1";
  document.getElementsByClassName("owl-carousel")[3].style.zIndex = "1";
  document.getElementsByClassName("owl-carousel")[4].style.zIndex = "1";
}

// search for property grid listing view JS
// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}

/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn1");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
