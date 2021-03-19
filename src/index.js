/**
 * @flow strict-local
 * @format
 */
("use strict");
import path from "path";

import codeGen, { type TypeSystem } from "./CodeGen.js";
import { exists } from "fs";

const schemas = {
  ts: "./schema/typescriptSchema.ts",
  flow: "./schema/flowSchema.js",
};

const typeSystem = process.argv[2];

if (!typeSystem) {
  throw new Error("ERROR: argument expected(flow/ts) but not found");
}
if (typeSystem !== "ts" && typeSystem !== "flow") {
  throw new Error("ERROR: Invalid type system specified in the argument");
}

const schemaInPath = path.resolve(schemas[typeSystem]);
const outPath = path.resolve("./generated");

codeGen(
  "people",
  schemaInPath,
  ["cpp", "h", "java", "jni_cpp", "jni_h"],
  outPath,
  (typeSystem: TypeSystem)
);
