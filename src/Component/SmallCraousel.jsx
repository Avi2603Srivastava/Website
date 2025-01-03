import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

export default function SmallCraousel() {
    const options = {
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        navText: [
                '<i class="fas fa-chevron-left"></i>', // Previous button (FontAwesome icon)
               '<i class="fas fa-chevron-right"></i>' // Next button (FontAwesome icon)
                 ],
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
      };
  return (
    <>
       <div className="container mt-5">
              <OwlCarousel className="owl-theme" {...options}>
                <div className="item">
                  <img src="/img/Toyoto.avif" height={40} width={10} alt="Slide 1" />
                </div>
                <div className="item">
                  <img src="/img/toshiba.avif" height={40} width={10} alt="Slide 2" />
                </div>
                <div className="item">
                  <img src="/img/tata.avif" height={40} width={10} alt="Slide 3" />
                </div>
                <div className="item">
                  <img src="/img/Sony.avif" height={40} width={10} alt="Slide 4" />
                </div>
              </OwlCarousel>
        </div>
              
            </>
          )}
          
        
  
