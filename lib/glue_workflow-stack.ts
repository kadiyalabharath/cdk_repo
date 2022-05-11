import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { CfnDisk } from 'aws-cdk-lib/aws-lightsail';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as subs from 'aws-cdk-lib/aws-sns-subscriptions';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import { aws_glue as glue } from 'aws-cdk-lib';

export class GlueWorkflowStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'GlueWorkflowQueue', {
      visibilityTimeout: Duration.seconds(300)
    });

    const topic = new sns.Topic(this, 'GlueWorkflowTopic');

    topic.addSubscription(new subs.SqsSubscription(queue));


  }
}
