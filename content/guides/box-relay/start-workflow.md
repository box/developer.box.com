---
rank: 2
---

# Start Workflow

The [start workflow endpoint][start] can be used to start a flow within a
workflow of type `WORKFLOW_MANUAL_START`. Other flow types cannot be started. 
If you have the flow set up to accept configurations at runtime, you must send 
in the optional `outcomes` array object. 

<Samples id='post_workflows_id_start' />

[start]: e://post-workflows-id-start