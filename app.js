document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
  
    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > 50) {
        menu.style.backgroundColor = "rgba(255, 255, 255, 1)";
        menu.classList.add("moved-up"); 
        menu.classList.add("darken"); 
        menu.classList.add("shadow"); 

      } else {
        menu.style.backgroundColor = "rgba(255, 255, 255, 0)";
        menu.classList.remove("moved-up");
        menu.classList.remove("darken");
        menu.classList.remove("shadow"); 
 

      }
    });

  });
  



