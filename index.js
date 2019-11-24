  
// this allows users to add new items to the shopping list //
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
        console.log('add an item');
    });

// this allows users to delete items from the shopping list //
$(document).on('click', '.shopping-item-delete', function(event) {
    event.preventDefault();
    $(this).closest('li').remove();
    console.log('delete an item');
     });  

// this allows users to check off items or uncheck already checked off items from the shopping list//
$(document).on('click', '.shopping-item-toggle', function(event){
    event.preventDefault();
    $(this).closest('li').find('.shopping-item').toggleClass("shopping-item__checked");
    console.log('check and uncheck an item');
    });


