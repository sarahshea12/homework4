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
        return timeLeft
      }
  
    }, 1000);
  })
  
  var timeLeft2 = timeLeft
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
var q1Wrong = document.getElementsByClassName("wrong1")
var q2Wrong = document.getElementsByClassName("wrong2")
var q3Wrong = document.getElementsByClassName("wrong3")

for (var i = 0; i < q1Wrong.length; i++) {
  q1Wrong[i].addEventListener("click", function(event){
    q1.classList.add("hide");
    q2.removeAttribute("class","hide");
    score-100;
    timeLeft2-5;
  })
}
for (var i = 0; i < q2Wrong.length; i++) {
  q2Wrong[i].addEventListener("click", function(event){
    q2.classList.add("hide");
    q3.removeAttribute("class","hide");
    score-100;
    timeLeft2-5;
  })
}
for (var i = 0; i < q3Wrong.length; i++) {
  q3Wrong[i].addEventListener("click", function(event){
    q3.classList.add("hide");
    score-100;
    timeLeft2-5;
  })
}



//if right, add 100 to score
correct1.addEventListener("click", function() {
    score = score + 100
    console.log(score)
    q1.classList.add("hide")
    q2.removeAttribute("class","hide")
})
correct2.addEventListener("click", function() {
    score = score + 100
    console.log(score)
    q2.classList.add("hide")
    q3.removeAttribute("class","hide")
})
correct3.addEventListener("click", function() {
    score = score + 100
    console.log(score)
    q3.classList.add("hide")
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
    names.push(uInput);
    nameUl.append(li);
  })

 
for(var i=0; i<nameUl.length; i++){
    console.log(nameUl[i]);
    var li = document.createElement("<li>");
    li.text(nameUl[i] + score);
    nameUl.append(li);
}


// unit 4, #19 delegation has lists
// function() {
//for(i=0;i<10;i++){
//    a = a + i
//}
//return a;
//
