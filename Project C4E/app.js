function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); 
}

let name_alert = document.querySelector(".checkout-name");
let number_alert = document.querySelector(".checkout-number");
let address_alert = document.querySelector(".checkout-address");
let checkout_btn = document.getElementById("checkout-button");

let cash = document.getElementById("cash-pay");
let bank = document.getElementById("atm-pay");
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
  if (cash.checked == true) {
    alert("Bạn đã đặt hàng thành công");
    location.reload();
  }
  else if (bank.checked == true) {
    window.open ("https://portal.vietcombank.com.vn/Pages/Home.aspx");
  }
  else if (momo.checked == true) {
    window.open ("https://momo.vn/");
  }
  else if (airpay.checked == true) {
    window.open ("https://www.airpay.vn/khuyen-mai/");
  }
  else if (visa.checked == true) {
    window.open ("https://www.visa.com.vn/");
  }
  else {
    alert("Bạn phải chọn phương thức thanh toán");
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
  }
});

let cart = [];
function showData() {
  let mainMenu = document.getElementById("main-menu");
  for (let category of fake_data) {
    let html = `
        <div class="out">
            <h1 id="${category.title}" class="item">${category.title}</h1>
            <span id="border-btm"></span>
            <div class="flex">`;

    for (let menuItem of category.data) {
      html += `        
                <div class="menu-item">
                    <img class="image" src="${menuItem.image}" alt="${menuItem.name}">
                    <div>
                        <h1 class="name h3-color margin">${menuItem.name}</h1>
                        <h1 class="price">${menuItem.price} Đ</h1>
                        <input type="number" class="number" min="1" max="${menuItem.number}" value="1"><br>
                        <h1 class="buy-now hvr-sweep-to-right" onclick="addToCart(event)">MUA NGAY</h1>
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
function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
};
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// };
function enlargeImage() {
  document.getElementById("img1").src = this.src;
  // document.getElementById("caption").innerHTML = this.alt;
  document.getElementById('myModal2').style.display = "block";
}
(function() {
  var images = document.getElementsByClassName("image");

  for (i = 0; i < images.length; i++) {
    images[i].onclick = enlargeImage;
  }
})();
let modal2 = document.getElementById('myModal2');
var span3 = document.getElementsByClassName("close3")[0];

span3.onclick = function() { 
  modal2.style.display = "none";
}