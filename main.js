$('.button').click(fetch);


function fetch() {
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
        success: function(data) {
            console.log(data);

        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });;
};