window.ParsleyConfig = window.ParsleyConfig || {};
(function($) {
    // 使用 `data-parsley-multiple-phone="/^1[3|4|5|7|8]\d{9}$/"` 自定义手机验证
    window.ParsleyConfig = $.extend(true, {}, window.ParsleyConfig, {
        validators: {
            multiplePhone: {
                fn: {
                    validateString: function validateString(value, regexp) {
                        return regexp.test(value);
                    },
                    requirementType: 'regexp',
                    messages: {
                        ch: '请输入正确的国内手机号码..'
                    }
                }
            }
        },
        typeRegexes: {
            phone: /^1[3|4|5|7|8]\d{9}$/
        }
    });
}(window.jQuery || window.Zepto));
