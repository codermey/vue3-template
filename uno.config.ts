// uno.config.ts
import {
  defineConfig,
  presetIcons,
  presetWind,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  shortcuts: { 'bg-image': 'w-full h-full bg-cover bg-center-top bg-no-repeat' },
  presets: [
    presetWind(),
    presetRemToPx(),
    presetAttributify(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
