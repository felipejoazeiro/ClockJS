const deg = 6

const hourArrow = document.querySelector('#hour')
const minuteArrow = document.querySelector('#minute')
const secondsArrow = document.querySelector('#seconds')

setInterval(()=>{
    let day = new Date()
    let hour = day.getHours() * 30
    let minute = day.getMinutes() * deg
    let seconds = day.getSeconds() * deg
    
    hourArrow.style.transform = `rotateZ(${(hour)+(minute/12)}deg)`
    minuteArrow.style.transform = `rotateZ(${minute}deg)`
    secondsArrow.style.transform = `rotateZ(${seconds}deg)`
})

