$(document).ready(function() {

    $('span.comment').each(function(idx, elem) {
        var currentHtml = $(this).html();
        $(this).html(lookingForHashtag(currentHtml));
    });

    $('form').on('submit', function(e) {
        e.preventDefault();

        var newComment = lookingForHashtag($(this).children('input').val());

        var structureComment = '<li><div><p><span class="author"><a href="">azunyth</a></span> <span class="comment">'+
            newComment + '</span></p></div></li>';

        $(this).parents('.post-informations-comment').siblings('ul').append(structureComment);

        $(this).children('input').val('');

    });

});

var lookingForHashtag = function(sentence) {
    var regexp = /#[a-zA-Z]+/g;

    return sentence.replace(regexp, '<a href="">$&</a>')
}
