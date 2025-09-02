---
type: quick-start
hide_step_number: true
---

# Next steps

You've reached the end of this Quick Start guide. By now you should have taken
the following steps.

1. [Created a new iOS app](g://mobile/ios/quick-start/create-ios-app) in Xcode.
2. [Installed the iOS SDK](g://mobile/ios/quick-start/install-ios-sdk) into your project.
3. [Configured a Box App](g://mobile/ios/quick-start/configure-box-app) so that the iOS SDK can access the Box API.
4. [Made your first API call](g://mobile/ios/quick-start/make-api-call) to the Box API with the iOS SDK.

## Next things to do

To take the next step with your application, the following resources are
recommended.

* [Token Downscoping](g://authentication/tokens/downscope): In this quick start guide you used a developer token to make your first call. To implement a scalable solution you should have a server-side solution to generate downscoped tokens to replace that implementation.
* [Official JWT sample application][sample-jwt]: Bundled with the iOS SDK, this sample application will get you started quickly with a properly structured Box JWT application, which doesn't require user login.
* [Official OAuth 2 sample application][sample-oauth]: Bundled with the iOS SDK, this sample application will get you started quickly with a properly structured Box OAuth 2 application, which requires user login.

[sample-jwt]: https://github.com/box/box-ios-sdk/tree/master/SampleApps/JWTSampleApp
[sample-oauth]: https://github.com/box/box-ios-sdk/tree/master/SampleApps/OAuth2SampleApp