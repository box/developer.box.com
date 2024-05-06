---
rank: 2
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths: []
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

* [`GET /enterprise/:id/device_pinners`](e://get-enterprises-id-device-pinners): Retrieves all the device pins within an enterprise.
* [`GET /device_pinners/:id`](e://get-device-pinners-id): Retrieves information about an individual device pin.
* [`DELETE /device_pinners/:id`](e://delete-device-pinners-id): Deletes an individual device pin.

<!-- i18n-enable localize-links -->
[community]: https://support.box.com/hc/en-us/articles/360043693814-Device-Pinning-Settings
<!-- i18n-disable localize-links -->
