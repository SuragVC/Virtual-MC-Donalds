let form = document.querySelector("form").addEventListener("submit", formSubmit)
let value;
let item;
order_image = document.querySelector("#image_div")
c = document.querySelector("#conformation")
coco = document.createElement("img")
coco.src = "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Coca-Cola-Classic-Small-1:1-4-product-tile-desktop"
result = document.querySelector("#result")
let result_h2 = document.createElement("h2")


function formSubmit(e) {

    event.preventDefault()
    order_image.innerHTML = ""
    result.innerHTML = null
    Image1 = document.createElement("img")
    Image1.src = "https://i.redd.it/285f6fitz8b01.png"
    order_image.append(Image1)
    if (document.querySelector("#sandwitch").checked == true) {
        value = true
        item = "Sandwitch"
        toPromise(value, item)
    } else if (document.querySelector("#Burger").checked == true) {
        value = true
        item = "Burger"
        toPromise(value, item)
    } else if (document.querySelector("#Egg").checked == true) {
        value = true
        item = "Egg MC Muffin"
        toPromise(value, item)
    } else if (document.querySelector("#Crispy_Chicken").checked == true) {
        value = true
        item = "Crispy Chicken"
        toPromise(value, item)
    } else if (document.querySelector("#chock").checked == true) {
        value = true
        item = "Chocolately Pretzel McFlurry"
        toPromise(value, item)
    } else {
        value = false
        toPromise(value)
    }

}

function toPromise() {

    let My_promise = new Promise(function(resolve, reject) {

        let time = (Math.random() * 1000)
        if (value) {
            setTimeout(function() {
                resolve()
            }, time)
        } else {
            order_image.innerHTML = null
            Image2 = document.createElement("img")
            Image2.src = "https://www.khanhecom.com/wp-content/uploads/2017/03/ALIEXPRESS-DROPSHIPPING-LA%CC%80M-GI%CC%80-KHI-KHA%CC%81CH-HUY%CC%89-%C4%90O%CC%9BN-%C4%90A%CC%A3%CC%86T-HA%CC%80NG.jpeg"
            order_image.append(Image2)
            reject("Sorry")
            sorry = document.createElement("h1")
            sorry.innerText = "Sorry Your order can't be placed"
            sorry.style.color = "red"
            result.append(sorry)
        }

    })
    My_promise.then(function(res) {

        let order_id = Math.floor(Math.random() * 10000)
        let order_p = document.createElement("p")
        order_p.innerText = ("Your order ID : " + order_id)
        order_p.style.color = "red"
        order_image.innerHTML = null
        c.innerHTML = null

        if (item == "Sandwitch") {

            sandwitch = document.createElement("img")
            sandwitch.src = "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-spicy-deluxe-crispy-chicken-sandwich:1-4-product-tile-desktop"
            order_image.append(sandwitch)
            c.append(coco)
            result_h2.innerText = ("Your " + item + " is here" + "\n" + "Have a free Drink")
            result_h2.style.color = "orange"
            result.append(result_h2, order_p)


        }
        if (item == "Burger") {

            Burger = document.createElement("img")
            Burger.src = "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:1-4-product-tile-desktop"
            order_image.append(Burger)
            c.append(coco)
            result_h2.innerText = ("Your " + item + " is here" + "\n" + "Have a free Drink")
            result_h2.style.color = "orange"
            result.append(result_h2, order_p)
        }
        if (item == "Egg MC Muffin") {


            Egg1 = document.createElement("img")
            Egg1.src = "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Egg-McMuffin-1:1-4-product-tile-desktop"
            order_image.append(Egg1)
            c.append(coco)
            result_h2.innerText = ("Your " + item + " is here" + "\n" + "Have a free Drink")
            result_h2.style.color = "orange"
            result.append(result_h2, order_p)
        }
        if (item == "Crispy Chicken") {

            Crispy_Chicken = document.createElement("img")
            Crispy_Chicken.src = "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-spicy-crispy-chicken-sandwich:1-4-product-tile-desktop"
            order_image.append(Crispy_Chicken)
            c.append(coco)
            result_h2.innerText = ("Your " + item + " is here" + "\n" + "Have a free Drink")
            result_h2.style.color = "orange"
            result.append(result_h2, order_p)
        }
        if (item == "Chocolately Pretzel McFlurry") {


            chock = document.createElement("img")
            chock.src = "https://s7d1.scene7.com/is/image/mcdonalds/Header_ChocolatePretzelMcFlurry_v8_832x472:1-4-product-tile-desktop"
            order_image.append(chock)
            cookie = document.createElement("img")
            cookie.src = "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Chocolate-Chip-Cookie-mcd:1-4-product-tile-desktop"
            c.append(cookie)
            result_h2.innerText = ("Your " + item + " is here" + "\n" + "Have a free Cookie")
            result_h2.style.color = "orange"
            result.append(result_h2, order_p)
        }
    })

}