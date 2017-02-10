define('moment', [
    'js/3rd/datetimepicker/moment'
], function(moment) {
    return moment;

});
define('datetimepicker', [
    'moment',
    'js/3rd/datetimepicker/datetimepicker',
    'js/3rd/datetimepicker/zh-cn',
    'js/3rd/datetimepicker/datetimepicker.min.css'
], function(moment, datetimepicker) {
    return datetimepicker;
});


define([
    '../../App',
    '../EventDispatch',
    'moment',
    'datetimepicker'
], function(App, Dispatch, moment) {

    Dispatch.reg(new Dispatch.ActionHandle({
        name: 'DateTimePicker',
        initDateTimePicker: function(startDate, endDate) {
            if (startDate.data('DateTimePicker') || endDate.data('DateTimePicker')) {
                return;
            }
            startDate.datetimepicker({
                format: 'YYYY-MM-DD H:mm:ss',
                showClose: true,
                // defaultDate: moment().format('YYYY-MM-DD H:59:59'),
                // sideBySide: true,
                // debug: true,
                locale: moment.locale('zh-cn')
            });

            startDate.data('rel', endDate);

            endDate.datetimepicker({
                format: 'YYYY-MM-DD H:mm:ss',
                showClose: true,
                // defaultDate: moment().format('YYYY-MM-DD H:mm:ss'),
                // sideBySide: true,
                // debug: true,
                locale: moment.locale('zh-cn')
            });

            endDate.data('rel', startDate);

            startDate.on("dp.change", function(e) {
                var rel = $(this).data('rel');
                var relDateTimePicker = rel.data('DateTimePicker')
                if (relDateTimePicker) {
                    relDateTimePicker.minDate(e.date);
                }

            });
            endDate.on("dp.change", function(e) {
                var rel = $(this).data('rel');
                var relDateTimePicker = rel.data('DateTimePicker')
                if (relDateTimePicker) {
                    relDateTimePicker.maxDate(e.date);
                }
            });
        },
        ready: function() {
            this.panel = App.dom.property;
            this.initEvent();
        },
        initEvent: function() {
            var panel = this.panel;
            var me = this;
            panel.on('focus', 'input[data-role=startDateTime],input[data-role=endDateTime]', function(event) {
                var input = $(this);
                var hash = input.attr('data-hash');
                var startDate = panel.find('input[data-hash=' + hash + '][data-role=startDateTime]:first');
                var endDate = panel.find('input[data-hash=' + hash + '][data-role=endDateTime]:first');
                me.initDateTimePicker(startDate, endDate);
            });
        },
        init: function() {
            var me = this;
            App.once('ready', this.ready.bind(this));
            /*
            App.on('render.Property', function(event) {
                var property = App.dom.property;
                var list = property.find('[data-group-name] input[data-role=startDateTime]');
                if (list.length > 0) {
                    list.each(function(i, startDate) {
                        startDate = $(startDate);
                        var endDate = startDate.closest('[data-group-name]').find('input[data-role=endDateTime]:first');
                        me.initDateTimePicker(startDate, endDate);
                    });
                } else {
                    var startDate = property.find('input[data-role=startDateTime]:first');
                    var endDate = property.find('input[data-role=endDateTime]:first');
                    me.initDateTimePicker(startDate, endDate);
                }
            });
            */
        }
    }));
});
