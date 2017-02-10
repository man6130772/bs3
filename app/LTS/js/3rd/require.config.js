(function() {


    //include.setRoot(include.getParentPath(include.getPath('require.config.js')));

    var root = include.getRoot();

    requirejs.config({
        baseUrl: include.getRoot(),
        paths: {
        }
    });


})();
