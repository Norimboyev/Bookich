const signup = document.querySelector(".sign_up");
const signin = document.querySelector(".sign_in");
const stext = document.querySelector(".signin");
const stext2 = document.querySelector(".signin2");
const sbtn = document.querySelector(".sign_in-box-btn");
const button = document.querySelector(".box2__cont-svg1");
const button2 = document.querySelector(".sign_up-box-btn");
const input = document.querySelector(".sign_up-box-card-input");
button.addEventListener("click", () => {
  signup.style.display = "flex";
});

button2.addEventListener("click", () => {
  signup.style.display = "none";
});

sbtn.addEventListener("click", () => {
  signin.style.display = "none";
});

stext.addEventListener("click", () => {
  signup.style.display = "none";
  signin.style.display = "flex";
});

stext2.addEventListener("click", () => {
  signup.style.display = "flex";
  signin.style.display = "none";
});

const filter = document.querySelector(".filter");
const fbutton = document.querySelector(".filter_svg");

fbutton.addEventListener("click", () => {
  filter.style.display = "none";
});

const text = document.querySelectorAll(".filter_box-text");
text.forEach((v) => {
  v.addEventListener("click", () => {
    v.style.background = "rgba(58, 58, 58, 1)";
    v.style.color = "white";
  });
});

text.forEach((v) => {
  v.addEventListener("dblclick", () => {
    v.style.background = "transparent";
    v.style.color = "black";
  });
});

const books = {
  book1: {
    name: "Самый богатый человек в Вавилоне (Клейсон Дж. С.)",
    price: 40.0,
    img: "../img/books/bbook1.png",
    amount: 0,
    get totalSumm() {
      return this.price * this.amount;
    },
  },
  book2: {
    name: "Простое правильное детство: книга для умных и счастливых родителей",
    price: 50.0,
    img: "../img/books/bbook2.png",
    amount: 0,
    get totalSumm() {
      return this.price * this.amount;
    },
  },
  book3: {
    name: "Гармоничные отношения. Книга-тренажёр",
    price: 80.0,
    img: "../img/books/bbook3.png",
    amount: 0,
    get totalSumm() {
      return this.price * this.amount;
    },
  },
  book4: {
    name: "На крыльях любви, или Как делать семью",
    price: 60.0,
    img: "../img/books/bbook4.png",
    amount: 0,
    get totalSumm() {
      return this.price * this.amount;
    },
  },
  book5: {
    name: "Отдел продаж по захвату рынка",
    price: 40.0,
    img: "../img/books/bbook5.png",
    amount: 0,
    get totalSumm() {
      return this.price * this.amount;
    },
  },
  book6: {
    name: "Обязанности руководителя отдела продаж",
    price: 70.0,
    img: "../img/books/bbook6.png",
    amount: 0,
    get totalSumm() {
      return this.price * this.amount;
    },
  },
  book7: {
    name: "Секреты больших продаж",
    price: 90.0,
    img: "../img/books/bbook7.png",
    amount: 0,
    get totalSumm() {
      return this.price * this.amount;
    },
  },
  book8: {
    name: "Гениальные скрипты продаж",
    price: 90.0,
    img: "../img/books/bbook8.png",
    amount: 0,
    get totalSumm() {
      return this.price * this.amount;
    },
  },
};

