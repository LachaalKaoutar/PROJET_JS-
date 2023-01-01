const menu = [
  {
    id: 1,
    title: "what is javascript?",
    category: "JS",
    price: 15.99,
    img: "./images/javascriptDef.png",
  },
  {
    id: 2,
    title: "basics of HTML",
    category: "HTML",
    price: 13.99,
    img: "./images/htmlBasics.PNG",
  },
  {
    id: 3,
    title: 'mesures and unites of CSS',
    category: "CSS",
    price: 6.99,
    img: "./images/cssMesures.png",
  },
  {
    id: 4,
    title: "CSS selectors",
    category: "CSS",
    price: 20.99,
    img: "./images/cssSelectors.jpg",
  },
  {
    id: 5,
    title: 'HTML attributes and values',
    category: "HTML",
    price: 22.99,
    img: "./images/htmlAttrVal.jpg",
  },
  {
    id: 6,
    title:'CSS properties',
    category: "CSS",
    price: 18.99,
    img: "./images/cssProperties.png",
  },
  {
    id: 7,
    title:  "variables and data type of javascript",
    category: "HTML",
    price: 8.99,
    img: "./images/htmlBasics.PNG",
  },
  {
    id: 8,
    title: 'basics of HTML',
    category: "HTML",
    price: 12.99,
    img: "./images/htmlElements.png",
  },
  {
    id: 9,
    title: 'HTML elements and tags',
    category: "HTML",
    price: 16.99,
    img: "./images/htmlTags.png",
  },
  {
    id: 10,
    title:'functions and loops with javascript',
    category: "JS",
    price: 22.99,
    img: "./images/javascriptDef.png",
  },
];

//   // get parent element
// const sectionCenter = document.querySelector(".section-center");
// const btnContainer = document.querySelector(".btn-container");
// // display all items when page loads
// window.addEventListener("DOMContentLoaded", function () {
//   diplayMenuItems(menu);
//   displayMenuButtons();
// });

// function diplayMenuItems(menuItems) {
//   let displayMenu = menuItems.map(function (item) {
//     // console.log(item);

//     return `<article class="menu-item">
//           <img src=${item.img} alt=${item.title} class="photo" />
//           <div class="item-info">
//             <header>
//               <h4>${item.title}</h4>
//               <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">

//             </p>
//           </div>
//         </article>`;
//   });
//   displayMenu = displayMenu.join("");
//   // console.log(displayMenu);

//   sectionCenter.innerHTML = displayMenu;
// }
// function displayMenuButtons() {
//   const categories = menu.reduce(
//     function (values, item) {
//       if (!values.includes(item.category)) {
//         values.push(item.category);
//       }
//       return values;
//     },
//     ["all"]
//   );
//   const categoryBtns = categories
//     .map(function (category) {
//       return `<button type="button" class="filter-btn" data-id=${category}>
//           ${category}
//         </button>`;
//     })
//     .join("");

//   btnContainer.innerHTML = categoryBtns;
//   const filterBtns = btnContainer.querySelectorAll(".filter-btn");
//   console.log(filterBtns);

//   filterBtns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//       // console.log(e.currentTarget.dataset);
//       const category = e.currentTarget.dataset.id;
//       const menuCategory = menu.filter(function (menuItem) {
//         // console.log(menuItem.category);
//         if (menuItem.category === category) {
//           return menuItem;
//         }
//       });
//       if (category === "all") {
//         diplayMenuItems(menu);
//       } else {
//         diplayMenuItems(menuCategory);
//       }
//     });
//   });
// }
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads

window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
           <img src=${item.img}  alt=${item.title} class="photo" />
           <div class="item-info">
             <header>
             
               <h4>${item.title}</h4>
               <h4 class="price">$${item.price}</h4>
             </header>
             <p class="item-text">
                      </p>
           </div>
         </article>`;
  });
  displayMenu = displayMenu.join(" ");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn " data-id=${category}>
           ${category}
         </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}

const searchInput = document.getElementById("input");

input.addEventListener("keyup", function () {
  const input = searchInput.value;
  const result = menu.filter((item) =>
    item.title.toLowerCase().includes(input.toLowerCase())
  );
  console.log(input);
  diplayMenuItems(result);
});

const rangeV = document.getElementById("range");
const error = document.getElementById("error_prix");
rangeV.addEventListener("click", function () {
  const rValue = rangeV.value;
  console.log(rValue);
  const hold = document.getElementById("holder");
  hold.innerHTML = "value : " + rValue + "$";
  const menuRange = menu.filter(function (menuItem) {
    // console.log(menuItem.category);
    if (menuItem.price <= rValue) {
      error.style.display = "none";
      return menuItem;
    } else if (rValue < 6.99) {
      error.style.display = "block";
      error.innerHTML = "Aucun Element avec ce prix";
    }
  })
  diplayMenuItems(menuRange);
})

const slide = document.querySelector("slide");
const output = document.querySelector("output");
let valeur = document.getElementById("slide").Value;

console.log(valeur);
