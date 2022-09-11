// var for document query selectors
var affirmationInput = document.querySelector("#affirmation");
var mantraInput = document.querySelector('#mantra');
var receiveBtn = document.querySelector(".receive-btn");
var imgWrapper = document.querySelector(".wrapper-img")
var bigBellImg = document.querySelector("#big-bell");
var hiddenPar = document.querySelector(".display-text")
var radioBtns = document.querySelectorAll('.radioBtns-class')
var formStru = document.querySelector("#form-page")
var formAccess = document.querySelector(".add-message-btn")
var submit = document.querySelector('#submit')
var inputText = document.querySelector(".writehere")
var formInputs = document.querySelectorAll(".text-choice")

// Event listeners here!
receiveBtn.addEventListener('click', display)
formAccess.addEventListener('click', showForm)
submit.addEventListener('click', showInput)







// functions

function userSelector() {
  for(var i= 0; i < radioBtns.length; i++) {
    if(radioBtns[i].checked) {
    usersChoice = radioBtns[i].value;
    break
    }
  }
};


function display() {
  userSelector();
  bigBellImg.style.display = 'none';
  if(usersChoice === 'mantras') {
    return hiddenPar.innerText = getRandomSaying(mantraSayings);
  } else if (usersChoice === 'affirmations') {
      return hiddenPar.innerText = getRandomSaying(affirmationSayings);
  }
};

function getRandomSaying(arr) {
  var randomIndex = Math.floor(Math.random()* arr.length)
  var saying = arr[randomIndex]
  return saying
};

function showForm() {
  formStru.classList.remove("hidden-f");
  submit.classList.remove("hidden-f");
  bigBellImg.style.display = 'none'
}

function textareaBtn() {
  for(var i = 0; i < formInputs.length; i++ ){
    if(formInputs[i].checked) {
    checkedValue = formInputs[i].value;
    break
    }
  }
}

function showInput() {
  textareaBtn()
  bigBellImg.style.display = 'none'
  if(checkedValue === "affirmation2" && checkedValue === "montra2" &&checkedValue === "text" ) {
    hiddenPar.innerText = inputText.value
  }else {
    hiddenPar.innerText = "Sorry! There are not enough inputs filled in."
  }
};













// variables node main.js <terminal>

var affirmationSayings = ['I forgive myself and set myself free.','I believe I can be all that I want to be.','I am in the process of becoming the best version of myself','I have the freedom & power to create the life I desire.','I choose to be kind to myself and love myself unconditionally.','My possibilites are endless.','I am worthy of my dreams.','I am enough.','I deserve to be healthy and feel good.','I am full of energy and vitality and my mind is calm and peaceful.','Every day I am getting healthier and stronger.','I honor my body by trusting the signals that it sends me.', 'I manifest perfect health by making smart choices.']
// console.log("array works!",affirmationSayings);
// var affOutput = getRandomSaying(affirmationSayings)
// console.log(affOutput);
//
var mantraSayings = ['Breathing in, I send myself love. Breating out, i send love to someone else who needs it.','Don\'t let yesterday take up too much of today.','Every day is a second chance.','Tell the truth and love everyone.','I am free from sadness','I am enough.','In the beginning it is you, in the middle it is you and in the end it is you.','I love myself.', 'I am present now.','Inhale the future, exhale the past.','This too shall pass.','Yesterday is not today.', 'The only constant is change.','onward and upwards.','I am the sky, the rest is weather.']
// console.log("Array works!",mantraSayings);
// var mantOutput = getRandomSaying(mantraSayings)
// console.log(mantOutput);
var usersChoice;
var checkedValue;
