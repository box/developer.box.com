---
type: quick-start
hide_in_page_nav: true
category_id: mobile
subcategory_id: mobile/ios
is_index: false
id: mobile/ios/quick-start/make-api-call
rank: 4
total_steps: 5
sibling_id: mobile/ios/quick-start
parent_id: mobile/ios/quick-start
next_page_id: mobile/ios/quick-start/next-steps
previous_page_id: mobile/ios/quick-start/configure-box-app
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/mobile/ios/quick-start/4-make-api-call.md
---
# Make an API call

With our Box and iOS applications created and configured with the **Box iOS
SDK** we can now make our first call to Box APIs.

Using our blank iOS application, we will create a button to trigger
a request to Box to fetch the name of the currently authenticated user.

<Message warning>

Using a blocking actions as we use in these examples is slow. In a production
app these blocking actions would need to be replaced with proper task
delegation and non-blocking actions.

</Message>

## Create a button

Within your Swift application in Xcode, load `ContentView.swift`. At the top of
the file you will see a `struct` for `ContentView`, within which is a basic
string that will be output to your iOS application if you run the app in an
emulator.

```swift
import SwiftUI

struct ContentView: View {
  var body: some View {
    Text("Hello, World!")
  }
}
```

We'll first replace the `Text` output line with a button to be able to trigger
off the call to get the current user. Replace that line with the below button.

```swift
Button(action: {
  // Perform some action
}) {
  Text("Click to get current user")
}
.padding(10)
.cornerRadius(20)
.foregroundColor(.white)
.background(Color.blue)
```

Our next step is to add an an action for the button which will fetch a user's
details from Box.

## Add an API call button action

When a user clicks the button, we want to fetch the user's details. To achieve
this we need to do two things, add the import for the **Box iOS SDK** and add
the button action to make the call.

At the top of the `ContentView.swift` file, add `import BoxSDK` with the other
import statement.

Next, within the button action, where we currently have a comment placeholder,
add a call to the iOS SDK to fetch the current user. When the API call
completes it will print an authentication message to the developer console. For
ease of implementation, we have a blocking `sleep(5)` call in place in order to
test that the iOS SDK can make calls from our iOS SDK by providing enough time
for the request to complete.

Replace `{{YOUR DEVELOPER TOKEN}}` with your developer token.

```swift
let client = BoxSDK.getClient(token: "{{YOUR DEVELOPER TOKEN}}")

client.users.getCurrent(fields:["name", "login"]) { (result: Result<User,
  BoxSDKError>) in
  guard case let .success(user) = result else {
      print("Error getting user information")
      return
  }
  print("Authenticated as \(user.name)")
}

sleep(5)
```

Build and run your sample application in the iOS emulator.

<Message warning>

If you run this code an hour or more after you created the developer
token in the last step, you will need to revoke and generate a new developer
token using the same method in the
[previous step](g://mobile/ios/quick-start/configure-box-app) as the
developer token will only persist for 60 minutes.

</Message>

Once the application loads in the emulator you should see the button we
created. Click it to start the API request.

Within the Xcode developer console you should see the API request and response,
with the last line showing the user print statement that we specified.

```bash
◁ Status code: 200: no error
◁ Headers:
    ◁ Cache-Control, Value: no-cache, no-store
    ◁ BOX-REQUEST-ID, Value: 1c55151238444132eca16b4c2346d005
    ◁ Transfer-Encoding, Value: Identity
    ◁ content-type, Value: application/json
    ◁ Connection, Value: keep-alive
    ◁ Strict-Transport-Security, Value: max-age=31536000
◁ Body: {"type":"user","id":"123456789","name":"Test
          User","login":"testuser@test.com"}

Authenticated as Optional("Test User")
```

<Message notice>

If you don't see the Xcode developer console, from the menu click **View** ->
**Debug Area** -> **Activate Console**

</Message>

Congratulations, you've now configured the **Box iOS SDK** and have made your
first call to the Box API.

## Summary

* You added a button to your blank iOS application
* You added a request to fetch the current user using the iOS SDK

<Next>

I made an API call

</Next>