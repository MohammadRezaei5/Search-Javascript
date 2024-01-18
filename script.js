let filterarray = [];

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

showgallery(galleryarray);

function showgallery(currarray) {
  document.getElementById("card").innerText = ""; // ino comment on/off kon chera gozashti? dalil bego

  for (let index = 0; index < currarray.length; index++) {
    document.getElementById("card").innerHTML += `
        <div class="col-md-4 card-item">
        <div class="card">
        <div class="img-wrapper">
        <img src="${currarray[index].src}" width="100%" height="320px"/></div>

        <span class="text-center p-2 d-flex justify-content-center align-items-center">${currarray[index].name}</span>
        </div>
        </div>
        `;
  }
}


// -------------------- in khobe bedone spinner

document.getElementById("myinput").addEventListener("keyup", function () {
  let text = document.getElementById("myinput").value;

  // Update filter array
  filterarray = galleryarray.filter(function (a) {
    return a.name.includes(text);
  });

  if (
    filterarray.length === 0 &&
    document.getElementById("myinput").value !== ""
  ) {
    document.getElementById("para").style.display = "block";
    document.getElementById("card").innerHTML = "";
  } else {
    showgallery(filterarray);
    document.getElementById("para").style.display = "none";
  }
});

// ---------------------------------------------

// document.getElementById("myinput").addEventListener("keyup", function () {
//   let text = document.getElementById("myinput").value;
//   filterarray = galleryarray.filter(function (a) {
//     if (a.name.includes(text)) {
//       // a.name.toLowerCase().includes(text.toLowerCase())
//       // a.name.includes(text)
//       return a.name;
//     }
//   });
//   if (this.value == "") {
//     showgallery(galleryarray);
//     document.getElementById("para").style.display = "none";
//   } else {
//     if (filterarray.length === 0) {
//       document.getElementById("para").style.display = "block";
//       document.getElementById("card").innerHTML = "";
//     }
//     //  else {
//     //   showgallery(filterarray);
//     //   document.getElementById("para").style.display = "none";
//     // }
//   }
// });
