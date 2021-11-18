import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: true,
    },
  ],
  preserveModules: true,
  plugins: [
   peerDepsExternal(),
   resolve(),
   commonjs(),
   typescript({ useTsconfigDeclarationDir: true }),
 ],
  external: ['react', 'react-dom'],
}
