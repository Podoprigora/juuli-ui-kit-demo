import * as path from "path";

const config = {
  webpack: {
    configure: {
      resolve: {
        alias: {
          "~": path.resolve("./src"),
        },
      },
    },
  },
};

export default config;
