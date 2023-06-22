import { defineConfig, presetWebFonts, presetWind, transformerVariantGroup } from 'unocss';

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({
      provider: 'google',
      fonts: { inter: { name: 'Inter' }, mono: { name: 'JetBrains Mono', weights: [700] } },
    }),
  ],
  transformers: [transformerVariantGroup()],
});
