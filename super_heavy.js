const target = document.querySelector("#about-us-more");
const header = document.querySelector("#header");
let landing = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !landing) {
          header.style.background = "black";
          setTimeout(()=>{
            document.getElementById('header-logo').src = "asset/logoWhite.png"
            document.getElementById('header')
          },0.15)
        } else if(!landing){
          header.style.background = "white";
          setTimeout(()=>{
            document.getElementById('header-logo').src = "logo.png"
          },0.15)
        }
      });
    });

    observer.observe(target);

    const target2 = document.querySelector("#landing-page");

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          landing = false;
        } else {
          landing = true;
        }
      });
    });

    observer2.observe(target2);

    const target3 = document.querySelector(".pc1");

    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          countUp(1000,1000,".pc1")
          countUp(402,1000,".gb1")
        } 
      });
    });

    observer3.observe(target3);
////////////////////////////////////////////////////////////////////
    const target4 = document.querySelector(".pc1");

    const observer4 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          countUp(69000,1000,".pc2")
          countUp(15,1000,".gb2")
        } 
      });
    });

    observer4.observe(target4);
/////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
    const target5 = document.querySelector("#clinic-list");

    const observer5 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById("clinic-box").style.marginTop = "0"
        } 
      });
    });

    observer5.observe(target5);
/////////////////////////////////////////////////////////////////////////
    function countUp(target, duration, element) {
      console.log(element)
      const counter = document.querySelector(element);
      let start = 0;
      const increment = target / (duration / 16); 
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          counter.innerHTML = `${target}`; 
          clearInterval(timer);
        } else {
          counter.innerHTML = `${Math.floor(start)}`;
        }
      }, 16); 
    }

  
    
