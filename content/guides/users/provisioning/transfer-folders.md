---
rank: 5
related_endpoints:
  - put_users_id_folders_id
related_guides:
  - users/provisioning/deprovision-user
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
---

# Transfer Files & Folders

As part of user account deprovisioning, a common requirement is to transfer all
files and folders that are stored within the user account to another user
account or into a location for long term storage, such as into the service
account.

There are two general methods that are employed to accomplish this within Box:

* Using the direct [transfer owned folders](endpoint://put_users_id_folders_id)
API, which will move all content from one user directly to another.
* Using the collaboration transfer method to change ownership of one file or
folder at a time from one user to another.

## Transfer Owned Folders API Method

The [transfer owned folders endpoint](endpoint://put_users_id_folders_id) is
designed to move the entirety of content owned by one user over to another user.

<Message type='notice'>
  The transfer owned folders API is performed as a synchronous process, which
  might lead to a slow response when the source user has a large number of
  items in all of its folders.
</Message>

To call the transfer endpoint, you will supply the user ID to transfer from and
the user ID to transfer to.

<Samples id='put_users_id_folders_id' />

## Collaboration Transfer Method

The collaboration transfer method is a process that uses the
[collaboration endpoint](endpoint://post_collaborations) to change the
ownership of a single file or folder from one user to another instantaneously.

<Message type='notice'>
  This method will perform an instantaneous transfer of ownership of a single
  file or folder, but **cannot** be used to transfer the root (all files and
  folders) from one user to another.
</Message>

The general process, between `transfer_from_user` to `transfer_to_user`, will
follow these steps:

### Add Transfer To User as Co-Owner

The first step is to add the `transfer_to_user` account as a collaborator with
`co-owner` access on the file or folder that should be transferred.

Making the call as the `transfer_from_user` account, add the `transfer_to_user`
as a co-owner using the
[add collaboration endpoint](endpoint://post_collaborations).

<Samples id='post_collaborations' />

### Fetch Collaboration ID as Transfer To User

The next step is make a request to get the collaboration information, making
the request as the `transfer_to_user` account. The collaboration object
returned will include a collaboration ID, which is used for the last step.

Making the call as the `transfer_to_user` account, get the collaboration on the
file or folder ID being transferred, using the
[get collaboration endpoint](endpoint://get_collaborations_id). Capture the
collaboration ID.

<Sample id='get_collaborations_id' />

### Remove Transfer From User as Owner

The final step is to remove the `transfer_from_user` account as an owner of the
file or folder, which is accomplished using the
[delete collaboration endpoint](endpoint://delete_collaborations_id).

Making call as the `transfer_to_user` account, remove the `transfer_from_user`
as a collaborator on the file or folder.

<Sample id='delete_collaborations_id' />

The file or folder is now owned by the `transfer_to_user` account, and the
`transfer_from_user` account no longer has access.
