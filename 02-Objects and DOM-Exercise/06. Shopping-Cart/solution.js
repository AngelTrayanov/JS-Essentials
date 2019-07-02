function solve() {

      function addProduct(i) {
         let productName = document.getElementsByClassName('product-title')[i].textContent;
         if (!purchasedProducts.includes(productName)) {
            purchasedProducts.push(productName);
         }

         let productPrice = +document.getElementsByClassName('product-line-price')[i].textContent;
         totalCost += productPrice;

         toPrint += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
         let textArea = document.getElementsByTagName('textarea')[0];
         textArea.value = toPrint;
      }

      function checkout() {
         toPrint += `You bought ${purchasedProducts.join(', ')} for ${totalCost.toFixed(2)}.`;
         let textArea = document.getElementsByTagName('textarea')[0];
         textArea.value = toPrint;

         for (let button of buttons) {
            button.disabled = true;
        }
      }

      let buttons = document.getElementsByTagName('button'); // collection of four, last one is checkout
      let purchasedProducts = [];
      let totalCost = 0;
      let toPrint = '';

      for (let i = 0; i < buttons.length - 1; i++) {
         
         buttons[i].addEventListener('click', function () {
            addProduct(i);
         }, false);
         
      }

      let checkoutBtn = document.getElementsByClassName('checkout')[0];
      checkoutBtn.addEventListener('click', checkout);

}