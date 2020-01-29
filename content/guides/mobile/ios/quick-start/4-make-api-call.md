---
type: quick-start
hide_in_page_nav: true
---

# Make an API call

With our Box and iOS applications created and configured with the **Box iOS
SDK** we can now make our first call to Box APIs.

Using our blank iOS application, we will create a button to trigger
a request to Box to fetch the name of the currently authenticated user.

<Message warning>
  As you integrate Box API calls into your iOS app, this blocking method
  should be replaced with proper task delegation and non-blocking actions.
</Message>

## Create a button 

Within your Swift application in Xcode, load `ContentView.swift`. At the top of
the file you will see a `struct` for `ContentView`, within which is a basic
string that will be output to your iOS application if you run the app in an
emulator.

<ImageFrame border center>
  ![ContentView struct](./first-call-contentview.png)
</ImageFrame>

We'll first replace the `Text` output line with a button to be able to trigger
off the call to get the current user. Replace that line with the below button.

```js
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

Our next step is to add an an action for the button, which will be our API call
to Box.

## Add an API call button action

We need to do two things add add the call to the Box API, add the import for
the **Box iOS SDK** and add the button action to make the call. 

At the top of the `ContentView.swift` file, add `import BoxSDK` with the other
import statement.

Next, within the button action, where we currently have a comment placeholder,
add a call to the iOS SDK to fetch the current user. When the API call
completes it will print an authentication message to the developer console. For
ease of implementation, we have a blocking `sleep(5)` call in place in order to
test that the iOS SDK can make calls from our iOS SDK by providing enough time
for the request to complete.

Replace `{{YOUR DEVELOPER TOKEN}}` with your developer token.

```js
// Authenticate new Box Client
let client = BoxSDK.getClient(token: "{{YOUR DEVELOPER TOKEN}}")

// Get currently authenticated user
client.users.getCurrent(fields:["name", "login"]) { (result: Result<User,
  BoxSDKError>) in
  guard case let .success(user) = result else {
      print("Error getting user information")
      return
  }
  print("Authenticated as \(user.name)")
}

// Wait for end of API request process
sleep(5)
```

Build and run your sample application in the iOS emulator. 

<Message warning>
  If you run this code an hour or more after you created the developer
  token in the last step, you will need to revoke and generate a new developer
  token using the same method in the
  [last step](g://mobile/ios/quick-start/configure-box-app/) as the developer
  token will only persist for 60 minutes.
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
    ◁ Content-Type, Value: application/json
    ◁ Connection, Value: keep-alive
    ◁ Strict-Transport-Security, Value: max-age=31536000
◁ Body: {"type":"user","id":"123456789","name":"Test
          User","login":"testuser@test.com"}

Authenticated as Optional("Test User")
```

<Message notice>
  If you don't see the Xcode developer console, from the menu click `View` ->
  `Debug Area` -> `Activate Console` 
</Message>

Congratulations, you've now configured the **Box iOS SDK** and have made your
first call to the Box API.

## Summary

* You added a button to your blank iOS application
* You added a request to fetch the current user using the iOS SDK

<Next>I made an API call</Next>