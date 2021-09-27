const button = document.querySelector('#button')
const input = document.querySelector('#input')
const success = document.querySelector('.success')
const alarm = document.querySelector('.alarm')
const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

button.addEventListener('click',()=>{
    alarm.classList.remove("visible")
    success.classList.remove("visible")
    regex.test(String(input.value).toLocaleLowerCase()) ? (success.classList.toggle("visible"),input.value="") : (alarm.classList.toggle("visible"))
})

input.addEventListener('keypress',(e)=>{
    if(e.key==='Enter')
    {
        alarm.classList.remove("visible")
        success.classList.remove("visible")
        regex.test(String(input.value).toLocaleLowerCase()) ? (success.classList.toggle("visible"),input.value="") : (alarm.classList.toggle("visible"))
    }
})