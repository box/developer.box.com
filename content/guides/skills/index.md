---
rank: 170
related_endpoints: []
related_guides: []
related_pages: []
required_guides:
  - applications/custom-skills
related_resources: []
alias_paths: []
---

# Box Skills

Box Skills are designed to allow the coupling of custom processing services for
files uploaded in Box, with the intent of enhancing the underlying metadata of
the file. The benefit towards this system is that it permits the storage of
rich information about any files, which may then be used to automated tasks and
future processes.

In general the end-to-end process of a Skills application follows the following
flow:

| Step | Description | Information Guide |
| ------ | ------ | ------ |
| App Setup | A Custom Skills app is created to listen for upload events within
the entire enterprise or one or more folders. |
[App Setup Guide](guide://applications/custom-skills/setup) |
| Invocation URL Setup | When the Custom Skills app is created an invocation
URL is set, which Box will notify when a new file is uploaded. |
[Invocation URL Guide](guide://skills/invocation-url) |
| Parse Event | When a file is uploaded an event payload is sent to your
invocation URL. This provides tokens to access the uploaded file in Box and
store metadata back onto the file. |
[Parse Skills Payload Guide](guide://skills/handle/payload) |
| Send File for Processing | The file content is sent to an external service
for insight processing, such as a machine learning system. |
[Sample Machine Learning Apps](guide://skills/examples) |
| Store Metadata | Once the processing system is complete, those insights are
stored back on the uploaded file as metadata. |
[Writing Metadata to File Guide](guide://skills/handle/metadata) |

<Message type='notice'>
  To simplify your integration with Box Skills, a
  [Skills Kit](guide://skills/kit) has been made available to obfuscate many
  complexities of the above steps. The Skills Kit is currently only available
  in Node.
</Message>
