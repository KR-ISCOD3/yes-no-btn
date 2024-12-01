let btnNo = document.getElementById("btnNo")

btnNo.onmousemove = ()=>{

    let innerWidth = window.innerWidth
    let innerHeight = window.innerHeight

    // console.log(innerWidth);
    // console.log(innerHeight);

    let randomX = Math.floor( Math.random() * (innerWidth - 100));
    let randomY = Math.floor( Math.random() * (innerHeight - 50));
    
    btnNo.style.left = `${randomX}px`
    btnNo.style.top = `${randomY}px`
}