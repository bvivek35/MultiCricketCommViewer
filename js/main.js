requirejs.config({
    baseUrl : 'js/lib',
    paths : {
        app : "../app"
    }
});

requirejs(['jquery', 'app/utils'], function($, Utils) {
    console.log("started app");
    x=Utils;
})
