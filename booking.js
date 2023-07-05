// booking page

const num = document.getElementById('num')
const minus = document.getElementById('minus')
const add = document.getElementById('add')
const form = document.querySelector('form')

const userName = document.getElementById('name')
const email = document.getElementById('email')
const month = document.getElementById('month')
const day = document.getElementById('day')
const year = document.getElementById('year')
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const label = document.querySelector('.label')
const label2 = document.querySelector('.label2')
const selectMenu = document.querySelector('.select--menu')
const options = document.querySelector('.options')
const option = document.querySelectorAll('.option')


const check = document.querySelector('.check')
console.log(check)



// let scrollNum;
// window.onscroll = function(){
   
//     console.log(this.scrollY)
//     scrollNum = this.scrollY



// }
 const reserve = document.querySelector('.reserve')
 console.log(reserve)
 
 reserve.addEventListener('click',function(){
    console.log('a')
    window.scrollTo({
        top:440,
        behavior:'smooth'
    })
 })

 










let count = 0
// subtracting count if the minus btn is clicked

minus.addEventListener('click',function(e){
 e.preventDefault()
 
if(num.textContent > 0){
 num.textContent = count -= 1
}
 


})
// adding count if the add btn is clicked

add.addEventListener('click',function(e){
 e.preventDefault()
 num.textContent = count += 1
})



selectMenu.addEventListener('click',function(){
   
    const iconArrow = document.querySelector('.icon--arrow')
    
    iconArrow.classList.toggle('active')

    if(iconArrow.classList.contains('active')){
        options.style.display = 'block'
    }
    else{
        options.style.display = 'none'
    }
})

option.forEach(opt => {
    // deciding what to display on option text am or pm 
    const selectedTime = document.querySelector('.option--text')
    opt.addEventListener('click',function(e){

        selectedTime.textContent = e.target.dataset.t
        // changing the position of the check mark depending on am or pm
        if(selectedTime.textContent ==='AM'){
            check.style.top = '22%'
        }else{
            check.style.top = '60%'
        }
  


    })
   
   
})



function error(element,message = 'This field is required'){
 const inputParent = element.parentElement

 const err = inputParent.querySelector('.error')

 err.textContent = message

 inputParent.classList.add('error')
 inputParent.classList.remove('success')
 err.style.display = 'block'
 

 
}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function success(element){
 const inputParent = element.parentElement


 const err = inputParent.querySelector('.error')
 inputParent.classList.add('success')
 inputParent.classList.remove('error')

 if(err.style.display = 'block'){
  err.style.display = 'none'
 }
}


form.addEventListener('submit',e => {
 e.preventDefault()
 inputValidation()
})


function inputValidation(){
 const n = userName.value.trim()
 const e = email.value.trim()
 const m = month.value.trim()
 const d = day.value.trim()
 const y = year.value.trim()
 const h = hour.value.trim()
 const mi =minute.value.trim()



 
 

 if(n === ''){
  error(userName)
 }else{
  success(userName)
 }

 if(e === ''){
  error(email)
 }else if(!isValidEmail(e)){
  error(email , 'Please Provide valid Email')
 }else{
  success(email)
 }
 
 const checkingTime =moment(`${m}/${d}/${y}`,'MM/DD/YYYY',true).isValid()

 if(m === ''|| y === '' || d === ''){
    error(label,'This field is incomplete')
 }
 else if(!checkingTime){
    error(label,'Please provide valid date')
 }
 else{
    success(label)
 }

 if(h === '' || mi === ''){
    error(label2,'This field is incomplete')
 }
 else{
    success(label2)
 }
 if(count === 0){
    alert(`Please choose How Many People Are Going With You if It's only you then choose 1 people Thank you `)
 }


}




