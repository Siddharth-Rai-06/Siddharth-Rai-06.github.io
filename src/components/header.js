import { useEffect } from "react";
const Header = () => {

     // Sticky Menu Area
     useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

           
    /* Method that will fix header after a specific scrollable */
           const isSticky = (e) => {
                const header = document.querySelector('.header');
                const scrollTop = window.scrollY;
                scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
            };

    // function init() {
    //     window.addEventListener('scroll', function(e){
    //         var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    //             shrinkOn = 300,
    //             header = document.querySelector(".header-top");
    //         if (distanceY > shrinkOn) {
    //             classie.add(header,"smaller");
    //         } else {
    //             if (classie.has(header,"smaller")) {
    //                 classie.remove(header,"smaller");
    //             }
    //         }
    //     });
    // }
    // window.onload = init();

    return (
        <>
            <div className="header" id="myHeader">
                <div className="data-1">Siddharth Rai</div>
                <div className="data-2">
                    <div className="header-cat">category - 1</div>
                    <div className="header-cat">category - 2</div>
                    <div className="header-cat">category - 3</div>
                </div>
                <div className="data-3">
                    <div className="header-con-1">
                        +91-7080139778
                    </div>
                    <div className="header-con-2">
                        <i class="fa-brands fa-whatsapp"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;