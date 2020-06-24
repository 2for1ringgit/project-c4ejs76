
// var slideIndex = 1;
// showSlides(slideIndex);
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
// //auto slide
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 4000); // Change image every 2 seconds
// }

// let add_mua = document.getElementsByClassName("datmua");
// for (let i = 0; i < add_mua.length; i++) {
//     add = add_mua[i];
//     add.addEventListener("click", function (event) {
//         let button = event.target;
//         let product = button.parentElement.parentElement;
//         let title = product.getElementsByClassName("name")[0].innerText;
//         let price = product.getElementsByClassName("gia")[0].innerText;
//         additemtobuy(title, price);
//         updatebuy();
//     });
// };

let name_alert = document.querySelector(".checkout-name");
let number_alert = document.querySelector(".checkout-number");
let address_alert = document.querySelector(".checkout-address");
let checkout_btn = document.getElementById("checkout-button");

let cash = document.getElementById("cash-pay");
let bank = document.getElementById("bank-pay");
let airpay = document.getElementById("airpay-pay");
let visa = document.getElementById("visa-pay");
let momo = document.getElementById("momo-pay");
let promo = document.getElementById("promo");
let apply = document.getElementById("apply");

apply.addEventListener("click", function applyCoupon(){
  if (! promo.value) {
    alert ("Mã ưu đãi không hợp lệ");
  }
  else {
    alert ("Áp dụng mã ưu đãi thành công");
  }
})

checkout_btn.addEventListener("click", function newWindow(){
  if (cash.checked) {
    alert("Bạn đã đặt hàng thành công");
  }
  else if (bank.checked) {
    window.open ("https://portal.vietcombank.com.vn/Pages/Home.aspx");
  }
  else if (momo.checked) {
    window.open ("https://momo.vn/");
  }
  else if (airpay.checked) {
    window.open ("https://www.airpay.vn/khuyen-mai/");
  }
  else if (visa.checked) {
    window.open ("https://www.visa.com.vn/");
  }
})
checkout_btn.addEventListener("click", function showAlert() {
  if (!name_alert.value) {
    alert("Tên không thể bỏ trống");
  }
  else if (!number_alert.value) {
    alert("Số điện thoại không thể bỏ trống");
  }
  else if (!address_alert.value) {
    alert("Địa chỉ không thể bỏ trống");
  } else {
    alert("Bạn đã đặt hàng thành công");
    location.reload();
  }
});

// if (! name_alert.value ) {
//   checkout_btn.onclick = alert ("Tên không thể bỏ trống");
// }
// else if (!name_alert.value ) {
//   checkout_btn.onclick = alert ("Tên không thể bỏ trống");
// }
// else if (name_alert.value == "") {
//   checkout_btn.onclick = alert ("Tên không thể bỏ trống");

// else {
//   checkout_btn.onclick = alert ("Bạn đã đặt hàng thành công");
// }

let cart = [];
function showData() {
  let mainMenu = document.getElementById("main-menu");
  for (let category of fake_data) {
    let html = `
        <div class="out">
            <h1 id="${category.title}" class="item">${category.title}</h1>
            <div class="flex">`;

    for (let menuItem of category.data) {
      html += `        
                <div class="menu-item">
                    <img class="image" src="${menuItem.image}">
                    <div>
                        <h1 class="name">${menuItem.name}</h1>
                        <h1 class="price">${menuItem.price}</h1>
                        <input type="number" class="number" min="1" max="${menuItem.number}" value="1">
                        <h1 class="buy-now" onclick="addToCart(event)">MUA NGAY</h1>
                    </div>
                </div>`;
    }

    html += `
                </div>
            </div>
        </div>`;
    mainMenu.innerHTML += html;
  }
}

function addToCart(event) {
  let info = event.target.parentNode;
  console.log(info);
  
  let item = {
    name: info.querySelector(".name").innerText,
    price: info.querySelector(".price").innerText,
    number: info.querySelector(".number").value
  };
  cart.push(item);
  console.log(item);
}
showData();

// add to Localstage
function showLocal() {
  localStorage.setItem("key_data", JSON.stringify(fake_data));
  let jsondata = localStorage.getItem("key_data");
  let data_out = JSON.parse(jsondata);
  console.log(data_out);
}
showLocal();
function remove_cart(loop) {
  cart.splice(loop, 1);
  showDataCart();

}

function showDataCart() {
  console.log(cart)
  let itemCart = document.querySelector(".item-cart");
  let html = " ";
  let price_number = 0;
  let loop = 0;
  for (let key of cart) {
    html += `<div class="item">
        <div class="item-name">${key.name}</div>
        <div class="item-number">${key.number}</div>
        <div class="item-price">${key.price}</div>
        <div class="remove" onclick="remove_cart(${loop})">X</div>
    </div>`
    loop++;
    price_number += key.number * key.price;
  } 
  document.getElementById("price-number").innerText = (price_number + parseFloat(document.getElementById("shipping-price").innerText)) + "đ";
  let sum = Number(document.getElementById("price-number").innerText);
  console.log(sum);

  console.log(html);
  itemCart.innerHTML = html;

}



var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close");

for (i = 0; i < span.length; i++) {
  click = span[i];
  click.onclick = function () {
    modal.style.display = "none";
  };
}

// btn.onclick = function () {
//   modal.style.display = "block";
// };
btn.addEventListener("click", function () {
  modal.style.display = "block";
})

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};