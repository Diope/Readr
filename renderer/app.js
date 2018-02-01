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
    console.log(newItemURL);
  }
})