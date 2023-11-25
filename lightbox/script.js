function popupDiv() {
    let html = '<div class="mainPopup" id="popupDiv"><img src="" alt="" id="popupImg"><img src="lightbox/image/close.webp" alt="" id="close" class="icon"><img src="lightbox/image/leftArrow.jpg" alt="" id="left" class="icon"><img src="lightbox/image/rightArrow.jpg" alt="" id="right" class="icon"></div>';
    let popDiv = document.createElement('Div');
    popDiv.innerHTML = html
    document.body.insertBefore(popDiv, document.body.firstChild);
}

let img;
let current;

function popDivInit() {
    img = document.getElementsByClassName("img");
  
    for (let i = 0; i < img.length; i++) {        
    // add cursor
    img[i].style.cursor = "pointer";

    // add click Event
    img[i].addEventListener("click", function () {
        document.getElementById("popupImg").src = this.src;
        document.getElementById("popupDiv").style.display = "block";
        checkArrow()
       })        
    }
    popupDiv()    
}
popDivInit();

// Close Funtion

document.getElementById("close").addEventListener("click", function () {
           document.getElementById("popupImg").src = "";
           document.getElementById("popupDiv").style.display = "none";        
    })

    let rightArrow = document.getElementById("right");
    let leftArrow = document.getElementById("left");

    rightArrow.addEventListener('click', function () {
        csrc();
        current++;
        document.getElementById("popupImg").src = img[current].src;
        checkArrow()
    })
   
    leftArrow.addEventListener('click', function () {
        csrc();
        current--;
        document.getElementById("popupImg").src = img[current].src;
        checkArrow()
    })


// get current src
function csrc() {
    for (let i = 0; i < img.length; i++) {
        if (img[i].src == document.getElementById("popupImg").src) {
            current = i;
        }            
    }
}

function checkArrow() {
    csrc();
    for (let i = 0; i < img.length; i++) {
        if (current == '0') {
            leftArrow.style.display = 'none';
            rightArrow.style.display = 'block';
        }else if(current == img.length -1){
            rightArrow.style.display = 'none';
            leftArrow.style.display = 'block';
        }else{
            leftArrow.style.display = 'block';
            rightArrow.style.display = 'block';
        }
        
    }
}




    

