# How to add a new job opening?

In the root of the project run the following command:

```bash
hugo new positions/<new-position>.md
```

Replace `<new-position>` with an indicative name to identify the entry. Favor lower case names.

This will generate a `<new-position>.md` file in the `content/positions` directory.
The content of the file will look like this:

```
---
title: The best position you'll ever get
deadline:
starts:
duration: One year
position: internship
level: master 2
contact: Severa Stern
email: severa.stern@university.com
summary: Provide here a short description of the position. More details and content can be given below.
pdf:
---

Add here a full description of the position and other materials you may need.
```

## Parameters

* `title`: (**Mandatory**) The title for the position
* `deadline`: (**Optional**) Deadline to apply for the position. Could be any string.
* `starts`: (**Optional**) Date at which the position should start. Could be any string.
* `duration`: (**Optional**) Expected duration of the contract. Could be any string.
* `level`: (**Optional**) The Expected education level. String.
* `position`: (**Mandatory**) Type of the position. Could be any string. Special values are `phd`, `internship`, `postdoc`.
* `contact`: (**Optional**) Name of the person in the team to contact for more information about the position.
* `email`: (**Optional**) Email to obtain more information on the position.
* `summary`: (**Mandatory**) A short summary about the position. May contain Markdown.
* `pdf`: (**Optional**) A link to a pdf file with related information. The pdf will be embedded in the page.

The rest of the file should contain a larger description for the position written in Markdown.

