# Contributing a pull request

[**Previous:** Add microcopy](./add-microcopy.md) |
[**Next:** Markdown style guide](./markdown.md)

---

To contribute a change we suggest you do one of the following actions.

* **File an issue** - if you found an issue or a bug and you do not have the
  time or resources to contribute a change, then please open an issue.
* **Send a pull request** - if you want to contribute to guides or pages, you
  can directly start working on your code and open a pull request.

## Best practices

### Step 1: Fork this repository in GitHub

This will create your own copy of our repository. If you
are a Box employee then you can request access to this repository and directly
push changes to it.

## Step 2: Clone the fork of your branch

```bash
git clone git@github.com:{username}/developer.box.com.git developer.box.com
cd developer.box.com
```

### Step 2: Create a feature branch

Create a branch with a descriptive name, such as `add-upload-session`. If you
are a Box employee, we recommend mentioning the `DDOC` or `APIWG` ticket name in
the branch name.

```bash
git checkout -b ddoc-123/add-upload-session
```

### Step 3: Add the upstream

When working in your own repository, we recommend adding this repository as the
upstream remote. This will allow you to pull in any changes from the upstream
repository as they happen.

```bash
git remote add upstream git@github.com:box/developer.box.com.git
```

### Step 4: Push your feature branch to your fork

As you make changes, continue to push the changes to your feature
branch. When working on multiple tickets, please use a different feature branch
for each feature.

### Step 5: Rebase

Before sending a pull request, rebase against upstream, such as:

```bash
git fetch upstream
git rebase upstream/main
```

This will add your changes on top of what's already in upstream, minimizing
merge issues.

### Step 6: Run the linters

Before opening a pull request, make sure to run the linters and spell checkers.

```bash
yarn lint
```

Resolve any warnings and errors before making a pull request.

### Step 7: Send the pull request

Send the pull request from your feature branch to us. Be sure to include a
description in your commit message (not the pull request description) that lets
us know what work you did.

Keep in mind that we like to see one feature addressed per pull request, as this
helps keep our git history clean and we can more easily track down issues.

---

[**Next:** Markdown style guide](./markdown.md)
