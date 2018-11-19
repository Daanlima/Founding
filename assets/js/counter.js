var itemCount = 0;
var priceTotal = 0;

  // adicionando item ao card
  $('.add').click(function (){
  itemCount ++;

  $('#itemCount').text(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<a href="#" class="btn btn-default btn-lg removeItem">Remover Item <span class="ti-arrow-right"></span> </a>');

  // calculando preço
  var price = parseInt($(this).siblings().find('.price').text());
  priceTotal += price;
  $('#cartTotal').text("Total: R$" + priceTotal);
  });



  // mostra/oculta card
  $('.openCloseCart').click(function(){
  $('#shoppingCart').toggle();
  });


  // esvaziar carrinho
  $('#emptyCart').click(function() {
  itemCount = 0;
  priceTotal = 0;

  $('#itemCount').css('display', 'none');
  $('#cartItems').text('');
  $('#cartTotal').text("Total: R$" + priceTotal);
  });



  // removar item do card
  $('#shoppingCart').on('click', '.removeItem', function(){
  $(this).parent().remove();
  itemCount --;
  $('#itemCount').text(itemCount);

  // remover e recalcular
  var price = parseInt($(this).siblings().find('.price').text());
  priceTotal -= price;
  $('#cartTotal').text("Total: R$" + priceTotal);

  if (itemCount == 0) {
  $('#itemCount').css('display', 'none');
  }
  });
