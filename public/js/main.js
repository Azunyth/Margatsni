$(document).ready(function() {

    var test = "Hello #bonjour asf #test";

    $('span.comment').each(function(idx, elem) {
        var currentHtml = $(this).html();
        $(this).html(lookingForHashtag(currentHtml));
    });

});

var lookingForHashtag = function(sentence) {
    var regexp = /#[a-zA-Z]+/g;

    return sentence.replace(regexp, '<a href="">$&</a>')
}
