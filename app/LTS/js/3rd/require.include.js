(function() {
	
	define('handlebars', function() {
		return Handlebars;
	});

	define('jquery', function() {
		return $;
	});

    define('css', function() {
        return {
            load: function(name, req, onload, config) {
                include.css(config.baseUrl + name, onload);
            }
        }
    });


    define('hbs', ['handlebars','jquery'], function(Handlebars) {
        return {
            load: function(name, req, onload, config) {
                var url = config.baseUrl + name;
                $.ajax({
                    type: "GET",
                    url: url,
                    dataType: "text",
                    success: function(tpl) {
                        onload(Handlebars.compile(tpl));
                    }
                });
            }
        }
    });

    requirejs.fetch = function(module) {
        var args = module.map.name.match(/\.(hbs|css|jsx)/);
        if (args && args[1]) {
            module.map.prefix = args[1];
        }
    };
/*
    var reqLoad = requirejs.load;
    requirejs.load = function(context, moduleName, url) {
        reqLoad.apply(this, arguments);
    };
*/
})();
