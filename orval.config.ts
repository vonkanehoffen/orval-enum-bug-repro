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
    },
    input: {
      target: "./schema.yaml",
    },
  },
});
