$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Programmer", "Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["HTML","JavaScript","C++","CSS","Java","PHP","MySQL"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    /*tsparticles*/
    tsParticles.load("tsparticles-js", {
      fpsLimit: 60,
      particles: {
        number: {
          value: 0,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#ff0000",
          animation: {
            enable: true,
            speed: 180,
            sync: true
          }
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "https://cdn.matteobruni.it/images/particles/github.svg",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.3,
          random: false,
          anim: {
            enable: false,
            speed: 3,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          /*size of buble*/
          value: 180,
          random: {
            enable: true,
            minimumValue: 10
          },
          animation: {
            enable: true,
            speed: 5,
            minimumValue: 10,
            sync: true,
            startValue: "min",
            destroy: "max"
          }
        },
        links: {
          enable: false
        },
        move: {
          enable: true,
          /*speed of buble*/
          speed: 4,
          direction: "none",
          random: false,
          straight: false,
          outMode: "destroy",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onhover: {
            enable: true,
            mode: "trail"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 0.8,
            speed: 3
          },
          repulse: {
            distance: 200
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          },
          trail: {
            delay: 0.005,
            quantity: 5
          }
        }
      },
      retina_detect: true,
      background: {
        color: "#000000",
        image: "url('images/background.jpg')",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover"
      },
      backgroundMask: {
        enable: true,
        cover: {
          //color: "#1d1d1d"
          color: "#000000"
        }
      }
    });
});