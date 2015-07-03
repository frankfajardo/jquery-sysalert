
(function ($) {

    $.fn.sysAlert = function (options) {

        // Default options.
        var settings = $.extend({
            sourceUrl: '/sysalert.json',
            sourceMethod: 'GET',
            allowHtml: false,
            complete: function () {}
        }, options);

        var allowHtml = settings.allowHtml;

        var $self = $(this);
        var $sa = $('<span class="sa sa-short"></span>');
        var $icon = $('<span class="sa-icon"><i class="fa fa-bullhorn"></i></span>');
        var $short = $('<span class="sa-shorttext"></span>');
        var $long = $('<span class="sa-longtext"></span>');
        var $toggle = $('<span class="sa-text-toggle"></span>');

        $.ajax({
            url: settings.sourceUrl,
            type: settings.sourceMethod,
            dataType: 'json',
            success: function (sa) {
                var from = sa.postFrom && new Date(sa.postFrom) || new Date();
                var upto = new Date(sa.postUpto);
                var today = new Date();
                var shortAlert = sa.shortAlert || '';
                var longAlert = sa.longAlert || '';
                var hasLongText = (typeof longAlert === 'string') && (longAlert !== '');
                if (today >= from && today <= upto) {
                    if (hasLongText) {
                        $sa.appendTo($self).append($icon).append($short).append($long).append($toggle);
                        if (allowHtml) {
                            $short.html(shortAlert);
                            $long.html(longAlert);
                        }
                        else {
                            $short.text(shortAlert);
                            $long.text(longAlert);
                        }
                        $toggle.on('click', function (e) {
                            if ($sa.is('.sa-short')) {
                                $sa.removeClass('sa-short').addClass('sa-long');
                            }
                            else {
                                $sa.removeClass('sa-long').addClass('sa-short');
                            }
                            e.preventDefault();
                        })
                    }
                    else {
                        $sa.appendTo($self).append($icon).append($short);
                        allowHtml && $short.html(shortAlert) || !allowHtml && $short.text(shortAlert);
                    }
                    //$self.show();
                    settings.complete.call(this);
                }
            },
            error: function () {
                settings.complete.call(this);
            }
        });
    };

}(jQuery));
