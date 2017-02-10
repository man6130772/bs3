define([
    'js/3rd/classjs',
    'js/App',
    'js/AbsPanel',
    '../Plugin',
    'hbs/components/modal.hbs',
    'js/3rd/array/indexOf',
    'js/3rd/array/remove'
], function(x, App, AbsPanel, Plugin, template) {

    var Modal = classjs({
        className: 'Modal',
        mixins: [AbsPanel.__className__],
        hashPrefix: 'modal',
        extendEvent: true,
        template: template,
        ready: function() {
            this.id = this.getHashId();
        },
        initEvent: function() {
            var me = this;

            this.getElement().on('hide.bs.modal', (function(event) {
                this.cancel();
            }).bind(this));

            this.getElement().on('hidden.bs.modal', (function(event) {
                me.emit('close');
                setTimeout(function() {
                    me.getElement().remove();
                }, 0);
            }).bind(this));

            this.getElement().on('click', '[data-role=submit]', (function(event) {
                this.submit();
            }).bind(this));
        },
        create: function() {
            var html = this.template(this);
            this.getBody().append(html);
            this.create.destroy(this);
            this.body = this.getElement().find('.modal-body:first');
            this.initEvent();
            this.emit('create');
        },
        show: function() {
            this.create();
            this.getElement().modal('show');
            this.emit('show');
        },
        submit: function() {
            this.emit('submit');
            this.close();
        },
        cancel: function() {
            this.emit('cancel');
        },
        close: function() {
            this.getElement().modal('hide');
        }
    });

    Plugin.reg({
        className: 'Modal',
        extendEvent: true,
        singleton: true,
        init: function() {
            App.once('ready', this.ready.bind(this));
        },
        initEvent: function() {

        },
        ready: function() {
            this.initEvent();
        },
        array: [],
        create: function(options) {
            var me = this;
            var modal = new Modal(options);
            modal.once('show', function() {
                me.array.active = this;
            });
            modal.once('close', function() {
                me.remove(this);
            });
            this.array.push(modal);
            if (options.isCreated) {
                modal.create();
            }
            return modal;
        },
        show: function(options) {
            var modal = this.create(options);
            modal.show();
            return modal;
        },
        remove: function(modal) {
            var index = this.array.indexOf(modal);
            if (index > -1) {
                this.array.remove(index);
            }
            if (this.array.active == modal) {
                delete this.array.active;
            }
        },
        close: function() {
            if (this.array.active) {
                this.array.active.close();
                this.remove(this.array.active);
            }
        }
    });

});
