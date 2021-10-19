function newItem() {
//function to add a list item
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    }   else {
        $('#list').append(li);
    }


//function to crossout a listitem
function crossOut() {
    li.toggleClass('strike');
}

 li.on('dblclick',function crossOut() {
    li.toggleClass('strike');
 });

 //adding the option to delete
 let crossOutButton = $('<crossOutButton></crossOutButton>');
 crossOutButton.append(document.createTextNode('X'));
 li.append(crossOutButton);

 crossOutButton.on('click', deleteListItem);
 function deleteListItem() {
     li.addClass('delete')
 }
 $('#list').sortable();
}