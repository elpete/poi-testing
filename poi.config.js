const ManifestPlugin = require( "webpack-manifest-plugin" );
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');


module.exports = ( options, req ) => {
    return {
        entry: "./resources/assets/js/app.js",
        dist: "./includes/build",
        extractCSS: true,
        html: false,
        extendWebpack( config ) {
            config.output.publicPath( "./includes/build/" );
            config.resolve.alias.set( "@", `${__dirname}/resources/assets/js` );

            config.plugin( "manifest" )
                .use( ManifestPlugin, [ {
                    fileName: "manifest.json",
                    publicPath: "/includes/build/",
                } ] );

            config.plugin( "clean" )
                .use( CleanWebpackPlugin, [
                    [ "includes/build" ]
                ] );

            if ( options.mode === "watch" ) {
                config.plugin( "livereload" )
                    .use( LiveReloadPlugin, [ {
                        appendScriptTag: true
                    } ] )
            }
        }
    };
};
