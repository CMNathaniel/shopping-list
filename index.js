  
    $('#js-shopping-list-form').on('submit', function(event){
        event.preventDefault();
        const newItem = $('#shopping-list-entry').val();
        $('.shopping-list').append(`<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
        </li>`);
        $('#shopping-list-entry').val('');
        
    });


/*   $("#shoppingForm").on('submit', function(e){
	var text = $('#addToList').val();
  $('#shoppingList').append($('<li>').append(text));
  $('#addToList').val('');
  e.preventDefault();
});

$('#shoppingList').on('dblclick', 'li', function(){
	$(this).remove();
});
        $(event.currentTarget).find('#shopping-list-entry');

        $(".js-display-user-text").text(`user text is:  ${newShoppingItem.val()}`);
        newShoppingItem.val("");

      );
    });
    
    $('ul').on('click', 'li', function(event) {
      this.remove();
    });
  });
  
  //.submit(), preventDefault(), toggleClass() (function that checks each item),
   and closest() (function that deletes, also use remove).

  // allows users to add, check, uncheck, and remove items from a shopping list. 