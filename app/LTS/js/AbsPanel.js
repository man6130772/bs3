define([
    './App'
], function(App) {
    var $body;
    return App.reg({
        className: 'AbsPanel',
        hashPrefix: 'x',
        getHashId: (function() {
            var hashCode = parseInt("1" + ("" + (+new Date())).substr(9));
            return function() {
                return this.hashPrefix + '.hash.' + (hashCode++);
            }
        })(),
        getTargetId: function(target) {
            var hashId = target.attr('id');
            if (!hashId) {
                hashId = this.getHashId();
                target.attr('id', hashId);
            }
            return '';
        },
        getBody: function() {
            if (!$body) {
                $body = $(document.body);
            }
            this.getBody = function() {
                return $body;
            };
            return $body;
        },
        getElement: (function() {
            var $empty = $();
            return function() {
                if (this.id) {
                    return this.get(this.id);
                }
                return $empty;
            }
        })(),
        get: App.get
    });

});
