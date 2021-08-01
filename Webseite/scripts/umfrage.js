var _timeout;
var msgSelector = '#msg';

function show(n, text) {
    clearTimeout(_timeout);
    $('button').addClass('disabled');
    var timeout = 0;
    if (text) {
        $(msgSelector).html(text);
        timeout = 2000;
    }
    _timeout = setTimeout(function() {
        var selector = '#c' + n;
        $('.container').animate({ opacity: 0 }, {
            duration: 500,
            complete: function () {
                $(msgSelector).html('');
                $('.container').addClass('hidden');
                $(selector).removeClass('hidden');
                $('button').removeClass('disabled');
                if (n == 12) {
                    $('body').addClass('bg');
                }
                $(selector).animate({ opacity: 1 }, {
                    duration: 500
                });                
            }
        });
    }, timeout);
}

function tempMsg(text, isFixed) {    
    clearTimeout(_timeout);
    $(msgSelector).html(text);

    if (!isFixed) {
        _timeout = setTimeout(function() {
            $(msgSelector).html('');
        }, 5000);
    } else {
        $(msgSelector).addClass('final');
    }
}