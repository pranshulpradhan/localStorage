const textbox = document.getElementById("textbox");
const textColor =document.getElementById("btnTextColor");
const backgroundColor =document.getElementById("btnBackgroundColor");

// function to save local storage
function saveLocal(){
localStorage.setItem("text",textbox.value);
localStorage.setItem("textColor",textbox.style.color);
localStorage.setItem("backgroundColor",textbox.style.backgroundColor);
}

// on restart fetching details from local storage
if (localStorage.getItem("text")) {
    textbox.value = localStorage.getItem("text");
    textbox.style.color = localStorage.getItem("textColor");
    textbox.style.backgroundColor = localStorage.getItem("backgroundColor");
}

textbox.addEventListener("input", saveLocal);
textColor.addEventListener("click", saveLocal);
backgroundColor.addEventListener("click", saveLocal);

// event for text color change 
textColor.addEventListener("click", function() {
    const randomColor = getRandomColor();
    textbox.style.color = randomColor;
})

// event for background color change 
btnBackgroundColor.addEventListener("click", function() {
    const randomColor = getRandomColor();
    textbox.style.backgroundColor = randomColor;
})


// function to get random colors
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }




