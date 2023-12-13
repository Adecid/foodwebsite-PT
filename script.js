const mobileToggle = document.querySelector("#mobile-toggle"),
      navbarMenu = document.querySelector(".navbar");

const mobileMenu = () => {
    mobileToggle.classList.toggle("is-active");
    navbarMenu.classList.toggle("nav-active");
}
mobileToggle.addEventListener("click", mobileMenu);

window.addEventListener("scroll", () => {
    mobileToggle.classList.remove("is-active");
    navbarMenu.classList.remove("nav-active");
})

//___________________ drop order
const Product = document.querySelector(".Product"),
      displayOrder = document.querySelector(".display-menu");

const dropOrder = () => {
    displayOrder.classList.toggle("active-order");
}

Product.addEventListener("click", dropOrder);

// 
const orderList = document.querySelectorAll(".menu-list"),
      orderItem = document.querySelectorAll(".menu-item");


      orderList.forEach(list => {
        list.addEventListener("click", () => {
            orderList.forEach(list => {
                list.classList.remove("active-list");
            })
                list.classList.add("active-list");

            let value = list.getAttribute("data-filter");

            orderItem.forEach(item => {
                item.classList.add("active-item");

                if(item.getAttribute("data-item") == value || value == "All") {
                    item.classList.remove("active-item");
                }
            })
        })
      })
    //  Initialize Swiper

    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: false,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 0,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

    AOS.init();