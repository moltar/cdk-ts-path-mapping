# Demo of CDK TypeScript Project with TypeScript Path Mapping Support

This project demonstrates how to setup a CDK project with the TypeScript
[path mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping)
support.

The setup makes use of [`tsconfig-paths`](https://www.npmjs.com/package/tsconfig-paths) package.

Look through the commit history to see the required changes.

## Option 1: Project Level

Use global `ts-node` configuration in `tsconfig.json` to apply path mapping resolution for the
entire project.

See commit [`0f351d194007797b8d12b3540f232ff43c45366d`](https://github.com/moltar/cdk-ts-path-mapping/commit/0f351d194007797b8d12b3540f232ff43c45366d)

## Option 2: Just CDK

If you only want to apply path mapping resolution for CDK, then you can simply make a small
change to `cdk.json` app command.

See commit [`c6a4993692e5a74d3884f786d8eb282181f0ed92`](https://github.com/moltar/cdk-ts-path-mapping/commit/c6a4993692e5a74d3884f786d8eb282181f0ed92)
