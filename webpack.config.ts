import webpack from "webpack";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

// Node.js 모듈 path 불러오기
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 개발용 또는 제품용 체크
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  // 프로젝트 명
  name: "react-template",

  /**
   * mode : 모듈 번들링 과정에서 코드를 최적화 시킴
   * mode값 : development, production, none
   */
  mode: isDev ? "development" : "production",

  /**
   * devtool : 디버깅 과정을 위한 soruce mapping 스타일 선택
   */
  devtool: isDev ? "source-map" : "eval",

  /**
   * entry : 자원을 변환하기 위한 진입점
   * 1개 또는 N개가 될 수 있음
   */
  entry: {
    app: ["./src/index.tsx", "./src/assets/scss/index.scss"],
  },

  /**
   * resolve : 모듈 별칭 등록하는 곳
   */
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".scss", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  /**
   * output : entry에서 받은 자원을 결과물로 출력
   * output option
   *  [name] : entry 속성
   *  [id] : module ID
   *  [hash] : hash 값
   *  [chunkhash] : 모듈 내용을 기준으로 생산된 hash
   */
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
  },

  /**
   * module : loader 설정 하는 곳
   * loader : 어플리케이션을 해석할 때, js가 아닌 html/css/image/font를 변환할 수 있도록 도와주는 곳
   */
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      browsers: ["last 2 chrome versions"],
                    },
                  },
                ],
                ["@babel/preset-react", { runtime: "automatic" }],
                ["@babel/preset-typescript", { runtime: "automatic" }],
              ],
              env: {
                development: {
                  plugins: [require.resolve("react-refresh/babel")],
                },
              },
            },
          },
        ],
      },

      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 3 versions",
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                // css 미압축/압축 여부(expanded : 미압축 / compressed : 압축)
                outputStyle: isDev ? "expanded" : "compressed",
              },
            },
          },
        ],
      },
    ],
  },

  /**
   * devServer: webpack-dev-server 세팅
   */
  devServer: {
    // 정적 파일을 제공할 경로
    static: {
      directory: path.resolve(__dirname, "./public"),
    },
    // Webpack 애셋을 처리하는 webpack-dev-middleware에 옵션을 제공
    devMiddleware: {
      publicPath: "/dist",
    },
    // 포트
    port: 9000,
    // History 라우팅 대체 사용 설정 / 새로 고침 시 페이지 유지
    historyApiFallback: true,
    // 서버가 시작된 후 브라우저를 열도록 함
    open: true,
    // 파일 변경이 감지되면 페이지를 다시 로드하고 새로고침
    liveReload: true,
    // gzip 설정
    compress: true,
  },

  /**
   * plugins : 추가적인 기능 제공
   */
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "public/index.html",
    }),
    new ForkTsCheckerWebpackPlugin({
      async: true,
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
      chunkFilename: "main[id].css",
    }),
  ],
};

if (isDev && "plugins" in module.exports) {
  module.exports.plugins.push(new webpack.HotModuleReplacementPlugin());
  module.exports.plugins.push(new ReactRefreshPlugin());
}
