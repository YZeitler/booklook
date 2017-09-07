$('.button').click(fetch);


function fetch() {
    var $isbnVal = $('#ISBN-number').val();
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=intitle:' + $isbnVal,
        success: function(data) {
            console.log(data);
            $('.book-info').empty();

            var source = $('#store-template').html();
            var template = Handlebars.compile(source);

            for (i = 0; i < data.items.length && i < 11; i++) {
                var bookmenu = {
                    booktitle: data.items[i].volumeInfo.title,
                    authors: data.items[i].volumeInfo.authors,
                    description: data.items[i].volumeInfo.description,
                    image: data.items[i].volumeInfo.imageLinks.thumbnail
                }
                var newHTML = template(bookmenu);
                $('.book-info').append(newHTML);
            }



        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });;

};