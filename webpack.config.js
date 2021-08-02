let mode = "development"

if(process.env.NODE_ENV === "production"){
    mode = "production";
}

module.exports = {
    mode: mode,

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /nodule_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
    },
}