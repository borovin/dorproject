({
    baseUrl: '../',

    paths: {
        'jquery': 'bower_components/jquery/dist/jquery'
    },

    mainConfigFile: '../require.config.js',
    dir: "../build",

    skipDirOptimize: true,
    optimizeAllPluginResources: true,
    removeCombined: true,

    preserveLicenseComments: false,
    optimizeCss: 'standard',

    modules: [
        {
            name: "pages/intro",
            exclude: ['common']
        },
        {
            name: "pages/main",
            exclude: ['common']
        }
    ]

})