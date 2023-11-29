// uno.config.ts
import {
  defineConfig,
  presetIcons,
  presetWind,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
