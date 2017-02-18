$(document).ready(function() {

  var catIndex = 0;

  $('.summon-cats').on('click', function() {
    $('.catbook').removeClass('hidden');

    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      data: { number: 9}
    }).done(function(catData) {
      var catList = catData.cats;
      var cat = catList[catIndex];

      $('<img>').attr('src', cat.photo)
                .attr('alt', 'Photo of ' + cat.name)
                .appendTo('#cat' + catIndex );
      catIndex++;

      $('<li>').text(cat.name).appendTo('.catbook');

      if (catIndex === 8) {
        disableButton();
      };
    });
  });

  function disableButton() {
    $('.summon-cats').attr('disabled', 'disabled')
                     .text("Okayyy, that's enough cats for today")
                     .css('background-color', '#ccc');
  }

});
