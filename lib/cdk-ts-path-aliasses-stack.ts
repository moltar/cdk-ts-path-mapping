import * as cdk from '@aws-cdk/core';
import { ID } from './inner-dir'

export class CdkTsPathAliassesStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, ID, props);

    // The code that defines your stack goes here
  }
}
