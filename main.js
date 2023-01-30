// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


const likeGlyph = document.getElementsByClassName('like-glyph')

      const afterClick = function(e){
      const heart = e.target
        mimicServerCall("something")
        .then(function(){
      if ( heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.classList.add("activated-heart");
      } else {
        heart.innerText = EMPTY_HEART;
        heart.classList.remove("activated-heart");
      }
      })
      .catch(function(error) {
        const modal = document.getElementById("modal");
        modal.innerText = error;
        modal.classList.remove("hidden");
      setTimeout(() => modal.classList.add("hidden"), 3000);
      });
      }

      for (glph of likeGlyph){
        glph.addEventListener('click', afterClick)
      }

// And in the HTML, add the .hidden class to the error modal:


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
