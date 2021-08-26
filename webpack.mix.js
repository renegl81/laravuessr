let mix = require('laravel-mix');
const path = require('path');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

    var fs   = require('fs');
    let isIllusion = process.cwd() !== fs.realpathSync(process.cwd());
    if (isIllusion) {
        process.chdir(fs.realpathSync(process.cwd()));
    }

    mix.autoload({
        'jquery': ['$', 'window.jQuery', 'jQuery'],
    })

   mix.webpackConfig({
        resolve: {
            alias: {
                'Api': path.resolve(__dirname, 'resources/js/api/'),
                'WebServices': path.resolve(__dirname, 'resources/js/webServices/'),
                'helpDeskService': path.resolve(__dirname, 'resources/js/helpDeskService/'),
                'Components': path.resolve(__dirname, 'resources/js/components/'),
                'Constants': path.resolve(__dirname, 'resources/js/constants/'),
                'Container': path.resolve(__dirname, 'resources/js/container/'),
                'Views': path.resolve(__dirname, 'resources/js/views/'),
                'Helpers': path.resolve(__dirname, 'resources/js/helpers/'),
                'Themes': path.resolve(__dirname, 'resources/js/themes/')
            }
        },
     /*   output: {
            chunkFilename: mix.inProduction() ? "js/prod/chunks/[name]?id=[chunkhash].js" : "js/dev/chunks/[name].js"
        }*/
    });

mix.sass("resources/js/assets/scss/_style.scss", "public/css/style.css").vue(
    {
        extractVueStyles: 'public/css/style.css'
    })
    .js('resources/js/app-client.js', 'public/js').vue({ version: 2, extractStyles: true })
    .js('resources/js/app-server.js', 'public/js').vue({ version: 2, extractStyles: true });

