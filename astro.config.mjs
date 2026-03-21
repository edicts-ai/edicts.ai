import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://edicts.ai',
  output: 'static',
  integrations: [
    starlight({
      title: 'Edicts',
      description: 'Ground truth layer for AI agents',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/mssteuer/edicts' },
      ],
      customCss: ['./src/styles/starlight.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Memory Hierarchy', slug: 'guides/memory-hierarchy' },
            { label: 'Best Practices', slug: 'guides/best-practices' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Configuration', slug: 'reference/configuration' },
            { label: 'YAML Schema', slug: 'reference/yaml-schema' },
            { label: 'API', slug: 'reference/api' },
          ],
        },
        {
          label: 'Integrations',
          items: [
            { label: 'OpenClaw', slug: 'integrations/openclaw' },
          ],
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
