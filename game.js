let p1nm, p2nm, p1rs, p2rs, p1ts = 0, p2ts = 0, p1ps, p2ps

document.getElementById('btn1').addEventListener('click', () => {
    document.getElementById('gameBody').style.display = 'flex'
    document.getElementById('btn1').style.display = 'none'
    document.getElementById('btn2').style.display = 'flex'

    document.getElementById('btn11').addEventListener('click', () => {
        p1nm = document.getElementById('inp11').value
        document.getElementById('inp11').value = ''
        document.getElementById('wlcP1').innerHTML = "Name: " + p1nm
    })
    document.getElementById('btn12').addEventListener('click', () => {
        p1ps = document.getElementById('inp12').value
        document.getElementById('inp12').value = ''
        document.getElementById('pScrP1').innerHTML = "Predicted: " + p1ps
    })
    document.getElementById('btn21').addEventListener('click', () => {
        p2nm = document.getElementById('inp21').value
        document.getElementById('inp21').value = ''
        document.getElementById('wlcP2').innerHTML =  "Name: " + p2nm
    })
    document.getElementById('btn22').addEventListener('click', () => {
        p2ps = document.getElementById('inp22').value
        document.getElementById('inp22').value = ''
        document.getElementById('pScrP2').innerHTML = "Predicted: " + p2ps
    })
})
document.getElementById('btn2').addEventListener('click', () => {
    location.href = "./index.html" 
})

document.getElementsByClassName('rD')[0].addEventListener('click', () => {
    p1rs = Math.floor((1 + 6*(Math.random())))
    document.getElementById('rScrP1').innerHTML = "Recent Draw: " + p1rs
    p1ts += p1rs
    document.getElementById('tScrP1').innerHTML = "Total Score: " + p1ts
})
document.getElementsByClassName('rD')[1].addEventListener('click', () => {
    p2rs = Math.floor((1 + 6*(Math.random())))
    document.getElementById('rScrP2').innerHTML = "Recent Draw: " + p2rs
    p2ts += p2rs
    document.getElementById('tScrP2').innerHTML = "Total Score: " + p2ts
})