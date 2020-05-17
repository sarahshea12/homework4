//variables
var beginbutton = document.getElementById("begin")
var q1 = document.getElementById("question1")
var q2 = document.getElementById("question2")
var q3 = document.getElementById("question3")
var secs = document.getElementById("seconds")
var head = document.getElementById("title")
var highScoreDiv = document.getElementById("hs")
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

// question one, incorrect answer buttons
for (var i = 0; i < q1Wrong.length; i++) {
  q1Wrong[i].addEventListener("click", function(event){
    q1.classList.add("hide");
    q2.removeAttribute("class","hide");
    score-100;
    timeLeft = timeLeft - 5;
  })
}

// question two, incorrect answer buttons
for (var i = 0; i < q2Wrong.length; i++) {
  q2Wrong[i].addEventListener("click", function(event){
    q2.classList.add("hide");
    q3.removeAttribute("class","hide");
    score-100;
    timeLeft = timeLeft - 5;
  })
}

// question three, incorrect answer buttons
for (var i = 0; i < q3Wrong.length; i++) {
  q3Wrong[i].addEventListener("click", function(event){
    q3.classList.add("hide");
    score-100;
    timeLeft = timeLeft - 5;
    highScoreDiv.removeAttribute("class", "hide")
  })
}

//question 1, correct answer button
correct1.addEventListener("click", function() {
    score = score + 100
    console.log(score)
    q1.classList.add("hide")
    q2.removeAttribute("class","hide")
})
//question 2, correct answer button
correct2.addEventListener("click", function() {
    score = score + 100
    console.log(score)
    q2.classList.add("hide")
    q3.removeAttribute("class","hide")
})
//question 3, correct answer button
correct3.addEventListener("click", function() {
    score = score + 100
    console.log(score)
    q3.classList.add("hide")
    highScoreDiv.removeAttribute("class", "hide")
})

// append high scores
var uInputi = document.getElementById("text")

//lists of scores
var newScore = [{
  initials: uInputi,
  total: score 
}]

var nameUl = document.getElementById("people-list")
localStorage.setItem("score", JSON.stringify(score));
var stored = [""]
localStorage.setItem("score", JSON.stringify(score));

var addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", function () {
  var li = document.createElement("li");
  uInput = uInputi.value;
  li.id = newScore.length;
  stored.push(newScore);
  li.innerHTML = uInput + " " + score;
  nameUl.append(li);
  console.log(stored);
  console.log(uInput)
  beginbutton.removeAttribute("class", "hide")
})
  
