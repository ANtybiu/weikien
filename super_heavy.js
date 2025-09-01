const target = document.querySelector("#about-us-more");
const header = document.querySelector("#header");
let landing = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !landing) {
          header.style.background = "black";
          setTimeout(()=>{
            document.getElementById('header-logo').src = "asset/logoWhite.png"
            document.getElementById('header-menu').style.display = 'block';
            document.querySelector('.notify').style.display = 'none'
          },0.15)
        } else if(!landing){
          header.style.background = "white";
          setTimeout(()=>{
            document.getElementById('header-logo').src = "logo.png";
            document.getElementById('header-menu').style.display = 'none';
            document.querySelector('.notify').style.display = 'block'
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
    let serviceable = true;
    function nextService(){
      if(serviceIndex!==6 && serviceable){
      serviceIndex++;
      serviceable = false
        updateService();
        document.getElementById("service-progress").innerHTML = `${serviceIndex}/6`;
        setTimeout(() => {
          serviceable = true;
        }, 300);
      }
    }
    function prevService(){
      if(serviceIndex!==1 && serviceable){
      serviceIndex--;
      serviceable = false
        updateService();
         document.getElementById("service-progress").innerHTML = `${serviceIndex}/6`;
         setTimeout(() => {
          serviceable = true;
        }, 300);
      }
    }
    function updateService(){
      if(serviceIndex === 1){
        document.querySelector(".prev-service").style.opacity = "0.5";

        document.querySelector(".next-service").style.opacity = "1";
        document.querySelector(".gat1").style.opacity = "0";
        document.querySelector(".gat2").style.opacity = "0";
        setTimeout(()=>{
           document.querySelector(".gat1").innerHTML = `<img src="logo.png" id="service-logo">
          <span id="h1b">Consultaion</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
           document.querySelector(".gat2").innerHTML = ` <img src="logo.png" id="service-logo">
          <span id="h1b">Scaling & Polishing</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
        },150)
        setTimeout(()=>{
          document.querySelector(".gat1").style.opacity = "1";
        document.querySelector(".gat2").style.opacity = "1";
        },150)
       
      } else if(serviceIndex === 2){
        document.querySelector(".prev-service").style.opacity = "1";
        document.querySelector(".next-service").style.opacity = "1";
        document.querySelector(".gat1").style.opacity = "0";
        document.querySelector(".gat2").style.opacity = "0";
        setTimeout(()=>{
           document.querySelector(".gat1").innerHTML = `<img src="logo.png" id="service-logo">
          <span id="h1b">Dental Filling</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
           document.querySelector(".gat2").innerHTML = ` <img src="logo.png" id="service-logo">
          <span id="h1b">Extraction</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
        },150)
        setTimeout(()=>{
          document.querySelector(".gat1").style.opacity = "1";
        document.querySelector(".gat2").style.opacity = "1";
        },150)
      }else if(serviceIndex === 3){
        document.querySelector(".prev-service").style.opacity = "1";
        document.querySelector(".next-service").style.opacity = "1";
        document.querySelector(".gat1").style.opacity = "0";
        document.querySelector(".gat2").style.opacity = "0";
        setTimeout(()=>{
           document.querySelector(".gat1").innerHTML = `<img src="logo.png" id="service-logo">
          <span id="h1b">Minor Oral Surgery</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
           document.querySelector(".gat2").innerHTML = ` <img src="logo.png" id="service-logo">
          <span id="h1b">Removable Denture</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
        },150)
        setTimeout(()=>{
          document.querySelector(".gat1").style.opacity = "1";
        document.querySelector(".gat2").style.opacity = "1";
        },150)
      }else if(serviceIndex === 4){
        document.querySelector(".prev-service").style.opacity = "1";
        document.querySelector(".next-service").style.opacity = "1";
        document.querySelector(".gat1").style.opacity = "0";
        document.querySelector(".gat2").style.opacity = "0";
        setTimeout(()=>{
           document.querySelector(".gat1").innerHTML = `<img src="logo.png" id="service-logo">
          <span id="h1b">Crown & Bridge</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
           document.querySelector(".gat2").innerHTML = ` <img src="logo.png" id="service-logo">
          <span id="h1b">Root Canal Treatment</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
        },150)
        setTimeout(()=>{
          document.querySelector(".gat1").style.opacity = "1";
        document.querySelector(".gat2").style.opacity = "1";
        },150)
      }else if(serviceIndex === 5){
        document.querySelector(".prev-service").style.opacity = "1";
        document.querySelector(".next-service").style.opacity = "1";
       document.querySelector(".gat1").style.opacity = "0";
        document.querySelector(".gat2").style.opacity = "0";
        setTimeout(()=>{
           document.querySelector(".gat1").innerHTML = `<img src="logo.png" id="service-logo">
          <span id="h1b">Tooth Whitening</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
           document.querySelector(".gat2").innerHTML = ` <img src="logo.png" id="service-logo">
          <span id="h1b">Night Guard</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
        },150)
        setTimeout(()=>{
          document.querySelector(".gat1").style.opacity = "1";
        document.querySelector(".gat2").style.opacity = "1";
        },150)
      }else if(serviceIndex === 6){
        document.querySelector(".next-service").style.opacity = "0.5";
        document.querySelector(".prev-service").style.opacity = "1";
        document.querySelector(".gat1").style.opacity = "0";
        document.querySelector(".gat2").style.opacity = "0";
        setTimeout(()=>{
           document.querySelector(".gat1").innerHTML = `<img src="logo.png" id="service-logo">
          <span id="h1b">Night Guard</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
           document.querySelector(".gat2").innerHTML = ` <img src="logo.png" id="service-logo">
          <span id="h1b">Retainer</span>
          <pblack id="service-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</pblack>`;
        },150)
        setTimeout(()=>{
          document.querySelector(".gat1").style.opacity = "1";
        document.querySelector(".gat2").style.opacity = "1";
        },150)
      }
    }

    let ratingIndex = 1;
  function nextRatings(){
      if(ratingIndex!==6){
      ratingIndex++;
        updateRating();
        document.getElementById("rating-progress").innerHTML = `${ratingIndex}/3`
      }
    }
    function prevRatings(){
      if(ratingIndex!==1){
      ratingIndex--;
        updateRating();
         document.getElementById("rating-progress").innerHTML = `${ratingIndex}/3`
      }
    }

    function updateRating(){
      if(ratingIndex === 1){
        document.querySelector("#ratings-carousel").innerHTML = `<div id="ratings-box" class="ratings-box" >
          <span id="ratings-desc">My first time coming to Teecare clinic. I was scared at first but Dr and nurse guide me, helping me with my treatment and both are very kind. They keep me calm and keep checking on me to see if I was ok during the treatment which make me less nervous. Overall, I am really satisfied with the service and the price is really reasonable. Recommended! 5 star 🌟🌟🌟🌟🌟
          </span>
          <span id="ratings-author">- Ily Lily<pblack id="service-desc2">Teecare Dental Clinic</pblack></span>
        </div>`;
      }else if(ratingIndex === 2){
        document.querySelector("#ratings-carousel").innerHTML = `<div id="ratings-box" class="ratings-box" >
          <span id="ratings-desc">Excellent dental treatment by the female dentist. She was able to calm me down before the tooth extraction and gave very clear instructions after my tooth extractions. Her injections are painless as well. She is very experienced. I have been seeing her since 6 years now. Highly recommended!
          </span>
          <span id="ratings-author">- Nisa Nisa<pblack id="service-desc2">Tee Dental Surgery</pblack></span>
        </div>`;
      }else if(ratingIndex === 3){
        document.querySelector("#ratings-carousel").innerHTML = `<div id="ratings-box" class="ratings-box" >
          <span id="ratings-desc">I AM SO SATISFIED! This is the first time i went to Teecare Dental Clinic my friend suggested it to me. The atmosphere was very nice and the clinic was very modern but the best is the dentist was so NICE! service was good and price was reasonable aswell. Absolutely recommend!
          </span>
          <span id="ratings-author">- Nigga Higga <pblack id="service-desc2">Teecare Dental Clinic</pblack></span>
        </div>`;
      }
    }

    
    function countUp(target, duration) {
      const counter = document.getElementById("alot-ppl");
      let start = 0;
      const increment = target / (duration / 16); // ~60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          counter.textContent = `${target/1000},000`; // finish cleanly
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(start);
        }
      }, 16); // ~60fps
    }

    // Example: count up to 1000 in 2 seconds

    const targeta = document.querySelector("#alot-ppl");

    const observera = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          countUp(60000,1500)
        } else {
        }
      });
    });

    observera.observe(targeta);

    // OPTIONAL: adjust animation speed based on card count
    const track = document.getElementById("ratings-carousel");
    const cards = track.children.length / 2; // unique cards
    const speed = 15; // seconds per card
    track.style.animationDuration = `${cards * speed}s`;
