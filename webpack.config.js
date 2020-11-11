module.exports = {
    entry: {
        main: "./main.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        //preset可以理解为是babel的快捷方式 一个preset包含多的plugin
                        presets: ["@babel/preset-env"],
                        plugins: [['@babel/plugin-transform-react-jsx', {pragma: "createElement"}]]
                    }
                }
            }
        ]
    },
    mode: "development",
    optimization: {
        minimize:false
    }
}