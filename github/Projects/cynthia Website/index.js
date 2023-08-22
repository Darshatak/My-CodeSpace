const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
});


function circleMouseFollow() { 
    window.addEventListener("mousemove", function (data) { 
        this.document.querySelector("#minicircle").style.transform = `translate(${data.clientX}px,${data.clientY}px)`
        
    })
    window.addEventListener("click", function (data) { 
        this.document.querySelector("#minicircle").style.transform =`translate(${data.clientX}px,${data.clientY}px) scale(4)`
        this.document.querySelector("#minicircle").style.background = "#e40e0e"
    })
}

circleMouseFollow();