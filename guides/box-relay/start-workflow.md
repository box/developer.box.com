---
rank: 2
category_id: box-relay
subcategory_id: null
is_index: false
id: box-relay/start-workflow
type: guide
total_steps: 2
sibling_id: box-relay
parent_id: box-relay
next_page_id: box-relay
previous_page_id: box-relay/get-workflows
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-relay/start-workflow.md
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

<Samples id='post_workflows_id_start' >

</Samples>

[start]: e://post-workflows-id-start
[blog]: https://medium.com/box-developer-blog/manual-start-workflow-api-box-relay-4f8d0f51b7a4