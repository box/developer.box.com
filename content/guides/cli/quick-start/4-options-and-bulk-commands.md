---
type: quick-start
hide_in_page_nav: true
---

# Using Options and Bulk Commands

<YouTube id='WXkBctPosLE' />

## Options

Options provide additional, optional functionality to use with a CLI command.
You may also hear these referred to as flags or arguments. As mentioned in the
previous step, `--help` is an example of an option.

To see all valid options for a command, visit the [GitHub repository][github].

For example, look at the command documentation for [deleting folders][df]. You
will see a list of options to use with this command, such as `--recursive` or
`--force`.

## As-User Header

To use the [as-user header][asuser], add the `--as-user=USERID` option to the
end of the command.

For example, the following command will create a folder called `Example_Folder`
at the root level in user ID 123456’s account.

```bash
box folders:create 0 Example_Folder --as-user=123456
```

<Message type='warning'>
  Only Service Accounts and Admins are able to use the as-user header.
  If your application was not authorized with the necessary scopes or you
  configured your CLI to obtain a default token for another user, this call may
  fail. Add `-v` or `--verbose` to your command for verbose error logging.
</Message>

## Bulk Commands
<!--alex ignore execute-->
You can use a CSV file to execute commands in bulk. Each row of the
spreadsheet is treated as an individual API call.
<!--alex ignore execute-->
To execute a bulk command, use the option `--bulk-file-path=<PATH_TO_CSV>`, where
`<PATH_TO_CSV>` is the local path of a CSV file containing the
necessary information.

<!-- markdownlint-disable line-length -->
As an example, let's create folders using the command `box folders:create --bulk-file-path=pathtoacsv`
<!-- markdownlint-enable line-length -->

<Message type='tip'>
  Drag the CSV file from your finder window/file explorer to the
  terminal/command line window to auto-populate the path.
</Message>

To specify the column names for your CSV file, go to the [GitHub repository][github]
documentation and look at the argument names or use the `--help` option. In this
case, these are `PARENTID` and `NAME` and are case insensitive.
You can also use a CSV
[template][csv] for this example bulk create folders command.

<!--alex ignore executing-->
Executing the command below creates three folders at the root level, 0, of the
Service Account's folder tree.

<!-- markdownlint-disable line-length -->
```bash
box folders:create --bulk-file-path=/Users/ExampleUser/Desktop/bulkcreatefolders.csv
```
<!-- markdownlint-enable line-length -->

## Bulk Commands with Options

<!-- markdownlint-disable line-length -->
Passing an option in a command will automatically apply to it to each row in
the CSV file. For example,
`box folders:collaborations:create --bulk-file-path=pathtocsv --role=editor`
will create collaborations for each user in the csv as an editor.
<!-- markdownlint-enable line-length -->

However, you can also use options in the CSV file. Building on the last example,
instead of using the `--role=editor` option in the command itself, it can be a
column called `role`. The command itself becomes:
<!-- markdownlint-disable line-length -->
`box folders:collaborations:create --bulk-file-path=pathtocsv`
<!-- markdownlint-enable line-length -->

For more details on bulk commands read [this document][bulk].

## Summary

* You used an option with a command and/or a bulk command.

<Next>I know how to use options and bulk commands</Next>

[github]: https://github.com/box/boxcli#command-topics
[df]: https://github.com/box/boxcli/blob/master/docs/folders.md#box-foldersdelete-id
[asuser]: g://authentication/jwt/as-user/
[csv]: https://github.com/box/boxcli/blob/main/docs/Bulk%20actions/folders/folders-create.csv
[bulk]: g://cli/cli-docs/bulk-commands
