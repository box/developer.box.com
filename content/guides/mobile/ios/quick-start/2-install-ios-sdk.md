---
type: quick-start
hide_in_page_nav: true
---

# Install the iOS SDK

With an iOS application in place, you will need to import the required **Box
iOS SDK** dependencies into your project using one of the available package
manager options.

## Select a package manager to use

<Grid columns='3'>
  <Choose option='ios.pm_type' value='carthage' color='blue'>
    # Carthage

    Carthage is a decentralized dependency manager for Swift
    and Objective-C Cocoa projects. It is open-source and built
    with Swift.
  </Choose>

  <Choose option='ios.pm_type' value='cocoapods' color='none'>
    # CocoaPods

    CocoaPods is a centralized dependency manager for Swift and
    Objective-C Cocoa projects. It is open-source and was built
    with Ruby.
  </Choose>

  <Choose option='ios.pm_type' value='swift' color='blue'>
    # Swift Package Manager

    Included with Swift since version 3.0, the Swift Package
    Manager is a tool for managing the distribution of source
    code, aimed at making it easy to share your code and reuse
    others’ code.
  </Choose>
</Grid>

<Choice option='ios.pm_type' value='carthage' color='blue'>
  # Install the iOS SDK using Carthage

  1. From a terminal window, install Carthage: `brew install carthage`.
    [See here](https://github.com/Carthage/Carthage#installing-carthage)
    for other installation methods.
  2. At the root of your iOS application folder, where the `APPNAME.xcodeproj`
     is located, create a new file named `Cartfile`, without an extension.
  3. Load `Cartfile`, add the **Box iOS SDK** dependency, then save and close
     the file: `git "https://github.com/box/box-ios-sdk.git" ~> 3.0`.
  4. From the terminal, in the folder where the `Cartfile` is present, update
     all dependencies: `carthage update --platform iOS`.

</Choice>

<Choice option='ios.pm_type' value='cocoapods' color='none'>
  # Install the iOS SDK using CocoaPods
</Choice>

<Choice option='ios.pm_type' value='swift' color='blue'>
  # Install the iOS SDK using the Swift Package Manager
</Choice>

## Summary

* You either selected to install the iOS dependencies using Carthage
  * TB
* Or selected to use **CocoaPods** and
  * TBD
* Or selected to use the **Swift Package Manager** and
  * TBD

<Observe option='ios.pm_type' value='carthage,cocoapods,swift'>
  <Next>I have configured a Box app</Next>
</Observe>