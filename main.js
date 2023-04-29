// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector('#modal')
modal.className = ('hidden');



document.querySelectorAll('.like-glyph').forEach((heart) => {
  heart.addEventListener("click", (e) => {
    mimicServerCall()
      .then(() => changeHeart(e))
      .catch(handleError);
  });
});


// Handler Functions
function changeHeart(event) {
  const liker = event.target;
  if (liker.textContent === EMPTY_HEART) {
    liker.textContent = FULL_HEART;
    liker.classList.add("activated-heart");
  } else if ((liker.textContent = FULL_HEART)) {
    liker.textContent = EMPTY_HEART;
    liker.classList.remove("activated-heart");
  }
}
function handleError(message) {
  errorModal.className.remove("hidden");
  document.getElementById("modal-message").textContent = message;
  setTimeout(() => errorModal.className.add("hidden"), 3000);
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
