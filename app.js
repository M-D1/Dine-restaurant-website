const p = document.querySelectorAll('.nav p');
const typeOfEvents = document.querySelector('.type--of--events')
const img = document.querySelector('img.img')

let w =''


let familyImg ='images/homepage/family-gathering-mobile.jpg'
let socialImg ='images/homepage/special-events-mobile.jpg'
let specialImg ='images/homepage/social-events-mobile.jpg'

img.src = familyImg


document.addEventListener('click',function(e){
 if(e.target.dataset.num){
    handleClick(e.target.dataset.num)
 }
})



window.onresize = function(e){
    for(const pTag of p){
      pTag.classList.remove('active')
    }

    const p1 = document.getElementById('1')

    p1.classList.add('active')
    w = window.innerWidth
   


  if( w < 670){

    familyImg ='images/homepage/family-gathering-mobile.jpg'
    socialImg ='images/homepage/special-events-mobile.jpg'
    specialImg ='images/homepage/social-events-mobile.jpg'
    
    img.src = familyImg
  

  }else if( w === 670 || w < 900 ){
    familyImg ='images/homepage/family-gathering-tablet.jpg'
    socialImg = 'images/homepage/social-events-tablet.jpg'
    specialImg ='images/homepage/special-events-tablet.jpg'

    img.src = familyImg
   
  }
  else{
    familyImg ='images/homepage/family-gathering-desktop.jpg'
    socialImg = 'images/homepage/social-events-desktop.jpg'
    specialImg ='images/homepage/special-events-desktop.jpg'
    
    img.src = familyImg
    
  }
}



function handleClick(num){
 for(const pTag of p){
  pTag.classList.remove('active')
 }
 
 const el = document.getElementById(num)
 el.classList.add('active')

 if(el.textContent === 'Family Gathering'){
  img.src= familyImg
  typeOfEvents.innerHTML =`
   <h2>Family Gathering</h2>
   <p class="info">
    We love catering for entire families. So please bring everyone along for a special meal with your
    loved ones. We’ll provide a memorable experience for all.
   </p>
  `
 }
 else if(el.textContent === 'Special Events'){
  img.src = specialImg
  typeOfEvents.innerHTML =`
  <h2>Special Events</h2>
  <p class="info">
   Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. 
   We’ll be sure to mark your special date with an unforgettable meal.
  </p>
 `
 }
 else{
  img.src=socialImg
  typeOfEvents.innerHTML =`
   <h2>Social Events</h2>
   <p class="info">
     Are you looking to have a larger social event? No problem! We’re more than happy to cater for big 
     parties. We’ll work with you to make your event a hit with everyone.
   </p>
  `
 }
 
}






