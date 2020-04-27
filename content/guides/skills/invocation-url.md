---
rank: 1
related_endpoints: []
related_guides:
  - skills/
  - skills/handle/payload
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
---

# Box Skills Invocation URL

When creating a new
[Box Skills application](guide://applications/custom-skills) you will be asked
to supply an invocation URL. The invocation is a location where Box will
send an [event notification payload](guide://skills/handle/payload) when a file
is uploaded, copied, or moved within a folder monitored by the Skills app.

This website or application that is listening for those notifications functions
as a bridge between the file on Box and the system that is being employed to
garner insight from the file, such as the machine learning system.

## Invocation URL Requirements

The invocation URL should:

- Be publicly available. Notifications cannot be sent to `localhost`.
- Have code that is listening for `HTTP POST` requests directly to the URL. Box
  Skills will send the event notification via an `HTTP POST request.

## Common Hosting Methods Behind an Invocation URL

There are a number of common hosting methods that are employed for an
application that is behind the invocation URL.

Typically this middleware service will need to do the following:

- Capture an event notification from Box.
- Download the file from Box and send it to the processing system.
- Listen for the response from the machine learning system.
- Format the response from the machine learning system into a Box metadata
  format.
- Apply the new metadata back to the file stored on Box.

Depending on security requirements and approved services at your company, we
typically see these services hosted in a few ways:

<!-- markdownlint-disable line-length -->

| Method                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Self Hosted                  | When external hosting services are not approved for use within the company, or where all application functions need to be hosted within your own servers. In this instance you will expose a URL publicly, which points to code hosted on your own servers.                                                                                                                                                                                             |
| Serverless Function          | Due to the nature of the sporadic event notifications sent through Skills, serverless functions such as [AWS Lambda][aws_lambda], [Google Cloud Functions][google_functions], or [Microsoft Azure Functions][azure_functions] are a natural fit. The serverless function will only run, and be billed, when the event is being processed. The serverless function will be set up with a publicly exposed URL, which will be used as the invocation URL. |
| External Application Hosting | External application hosting solutions, such as [Heroku][heroku] or [Firebase][firebase], are other viable options if serverless technology is not preferred. These applications will be hosted on their respective services and have an publicly exposed URL for the app that will be used as the invocation URL.                                                                                                                                      |

<!-- markdownlint-enable line-length -->

[aws_lambda]: https://aws.amazon.com/lambda/
[google_functions]: https://cloud.google.com/functions/
[azure_functions]: https://azure.microsoft.com/en-us/services/functions/
[heroku]: https://www.heroku.com/
[firebase]: https://firebase.google.com/
