$(function () {
    $('#ad-carousel').carousel();
    $('#menu-nav .navbar-collapse a').click(function (e) {
        var href = $(this).attr('href');
        var tabId = $(this).attr('data-tab');
        if ('#' !== href) {
            e.preventDefault();
            $(document).scrollTop($(href).offset().top - 70);
            if (tabId) {
                // $('#feature-tab a[href=#' + tabId + ']').tab('show');    // jQuery1.11.1
                $('#feature-tab a[href=\\#' + tabId + ']').tab('show');     // jQuery1.12.4
            }
        }
    });
});
