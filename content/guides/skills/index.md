---
rank: 170
alias_paths: 	
  - /docs/configure-a-box-skill	
related_endpoints:
  - post_files_id_metadata_global_boxSkillsCards
---

# Box Skills

Box Skills are designed to allow custom processing of files uploaded to Box,
with the intent of enhancing the underlying metadata of the file. The benefit
towards this system is that it permits the storage of rich information about any
files, which may then be used to automated tasks and future processes.

The end-to-end process of a Skills application is as follows.

1. [Setup up an app](guide://applications/custom-skills/setup) - Create a
   **Custom Skills**  Box application that listens for files being uploaded
   within the entire enterprise or one or more folders.   
2. [Configure the `invocation_url`](guide://skills/invocation-url) - After
   creating the **Custom Skills** app, an `invocation_url` will need to be
   configured. This URL will be called every time a new file is uploaded to Box.
3. [Parse the event payload](guide://skills/handle/payload) - When a file is
   uploaded, copied, or moved into a folder that the Box Skill listens to, an
   event payload is sent to the `invocation_url`. This payload contains two
   **Access Tokens** that can be used to access the uploaded file in Box and
   store metadata back onto the file.        
4. [Send the file for processing](guide://skills/examples) - The service that
   handles the Skill payload sends the file URL or file content to an external
   service for processing. This service can be a third party machine learning
   system, or an in-house service.
5. [Store the metadata on the file](guide://skills/handle/metadata) - Once the
   processing service has extracted the metadata for the file, those insights
   can be stored back on the uploaded file as custom metadata.
   
<Message>

To simplify your integration with Box Skills, a [Skills
Kit](guide://skills/kit) has been made available to obfuscate many
complexities of the above steps. The Skills Kit is currently only available in
Node.

</Message>
