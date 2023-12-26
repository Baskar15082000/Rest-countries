const darkBlue = getComputedStyle(document.documentElement).getPropertyValue(
  "--dark-blue"
);
const veryDarkBlueBg = getComputedStyle(
  document.documentElement
).getPropertyValue("--very-dark-blue-bg");
const veryDarkBlueText = getComputedStyle(
  document.documentElement
).getPropertyValue("--very-dark-blue-text");
const darkGray = getComputedStyle(document.documentElement).getPropertyValue(
  "--dark-gray"
);
const veryLightGray = getComputedStyle(
  document.documentElement
).getPropertyValue("--very-light-gray");
const white = getComputedStyle(document.documentElement).getPropertyValue(
  "--white"
);

async function fetch1() {
  var data = await fetch("https://restcountries.com/v3.1/all");
  data = await data.json();
  return data;
}
function createflag(data) {
  const newCard = document.createElement("div");
  newCard.id = data[0].region;
  newCard.style.width = "19.5rem";
  newCard.className = "card pb-5 px-0 ms-lg-2";

  newCard.innerHTML = `
      <img src="${data[0].flags.png}" class="card-img-top" id="img"/>
      <div class="card-body">
        <h5 class="card-title py-2 fw-bold">${data[0].name.common}</h5>
        <div class="population"><span style ="font-weight:600 ">Population: </span>${data[0].population}</div>
        <div class="region"><span style ="font-weight:600 ">Region: </span>${data[0].region}</div>
        <div class="capital"><span style ="font-weight:600 ">Capital: </span>${data[0].capital}</div>
      </div>
    `;
  newCard.style.marginBottom = "3rem";
  newCard.style.boxShadow = "0px 0px 10px rgb(182, 179, 179)";
  const con = document.getElementById("flag").appendChild(newCard);
}
fetch1().then((data) => {
  for (let i = 0; i < data.length; i++) {
    createflag([data[i]]);
  }
  return;
});

const body1 = document.getElementById("data"); // Assuming the id is "data"
body1.style.backgroundColor = veryLightGray;
const body2 = document.getElementById("flag");
flag.style.backgroundColor = veryLightGray;

//filter

const eve = document.querySelectorAll("#f1");
eve.forEach((element) => {
  element.addEventListener("click", action);
});

function filter(region) {
  const countries = document.querySelectorAll(".card");
  Array.from(countries).forEach((e) => {
    e.style.display = "block";
  });
  if (region === "All Regions") {
    return;
  }
  const elementWithId = document.querySelectorAll("#" + region);
  const elementsArray = Array.from(elementWithId);
  console.log(elementsArray);

  Array.from(countries).forEach((e) => {
    const containsCountry = elementsArray.some((element) =>
      element.contains(e)
    );

    if (containsCountry) {
      console.log(e);
    } else {
      e.style.display = "none";
    }
    console.log("g");
  });
}
function action(e) {
  console.log(e.target.innerText);
  filter(e.target.innerText);
}
const search = document.getElementById("search");
search.addEventListener("keyup", searchFunction);
function searchFunction(e) {
  const val = e.target.value;
  searchDisplay(val);
}
function searchDisplay(val) {
  const countries = document.querySelectorAll(".card");
  Array.from(countries).forEach((e) => {
    e.style.display = "block";
  });
  Array.from(countries).forEach((e) => {
    const country = e.getElementsByClassName("card-title");

    if (country[0].textContent.toLocaleLowerCase().includes(val)) {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  });
}
