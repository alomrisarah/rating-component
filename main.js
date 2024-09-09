document.addEventListener("DOMContentLoaded", function () {
 const ratingButtons = document.querySelectorAll(".rating-button")
 const submitButton = document.getElementById("submit-button")
 const ratingScreen = document.getElementById("rating-screen")
 const thankScreen = document.getElementById("thank-screen")
 const ratingValueText = document.getElementById("rating-value")
 let ratingValue = 0
 
    //take the correct rate value
 ratingButtons.forEach((button) => {
  button.addEventListener("click", function () {
   ratingButtons.forEach((btn) => btn.classList.remove("selected")) //"unselect"  previously selected button
   this.classList.add("selected") //only  selected Button  is highlighted
   ratingValue = this.textContent //take the value
  })
 })
//after we take the value  there is athank screen with the result
 submitButton.addEventListener("click", function () {
  if (ratingValue !== 0) {//display only if the cus select a vaue
   ratingScreen.style.display = "none"
   thankScreen.style.display = "block"
   ratingValueText.textContent = ratingValue//disply the result
  } else {
   alert("Please select a rating value  before submitting.")
  }
 })
})
