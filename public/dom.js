$(document).ready( function () {
  $('#btn-go').click((event) => {
    $.ajax({
      url: '/tablename/2',
      type: 'GET',
      data: $(this).serialize(),
      success: (data) => {
        console.log(data)
        // UPDATE DOM!
        $('doohickey').append(data)
      },
      error: function(jqXhr, textStatus, errorThrown) {
        console.log('OOPS:', errorThrown)
      }
    })
  })
})