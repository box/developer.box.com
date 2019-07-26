---
rank: 1
related_endpoints:
  - post_folders_id
related_guides:
  - basics/folders/create-a-folder
  - basics/folders/remove-a-folder
required_guides:
  - basics/folders/create-a-folder
  - basics/folders/remove-a-folder
---

# Parse a webhook

Testing custom tabs

`console.log('!')`

<Samples id='post_folders_id'></Samples>

<Tabs>
  <Tab title='node'>

```js
client.folders.restoreFromTrash(
	'22222',
	{
		// New name in case of conflict
		name: 'New Name',
		// Folder will be placed in this parent folder if the original parent no longer exists
		parent_id: '0'
	})
	.then(restoredFolder => {
		/* trashedFolder -> {
			type: 'folder',
			id: '22222',
			sequence_id: '1',
			etag: '1',
			name: 'Old Files',
			created_at: '2013-05-06T22:37:30-07:00',
			modified_at: '2013-05-06T22:39:08-07:00',
			description: '',
			size: 18482,
			path_collection: 
			{ total_count: 1,
				entries: 
				[ { type: 'folder',
					id: '0',
					sequence_id: null,
					etag: null,
					name: 'All Files' } ] },
			created_by: 
			{ type: 'user',
				id: '33333',
				name: 'Example User',
				login: 'user@example.com' },
			modified_by: 
			{ type: 'user',
				id: '33333',
				name: 'Example User',
				login: 'user@example.com' },
			trashed_at: null,
			purged_at: null,
			content_created_at: '2013-05-06T22:37:30-07:00',
			content_modified_at: '2013-05-06T22:39:08-07:00',
			owned_by: 
			{ type: 'user',
				id: '33333',
				name: 'Example User',
				login: 'user@example.com' },
			shared_link: null,
			folder_upload_email: null,
			parent: 
			{ type: 'folder',
				id: '0',
				sequence_id: null,
				etag: null,
				name: 'All Files' },
			item_status: 'active' }
		*/
	});
```

  </Tab>
  <Tab title='.NET'>

```js
client.folders.restoreFromTrash(
	'22222',
	{
		// New name in case of conflict
		name: 'New Name',
		// Folder will be placed in this parent folder if the original parent no longer exists
		parent_id: '0'
	})
	.then(restoredFolder => {
		/* trashedFolder -> {
			type: 'folder',
			id: '22222',
			sequence_id: '1',
			etag: '1',
			name: 'Old Files',
			created_at: '2013-05-06T22:37:30-07:00',
			modified_at: '2013-05-06T22:39:08-07:00',
			description: '',
			size: 18482,
			path_collection: 
			{ total_count: 1,
				entries: 
				[ { type: 'folder',
					id: '0',
					sequence_id: null,
					etag: null,
					name: 'All Files' } ] },
			created_by: 
			{ type: 'user',
				id: '33333',
				name: 'Example User',
				login: 'user@example.com' },
			modified_by: 
			{ type: 'user',
				id: '33333',
				name: 'Example User',
				login: 'user@example.com' },
			trashed_at: null,
			purged_at: null,
			content_created_at: '2013-05-06T22:37:30-07:00',
			content_modified_at: '2013-05-06T22:39:08-07:00',
			owned_by: 
			{ type: 'user',
				id: '33333',
				name: 'Example User',
				login: 'user@example.com' },
			shared_link: null,
			folder_upload_email: null,
			parent: 
			{ type: 'folder',
				id: '0',
				sequence_id: null,
				etag: null,
				name: 'All Files' },
			item_status: 'active' }
		*/
	});
```

  </Tab>
</Tabs>