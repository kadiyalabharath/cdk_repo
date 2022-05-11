#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { Gluecrawlerstack } from '../lib/glue_crawler_stack';
//import { GlueWorkflowStack } from '../lib/glue_workflow-stack';

const app = new cdk.App();
//new GlueWorkflowStack(app, 'GlueWorkflowStack');
new Gluecrawlerstack(app, 'Gluecrawlerstack');