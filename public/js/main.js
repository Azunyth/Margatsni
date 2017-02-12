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

    $('div.post-picture').on('dblclick', function(e){
        var likePost = $(this).siblings('div.post-informations').find('a.like-post');

        if(likePost.children('span').hasClass('glyphicon-heart-empty')) {
            var heart = $('<span class="like-animation glyphicon glyphicon-heart"></span>');
            heart.appendTo($(this));

            heart.animate({opacity: 0.8}, 200, function() {
                heart.delay(300).animate({opacity: 0.0}, 300, function() {
                    heart.remove();
                });
                likePost.trigger('liking');
            });

        }
    });

    $('a.like-post').on('click liking', function(e) {
        var span = $(this).children('span');
        var classToCheck = 'glyphicon-heart-empty';
        if(span.hasClass(classToCheck)) {
            span.removeClass(classToCheck);
            span.addClass('glyphicon-heart');

            incLikeCounter(span.parents('.post-informations').find('.count'));
        }
    });

});

var incLikeCounter = function(elem) {
    var currentLikeCount = parseInt(elem.html(), 10);

    elem.html(++currentLikeCount);
}

var lookingForHashtag = function(sentence) {
    var regexp = /#[a-zA-Z]+/g;

    return sentence.replace(regexp, '<a href="">$&</a>')
}
