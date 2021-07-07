---
rank: 135
---

# Webhooks

Webhooks allow you to monitor Box content for events and receive notifications
to a URL of your choice when they occur. For example, a workflow may include
waiting for a file to be downloaded to delete a shared link. A webhook can be
set on the file and upon notification of the download event, a script can launch
to make an API call to delete the shared link. 

## Versions

There are two types of webhooks: v1 and v2, which are compared below.

<!-- markdownlint-disable line-length -->
    
| V1                                                                    | V2                                                                   |
| --------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Created in the Developer Console                                      | Created with an API call                                             |
| Set at the root level                                                 | Set on specific files/folders, but cannot set at the root            | 
| Select from 14 event triggers                                         | Select from 30+ event triggers                                       |
| Provides selected callback parameters                                 | Payload includes full object response & additional context info      |
| No retry mechanism after notification delivery failure                | Retries up to 10 times after notification delivery failure           |
| Does not support payload verification                                 | Supports payload verification                                        |
| Notification URL can be HTTP or HTTPS                                 | Notification URL must be HTTPS                                       |
| Does not scale well                                                   | Scales well and has increased reliability                            |
<!-- markdownlint-enable line-length -->