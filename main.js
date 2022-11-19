const hourEl = document.querySelector('.hour')
const minEl = document.querySelector('.minute')
const secEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toogle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

toogle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    }else{
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode' 
    }
})

function setTime(){
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours % 24
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 23, 0, 360)}deg)`
    minEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`

    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)