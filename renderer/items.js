exports.toReadItems = JSON.parse(localStorage.getItem('toReadItems')) || [];

// Save items to local storage
exports.saveItems = () => {
  localStorage.setItem('toReadItems', JSON.stringify(this.toReadItems))
}

exports.selectItem = (e) => {
  $('.read-item').removeClass('is-active');
  $(e.currentTarget).addClass('is-active');
}

exports.changeItem = (direction) => {
  let activeItem = $('read-item.is-active');

  let newItem = (direction === 'down') ? activeItem.next('.read-item') : activeItem.prev('.read-item')

  if (newItem.length) {
    activeItem.removeClass('is-active');
    newItem.addClass('is-active');
  }
}


exports.addItem = (item) => {
  // Hide no items
  $('#no-items').hide();

  let itemHTML = `<a class="panel-block read-item" data-url="${item.url}">
                    <figure class="image has-shadow is-64x64 thumb">
                      <img src="${item.screenshot}">
                    </figure>
                    <h2 class="title is-4 column">${item.title}</h2>
                  </a>`

//append
  $('#read-list').append(itemHTML);

  $('.read-item')
    .off('click, dblclick')
    .on('click', this.selectItem)
    .on('dblclick', this.openItem)
}

exports.changeItem = (direction) => {
  let activeItem = $('.read-item.is-active')

  // Need check direction and get the next or prev item
  let newItem = (direction === 'down') ? activeItem.next('.read-item') : activeItem.prev('.read-item')

  if (newItem.length) {
    activeItem.removeClass('is-active')
    newItem.addClass('is-active')
  }
}

// Stack Overflow, you save lives T___T
exports.openItem = () => {

  if (!this.toReadItems.length) return

  // Get the selected item
  let targetItem = $('.read-item.is-active')

  let contentURL = targetItem.data('url')

  console.log('Opening ze itemz!');
  console.log(contentURL);

}