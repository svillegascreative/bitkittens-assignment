$(document).ready(function() {

  var catIndex = 0;

  $('.summon-cats').on('click', function() {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      data: { number: 9}
    }).done(function(catData) {
      var catList = catData.cats;
      var cat = catList[catIndex];
      var catDivNumber = (catIndex + 1).toString();

      $('<img>').attr('src', cat.photo)
                .attr('alt', 'Photo of ' + cat.name)
                .appendTo('#cat' + catDivNumber );
      catIndex++;
    });
  });

});
