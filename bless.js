const product=[
    {
        id: 0,
        image: 'pictures/picture12.jpeg',
        title: 'Male- <br> VERSACE',
        price: 12000,  
    },
    {
        id: 1,
        image: 'pictures/picture8.jpeg',
        title: 'Male- <br> 24K',
        price:  13000,  
    },
     {
        id: 2,
        image: 'pictures/picture7.jpeg',
        title: 'Male- <br> VANILLA',
        price: 15000,  
    },
     {
        id: 3,
        image: 'pictures/picture13.jpeg',
        title: 'Male- <br> EXPLORE',
        price: 16000,  
    },
     {
        id: 4,
        image: 'pictures/picture6.jpeg',
        title: 'Male- <br> 9pm',
        price: 18000,  
    },
     {
        id: 5,
        image: 'pictures/picture11.jpeg',
        title: 'Male- <br> BLACK LEATHER',
        price: 20000,  
    },
         {
        id: 6,
        image: 'pictures/picture4.jpeg',
        title: 'Female- <br> YARA',
        price: 12000,  
    },
    {
        id: 7,
        image: 'pictures/picture5.jpeg',
        title: 'Female- <br> DOLCE & DEVOTION',
        price:  13000,  
    },
     {
        id: 8,
        image: 'pictures/picture7.jpeg',
        title: 'Female- <br> VANILLA',
        price: 15000,  
    },
     {
        id: 9,
        image: 'pictures/picture10.jpeg',
        title: 'Female- <br> MON PARIS',
        price: 16000,  
    },
    {
        id: 10,
        image: 'pictures/combo1.jpeg',
        title: 'Female Combo[1]',
        price: 16000,  
    },
    {
        id: 11,
        image: 'pictures/combo2.jpeg',
        title: 'Combo[2]',
        price: 16000,  
    },
    {
        id: 12,
        image: 'pictures/combo3.jpeg',
        title: 'Combo[3]',
        price: 16000,  
    },
    {
        id: 13,
        image: 'pictures/combo4.jpeg',
        title: 'Combo[4]',
        price: 16000,  
    },
    {
        id: 14,
        image: 'pictures/combo5.jpeg',
        title: 'Combo[5]',
        price: 16000,  
    },
    {
        id: 15,
        image: 'pictures/combo6.jpeg',
        title: 'Combo[6]',
        price: 16000,  
    },
    {
        id: 16,
        image: 'pictures/combo7.jpeg',
        title: 'Combo[7]',
        price: 16000,  
    },
    {
        id: 17,
        image: 'pictures/combo8.jpeg',
        title: 'Combo[8]',
        price: 16000,  
    },
    {
        id: 18,
        image: 'pictures/combo9.jpeg',
        title: 'Male Combo[9]',
        price: 16000,  
    },
    {
        id: 19,
        image: 'pictures/combo10.jpeg',
        title: 'Combo[10]',
        price: 16000,  
    },
    {
        id: 20,
        image: 'pictures/combo11.jpeg',
        title: 'Combo[11]',
        price: 16000,  
    },
    {
        id: 21,
        image: 'pictures/combo12.jpeg',
        title: 'Combo[12]',
        price: 16000,  
    },
    {
        id: 22,
        image: 'pictures/combo13.jpeg',
        title: 'Combo[13]',
        price: 16000,  
    },
    {
        id: 23,
        image: 'pictures/combo14.jpeg',
        title: 'Combo[14]',
        price: 16000,  
    },
    {
        id: 24,
        image: 'pictures/combo15.jpeg',
        title: 'Male Combo[15]',
        price: 16000,  
    },
    {
        id: 25,
        image: 'pictures/combo16.jpeg',
        title: 'Combo[16]',
        price: 16000,  
    },
    {
        id: 26,
        image: 'pictures/combo17.jpeg',
        title: 'Male Combo[17]',
        price: 16000,  
    },
    {
        id: 27,
        image: 'pictures/combo18.jpeg',
        title: 'Combo[18]',
        price: 16000,  
    },
    {
        id: 28,
        image: 'pictures/combo19.jpeg',
        title: 'Combo[19]',
        price: 16000,  
    },
    {
        id: 29,
        image: 'pictures/combo20.jpeg',
        title: 'Combo[20]',
        price: 16000,  
    },
    {
        id: 30,
        image: 'pictures/combo21.jpeg',
        title: 'Combo[21]',
        price: 16000,  
    },
    {
        id: 31,
        image: 'pictures/combo22.jpeg',
        title: 'Combo[22]',
        price: 16000,  
    },
    {
        id: 32,
        image: 'pictures/combo23.jpeg',
        title: 'Male Combo[23]',
        price: 16000,  
    },
    {
        id: 33,
        image: 'pictures/combo24.jpeg',
        title: 'Combo[24]',
        price: 16000,  
    },
    {
        id: 34,
        image: 'pictures/combo25.jpeg',
        title: 'Combo[25]',
        price: 16000,  
    },
    {
        id: 35,
        image: 'pictures/combo26.jpeg',
        title: 'Combo[26]',
        price: 16000,  
    },
    {
        id: 36,
        image: 'pictures/combo27.jpeg',
        title: 'Combo[27]',
        price: 16000,  
    },
    {
        id: 37,
        image: 'pictures/combo28.jpeg',
        title: 'Combo[28]',
        price: 16000,  
    },
    {
        id: 38,
        image: 'pictures/combo29.jpeg',
        title: 'Combo[29]',
        price: 16000,  
    },
    {
        id: 39,
        image: 'pictures/combo30.jpeg',
        title: 'Combo[30]',
        price: 16000,  
    },
    {
        id: 40,
        image: 'pictures/combo31.jpeg',
        title: 'Combo[31]',
        price: 16000,  
    },
    {
        id: 41,
        image: 'pictures/combo32.jpeg',
        title: 'Male Combo[32]',
        price: 16000,  
    },
]

