import { defineConfig } from "orval";

export default defineConfig({
  api: {
    output: {
      mode: "tags-split",
      target: "./generated/api.ts",
      schemas: "./generated/model",
      client: "react-query",
      mock: false,
      clean: true,
      override: {
        // mutator: {
        //   path: './src/api/axiosInstance.ts',
        //   name: 'customInstance',
        // },
      },
    },
    input: {
      target: "./schema.yaml",
    },
  },
});
``;
