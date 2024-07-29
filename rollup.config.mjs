import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'AlgorithmVisualizer',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
  ],
};
