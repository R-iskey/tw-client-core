const { withNx } = require('@nx/rollup/with-nx');
const url = require('@rollup/plugin-url');
const svg = require('@svgr/rollup');
// const peerDepsExternal =  require('rollup-plugin-peer-deps-external');

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: '../../dist/packages/ui',
    tsConfig: './tsconfig.lib.json',
    compiler: 'babel',
    external: ['react', 'react-dom', 'react/jsx-runtime', '@tw/icons'],
    format: ['esm'],
    assets: [{ input: '.', output: '.', glob: 'README.md' }],
  },
  {
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    plugins: [
      // peerDepsExternal(),
      svg({
        svgo: false,
        titleProp: true,
        ref: true,
      }),
      url({
        limit: 10000, // 10kB
      }),
    ],
  }
);
