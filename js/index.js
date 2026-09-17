const filterForm = document .querySelector("#filterForm")
const categoryCheckboxes = document .querySelectorAll('[name="category"]')
const typeCheckboxes = document .querySelectorAll('[name="type"]')
const minPriceInput = document .querySelector("#minPriceFilter")
const maxPriceInput = document .querySelector("#maxPriceFilter")
const priceRangeInput = document .querySelector(".priceRange")
const applyFilterBtn = document .querySelector("#applyFilterBtn")
const productListContainer = document .querySelector("#productList")

const products = [
    { name:"رژ لب" ,
      color:"صورتی رز",
      price: 1089000  ,
      category:"makeup",
      type:"lipstick",
      image:"images/a.1.jpg"
    
    }
    ,
    { name:"رژ لب" ,
      color:"صورتی ",
      price: 265000  ,
      category:"makeup",
      type:"lipstick",
      image:"images/b.1.jpg"
    
    }
    ,

    { name:"کرم زیر چشم" ,
      color:"کاهش تیرگی و آبرسانی",
      price: 1265000  ,
      category:"hygiene",
      type:"eye-cream",
      image:"images/g.1.jpg"
    
    }       
    ,
    { name:"رژگونه" ,
      color:"صورتی ",
      price: 565000  ,
      category:"makeup",
      type:"blush",
      image:"images/d.1.jpg"
    
    }
    ,
    { name:"رژ لب" ,
      color:"نود هلویی",
      price: 995000  ,
      category:"makeup",
      type:"lipstick",
      image:"images/a.2.jpg"
    
    }
    ,

    { name:"ریمل" ,
      color:"مشکی",
      price: 1225000  ,
      category:"makeup",
      type:"mascara",
      image:"images/f.1.jpg"
    
    }    
    ,
    { name:"نرم کننده دست" ,
      color:"آلوئه‌ورا",
      price: 565000  ,
      category:"hygiene",
      type:"cream",
      image:"images/h.1.jpg"
    
    }       
    ,
    { name:"ریمل" ,
      color:"مشکی ",
      price: 925000  ,
      category:"makeup",
      type:"mascara",
      image:"images/f.2.jpg"
    
    }      
    ,

    { name:"رژگونه" ,
      color:"هلویی",
      price: 665000  ,
      category:"makeup",
      type:"blush",
      image:"images/d.2.jpg"
    
    }   
    ,
    { name:"نرم کننده صورت" ,
      color:"پوست خشک و نرمال",
      price: 756000  ,
      category:"hygiene",
      type:"cream",
      image:"images/h.2.jpg"
    
    }          
    ,
    { name:"رژگونه" ,
      color:"صورتی",
      price: 765000  ,
      category:"makeup",
      type:"blush",
      image:"images/c.1.jpg"
    
    }   
    ,
    { name:"ماسک مو" ,
      color:"موهای خشک و اسیب دیده",
      price: 1256000  ,
      category:"hygiene",
      type:"hair-mask",
      image:"images/i.1.jpg"
    
    }     
    ,
    { name:"اسکراب بدن" ,
      color:"وانیل و نارگیل",
      price: 956000  ,
      category:"hygiene",
      type:"body-scrub",
      image:"images/i.2.jpg"
    
    }     
    
   
]

function renderProducts (productsArray) {
    productListContainer.innerHTML ="";

    if(productsArray.length === 0){
        productListContainer.innerHTML = "<p class='no-results'>محصول مورد نظر یافت نشد</p>";
         return;
    }
        

    productsArray.forEach(function(product) {
        const card = document.createElement("article");
        card.classList.add("product-card");

        card.innerHTML = `
        <img class="product-image" src="${product.image}" alt="${product.name}">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-color">${product.color}</p>
        <span class="product-price">قیمت: ${product.price.toLocaleString("fa-IR")} تومان</span>
        <button class="add-to-cart-btn">افزودن به سبد</button>
        `;

        productListContainer.appendChild(card);
    });



};

function getSelectedFilters(){
    const selectedCategories = Array.from(categoryCheckboxes)

    .filter(function(checkbox) {
    return checkbox.checked;
    })

    .map(function(checkbox) {
    return checkbox.value;
    });


    const selectedTypes = Array.from(typeCheckboxes)

    .filter(function(checkbox) {
    return checkbox.checked;
    })

    .map(function(checkbox) {
    return checkbox.value;
    });

    const minPrice = Number(minPriceInput.value);
    const maxPrice = Number(maxPriceInput.value);

    return {
       categories: selectedCategories,
       types: selectedTypes,
       minPrice: minPrice,
       maxPrice: maxPrice
    };


 
}

function filterProducts(productsArray, filters) {

    return productsArray.filter(function(product) {
       const categoryMatch = filters.categories.length === 0 || filters.categories.includes(product.category);
       const typeMatch = filters.types.length === 0 || filters.types.includes(product.type);
       const priceMatch = product.price >= filters.minPrice && (filters.maxPrice === 0 || product.price <= filters.maxPrice);

       return categoryMatch && typeMatch && priceMatch;

    });

}

applyFilterBtn.addEventListener("click", function(event) {

    event.preventDefault();
    const filters = getSelectedFilters();
    const filtered = filterProducts(products, filters);
    renderProducts(filtered);

});


priceRangeInput.addEventListener("input", function() {
    maxPriceInput.value = priceRangeInput.value;

});
    

renderProducts(products);
