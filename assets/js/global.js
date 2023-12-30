$(document).ready(function() {
    
    var header = $(".header");
    var sticky = header.offset().top;

    $(window).scroll(function() {
        if (window.pageYOffset > sticky) {
        header.addClass("sticky");
        } else {
        header.removeClass("sticky");
        }
    });

    // Number of items to show initially and incrementally load
    const itemsPerPage = 4;
    let currentIndex = 8;

    const $childDivs = $('#projects .col');
    const $loadMoreBtn = $('#loadmorebtn');

    // Show initial set of items
    showItems();

    $loadMoreBtn.on('click', function () {
      currentIndex += itemsPerPage;
      showItems();

      // Hide the "Load More" button if all items are displayed
      if (currentIndex >= $childDivs.length) {
        $loadMoreBtn.hide();
      }
    });

    function showItems() {
      $childDivs.each(function(index) {
        if (index < currentIndex) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }

    // Smooth scroll to anchor links
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000); // Adjust the speed (in milliseconds) as needed
        }
    });

    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('.mobile-menu').slideToggle();
    });

});