/**
 * @author chen.cheng <chen.cheng@wonhigh.cn>
 * version: 1.0.0
 */
!function($) {
    var BootstrapTable = $.fn.bootstrapTable.Constructor;

    var extendOptions = {
        divStyle: false,
        showTitle: true,
        cardColumns: 3
    }

    $.extend(BootstrapTable.DEFAULTS, extendOptions);

    var sprintf = function(str) {
        var args = arguments,
            flag = true,
            i = 1;

        str = str.replace(/%s/g, function() {
            var arg = args[i++];

            if (typeof arg === 'undefined') {
                flag = false;
                return '';
            }
            return $.trim(arg);
        });
        return flag ? str : '';
    };

    var getPropertyFromOther = function (list, from, to, value) {
        var result = '';
        $.each(list, function (i, item) {
            if (item[from] === value) {
                result = item[to];
                return false;
            }
            return true;
        });
        return result;
    };

    var getFieldIndex = function(columns, field) {
        var index = -1;

        $.each(columns, function(i, column) {
            if (column.field === field) {
                index = i;
                return false;
            }
            return true;
        });
        return index;
    };

    var calculateObjectValue = function(self, name, args, defaultValue) {
        var func = name;

        if (typeof name === 'string') {
            // support obj.func1.func2
            var names = name.split('.');

            if (names.length > 1) {
                func = window;
                $.each(names, function(i, f) {
                    func = func[f];
                });
            } else {
                func = window[name];
            }
        }
        if (typeof func === 'object') {
            return func;
        }
        if (typeof func === 'function') {
            return func.apply(self, args);
        }
        if (!func && typeof name === 'string' && sprintf.apply(this, [name].concat(args))) {
            return sprintf.apply(this, [name].concat(args));
        }
        return defaultValue;
    };

    var getItemField = function(item, field, escape) {
        var value = item;

        if (typeof field !== 'string' || item.hasOwnProperty(field)) {
            return escape ? escapeHTML(item[field]) : item[field];
        }
        var props = field.split('.');
        for (var p in props) {
            value = value && value[props[p]];
        }
        return escape ? escapeHTML(value) : value;
    };

    BootstrapTable.prototype.init = function() {
    	this.options.divStyle = this.options.cardColumns > 1? true : false;
    	
        this.initLocale();
        this.initContainer();
        this.initTable();
        if(this.options.divStyle) this.initDivStructure();
        this.initHeader();
        this.initData();
        this.initFooter();
        this.initToolbar();
        this.initPagination();
        this.options.divStyle && this.options.cardView? this.initDivBody() : this.initBody();
        this.initSearchText();
        this.initServer();

    };

    BootstrapTable.prototype.initDivStructure = function() {
    	this.$divEl = $('<div class="table"></div>').appendTo(this.$tableBody);
    	this.$divEl.addClass(this.options.classes);
    	if (this.options.striped) {
            this.$divEl.addClass('table-striped');
        }
    }

    BootstrapTable.prototype.updatePagination = function (event) {
        // Fix #171: IE disabled button can be clicked bug.
        if (event && $(event.currentTarget).hasClass('disabled')) {
            return;
        }

        if (!this.options.maintainSelected) {
            this.resetRows();
        }

        this.initPagination();
        if (this.options.sidePagination === 'server') {
            this.initServer();
        } else {
            this.options.cardView && this.options.divStyle? this.initDivBody() : this.initBody();
        }

        this.trigger('page-change', this.options.pageNumber, this.options.pageSize);
    };

    BootstrapTable.prototype.initDivBody = function(fixedScroll) {
        var that = this,
            html = [],
            data = this.getData();

        this.trigger('pre-body', data);


        this.$el.hide();
        this.$divBody = this.$divEl.find('>div.table-body');
        if (!this.$divBody.length) {
            this.$divBody = $('<div class="table-body"></div>').appendTo(this.$divEl);
        }

        if(this.options.cardView) {
        	this.$divEl.addClass("table-wrap");
        } else {
        	this.$divEl.removeClass("table-wrap");
        }

        //Fix #389 Bootstrap-table-flatJSON is not working

        if (!this.options.pagination || this.options.sidePagination === 'server') {
            this.pageFrom = 1;
            this.pageTo = data.length;
        }

        for (var i = this.pageFrom - 1; i < this.pageTo; i++) {
            var key,
                item = data[i],
                style = {},
                csses = [],
                data_ = '',
                attributes = {},
                htmlAttributes = [];

            style = calculateObjectValue(this.options, this.options.rowStyle, [item, i], style);

            if (style && style.css) {
                for (key in style.css) {
                    csses.push(key + ': ' + style.css[key]);
                }
            }

            attributes = calculateObjectValue(this.options,
                this.options.rowAttributes, [item, i], attributes);

            if (attributes) {
                for (key in attributes) {
                    htmlAttributes.push(sprintf('%s="%s"', key, escapeHTML(attributes[key])));
                }
            }

            if (item._data && !$.isEmptyObject(item._data)) {
                $.each(item._data, function(k, v) {
                    // ignore data-index
                    if (k === 'index') {
                        return;
                    }
                    data_ += sprintf(' data-%s="%s"', k, v);
                });
            }

            var _rowClass = style.classes || ($.isArray(item) ? undefined : item._class);
            if(typeof _rowClass == "undefined") {
            	_rowClass = this.options.cardView? "table-card" : "table-row";
            } else {
            	_rowClass = this.options.cardView? "table-card " + _rowClass :  "table-row " + _rowClass;
            }

            var _rowStyle = "";
            if(this.options.cardView) {
            	var _cols = this.options.cardColumns % 12;
            	var _width, _marginRight;
            	if(_cols<5 && _cols>0) {
            		_width = "width:" + (100 - _cols * 4) / _cols + "%;";
            		_marginRight = "margin-right:" + 4 + "%;";
            		_rowStyle = _width + _marginRight;
            		this.$divBody.css("margin-right", "-4%");
            	} else if (_cols<=12 && _cols>=5) {
            		_width = "width:" + (100 - _cols * 2) / _cols + "%;";
            		_marginRight = "margin-right:" + 2 + "%;";
            		_rowStyle = _width + _marginRight;
            		this.$divBody.css("margin-right", "-2%");
            	}
            }

            html.push('<div',
                sprintf(' %s', htmlAttributes.join(' ')),
                sprintf(' id="%s"', $.isArray(item) ? undefined : item._id),
                sprintf(' class="%s"', _rowClass),
                sprintf(' style="%s"', _rowStyle),
                sprintf(' data-index="%s"', i),
                sprintf(' data-uniqueid="%s"', item[this.options.uniqueId]),
                sprintf('%s', data_),
                '>'
            );

            if (this.options.cardView) {
                html.push(sprintf('<div class="table-item" colspan="%s">', this.header.fields.length));
            }

            if (!this.options.cardView && this.options.detailView) {
                html.push('<div class="table-item">',
                    '<a class="detail-icon" href="javascript:">',
                    sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.detailOpen),
                    '</a>',
                    '</div>');
            }

            $.each(this.header.fields, function(j, field) {
                var text = '',
                    value = getItemField(item, field, that.options.escape),
                    type = '',
                    cellStyle = {},
                    id_ = '',
                    class_ = that.header.classes[j],
                    data_ = '',
                    rowspan_ = '',
                    title_ = '',
                    column = that.columns[getFieldIndex(that.columns, field)];

                if (!column.visible) {
                    return;
                }

                var _style = sprintf('display: %s; ', that.options.showTitle? 'inline-block' : 'none');
                that.header.styles[j] = that.header.styles[j] + _style;

                style = sprintf('style="%s"', csses.concat(that.header.styles[j]).join('; '));

                value = calculateObjectValue(column,
                    that.header.formatters[j], [value, item, i], value);

                // handle td's id and class
                if (item['_' + field + '_id']) {
                    id_ = sprintf(' id="%s"', item['_' + field + '_id']);
                }
                if (item['_' + field + '_class']) {
                    class_ = sprintf(' class="%s"', item['_' + field + '_class']);
                }
                if (item['_' + field + '_rowspan']) {
                    rowspan_ = sprintf(' rowspan="%s"', item['_' + field + '_rowspan']);
                }
                if (item['_' + field + '_title']) {
                    title_ = sprintf(' title="%s"', item['_' + field + '_title']);
                }
                cellStyle = calculateObjectValue(that.header,
                    that.header.cellStyles[j], [value, item, i], cellStyle);
                if (cellStyle.classes) {
                    class_ = sprintf(' class="%s"', cellStyle.classes);
                }
                if (cellStyle.css) {
                    var csses_ = [];
                    for (var key in cellStyle.css) {
                        csses_.push(key + ': ' + cellStyle.css[key]);
                    }
                    style = sprintf('style="%s"', csses_.concat(that.header.styles[j]).join('; '));
                }

                if (item['_' + field + '_data'] && !$.isEmptyObject(item['_' + field + '_data'])) {
                    $.each(item['_' + field + '_data'], function(k, v) {
                        // ignore data-index
                        if (k === 'index') {
                            return;
                        }
                        data_ += sprintf(' data-%s="%s"', k, v);
                    });
                }

                if (column.checkbox || column.radio) {
                    type = column.checkbox ? 'checkbox' : type;
                    type = column.radio ? 'radio' : type;

                    text = [sprintf(that.options.cardView ?
                            '<div class="card-view %s">' : '<div class="table-item bs-checkbox %s">', column['class'] || ''),
                        '<input' +
                        sprintf(' data-index="%s"', i) +
                        sprintf(' name="%s"', that.options.selectItemName) +
                        sprintf(' type="%s"', type) +
                        sprintf(' value="%s"', item[that.options.idField]) +
                        sprintf(' checked="%s"', value === true ||
                            (value && value.checked) ? 'checked' : undefined) +
                        sprintf(' disabled="%s"', !column.checkboxEnabled ||
                            (value && value.disabled) ? 'disabled' : undefined) +
                        ' />',
                        that.header.formatters[j] && typeof value === 'string' ? value : '',
                        that.options.cardView ? '</div>' : '</div>'
                    ].join('');

                    item[that.header.stateField] = value === true || (value && value.checked);
                } else {
                    value = typeof value === 'undefined' || value === null ?
                        that.options.undefinedText : value;

                    text = that.options.cardView ? ['<div class="card-view">',
                        that.options.showHeader ? sprintf('<span class="title" %s>%s</span>', style,
                            getPropertyFromOther(that.columns, 'field', 'title', field)) : '',
                        sprintf('<span class="value">%s</span>', value),
                        '</div>'
                    ].join('') : [sprintf('<div%s %s %s %s %s %s>', id_, sprintf(' class="%s"', "table-item " + class_), style, data_, rowspan_, title_),
                        value,
                        '</div>'
                    ].join('');

                    // Hide empty data on Card view when smartDisplay is set to true.
                    if (that.options.cardView && that.options.smartDisplay && value === '') {
                        // Should set a placeholder for event binding correct fieldIndex
                        text = '<div class="card-view"></div>';
                    }
                }

                html.push(text);
            });

            if (this.options.cardView) {
                html.push('</div>');
            }

            html.push('</div>');
        }

        // show no records
        if (!html.length) {
            html.push('<div class="table-row no-records-found">',
                sprintf('<div class="table-item" colspan="%s">%s</div>',
                    this.$header.find('th').length, this.options.formatNoMatches()),
                '</div>');
        }

        this.$divBody.html(html.join(''));

        if (!fixedScroll) {
            this.scrollTo(0);
        }

        // click to select by column
        this.$divBody.find('> div.table-row[data-index] > div.table-item').off('click dblclick').on('click dblclick', function(e) {
            var $td = $(this),
                $tr = $td.parent(),
                item = that.data[$tr.data('index')],
                index = $td[0].cellIndex,
                field = that.header.fields[that.options.detailView && !that.options.cardView ? index - 1 : index],
                column = that.columns[getFieldIndex(that.columns, field)],
                value = getItemField(item, field, that.options.escape);

            if ($td.find('.detail-icon').length) {
                return;
            }

            that.trigger(e.type === 'click' ? 'click-cell' : 'dbl-click-cell', field, value, item, $td);
            that.trigger(e.type === 'click' ? 'click-row' : 'dbl-click-row', item, $tr);

            // if click to select - then trigger the checkbox/radio click
            if (e.type === 'click' && that.options.clickToSelect && column.clickToSelect) {
                var $selectItem = $tr.find(sprintf('[name="%s"]', that.options.selectItemName));
                if ($selectItem.length) {
                    $selectItem[0].click(); // #144: .trigger('click') bug
                }
            }
        });

        this.$divBody.find('> div.table-row[data-index] > div.table-item > .detail-icon').off('click').on('click', function() {
            var $this = $(this),
                $tr = $this.parent().parent(),
                index = $tr.data('index'),
                row = data[index]; // Fix #980 Detail view, when searching, returns wrong row

            // remove and update
            if ($tr.next().is('div.table-row.detail-view')) {
                $this.find('i').attr('class', sprintf('%s %s', that.options.iconsPrefix, that.options.icons.detailOpen));
                $tr.next().remove();
                that.trigger('collapse-row', index, row);
            } else {
                $this.find('i').attr('class', sprintf('%s %s', that.options.iconsPrefix, that.options.icons.detailClose));
                $tr.after(sprintf('<div class="table-row detail-view"><div class="table-item" colspan="%s"></td></div>', $tr.find('td').length));
                var $element = $tr.next().find('div.table-item');
                var content = calculateObjectValue(that.options, that.options.detailFormatter, [index, row, $element], '');
                if ($element.length === 1) {
                    $element.append(content);
                }
                that.trigger('expand-row', index, row, $element);
            }
            that.resetView();
        });

        this.$selectItem = this.$divBody.find(sprintf('[name="%s"]', this.options.selectItemName));
        this.$selectItem.off('click').on('click', function(event) {
            event.stopImmediatePropagation();

            var $this = $(this),
                checked = $this.prop('checked'),
                row = that.data[$this.data('index')];

            if (that.options.maintainSelected && $(this).is(':radio')) {
                $.each(that.options.data, function(i, row) {
                    row[that.header.stateField] = false;
                });
            }

            row[that.header.stateField] = checked;

            if (that.options.singleSelect) {
                that.$selectItem.not(this).each(function() {
                    that.data[$(this).data('index')][that.header.stateField] = false;
                });
                that.$selectItem.filter(':checked').not(this).prop('checked', false);
            }

            that.updateSelected();
            that.trigger(checked ? 'check' : 'uncheck', row, $this);
        });

        $.each(this.header.events, function(i, events) {
            if (!events) {
                return;
            }
            // fix bug, if events is defined with namespace
            if (typeof events === 'string') {
                events = calculateObjectValue(null, events);
            }

            var field = that.header.fields[i],
                fieldIndex = $.inArray(field, that.getVisibleFields());

            if (that.options.detailView && !that.options.cardView) {
                fieldIndex += 1;
            }

            for (var key in events) {
                that.$divBody.find('>div.table-item:not(.no-records-found)').each(function() {
                    var $tr = $(this),
                        $td = $tr.find(that.options.cardView ? '.card-view' : 'div.table-item').eq(fieldIndex),
                        index = key.indexOf(' '),
                        name = key.substring(0, index),
                        el = key.substring(index + 1),
                        func = events[key];

                    $td.find(el).off(name).on(name, function(e) {
                        var index = $tr.data('index'),
                            row = that.data[index],
                            value = row[field];

                        func.apply(this, [e, value, row, index]);
                    });
                });
            }
        });

        this.updateSelected();
        this.resetView();

        this.trigger('post-body');
    };

    BootstrapTable.prototype.load = function(data) {
        var fixedScroll = false;

        // #431: support pagination
        if (this.options.sidePagination === 'server') {
            this.options.totalRows = data.total;
            fixedScroll = data.fixedScroll;
            data = data[this.options.dataField];
        } else if (!$.isArray(data)) { // support fixedScroll
            fixedScroll = data.fixedScroll;
            data = data.data;
        }

        this.initData(data);
        this.initSearch();
        this.initPagination();
        this.options.divStyle && this.options.cardView? this.initDivBody(fixedScroll) : this.initBody(fixedScroll);
    };

    BootstrapTable.prototype.toggleView = function () {
        this.options.cardView = !this.options.cardView;
        this.initHeader();
        // Fixed remove toolbar when click cardView button.
        //that.initToolbar();
        if(this.options.cardView && this.options.divStyle) {
        	this.initDivBody();
        	this.$divEl.show();
        } else {
        	this.initBody();
        	this.$el.show();
        	if(this.$divEl) this.$divEl.hide();
        }
        this.trigger('toggle', this.options.cardView);
    };

}(jQuery);
