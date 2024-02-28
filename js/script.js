'use strict'

import { cardUser, cardProduct } from "../component/card.js";
import { getProduct } from "../store/fetchApi.js";

// create const for select product by id
const productArea = document.querySelector("#render-product");
const products = await getProduct("products");

// create const for select user by 
const userArea = document.querySelector("#render-user");
const users = await getProduct("users")

async function rendering(data, renderArea, card) {
    try {
        data.forEach(product => {
            renderArea.innerHTML += card(product);
        });
    } catch (error) {
        console.error("Error rendering products:", error);
    }
}

// Call the function to render products
rendering(products, productArea, cardProduct);
//call the function to render users
rendering(users, userArea, cardUser)