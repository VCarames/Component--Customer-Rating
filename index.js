const ratingsDisplay = document.querySelector(".card__rating");
const form = document.querySelector(".card__rating-form");
const userSelection = document.querySelector(".success-text");
const thankYouDisplay = document.querySelector(".card__success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const rating = form.rating.value;
  userSelection.textContent = `You selected ${rating} out of 5`;
  ratingsDisplay.classList.add("hidden");
  thankYouDisplay.classList.remove("hidden");

  document.querySelector(".card__success").removeAttribute("hidden");
});

document.getElementsByName("rating").forEach((item) => {
  item.onchange = function () {
    document.getElementById("card__rating-btn").removeAttribute("disabled");
  };
});
