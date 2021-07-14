$(".nav-links li a").on("click", (e)=>{
  // console.log(e.target.innerHTML);
  scroll(e.target.innerHTML);
})

function scroll(target){
  let location;
  console.log(target);
  switch (target) {
    case 'Home':
      location = ".home-section"
      break;
      case 'About':
        location = ".about-section"
        break;
        case 'Tours':
          location = ".tours-section"
          break;
          case 'Contact':
            location = ".contact-section"
            break;
    default:
  }
  scrollWindow(location);
}

function scrollWindow(location){
  var scroll = new gsap.timeline({});
  scroll.to(window, {
    scrollTo: {
      y: location,
    offsetY: 30
  }
  });
}

// var lastScrollTop = 0,
//   delta = 15;
// $(window).scroll(function(event) {
//   var st = $(this).scrollTop();
//
//   if (Math.abs(lastScrollTop - st) <= delta)
//     return;
//   if ((st > lastScrollTop) && (lastScrollTop > 0)) {
//     // downscroll code
//     $("nav").css("top", "-50px");
//
//   } else {
//     // upscroll code
//     $("nav").css("top", "0px");
//   }
//   if (lastScrollTop > 700){
//     $("nav").css({"background-color": "white"});
//     $("nav ul li a").css({"color": "black"});
//     $(".nav-logo h1").css("color", "black");
//   } else {
//     $("nav").css({"background-color":"transparent", "color": "white"})
//     $("nav ul li a").css({"color": "white"});
//     $(".nav-logo h1").css("color", "white");
//   }
//   lastScrollTop = st;
// });
