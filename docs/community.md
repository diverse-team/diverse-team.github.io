# Expanding (or shrinking) the community

The community page contains the conferences, journals and magazines where the team usually publishes and also the tools and tricks the team uses.
The content of this page is divided among the following files:

- [data/conferences.yml](../data/conferences.yml): Contains the list of conferences.
- [data/journals.yml](../data/journals.yml): Contains the list of journals.
- [data/magazines.yml](../data/magazines.yml): Contains the list of magazines.
- [content/community/tools.md]: Lists tools the team uses.
- [content/community/tips.md]: Points to useful tutorials and tricks.

and the [content/community/](../content/community/) folder which includes the rest of the content.

Data journals, conferences and magazines are stored in `YAML` files to facilitate a future statistical analysis on the publications of the team.
To add a journal, conference or a magazine edit the corresponding `YAML` file. These items are specified as follows:

```yml
- name: Awesome conference
  url: https://awesome-conference.org
  acronym: ACONF
  description: 'This is the *coolest* conference in the world'
```

`acronym` is optional. `description` may include Markdown constructs.

It is possible to add a section with content. For that, include a new Markdown file in the [content/community/](../content/community/) folder with the following structure:

```md
---
title: The title of the section
order: 3
---
Here goes the content of the section
```

`order` specifies the order in which the section should appear in the page.