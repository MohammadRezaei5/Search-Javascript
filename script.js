let galleryarray = [
  {
    id: 1,
    name: "پرتقال",
    src: "./images/Orange.jpg",
  },
  {
    id: 2,
    name: "نان",
    src: "./images/Bread.jpg",
  },
  {
    id: 3,
    name: "نوشیدنی",
    src: "./images/Drinks.jpg",
  },
  {
    id: 4,
    name: "ماکارونی",
    src: "./images/Pasta.jpg",
  },
  {
    id: 5,
    name: "سبزیجات",
    src: "./images/Vegetables.jpg",
  },
  {
    id: 6,
    name: "شیرینی ها",
    src: "./images/Sweets.jpg",
  },
];
let filterarray = [];

function showgallery(currarray) {
  const cardElement = document.getElementById("card");
  const paraElement = document.getElementById("para");

  if (currarray.length === 0) {
    cardElement.innerHTML = "";
    paraElement.style.display = "block";
    return;
  }

  paraElement.style.display = "none";
  let cardHTML = "";
  currarray.forEach((item) => {
    cardHTML += `
      <div class="col-md-4 card-item">
        <div class="card">
          <div class="img-wrapper">
            <img src="${item.src}" width="100%" height="320px"/>
          </div>
          <span class="text-center p-2 d-flex justify-content-center align-items-center">${item.name}</span>
        </div>
      </div>
    `;
  });
  cardElement.innerHTML = cardHTML;
}

document.getElementById("myinput").addEventListener("keyup", function (e) {
  let text = e.target.value;
  let filtered = galleryarray.filter((item) => item.name.includes(text));

  if (text === "") {
    showgallery(galleryarray);
  } else {
    showgallery(filtered);
  }
});

showgallery(galleryarray);
