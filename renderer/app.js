const {ipcRenderer} = require('electron');
const items = require('./items');

// Show the add modal
$('.open-add-modal').click(() => {
  $('#add-modal').addClass('is-active');
});
// Hide the close modal
$('.close-add-modal').click(() => {
  $('#add-modal').removeClass('is-active');
});

// Add modal submission
$('#add-button').click(() => {
  let newItemURL = $('#item-input').val();
  if (newItemURL) {
    $('#item-input').prop('disabled', true);
    $('#add-button').addClass('is-loading');
    $('.close-add-modal').addClass('is-disabled');

    ipcRenderer.send('new-item', newItemURL);
  }
})

$('#item-input').keyup((e) => {
  if (e.key === 'Enter') $('#add-button').click();
})

ipcRenderer.on('new-item-success', (e, item) => {

  // Add to array
  items.toReadItems.push(item);

  // Save Item

  items.saveItems();

  // Add item
  items.addItem(item)

  $('#add-modal').removeClass('is-active');
  $('#item-input').prop('disabled', false).val('');
  $('#add-button').removeClass('is-loading');
  $('.close-add-modal').removeClass('is-disabled');
})

// Add items when app loads
if(items.toReadItems.length)
  items.toReadItems.forEach(items.addItem)