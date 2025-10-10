# How to add a new team member?

In the root of the project run the following command:

```bash
hugo new team/<name-surname>.md
```

Replace `<lastname-firstname>` with the name and surname of the team member you want to add. Favor lower case names.

This will generate a `<lastname-firstname>.md` file in the `content/team` directory.

Please use your `last name` **then** `first name` in order to sort how they'll be displayed on the web.
Please put you name in upper case and first (and middle) name in lower case like in the example bellow.


The content of the file will look like this:

```
---
name: Candide SMITH
organization: IRISA
position: PhD student
category: member 
social:
  website: http://candide.github.io
  twitter: candide-smith
  linkedin: candide-smith
  github: candidesmith
dateOfStay: 
    start: 2023
    end: 
---
```

## Parameters

* `name`: (**Mandatory**) Name of the team member, as it should be displayed.
* `organization`: (**Mandatory**) Current organization to which this team member belongs, for example, Inria.
* `position`: (**Mandatory**) Position the team member holds in the previous organization. Also used to indicate the succesive positions hold in the team.
* `category`: (**Optional**) Possible values are: `permanent`, `phd`, `engineer`, `postdoc`, `external`, `alumni`, `former`, `member`. Default value is `member`.
* `social`: Social profiles for the member. All are optional.
* `dateOfStay` : (**Optional**) will help to sort the former members
   * `start` : date of arrival in the lab
   * `end` : date of departure from the team

Team member may add a photo to the website. This photo should be placed in `static/images/team`. The filename should be the same as the Markdown file containing the information about the team member and must be a `PNG` or a `JPEG` image, for example:  `candice-smith.png`. The image may have any size, but favor square dimensions, otherwise the result is unexpected.

If the team member has a Github profile, the build process will fetch its avatar. A default image will be used if there is no Github profile.
