---
rank: 2
---

# Start Workflow

The [start workflow endpoint][start] can be used to start a flow within a
workflow of type `WORKFLOW_MANUAL_START`. Other flow types cannot be started. 
If you have the flow set up to accept configurations at runtime, you must send 
in the optional `outcomes` array object. 

<Message type='notice'>
  For more information on how to use this endpoint, refer to our [blog][blog] 
  post.
</Message>

<Samples id='post_workflows_id_start' />

[start]: e://post-workflows-id-start
<!-- i18n-enable localize-links -->
[blog]: https://medium.com/box-developer-blog/manual-start-workflow-api-box-relay-4f8d0f51b7a4
<!-- i18n-disable localize-links -->
