const usePluginList = [
    "postcss-easy-import",
    "postcss-custom-properties",
    "postcss-calc",
    "postcss-custom-media",
    "autoprefixer",
    "postcss-reporter"
];
module.exports = {
    "root": "./public/",
    "use": usePluginList,
    "input": "./public/src/index.css",
    "output": "./public/build/bundle.css",
    "local-plugins": true,
    "postcss-easy-import": {
        root: "./src/",
        glob: true,
        onImport: function (sources) {
            global.watchCSS(sources, this.from);
        }
    },
    "autoprefixer": {
        "browsers": "> 5%"
    }
};