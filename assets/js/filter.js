$("select#author-filter").change(function() {
  var authorClass = $('select#author-filter').val();
  console.log(authorClass);

  $('div#books-container').find('div#book').filter(function () {
    return ($(this).attr('data-author') != authorClass || authorClass == "None");
  }).fadeOut('fast');

  $('div#books-container').find('div#book').filter(function () {
    return ($(this).attr('data-author') == authorClass || authorClass == "None");
  }).fadeIn('fast');

  $('div#filter-bar').find('a#resetLink').show();
});

function resetFilters() {
    $("select").each(function() { this.selectedIndex = 0 });
    $('div#filter-bar').find('a#resetLink').hide();
    location.reload();
}
