const index = require(process.cwd() + "/index.js");
const inputJSON = {
    "body": "{\"assessment_name\": \"Assessment from seperate lambda modified\",\"assessment_description\": \"Description for assessment\",\"assessment_type_id\": 1,\"version\": 1,\"created_by\": 1,\"modified_by\": 1}",
    "resource": "/assessment/{id}",
    "requestContext": {
      "resourceId": "123456",
      "apiId": "1234567890",
      "resourcePath": "/{proxy+}",
      "httpMethod": "POST",
      "requestId": "c6af9ac6-7b61-11e6-9a41-93e8deadbeef",
      "accountId": "123456789012",
      "identity": {
        "apiKey": null,
        "userArn": null,
        "cognitoAuthenticationType": null,
        "caller": null,
        "userAgent": "Custom User Agent String",
        "user": null,
        "cognitoIdentityPoolId": null,
        "cognitoIdentityId": null,
        "cognitoAuthenticationProvider": null,
        "sourceIp": "127.0.0.1",
        "accountId": null
      },
      "stage": "prod"
    },
    "queryStringParameters": {
      "foo": "bar"
    },
    "headers": {
      "Via": "1.1 08f323deadbeefa7af34d5feb414ce27.cloudfront.net (CloudFront)",
      "Accept-Language": "en-US,en;q=0.8",
      "CloudFront-Is-Desktop-Viewer": "true",
      "CloudFront-Is-SmartTV-Viewer": "false",
      "CloudFront-Is-Mobile-Viewer": "false",
      "X-Forwarded-For": "127.0.0.1, 127.0.0.2",
      "CloudFront-Viewer-Country": "US",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Upgrade-Insecure-Requests": "1",
      "X-Forwarded-Port": "443",
      "Host": "1234567890.execute-api.us-east-1.amazonaws.com",
      "X-Forwarded-Proto": "https",
      "X-Amz-Cf-Id": "cDehVQoZnx43VYQb9j2-nvCh-9z396Uhbp027Y2JvkCPNLmGJHqlaA==",
      "CloudFront-Is-Tablet-Viewer": "false",
      "Cache-Control": "max-age=0",
      "User-Agent": "Custom User Agent String",
      "CloudFront-Forwarded-Proto": "https",
      "Accept-Encoding": "gzip, deflate, sdch"
    },
    "pathParameters": {
      "id": 6
    },
    "httpMethod": "PUT",
    "stageVariables": {
      "baz": "qux"
    },
    "path": "/assessment/2",
    "succeed" : (response)=>{
      console.log("response : ",response);
    }
  }

index.handler(inputJSON,inputJSON,function(error,success){
      if(error){
          console.log("error : ",error);
      }
      console.log("success : ", success)
  })