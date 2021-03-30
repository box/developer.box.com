---
type: quick-start
hide_in_page_nav: true
---

# Using Flags and Bulk Commands

## As User Header

To use the [as-user header][asuser], add `--as-user=USERID` to the end of the
command. 

For example, the following command will create a folder called `Example_Folder`
at the root level in user ID 123456’s account.

```bash
box folders:create 0 Example_Folder --as-user=123456
```

<Message type=warning>
   Only Service Account’s and Admin’s are able to use the as-user header.
   If your application was not authorized with the necessary scopes or you
   configured your CLI to obtain a default token for another user, this call may
   fail. Add `--v` or `--verbose` to your command for verbose error logging. 
</Message> 

## Bulk Commands

Executing bulk commands requires adding `--bulk-file-path=pathtocsv` to
a command, where `pathtocsv` is replaced with a local path to a csv file
containing the necessary information. 

## Summary

* You created a new or have an existing JWT application to associated with the
  CLI, which is authorized by an Admin.
* You downloaded your application's configuration file

<Next>I successfully used a bulk command</Next>

[asuser]: g://authentication/jwt/as-user/