---
rank: 1
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths: []
category_id: security
subcategory_id: null
is_index: false
id: security/device-pinners
type: guide
total_steps: 1
sibling_id: security
parent_id: security
next_page_id: security
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/security/device-pinners.md
---
# Device Pinners

Building on the login tracking feature – which allows admins to set limits on
the number of devices a user can access Box from and sends alerts to them and
the user whenever a new device is used to access that Box account – Box has
additional device management functionality to increase security when accessing
Box on mobile or desktop devices: device pinning.

To learn more about device pinning, please see our [community
documentation][community].

## APIs

The Box API allows for device pins to be inspected and removed.

* [`GET /enterprise/:id/device_pinners`](e://get-enterprises-id-device-pinners):
  Retrieves all the device pins within an enterprise.
* [`GET /device_pinners/:id`](e://get-device-pinners-id): Retrieves information
  about an individual device pin.
* [`DELETE /device_pinners/:id`](e://delete-device-pinners-id): Deletes an
  individual device pin.

[community]: https://community.box.com/t5/How-to-Guides-for-Admins/Device-Pinning-Settings/ta-p/172