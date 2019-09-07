var itemsList = document.getElementById('boxItems');
// var changeItem = itemsList.value;
var stock = [];

var bread = {
    name: 'Breads',
    itemQuantity: 0
};

var bagels = {
    name: 'Bagels',
    itemQuantity: 0
};

var buns = {
    name: 'Buns',
    itemQuantity: 0
};

var brownies = {
    name: 'Brownies',
    itemQuantity: 0
};

var cakes = {
    name: 'Cakes',
    itemQuantity: 0
};

var cupCakes = {
    name: 'Cup-Cakes',
    itemQuantity: 0
};

var pastries = {
    name: 'Pastries',
    itemQuantity: 0
};

var tarts = {
    name: 'Tarts',
    itemQuantity: 0
};

var vegPuffs = {
    name: 'Veg-Puffs',
    itemQuantity: 0
};

var eggPuffs = {
    name: 'Egg-Puffs',
    itemQuantity: 0
};

stock = [bread, bagels, buns, brownies, cakes, cupCakes, pastries, tarts, vegPuffs, eggPuffs];

function addItem() {
    clearScreen();

    var changeItem = itemsList.value;
    var quantity = Number(document.getElementById('itemQuantity').value);

    for (i = 0; i < stock.length; i++) {

        if (stock[i].name == changeItem) {
            stock[i].itemQuantity = stock[i].itemQuantity + quantity; 

            var displayItemsDiv = document.getElementById('displayItems');
            var itemToDisplay = document.createElement('li');
            displayItemsDiv.appendChild(itemToDisplay);
            itemToDisplay.innerHTML = quantity + ' ' + stock[i].name + ' ' + 'were added to the stock!';
        }
    }
}

function removeItem() {
    clearScreen();

    var changeItem = itemsList.value;
    var quantity = Number(document.getElementById('itemQuantity').value);

    for (i = 0; i < stock.length; i++) {

        if (stock[i].name == changeItem) {
            if (stock[i].itemQuantity >= quantity) {
            stock[i].itemQuantity = stock[i].itemQuantity - quantity; 

            var displayItemsDiv = document.getElementById('displayItems');
            var itemToDisplay = document.createElement('li');

            displayItemsDiv.appendChild(itemToDisplay);
            itemToDisplay.innerHTML = quantity + ' ' + stock[i].name + ' ' + 'were removed from the stock!';
            } else {
                var displayItemsDiv = document.getElementById('displayItems');
                var itemToDisplay = document.createElement('li');
                displayItemsDiv.appendChild(itemToDisplay);
                // itemToDisplay.innerHTML = 'Quantity to remove is more than the existing stock: ' + quantity + ' ' + stock[i].name;
                itemToDisplay.innerHTML = 'Quantity to remove is more than the existing stock: ' + stock[i].itemQuantity + ' ' + stock[i].name;
            }
        }
    }
}

function checkStock() {
    clearScreen();
    var displayItemsDiv = document.getElementById('displayItems');
    
    for (i = 0; i < stock.length; i++) {
        var itemToDisplay = document.createElement('li');
        displayItemsDiv.appendChild(itemToDisplay);

        if (stock[i].itemQuantity > 4) {
            itemToDisplay.innerHTML = 'There are ' + stock[i].itemQuantity + ' ' + stock[i].name + ' in the stock';
        } else if (stock[i].itemQuantity <= 4) {
            itemToDisplay.innerHTML = 'There are only ' + stock[i].itemQuantity + ' ' + stock[i].name + ' in the stock! Please restock!';
            itemToDisplay.setAttribute('class', 'runningLow');
        }
    }    
}

function clearScreen () {
    var displayItemsDiv = document.getElementById('displayItems');
    var listItems = displayItemsDiv.querySelectorAll('li');
    
    for (i = 0; i < listItems.length; i++) {
        displayItemsDiv.removeChild(listItems[i]);
    }
}