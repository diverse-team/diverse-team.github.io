# How to add a new software entry?


In the root of the project run the following command:

```bash
hugo new software/<new-tool>.md
```

Replace `<new-tool>` with an indicative name to identify the entry. Favor lower case names.

This will generate a `<new-tool>.md` file in the `content/software` directory.
The content of the file will look like this:

```
---
name: Awesome Tool
repository: https://github.com/awesome/tool
site: https://www.awesome.tool

order: 7
---

This is the most awesome tool you will ever use.
```

## Parameters

* `name`: (**Mandatory**) Visible name for the software entry
* `repository`: (**Optional**) URL to the repository of the project
* `site`: (**Optional**) Official website with documentation and resources for the software
* `order`: (**Optional**) Order in which this new entry will appear in the list. It is automatically computed but can be modified.


The rest of the file should contain a description for the software written in Markdown.
