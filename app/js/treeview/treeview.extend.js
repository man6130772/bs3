/**
 * @author chen.cheng <chen.cheng@wonhigh.cn>
 * version: 1.0.0
 */
;
(function($) {
    //拓展父节点全选方法
    function parentSelect(target, node) {
        var clickNode = node.nodeId;
        var _selected = node.state.selected;

        function childSelect(target, node) {
            var id = node.nodeId;
            if (_selected === true) $(target).treeview('selectNode', [id, { silent: true }]);
            if (_selected === false) $(target).treeview('unselectNode', [id, { silent: true }]);
        }

        function circleSelect(target, node, valid) {
            if ($.isArray(node.nodes) && node.nodes.length > 0 && !valid) {
                for (var i in node.nodes) {
                    var child = node.nodes[i];
                    circleSelect(target, child);
                }
                if (node.nodeId !== clickNode) childSelect(target, node);
            } else if (node.nodeId == clickNode || valid && node.parentId != null) {
                var parentNode = $(target).treeview('getParent', node);
                var _parent_select;
                for (var i in parentNode.nodes) {
                    var childNode = parentNode.nodes[i];
                    var _child_select = childNode.state.selected;
                    if (i == 0) _parent_select = _child_select;
                    if (i != 0) _parent_select = _parent_select && _child_select;
                }
                if (_parent_select === true) $(target).treeview('selectNode', [parentNode.nodeId, { silent: true }]);
                if (_parent_select === false) $(target).treeview('unselectNode', [parentNode.nodeId, { silent: true }]);
                if (parentNode.parentId != null) {
                    circleSelect(target, parentNode, true);
                }
            } else {
                if (node.nodeId !== clickNode) childSelect(target, node);
            }
        }
        circleSelect(target, node);
    }

    function addName(target, node) {
        var options = $(target).data("treeview").options;
        var $button = options.dropdownlist.$button;
        var inputText = $button.find(".filter-option");
        if(inputText.text() == inputText.data("placeholder")) {
            inputText.text(node.text);
        } else {
            var _arr = inputText.text().split(",");
            _arr.push(node.text);
            var _text = _arr.join(",");
            inputText.text(_text);
        }
    }

    function moveName(target, node) {
        var options = $(target).data("treeview").options;
        var $button = options.dropdownlist.$button;
        var inputText = $button.find(".filter-option");
        var oldArr = inputText.text().split(",");
        var newArr = [];
        $.each(oldArr, function(i, el) {
            if(el!=node.text) newArr.push(el);
        });
        var _text = newArr.join(",");
        if(_text) {
            inputText.text(_text);
        } else {
            inputText.text(inputText.data("placeholder"));
        }
        
    }

    function bindEvents(options) {
        var _onNodeSelected = options.onNodeSelected,
            _onNodeUnselected = options.onNodeUnselected;

        options.onNodeSelected = function(event, node) {
            addName(this, node);
            if (typeof _onNodeUnselected === "function") _onNodeSelected.call(this, event, node);
        }

        options.onNodeUnselected = function(event, node) {
            moveName(this, node);
            if (typeof _onNodeUnselected === "function") _onNodeUnselected.call(this, event, node);
        }
    }

    function createWrap(options) {
        var html = '<div class="btn-group bootstrap-select form-control"></div>';

        options.dropdownlist.$wrapper = $(html).insertBefore(this);
    }

    function createButton(options) {
        var name = this.attr("placeholder") || "请选择";
        var html = '<button data-toggle="dropdown" class="btn btn-default dropdown-toggle">' +
            '<span class="filter-option pull-left" data-placeholder="' + name + '">' + name + '</span> <span class="caret"></span>' +
            '</button>';
        options.dropdownlist.$button = $(html).appendTo(options.dropdownlist.$wrapper);
    }

    function createMenu(options) {
        var dropdownHeight = options.dropdownHeight || 300;
        var widthHtml = options.dropdownWidth ? ' width: ' + options.dropdownWidth + 'px; ' : '';
        var html = '<div class="dropdown-menu open" style="' + widthHtml + ' max-height: ' + dropdownHeight + 'px; overflow: hidden;">' +
            '<div class="dropdownlist" style="max-height: ' + (dropdownHeight - 12) + 'px; overflow-y: auto;"></div>' +
            '</div>';
        options.dropdownlist.$menu = $(html).appendTo(options.dropdownlist.$wrapper);
        bindEvents(options);
    }

    var _treeview = $.fn.treeview;
    $.fn.treeview = function(options, args) {

        if (options.selectAll === true) {
            var _onNodeSelected = options.onNodeSelected,
                _onNodeUnselected = options.onNodeUnselected;

            options.onNodeSelected = function(event, node) {
                parentSelect(this, node);
                if (typeof _onNodeUnselected === "function") _onNodeSelected(event, node);
            }

            options.onNodeUnselected = function(event, node) {
                parentSelect(this, node);
                if (typeof _onNodeUnselected === "function") _onNodeUnselected(event, node);
            }
        }

        var that = this;

        if (options.type == "dropdownlist") {
            options.dropdownlist = {};
            createWrap.call(this, options);
            createButton.call(this, options);
            createMenu.call(this, options);

            options.dropdownlist.$dropdownlist = that;
            that = options.dropdownlist.$treeview = options.dropdownlist.$menu.find(".dropdownlist");
            this.data("dropdownlist", options.dropdownlist);
            this.hide();
        }

        that = _treeview.call(that, options, args);
        var proto = $(that).data("treeview");

        if (options.type == "dropdownlist") {
            options.dropdownlist.$menu.on('click', function(e) {
                e.stopPropagation();
            });
        }

        return that;
    }
})(jQuery);
