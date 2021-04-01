---
type: quick-start
hide_in_page_nav: true
---

# Using Flags and Bulk Commands

## Flags

Flags provide additional, optional functionality to use with a CLI command. As
mentioned in the previous step, `--help` is an example of a flag. 

To see all valid flags for a command, visit the [GitHub repository][github].

For example, look at the command documentation for [deleting folders][df]. You
will see a list of flags to use with this command, such as `--recursive` or
 `--force`. 

## As-User Header

To use the [as-user header][asuser], add `--as-user=USERID` flag to the end of
the command. 

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

A csv file can be used to execute commands in bulk. Each row of the spreadsheet
is treated as an individual API call. 

To execute a bulk command, use the flag `--bulk-file-path=pathtoacsv`, where
`pathtoacsv` is replaced with a local path of a csv file
containing the necessary information. 

As an example, let's create some folders using the command: 

```bash
box folders:create --bulk-file-path=pathtoacsv
```

<Message type=tip>
   You can drag the csv file from your finder window/file explorer to the
   terminal/command line window to auto-populate the path.
</Message>

To determine column name for your csv, visit the [GitHub repository][github]
documentation and look at the argument names or use the `--help` flag. In this
case, these are `PARENTID` and `NAME`. Here is a csv [template][csv] for this
example create folders command.

<!--alex ignore executing-->
Executing the command below created three folders at the root level, 0, of the
Service Account's folder tree.

```bash
box folders:create --bulk-file-path=/Users/ExampleUser/Desktop/bulkcreatefolders.csv
``` 

## Bulk Commands with Flags

Passing a flag with the command will automatically apply to it to each row in
the csv. You can also use flags in the csv or combine the two. For example, the
command below creates collaborations for each folder ID passed in the csv,
but does notify each user. However, if you include a column for
`--notify` and only include it for some rows, it will override the flag
passed in the command and notify those users.

```bash
box collaborations:create --bulk-file-path=/Users/ExampleUser/Desktop/bulkcollab.csv --no-notify
``` 

## Summary

* You used a flag with a CLI command

<Next>I know how to use flags and bulk commands</Next>

[github]: https://github.com/box/boxcli#command-topics-1
[df]: https://github.com/box/boxcli/blob/master/docs/folders.md#box-foldersdelete-id
[asuser]: g://authentication/jwt/as-user/
[csv]: https://cloud.box.com/s/0jowjhf85dnnjt9i5pd9va1fu54i1m0m