---
type: quick-start
hide_in_page_nav: true
category_id: tooling
subcategory_id: tooling/cli
is_index: false
id: tooling/cli/quick-start/flags-and-bulk-commands
rank: 4
total_steps: 5
sibling_id: tooling/cli/quick-start
parent_id: tooling/cli/quick-start
next_page_id: tooling/cli/quick-start/next-steps
previous_page_id: tooling/cli/quick-start/build-commands-help
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/cli/quick-start/4-flags-and-bulk-commands.md
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

Executing bulk commands requires adding `--bulk-file-path=pathtoacsv` to
a command, where `pathtoacsv` is replaced with a local path of a csv file
containing the necessary information.

For example, lets bulk create some few folders using the command:

```bash
box folders:create --bulk-file-path=pathtoacsv
```

<Message type=tip>

You can drag the csv file from your finder window/file explorer to the
terminal/command line window to auto-populate the path.

</Message>

To figure out the names of the columns, visit the [GitHub repository][github]
documentation and look at the argument names or use the `--help` flag. In this
case, these are `PARENTID` and `NAME`, which are the two column names for the
csv file. Here is a csv [template][csv] for this command.

<!--alex ignore executing-->

Executing the command below created three folders at the root level, 0, of the
Service Account's folder tree.

```bash
box folders:create --bulk-file-path=/Users/ExampleUser/Desktop/bulkfolders.csv 
```

## Summary

* You used a flag with a CLI command

<Next>

I know how to use flags and bulk commands

</Next>

[github]: https://github.com/box/boxcli#command-topics-1
[df]: https://github.com/box/boxcli/blob/master/docs/folders.md#box-foldersdelete-id
[asuser]: g://authentication/jwt/as-user/
[csv]: https://cloud.box.com/s/0jowjhf85dnnjt9i5pd9va1fu54i1m0m