+++
# Students widget.
# This widget displays all students from `content/student/`.

date = "2017-11-01T00:00:00"
draft = false

title = "Thesis"
subtitle = "Ph.D. & M.Sc."
widget = "students"

# Order that this section will appear in.
weight = 55

# View.
# Customize how projects are displayed.
# Legend: 0 = list, 1 = cards.
view = 0

# Filter toolbar.

# Default filter index (e.g. 0 corresponds to the first `[[filter]]` instance below).
filter_default = 1

# Add or remove as many filters (`[[filter]]` instances) as you like.
# Use "*" tag to show all projects or an existing tag prefixed with "." to filter by specific tag.
# To remove toolbar, delete/comment all instances of `[[filter]]` below.
[[filter]]
  name = "All"
  tag = "*"

[[filter]]
  name = "Current"
  tag = ".current"

[[filter]]
  name = "Previous"
  tag = ".past"

[[filter]]
  name = "Ph.D."
  tag = ".phd"

[[filter]]
  name = "M.Sc."
  tag = ".msc"

[[filter]]
  name = "Industrial"
  tag = ".indus"

[[filter]]
  name = "Grant"
  tag = ".grant"

[[filter]]
  name = "Co-Diplomation"
  tag = ".codiplomation"

+++
