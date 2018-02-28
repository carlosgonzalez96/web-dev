var i = 0;
var images = [ "images/1080ti.jpg", "images/1080ti2.jpg", "images/1080ti3.jpg", "images/1080ti4.jpg" ];
var time = 3000; //3 seconds

function changeImg() {
  document.slide.src = images[ i ];
  if ( i < images.length - 1 ) {
    ++i;
  } else {
    i = 0;
  }
  setTimeout( "changeImg()", time );
}
window.onload = changeImg;

//Paragraph modification
function updateFirstText() {
  var textareaOne = document.getElementById( "textarea1" );
  var paraOne = document.getElementById( "des" );
  var buttonOne = document.getElementById( "buttonOne" );
  paraOne.innerHTML = textareaOne.value;
  textareaOne.style.display = "none";
  buttonOne.style.display = "none";
  paraOne.style.display = "block";
}

function apearOne() {
  var textareaOne = document.getElementById( "textarea1" );
  var buttonOne = document.getElementById( "buttonOne" );
  var paraOne = document.getElementById( "des" );
  textareaOne.style.display = "block";
  textareaOne.value = paraOne.innerHTML;
  paraOne.style.display = "none";
  buttonOne.style.display = "block";
}

/*
function updateSecondText() {
  var textareaTwo = document.getElementById('textarea2');
  var paraTwo = document.getElementById('des-two');
  var buttonTwo = document.getElementById('buttonTwo');
  paraTwo.innerHTML = textareaTwo.value;
  textareaTwo.style.display="none";
  buttonTwo.style.display="none";
  paraTwo.style.display="block";
}

function apearTwo() {
  var textareaTwo = document.getElementById('textarea2');
  var buttonTwo = document.getElementById('buttonTwo');
  var paraTwo = document.getElementById('des-two');
  textareaTwo.style.display="block";
  textareaTwo.value = paraTwo.innerHTML;
  paraTwo.style.display="none";
  buttonTwo.style.display="block";
}

//todo tiles
function closeBox(tile) {
  var x = document.getElementById(tile);
  x.style.display = "none";
}//end of closeBox function

//button for clearAll
function clearAll() {
  var div = ['tile1','tile2','tile3','tile4','tile5', 'tile6','tile7','tile8','tile9','tile10']
  var i = 0;
  for (i; i < div.length; i++) {
    document.getElementById(div[i]).style.display="none";
  }
}

//button for resetAll
function resetAll() {
  var div = ['tile1','tile2','tile3','tile4','tile5', 'tile6','tile7','tile8','tile9','tile10']
  var i = 0;
  for (i; i < div.length; i++) {
    document.getElementById(div[i]).style.display="block";
  }
}*/
