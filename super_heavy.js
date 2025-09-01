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

const targetAll = document.querySelectorAll('.service-gat');

targetAll.forEach(target5 => {
  const observer5 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.marginTop = "0";
      }
    });
  });

  observer5.observe(target5);
});

    function countUp(target, duration, element) {
      console.log(element)
      const counter = document.querySelector(element);
      let start = 0;
      const increment = target / (duration / 16); 
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          if(target>=1000){
            counter.innerHTML = `${target/1000},000`; 
          }else{
          counter.innerHTML = `${target}`
          }; 
          clearInterval(timer);
        } else {
          counter.innerHTML = `${Math.floor(start)}`;
        }
      }, 16); 
    }

    let serviceIndex = 1;

    function nextService(){
      if(serviceIndex!==6){
      serviceIndex++;
        updateService();
        document.getElementById("service-progress").innerHTML = `${serviceIndex}/6`
      }
    }
    function prevService(){
      if(serviceIndex!==1){
      serviceIndex--;
        updateService();
         document.getElementById("service-progress").innerHTML = `${serviceIndex}/6`
      }
    }
    function updateService(){
      if(serviceIndex === 1){
        document.querySelector(".gat1").innerHTML = `<img src="logo.png" id="service-logo">
          <span id="h1b">Consultaion</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
        document.querySelector(".gat2").innerHTML = ` <img src="logo.png" id="service-logo">
          <span id="h1b">Scaling & Polishing</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
      } else if(serviceIndex === 2){
        document.querySelector(".gat1").innerHTML = `<img src="logo.png" id="service-logo">
          <span id="h1b">Dental Filling</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
        document.querySelector(".gat2").innerHTML = ` <img src="logo.png" id="service-logo">
          <span id="h1b">Extraction</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
      }else if(serviceIndex === 3){
        document.querySelector(".gat1").innerHTML = `<img src="logo.png" id="service-logo">
          <span id="h1b">Minor Oral Surgery</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
        document.querySelector(".gat2").innerHTML = ` <img src="logo.png" id="service-logo">
          <span id="h1b">Removable Denture</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
      }else if(serviceIndex === 4){
        document.querySelector(".gat1").innerHTML = `<img src="logo.png" id="service-logo">
          <span id="h1b">Crown & Bridge</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
        document.querySelector(".gat2").innerHTML = ` <img src="logo.png" id="service-logo">
          <span id="h1b">Root Canal Treatment</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
      }else if(serviceIndex === 5){
        document.querySelector(".gat1").innerHTML = `<img src="logo.png" id="service-logo">
          <span id="h1b">Tooth Whitening</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
        document.querySelector(".gat2").innerHTML = ` <img src="logo.png" id="service-logo">
          <span id="h1b">Night Guard</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
      }else if(serviceIndex === 6){
        document.querySelector(".gat1").innerHTML = `<img src="logo.png" id="service-logo">
          <span id="h1b">Night Guard</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
        document.querySelector(".gat2").innerHTML = ` <img src="logo.png" id="service-logo">
          <span id="h1b">Retainer</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
      }
    }
  
    
