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

# Invocation URL

When creating a new
[Box Skills application](guide://applications/custom-skills) you will be asked
to supply an `invocation_url`. This URL is the public web address where Box will
send the [event notification payload](guide://skills/handle/payload) when a file
is uploaded, copied, or moved within a folder monitored by the Skills app.

The website or application that is listening for those notifications functions
as a bridge between the file on Box and the system that is being employed to
garner insight from the file, such as the machine learning system.

## Requirements

* The invocation URL should be publicly available. Notifications cannot be sent
  to `localhost` or `127.0.0.1` as this address is not accessible by Box's
  servers.
* The server behind the invocation URL should be listening to HTTP `POST`
  requests. Box Skills will send the event notification via a `POST` request
  using a `JSON` body.

## Hosting Tips & Tricks

There are a number of ways to quickly expose a an application on a public URL so
that Box's servers can use this as the `invocation_url`.

* **A local tunnel** - One of the quickest ways to expose a web application on a
  developer's machine to a public address is by using a local tunnel. Popular
  tunneling tools include [`ngrok`](https://ngrok.com) and
  [`localtunnel`](https://www.npmjs.com/package/localtunnel).
* **Serverless functions** - A great way to set up a server that can handle a
  Box Skill is as a **serverless function**. Box Skills can generate a varied
  amount of invocations depending on the (lack of) activity in the folders being
  observed. Serverless functions such as [AWS Lambda][aws_lambda],
  [Google Cloud Functions][google_functions], or
  [Microsoft Azure Functions][azure_functions] are a natural fit for these kind
  of sporadic events. The serverless functions will only run and be billed when
  the event is being processed.
  ** **Traditional application hosting** - Traditional application hosting
  solutions, such as [Heroku][heroku], [Firebase][firebase], [AWS][aws] or
  [GCP][gcp] are other viable options if serverless technology is not preferred.
  These applications will be hosted on their respective services and have an
  publicly exposed URL for the app that will be used as the invocation URL.

## Application Server details

Typically the application behind the invocation URL will need to perform the
following tasks.

1. Capture the event notification from Box.
2. Send the binary data for the Box file (or its URL) to a processing
   service
3. Listen for the response from the processing service.
4. Format the response from the processing service into a Box metadata
   format.
5. Apply the new metadata back to the file stored on Box.

[aws_lambda]: https://aws.amazon.com/lambda/
[google_functions]: https://cloud.google.com/functions/
[azure_functions]: https://azure.microsoft.com/en-us/services/functions/
[heroku]: https://www.heroku.com/
[firebase]: https://firebase.google.com/
[aws]: https://aws.amazon.com/
[gcp]: https://cloud.google.com/functions/
