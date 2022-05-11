import { aws_glue as glue } from 'aws-cdk-lib';
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';




const glue_role = 'arn:aws:iam::341561625766:role/service-role/AWSGlueServiceRole-DefaultRole'
const cdk_db = 'cdk-crawler'
const tables = 'cdk-tables'
const s3_target = 's3://bharath-test-bk'


export class Gluecrawlerstack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const cfnCrawler = new glue.CfnCrawler(this, 'MyCfnCrawler', {
            role: glue_role,
            targets: {
                /*catalogTargets: [{
                    databaseName: cdk_db,
                    tables: [tables],
                }],*/

                /*dynamoDbTargets: [{
                  path: 'path',
                }], 
        
                jdbcTargets: [{
                  connectionName: 'connectionName',
                  exclusions: ['exclusions'],
                  path: 'path',
                }],
                mongoDbTargets: [{
                  connectionName: 'connectionName',
                  path: 'path',
                }], */

                s3Targets: [{
                    //connectionName: 'connectionName',
                    //dlqEventQueueArn: 'dlqEventQueueArn',
                    //eventQueueArn: 'eventQueueArn',
                    //exclusions: ['exclusions'],
                    path: s3_target,
                    //sampleSize: 123,
                }],
            },

            // the properties below are optional
            //classifiers: ['classifiers'],
            //configuration: 'configuration',
            //crawlerSecurityConfiguration: 'crawlerSecurityConfiguration',
            databaseName: cdk_db,
            description: 'glue_cdk_crawler',
            name: 'glue_cdk_crawler',
            recrawlPolicy: {
                recrawlBehavior: 'CRAWL_EVERYTHING',
            },
            schedule: {
                scheduleExpression: 'cron(15 12 * * ? *)',
            },
            schemaChangePolicy: {
                deleteBehavior: 'LOG',
                updateBehavior: 'UPDATE_IN_DATABASE',
            },
            tablePrefix: 'cdk_',
            tags: {
                name: 'cdk_crawler'
            }

        })

    }
};
