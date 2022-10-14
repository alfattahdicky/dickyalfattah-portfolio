const path = require('path')
import {defineConfig} from 'vite'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: "../dist"
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  },
  plugins:[
    viteImagemin({
      optipng:{
        optimizationLevel: 7
      },
      pngquant:{
        quality:[0.7, 0.8],
        speed: 4
      },
      svgo:{
        plugins:[
          {
            name: 'removeViewBox',
          },
          {
            name:"removeEmptyAttrs",
            active: false,
          }
        ]
      }
    })
  ]
})