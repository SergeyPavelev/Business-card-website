$(function () {
    $('span').click(function () {
        $('#list-navigation li:hidden').slice(0, 2).show();
        if ($('#list-navigation li').length == $('#list-navigation li:visible').length) {
            $('span ').hide();
        }
    });
});