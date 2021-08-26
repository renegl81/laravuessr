const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix
    .js('resources/js/entry-client.js', 'public/js/vue').vue()
    .js('resources/js/entry-server.js', 'public/js/vue').vue()
    .postCss('resources/css/app.css', 'public/css/app.css')
/*mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);*/
