import ts from "rollup-plugin-ts";
import pkg from "./package.json";
import { builtinModules } from "module";

export default {
  input: "index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    ts({
      /* Plugin options */
    }),
  ],
  external: [
    ...builtinModules,
    ...(pkg.dependencies == null ? [] : Object.keys(pkg.dependencies)),
    ...(pkg.devDependencies == null ? [] : Object.keys(pkg.devDependencies)),
    ...(pkg.peerDependencies == null ? [] : Object.keys(pkg.peerDependencies)),
  ],
};
