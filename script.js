document.addEventListener("DOMContentLoaded",()=>{
    let daysname=["SUN","MON","TUE","WED","THU","FRI","SAT"]

    let monthsname=["January","Februry","March","April","May","June","July","August","September","October","November","December"]


    let hours=document.getElementById("hrs")
    let minutes=document.getElementById("mins")
    let seconds=document.getElementById("sec")
    let days=document.getElementById("day")
    let months=document.getElementById("mon")
    let years=document.getElementById("year")
    let date=document.getElementById("dat")
    let ampm=document.getElementById("am-pm")
setInterval(()=>{
    let time = new Date()
    let hrs = time.getHours()
    hours.innerHTML = String(hrs % 12 || 12).padStart(2, "0")
    minutes.innerHTML=String(time.getMinutes()).padStart(2, "0")
    seconds.innerHTML=String(time.getSeconds()).padStart(2, "0")
    date.innerHTML=time.getDate()
    years.innerHTML=time.getFullYear()
    days.innerHTML=daysname[time.getDay()]
    months.innerHTML=monthsname[time.getMonth()]
    ampm.innerHTML=time.getHours()>=12?"PM":"AM"
},1000)
})




