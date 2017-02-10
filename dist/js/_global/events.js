/**
 * Global Functions
 */
function setSwitchText(){
    var $switchBtn = $('#sideNavSwitch');
    var title = $switchBtn.hasClass('active') ? '展开' : '收缩';
    $switchBtn.tooltip('hide').attr('data-original-title', title).tooltip();
}

/**
 * Events bind while document init
 */
$(function() {
    // toggle show and hidden layout
    $(document).on('click', '[data-toggle^="class"]', function(e) {
        e && e.preventDefault();
        var $this = $(e.target),
            $class, $target, $tmp, $classes, $targets;
        !$this.data('toggle') && ($this = $this.closest('[data-toggle^="class"]'));
        $class = $this.data()['toggle'];
        $target = $this.data('target') || $this.attr('href');
        $class && ($tmp = $class.split(':')[1]) && ($classes = $tmp.split(','));
        $target && ($targets = $target.split(','));
        $classes && $classes.length && $.each($targets, function(index, value) {
            if ($classes[index].indexOf('*') !== -1) {
                var patt = new RegExp('\\s' + $classes[index].replace(/\*/g, '[A-Za-z0-9-_]+').split(' ').join('\\s|\\s') + '\\s', 'g');
                $($this).each(function(i, it) {
                    var cn = ' ' + it.className + ' ';
                    while (patt.test(cn)) { cn = cn.replace(patt, ' '); }
                    it.className = $.trim(cn);
                });
            }
            ($targets[index] != '#') && $($targets[index]).toggleClass($classes[index]) || $this.toggleClass($classes[index]);
        });
        $this.toggleClass('active');
        if($this.attr('href').indexOf('#nav')!=-1){
            setSwitchText();
        }
    });

    // toggle show and hidden panel body
    $(document).on('click', '.panel-toggle', function(e) {
        e && e.preventDefault();
        var $this = $(e.target),
            $class = 'collapse',
            $target;
        if (!$this.is('a'))
            $this = $this.closest('a');
        $target = $this.closest('.panel');
        $target.find('.panel-body').toggleClass($class);
        $this.toggleClass('active');
    });

    // dropdown menu
    $.fn.dropdown.Constructor.prototype.change = function(e) {
        e.preventDefault();
        var $item = $(e.target),
            $select, $checked = false,
            $menu, $label;
        !$item.is('a') && ($item = $item.closest('a'));
        $menu = $item.closest('.dropdown-menu');
        $label = $menu.parent().find('.dropdown-label');
        $labelHolder = $label.text();
        $select = $item.find('input');
        $checked = $select.is(':checked');
        if ($select.is(':disabled'))
            return;
        if ($select.attr('type') == 'radio' && $checked)
            return;
        if ($select.attr('type') == 'radio')
            $menu.find('li').removeClass('active');
        $item.parent().removeClass('active');
        !$checked && $item.parent().addClass('active');
        $select.prop("checked", !$select.prop("checked"));
        $items = $menu.find('li > a > input:checked');
        if ($items.length) {
            $text = [];
            $items.each(function() {
                var $str = $(this).parent().text();
                $str && $text.push($.trim($str));
            });
            $text = $text.length < 4 ? $text.join(', ') : $text.length + ' selected';
            $label.html($text);
        } else {
            $label.html($label.data('placeholder'));
        }
    }
    $(document).on('click.dropdown-menu', '.dropdown-select > li > a', $.fn.dropdown.Constructor.prototype.change);

    // toggle show and hidden collapse
    $(document).on('click', '[data-ride="collapse"] a', function(e) {
        var $this = $(e.target),
            $active;
        $this.is('a') || ($this = $this.closest('a'));
        $active = $this.parent().siblings(".active");
        $active && $active.toggleClass('active').find('> ul:visible').slideUp(200);
        ($this.parent().hasClass('active') && $this.next().slideUp(200)) || $this.next().slideDown(200);
        $this.parent().toggleClass('active');
        $this.next().is('ul') && e.preventDefault();
        setTimeout(function() {
            $(document).trigger('updateNav');
        }, 300);
    });
    $(document).on('click.bs.dropdown.data-api', '.dropdown .on, .dropup .on, .open .on', function(e) {
        e.stopPropagation()
    });

    // slim scroll
    $('.no-touch .slim-scroll').each(function(){
        var $self = $(this), $data = $self.data(), $slimResize;
        $self.slimScroll($data);
        $(window).resize(function(e) {
            clearTimeout($slimResize);
            $slimResize = setTimeout(function(){$self.slimScroll($data);}, 500);
        });
        $(document).on('updateNav', function(){
          $self.slimScroll($data);
        });
    });

    // init bootstrap select
    $('.selectpicker').selectpicker();

    // init bootstrap tooltip
    $('body').tooltip({
        selector: '[data-toggle="tooltip"],[rel="tooltip"]'
    });

    // init bootstrap popover
    $('body').popover({
        selector: '[data-toggle="popover"],[rel="popover"]'
    });

});
