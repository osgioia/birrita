const dotenv = require("dotenv");
const isDev = process.env.NODE_ENV !== "production";

const envFile = isDev ? `.env.${process.env.NODE_ENV}` : ".env";
dotenv.config({ path: envFile });

const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

module.exports = withCSS(
    withSass({
        env: {
            BRANCH: process.env.BRANCH,
            URL: process.env.URL,
            SHOW_DATE_COFFEE:
                process.env.SHOW_DATE_COFFEE === "true" ? true : false,
        },
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: "[local]__[hash:base64:5]",
        },
        withImages: withImages(),
    })
);
