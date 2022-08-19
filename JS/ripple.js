var mybtn = document.querySelector("#myBtn");
//var mybtn = document.getElementById("myBtn");
var ripple = document.querySelector(".ripple");
mybtn.onmouseover=function(event) {
    this.children[0].classList.add("animated");
    var size, rippleX, rippleY;
    size = Math.max(this.offsetWidth,this.offsetHeight);
    ripple.style.width = size + "px";
    ripple.style.height = size + "px";
    ripple.style.top = -(this.offsetHeight-event.offsetY) + "px";
    ripple.style.left = -(this.offsetWidth/2-event.offsetX) + "px";
    setTimeout(function() {
            //this.children[0].classList.remove("animated");
	    mybtn.classList.remove('animated');
	 
    },800)
    }
