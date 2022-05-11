#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { GlueWorkflowStack } from '../lib/glue_workflow-stack';

const app = new cdk.App();
new GlueWorkflowStack(app, 'GlueWorkflowStack');
