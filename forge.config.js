module.exports = {
    packagerConfig: {
        ignore: [
            ".idea",
            ".gitignore",
            "node_modules",
            "out",
            "tailwind.config.json",
            ".git"
        ]
    },
    makers: [
        {
            name: "@electron-forge/maker-squirrel",
            config: {
                name: "ffmpeg_gui"
            }
        },
        {
            name: "@electron-forge/maker-zip",
            platforms: [
                "darwin"
            ]
        },
        {
            name: "@electron-forge/maker-deb",
            config: {}
        },
        {
            name: "@electron-forge/maker-rpm",
            config: {}
        }
    ],
    // plugins: [
    //     ['@electron-forge/plugin-webpack', {
    //         devContentSecurityPolicy: `default-src 'self' 'unsafe-inline' data:; script-src 'self' 'unsafe-eval' 'unsafe-inline' data:`,
    //         mainConfig: './webpack.main.config.js',
    //         renderer: {
    //             config: './webpack.renderer.config.js',
    //             entryPoints: [{
    //                 name: 'main_window',
    //                 html: './src/renderer/index.html',
    //                 js: './src/renderer/renderer.js',
    //                 preload: {
    //                     js: "./src/main/preload.js"
    //                 }
    //             }]
    //         }
    //     }]
    // ]
}