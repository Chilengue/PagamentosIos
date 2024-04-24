module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        Plugins: [
            [
                "module-resolver",
                {
                    root: ["./src"],
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                    alias: {
                        "@assets": "./src/assets",
                        "@componets": "./src/components",
                        "@config": "./src/config",
                        "@hooks": "./src/hooks",
                        "@routes": "./src/routes",
                        "@screens": "./src/screens",
                        "@services": "./src/services",
                        "@styles": "./src/styles",
                        "@utils": "./src/utils",
                    },
                },
            ],
        ],
    };
};
