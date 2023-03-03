export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "amazonrekognitionidv6570cbea": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        },
        "userPoolGroups": {
            "adminGroupRole": "string",
            "poweruserGroupRole": "string",
            "viewerGroupRole": "string"
        }
    },
    "function": {
        "idvworkflowfn": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "S3Triggerb6cacc90": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "storage": {
        "idvimagebucket": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}