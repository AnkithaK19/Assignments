'use strict';
(function () {

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    let toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getToBuyItems();
    toBuy.addBoughtItem = function(name,qtty) {
      ShoppingListCheckOffService.addBoughtItem(name,qtty);
    }
    toBuy.removeToBuyItem = function(index) {
      ShoppingListCheckOffService.removeToBuyItem(index);
    }

    toBuy.isEmpty = function() {
      return toBuy.items.length == 0;
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    let bought = this;
    bought.items = ShoppingListCheckOffService.getBoughtItems();

    bought.isEmpty = function() {
      return bought.items.length == 0;
    }
  }

  function ShoppingListCheckOffService() {
    let service = this;

    //List to Buy items
    let toBuyItems = [
        { name: "cookies", quantity: 9 },
        { name: "Carrots", quantity: 10 },
        { name: "Mango", quantity: 5 },
        { name: "Potato", quantity: 7 },
        { name: "Cheese cake", quantity: 25 }
    ];

    //List Bought items
    let boughtItems = [];

    service.addBoughtItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      boughtItems.push(item);
    };

    service.removeToBuyItem = function (itemIdex) {
      toBuyItems.splice(itemIdex, 1);
    };

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };
  };
})();
