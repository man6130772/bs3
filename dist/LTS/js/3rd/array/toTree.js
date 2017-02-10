define(function() {
    var defaultOptions = {
        key: {
            id: 'id',
            parentId: 'pid',
            sort: 'sort',
            children: 'children',
            rootId: 0
        },
        sort: function(a, b) {
            return a - b;
        }
    };

    return function(options) {
        if (!options) {
            options = defaultOptions
        } else {
            options = $.extend(true, {}, defaultOptions, options);
        }
        var data = options.data;
        var key = options.key;
        var idKey = key.id;
        var parentIdKey = key.parentId;
        var sortKey = key.sort;
        var childrenKey = key.children;
        var rootId = key.rootId;
        var map = {};
        map[rootId] = {};
        for (var i = 0, size = data.length; i < size; i++) {
            var item = data[i],
                id,
                sort,
                parent,
                children;
            id = item[idKey];
            if (map[id]) {
                item[childrenKey] = map[id][childrenKey];
            }


            map[id] = item;

            var parentId = item[parentIdKey] || 0;


            parent = map[parentId];
            if (!parent) {
                parent = {};
                map[parentId] = parent;
            }

            children = parent[childrenKey];
            if (!children) {
                children = [];
                parent[childrenKey] = children;
            }
            children.push(item);
            options.handle && options.handle(item);
        }

        for (var key in map) {
            var item = map[key];
            var children = item[childrenKey];
            if (children) {
                children.sort(function(a, b) {
                    return options.sort((+a[sortKey]), (+b[sortKey]));
                });
            }
        }
        return map[rootId][childrenKey];
    };
});
