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
    { name:"رژگونه" ,
      color:"صورتی",
      price: 765000  ,
      category:"makeup",
      type:"blush",
      image:"images/c.1.jpg"
    
    }        
]