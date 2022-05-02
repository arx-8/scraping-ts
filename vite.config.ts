import path from "path"
import { defineConfig } from "vite"

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  resolve: {
    // for absolute path import
    alias: [{ find: "src", replacement: path.resolve(__dirname, "src") }],
  },
})
