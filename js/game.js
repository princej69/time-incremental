let game = {
  planck: 0,
  pps: 1
}

function buySpeeder() {
  if(game.planck >= 10){
    game.pps++;
    game.planck-=10;
  }
}

function formatVal(n) {
  if (n >= 1000**4) return (n/1000**4).toFixed(2) + " t"
  if (n >= 1000**3) return (n/1000**3).toFixed(2) + " b"
  if (n >= 1000**2) return (n/1000**2).toFixed(2) + " m"
  return Math.floor(n).toLocaleString("uk")
}

function switchTab(tab) {
  document.getElementById("timespeeder").style.display = "none"
  document.getElementById("about").style.display = "none"
  document.getElementById(tab).style.display = "block"
}

setInterval(()=>{
  document.getElementById("timecount").innerHTML = formatVal(game.planck)
  document.getElementById("tcps").innerHTML = formatVal(game.pps) + "t<small>P</small>"
  document.getElementById("timeunit").innerHTML = "Planck time"
  
  game.planck += game.pps/50
},1000/50)

switchTab("timespeeder")