const cardBtn = document.querySelectorAll(".card-buy-btn"),
  cardSvg = document.querySelectorAll(".card-buy-svg2"),
  box2__cont_svg_count = document.querySelector(".box2__cont-svg2-count"),
  box2__cont_svg = document.querySelector('.box2__cont-svg2'),
  card_buy_svg21 = document.querySelector('.card-buy-svg21'),
  card_buy_svg22 = document.querySelector('.card-buy-svg22'),
  card_buy_svg23 = document.querySelector('.card-buy-svg23'),
  card_buy_svg24 = document.querySelector('.card-buy-svg24'),
  card_buy_svg25 = document.querySelector('.card-buy-svg25'),
  card_buy_svg26 = document.querySelector('.card-buy-svg26'),
  buy = document.querySelector('.buy'),
  buy__box2_card_count_svg = document.querySelector('.buy__box2-card-count-svg'),
  buy__box2_card_count_svg2 = document.querySelector('.buy__box2-card-count-svg2'),
  buy__box2_card_count_svg3 = document.querySelector('.buy__box2-card-count-svg3'),
  buy__box2_card_count_svg4 = document.querySelector('.buy__box2-card-count-svg4'),
  buy__box2_card_count_svg5 = document.querySelector('.buy__box2-card-count-svg5'),
  buy__box2_card_count_svg6 = document.querySelector('.buy__box2-card-count-svg6'),
  buy__box3_btn = document.querySelector('.buy__box3-btn'),
  buy__box_btn = document.querySelector(".buy__box-btn"),
  buy__box2_card = document.querySelector(".buy__box2-card"),
  buy__box2_card2 = document.querySelector(".buy__box2-card2"),
  buy__box2_card3 = document.querySelector(".buy__box2-card3"),
  buy__box2_card4 = document.querySelector(".buy__box2-card4"),
  buy__box2_card5 = document.querySelector(".buy__box2-card5"),
  buy__box2_card6 = document.querySelector(".buy__box2-card6");

  box2__cont_svg.addEventListener("click", () => {
    buy__box3_btn.style.display = "flex";
    buy.style.display = "flex";
  });
  buy__box_btn.addEventListener("click", () => {
    buy.style.display = "none";
    buy__box3_btn.style.display = "none";
    box2__cont_svg_count.style.transform = "scale(0)";
  });
  
  card_buy_svg21.addEventListener("click", () => {
    buy__box2_card.style.display = "flex";
    buy__box3_btn.style.display = "flex";
    box2__cont_svg_count.style.transform = "scale(1)";
  });
  card_buy_svg22.addEventListener("click", () => {
    buy__box2_card2.style.display = "flex";
    buy__box3_btn.style.display = "flex";
    box2__cont_svg_count.style.transform = "scale(1)";
  });
  card_buy_svg23.addEventListener("click", () => {
    buy__box2_card3.style.display = "flex";
    buy__box3_btn.style.display = "flex";
    box2__cont_svg_count.style.transform = "scale(1)";
  });
  card_buy_svg24.addEventListener("click", () => {
    buy__box2_card4.style.display = "flex";
    buy__box3_btn.style.display = "flex";
    box2__cont_svg_count.style.transform = "scale(1)";
  });
  card_buy_svg25.addEventListener("click", () => {
    buy__box2_card5.style.display = "flex";
    buy__box3_btn.style.display = "flex";
    box2__cont_svg_count.style.transform = "scale(1)";
  });
  card_buy_svg26.addEventListener("click", () => {
    buy__box2_card6.style.display = "flex";
    buy__box3_btn.style.display = "flex";
    box2__cont_svg_count.style.transform = "scale(1)";
  });

  
  buy__box2_card_count_svg.addEventListener("click", () => {
    buy__box2_card.style.display = "none";
  });
  buy__box2_card_count_svg2.addEventListener("click", () => {
    buy__box2_card2.style.display = "none";
  });
  buy__box2_card_count_svg3.addEventListener("click", () => {
    buy__box2_card3.style.display = "none";
  });
  buy__box2_card_count_svg4.addEventListener("click", () => {
    buy__box2_card4.style.display = "none";
  });
  buy__box2_card_count_svg5.addEventListener("click", () => {
    buy__box2_card5.style.display = "none";
  });
  buy__box2_card_count_svg6.addEventListener("click", () => {
    buy__box2_card6.style.display = "none";
  });




  // cardBtn,
  //   cardSvg.forEach((btn) => {
    //     btn.addEventListener("click", () => {
//       // closest('селектор') - определяет ближайшего родителя дочернего элемента
//       plusOrMinus(btn);
//     });
//   });

// function basket() {
//   const productsArray = [];
//   for (const key in products) {
//     const po = products[key];
//     const productCard = document.querySelector(`#${po.name.toLowerCase()}`),
//       parentIndicator = productCard.querySelector(".box2__count");
//     if (po.amount) {
//       productsArray.push(po);
//       parentIndicator.classList.add("active");
//       parentIndicator.innerHTML = po.amount;
//     } else {
//       parentIndicator.classList.remove("active");
//       parentIndicator.innerHTML = 0;
//     }
//   }
//   const allCount = totalCountProducts();
//   const totalSumm = totalSummProduct();
//   if (allCount) {
//     box2__cont_svg.classList.add("active");
//   } else {
//     box2__cont_svg.classList.remove("active");
//   }
//   box2__cont_svg.innerHTML = allCount;
//   totalPriceBasket.innerHTML = totalSumm.toLocaleString() + " сум";

//   basketChecklist.innerHTML = "";
//   productsArray.forEach((prod) => {
//     basketChecklist.innerHTML += cardItem(prod);
//   });
// }

// function totalCountProducts() {
//   let total = 0;
//   for (const key in products) {
//     total += products[key].amount;
//   }
//   return total;
// }
// function totalSummProduct() {
//   let totalPrice = 0;
//   for (const key in products) {
//     totalPrice += products[key].totalSumm;
//   }
//   return totalPrice;
// }

// function cardItem(prod) {
//   const { name, totalSumm: price, amount, img } = prod;
//   return `
//       <div class="wrapper__navbar-product">
//           <div class="wrapper__navbar-info">
//               <img src="${img}" alt="" class="wrapper__navbar-productImage" />
//               <div>
//                   <p class="wrapper__navbar-infoName">${name}</p>
//                   <p class="wrapper__navbar-infoPrice">${price.toLocaleString()}</p>
//               </div>
//           </div>
//           <div class="wrapper__navbar-option" id="${name.toLowerCase()}_card">
//               <button class="wrapper__navbar-symbol fa-minus" data-symbol="-">-</button>
//               <output class="wrapper__navbar-count">${amount}</output>
//               <button class="wrapper__navbar-symbol fa-plus" data-symbol="+">+</button>
//           </div>
//       </div>
//    `;
// }

// // cardSvg.addEventListener("click", () => {
// // });


// cardSvg.forEach((v) => {
//   v.addEventListener("click", () => {
//     basketModal.classList.add("active");

//   });
// });


// buy__box_btn.addEventListener("click", () => {
//   basketModal.classList.remove("active");
// });

// window.addEventListener("click", (e) => {
//   let btn = e.target;
//   if (btn.classList.contains("wrapper__navbar-symbol")) {
//     const attr = btn.getAttribute("data-symbol"),
//       parent = btn.closest(".wrapper__navbar-option");
//     if (parent) {
//       const parentId = parent.getAttribute("id").split("_")[0];
//       if (attr == "-") products[parentId].amount--;
//       else if (attr == "+") products[parentId].amount++;
//       basket();
//     }
//   }
// });
