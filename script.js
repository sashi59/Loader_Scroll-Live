$(document).ready(function () {
    // ELEMENTS
    var $scramble = $(".scramble");
  
    $scramble.scramble(2900, 20, "alphabet", true);
  });

  var tl = gsap.timeline()

  tl.to(".line", {
    opacity: 0,

    delay: 2.4,
  })

  tl.to(".loading",{
    opacity: 0,
    duration: 1,
    ease: "Expo.easeInOut",
  })
  

  tl.to(".loading", {
    y:"-100%",
    duration: 1,
  }, "up")

  tl.to(".svgwaala", {
    opacity: 1,
    delay:-1.7,
  }, "khulja")


  tl.to(".container", {
    scale: 1,
    opacity:1,
    delay: -1.7,
    duration: 2,
    
  }, "khulja")

  var tl2 = gsap.timeline();

  tl2.from(".donut", {
    rotationY: "-=30",
      duration: 1,
      rotationX: "-=30",
      rotationZ: "-=30",
      scale: 1.6,
      delay: -1.7,
  })

  
  // function example(){
  //   setTimeout(()=>{
  //     tl2.to(".container",{
  //       scale:5,
  //       opacity:0,
  //       delay: 0.8,
  //       duration: 1,
  //       scrub: 1,
  //       ease: "Expo.easeInOut",
  //     })
  //     tl2.to(".svgwaala",{
  //       opacity:1,
  //       delay: 0.8,
  //       duration: 1,
  //       ease: "Expo.easeInOut",

        
  //     })
  //   }, 1200)


  // }
  
  // var tl2 = gsap.timeline();

// document.querySelectorAll("#explore").forEach(function (elem) {
//   elem.addEventListener("click", function () {
  function example(){


      window.location.href = "head.html";
    
  }


  tl.to("h1", {
    opacity: 1,
    delay:-2.7,
  }, "khulja")