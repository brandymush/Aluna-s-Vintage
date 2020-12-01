$('img.delete').click(function(){
  $(this).closest(".cart-items").remove();
  // $('.cart-items').toggleClass('d-none');
});

$('#navbar-icon').click(function(){
  $('#navbar-icon .icon').toggleClass('change');
  $('.navbar ul').toggleClass('change');
   
});
$(window).scroll(function() {
  if ($(document).scrollTop() > 800) {
  $('#navbar-icon .icon').removeClass('change');
  $('.navbar ul').removeClass('change');
  }
 });
 
 $('.btn-plus, .btn-minus').on('click', function(e) {
   e.preventDefault();
  const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
  const input = $(e.target).closest('.input-group').find('input');
  if (input.is('input')) {
    input[0][isNegative ? 'stepDown' : 'stepUp']()
  }
})

 $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (t) {
  if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var e = $(this.hash);
      e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length && (t.preventDefault(), $("html, body").animate({
          scrollTop: e.offset().top
      }, 600, function () {
          var t = $(e);
          if (t.focus(), t.is(":focus")) return !1;
          t.attr("tabindex", "-1"), t.focus()
      }))
  }
});
  $('.dropdown-menu a').click(function(){
    $('#selected').text($(this).text());
  });
  filterSelection("all")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  
  // Show filtered elements
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }
  
  // Hide elements that are not selected
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }
  
  // Add active class to the current control button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }



  function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
  
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
  
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }

  
 