$(document).ready(
    function() {
        var $containerHeight = $(window).height();
        if ($containerHeight <= 350) {
            $('.container_12_custom').css({
                margin: '0 auto%'
            });
        }
        if ($containerHeight > 350) {
            $('.container_12_custom').css({
                margin: '0 8%'
            });
        }
    }
);