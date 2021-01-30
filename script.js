function handleProduct(Product,isIncrease) {
    const ProductInput = document.getElementById(Product +'-count');
    const ProductCount = getInput(Product);
    let ProductNewCount = ProductCount;
    if(isIncrease == true){
       ProductNewCount = ProductCount + 1;
    }
    if(isIncrease == false && ProductNewCount > 0){
       ProductNewCount = ProductCount - 1;
    }
    ProductInput.value = ProductNewCount;
    let ProductTotal = 0;
    if(Product == 'phone'){
       ProductTotal = ProductNewCount * 1219;
    }
    if(Product == 'case'){
       ProductTotal = ProductNewCount * 59;
    }
    document.getElementById(Product +'-total').innerText = '$' + ProductTotal;
        calculateTotal();
 }
    function calculateTotal() {
       const phoneCount = getInput('phone');
       const caseCount = getInput('case');
       
       const totalPrice = phoneCount * 1219 + caseCount * 59;
       document.getElementById('total-price').innerText = '$' + totalPrice;

       const tax = Math.round(totalPrice * 0.1);
       document.getElementById("tax-amount").innerText = '$' + tax;

       const finalTotal = totalPrice + tax;
       document.getElementById("final-total").innerText = '$' +  finalTotal;
    }
    function getInput(Product) {
       const ProductInput = document.getElementById(Product + '-count');
       const ProductCount = parseInt(ProductInput.value);
       return ProductCount;
    }