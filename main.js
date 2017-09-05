$('.button').click(fetch);


function fetch() {
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
        success: function(data) {
            console.log(data);
            $('.book-info').empty();
            var bookmenu = {
                booktitle: data.items[0].volumeInfo.title,
                authors: data.items[0].volumeInfo.authors,
                description: data.items[0].volumeInfo.description,
                image: data.items[0].volumeInfo.imageLinks.thumbnail
            };
            var source = $('#store-template').html();
            var template = Handlebars.compile(source);
            var newHTML = template(bookmenu);
            $('.book-info').append(newHTML);

        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });;

};