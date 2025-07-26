import { defineConfig } from 'vite';
import VanMdx from "van-mdx/vite";
import path from "path"
export default defineConfig({
  resolve: {
    alias: {
      '@layouts' : path.resolve(__dirname, 'src/layouts'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@contents': path.resolve(__dirname, 'src/contents'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    }
  },
  plugins: [
    VanMdx()
  ]
});
