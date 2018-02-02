exports.toReadItems = JSON.parse(localStorage.getItem('toReadItems')) || [];

// Save items to local storage
exports.saveItems = () => {
  localStorage.setItem('toReadItems', JSON.stringify(this.toReadItems))
}

exports.selectItem = (e) => {
  $('.read-item').removeClass('is-active');
  $(e.currentTarget).addClass('is-active');
}

exports.addItem = (item) => {
  // Hide no items
  $('#no-items').hide();

  let itemHTML = `<a class="panel-block read-item">
                    <figure class="image has-shadow is-64x64 thumb">
                      <img src="${item.screenshot}">
                    </figure>
                    <h2 class="title is-4 column">${item.title}</h2>
                  </a>`

//append
  $('#read-list').append(itemHTML);

  $('.read-item').off('click').on('click', this.selectItem)
}