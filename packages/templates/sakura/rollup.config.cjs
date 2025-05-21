const { withNx } = require('@nx/rollup/with-nx');
const url = require('@rollup/plugin-url');
const svg = require('@svgr/rollup');
const copy = require('rollup-plugin-copy');
const peerDepsExternal =  require('rollup-plugin-peer-deps-external');

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: '../../../dist/packages/templates/sakura',
    tsConfig: './tsconfig.lib.json',
    compiler: 'babel',
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    format: ['esm'],
    assets: [{ input: '.', output: '.', glob: 'README.md' }],
  },
  {
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    plugins: [
      peerDepsExternal(),
      svg({
        svgo: false,
        titleProp: true,
        ref: true,
      }),
      url({
        limit: 10000, // 10kB
      }),
      copy({
        targets: [
          { src: 'src/styles/global.css', dest: '../../../dist/packages/templates/sakura/styles' },
        ],
      }),
    ],
  }
);
