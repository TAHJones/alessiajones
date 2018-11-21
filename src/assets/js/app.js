import $ from 'jquery'; // TJ Changed 040918
import whatInput from 'what-input';

window.$ = $;
window.jQuery = $; // tj changed 040918

import slick from 'slick-carousel';
require('./lib/lightgallery.js');
require('./lib/lg-thumbnail.js');
require('./lib/jquery.validate.js');
import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
// import './lib/foundation-explicit-pieces';

//Add third party plugins

$(document).foundation();

/*$.fn.nextOrFirst = function(selector) {
    var next = this.next(selector);
    return (next.length) ? next : this.prevAll(selector).last();
};*/

$(document).ready(function() {

  /*$('.fadein-effect div:eq(0)').addClass('active');
  $('.fadein-effect div:gt(0)').hide();
    setInterval(function() {
      $('.active').hide().removeClass('active').nextOrFirst('div').addClass('active').fadeIn().end();
  }, 10000);*/

    /*slick slider - settings*/

  $('.slick-slider').slick({
    infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 1440,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 320,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  }); // slick slider - end


  $('.slick-fader').slick({
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'ease-out'
  }); // slick fader - end


/* light-gallery - settings*/

$('#light-gallery').lightGallery({

  thumbnail:true

}); // light-gallery end



/* form validator - settings*/

$("#contact-form").validate({
  /*errorPlacement: function(label, element) {
    label.addClass('label-wrapper');
    label.insertAfter(element);
  },
  wrapper: 'span',*/ 
  rules: {
    firstname: {
      required: true
    },
    lastname: {
      required: true
    },
    email: {
      required: true,
      email: true
     },
    msg: {
      required: true,
      maxlength: 500
    }
  }, // rules end
  messages: {
    firstname: {
      required: "Please enter your first name in the field above"
    },
    lastname: {
      required: "Please enter your last name in the field above"
    },
    email: {
      required: "Please enter a valid email address in the field above",
      email: "The email address in field above is not valid"
    },
    msg: {
      required: "Please enter your message in the field above",
      maxlength: "Your message musn't exceed 500 characters"
    }
  }, // messages end
  errorElement : 'div',
  // errorLabelContainer: '.errorTxt'
 }); // form validator end

}); // document ready end


