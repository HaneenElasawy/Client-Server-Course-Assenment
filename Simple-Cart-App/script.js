//Simple Cart App 
var allitems = document.querySelectorAll(".list li"); //queryselectorAll >> get element from dom and store in array 
var content = document.querySelector('#content');
var btn = document.querySelector("#addToCart");
var totalPrice = 0;

allitems.forEach(function(item) {  //foreach 
    item.onclick = function(){
        totalPrice += parseInt(item.getAttribute("price"));
        content.innerHTML += item.textContent + " "; //textContent >> to get element text 
        if(content.innerHTML != " "){
            btn.style.display = "block";
        }
    };
});
btn,onclick = function (){
    this.alert("Total Price = " + totalPrice);
};