
myCard = {
    poster: "Poster.png",
    type: "BlueRay.png",
    sale:"discont.png",
    title1:"Тайная жизнь",
    title2:"домашних животных 2",
    price: 50,
    sale_percent: 10,
    currency:"руб.",
    rating: 3.5,
    button:"button.png",
    promotion: true,
}


// Формат полной стоимости

let fullPrice = `${myCard.price},00 ${myCard.currency}`;  //50,00 руб

console.log(fullPrice);

let salePrice = `${Math.round(myCard.price-myCard.price*(myCard.sale_percent/100))},00 ${myCard.currency}`; // -10%

console.log(salePrice);

//  Вывод акции
let op = 0;
if (myCard.promotion) {
    myDivPrice = `
    <div>${salePrice}</div>
    <div>${myCard.price},00 ${myCard.currency}</div>
    `;
    op = 1;
    }
else myDivPrice = `<div>${myCard.price},00 ${myCard.currency}</div>`;


// Расчет рейтинга
let rank = "";
    if (myCard.rating < 1 || myCard.rating > 5) {
        rank = "star_border star_border star_border star_border star_border"; 
    }else if (myCard.rating == 0.5) {
        rank = "star_half star_border star_border star_border star_border";
    }else if (myCard.rating == 1) {
        rank = "star star_border star_border star_border star_border";
    }else if (myCard.rating == 1.5) {
        rank = "star star_half star_border star_border star_border";
    }else if (myCard.rating == 2) {
        rank = "star star star_border star_border star_border";
    }else if (myCard.rating == 2.5) {
        rank = "star star star_half star_border star_border";
    }else if (myCard.rating == 3) {
        rank = "star star star star_border star_border";
    }else if (myCard.rating == 3.5) {
        rank = "star star star star_half star_border";
    }else if (myCard.rating == 4) {
        rank = "star star star star star_border";
    }else if (myCard.rating == 4.5) {
        rank = "star star star star star_half ";
    }else if (myCard.rating == 5) {
        rank = "star star star star star";
    };

    console.log(rank);



    let s = `
            <div class="card">
                <div class="poster">
                    <img src="images/${myCard.poster}" alt="">
                    <img style="opacity:${op}"src="images/${myCard.sale}" alt="">
                    <img src="images/${myCard.type}" alt="">
                </div>
                <div class="title">
                    <div>${myCard.title1}</div>
                    <div>${myCard.title2}</div>
                
                </div>
                <div class="price">
                    ${myDivPrice}
                </div>
                <div class="rating">
                    <span class="material-icons">
                    ${rank}
                    </span>
                </div>
                <div class="order">
                    <img src="images/${myCard.button}" alt="">
                </div>
            </div>`

    cards.innerHTML = s;


                    // <div>${salePrice}</div>
                    // <div>${myCard.price},00 ${myCard.currency}</div>