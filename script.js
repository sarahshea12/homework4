//variables
var beginbutton = document.getElementById("begin")
var q1 = document.getElementById("question1")
var q2 = document.getElementById("question2")
var q3 = document.getElementById("question3")
var secs = document.getElementById("seconds")
var head = document.getElementById("title")
var score = 0;
var timeLeft = 30;

//start timer
beginbutton.addEventListener("click", function startTimer() {
    
    var timeInterval = setInterval(function() {
      secs.textContent = timeLeft;
      timeLeft--;
  
      if (timeLeft === 0) {
        secs.textContent = "game over";
        clearInterval(timeInterval);
      }
  
    }, 1000);
  })
  
//hide and show questions
beginbutton.addEventListener("click", function() {
    q1.removeAttribute("class","hide");
    head.classList.add("hide")
    beginbutton.classList.add("hide")
})

// if wrong, subtract 5 from timer

var correct1 = document.getElementById("right1")
var correct2 = document.getElementById("right2")
var correct3 = document.getElementById("right3")

//if right, add 100 to score
correct1.addEventListener("click", function() {
    score = score + 100
    console.log(score)
})
correct2.addEventListener("click", function() {
    score = score + 100
    console.log(score)
})
correct3.addEventListener("click", function() {
    score = score + 100
    console.log(score)
})

// append high scores
var uInput = document.getElementById("text").value;
var nameUl = document.getElementById("names")
var names = [""]
names.push(uInput + score);

var addButton = document.getElementById("add")
addButton.addEventListener("click", function() {
    var li = document.createElement("li");
    li.id = names.length;
    li.innerHTML = uInput + score;
    names.push({uInput});
    nameUl.append(li);
  })

 
// function() {
//for(i=0;i<10;i++){
//    a = a + i
//}
//return a;
//

//for(var i=0; i<name.length; i++){
    //console.log(names[i]);
    //var li = document.createElement("<li>");
    //li.text(names[i]);
    //document.getElementById("names").append(li);
//}