const categories = [...new Set(product.map((item)=> {return item}))    
]
let i=0;

document.getElementById('searchBar').addEventListener('keyup', (e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=> {
        return(
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});

const displayItem = (item)=> {
    document.getElementById('root').innerHTML=item.map((item)=>{
        var {image, title, price} = item;
        return(
            `<div class='box'>
              <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
              <p>${title}</p>
              <h2>₦ ${price}.00</h2>`+
              "<button onclick = 'addtocart("+(i++)+")'>Add to cart</button>"+
              `</div>
        </div>`
              
        )
    }).join('')
};

    var cart = [];


    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }

    function delElement(a){
        cart.splice(a, 1);
        displaycart();
    }

    function displaycart(){
        let j = 0, total=0;
        document.getElementById('count').innerHTML=cart.length;
        if(cart.length==0){
            document.getElementById('cartitem').innerHTML = "Your cart is empty";
            document.getElementById('total').innerHTML = "₦ "+0+".00";
            return;
        }
        else{
            document.getElementById('cartitem').innerHTML = cart.map((item)=>
            {
                var {image, title, price} = item;
                total=total+price;
                document.getElementById('total').innerHTML = "₦ " +total+".00";
                return(
                    `<div class = 'cart-item'>
                     <div class = 'row-img'>
                      <img class='rowing' src=${image}>
                    </div>
                    <p style='font-size:10px;'>${title}</p>
                    <h2 style='font-size: 12px;'>₦ ${price}.00</h2>`+
                    "<img class='trash' src='trash.svg' onclick='delElement("+ (j++) +")'></img></div>"
                );

            }).join('');
        }
        
    }
    

    function whatsapp(){
        var name = document.getElementById('name').value;
        var mobile = document.getElementById('mobile').value;
        var email = document.getElementById('email').value;

        var cart = [];
       document.querySelectorAll('.cart-item p').forEach(function(item){
            cart.push(item.innerText);
       });
         var total = document.getElementById('total').innerText;
            total = total.replace("₦ ", "");
        if(cart.length == 0){
            alert("Your cart is empty");
            return;
        }
        if(name.length==0 || mobile.length==0 || email.length==0){
            alert("Please fill in your details");
            return;
        }
        if(mobile.length !== 11){
            alert("Please enter a valid mobile number");
            return;
        }
        if(!email.includes('@') || !email.includes('.')){
            alert("Please enter a valid email address");
            return;
        }
        


        
        console.log(name, mobile, email, cart);
        alert("Your order has been placed successfully. You will be contacted soon.");


        

        let whatsappurl = "https://api.whatsapp.com/send?phone=2349067103251&text="
        + "Hello, I would like to place an order" + "%0a"
        + "======Order Details======%0a"
        + "Cart :  " + cart.join("%0a") + "%0a"
        + "=============%0a"
        + "Total Amount : ₦" + total + "%0a"
        + "=====Contact Details=====%0a"
        + "Name of Customer : " + name + "%0a"
        + "Mobile No. : " + mobile + "%0a"
        + "Email ID : " + email + "%0a";

        

        window.open(whatsappurl, '_blank').focus();

        

    }




displayItem(categories);