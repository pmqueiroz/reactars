import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'

import package from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: package.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: true,
    },
  ],
  plugins: [
   peerDepsExternal(),
   resolve(),
   commonjs(),
   typescript({ useTsconfigDeclarationDir: true })
 ],
  external: ['react', 'react-dom'],
}
