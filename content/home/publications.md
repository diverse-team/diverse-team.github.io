+++
# Recent Publications widget.
# This widget displays recent publications from `content/publication/`.

date = 2016-04-20
draft = false

title = "Recent Publications"
subtitle = ""
widget = "publications"

# Order that this section will appear in.
weight = 20

# Number of publications to list.
count = 10

# List format.
#   0 = Simple
#   1 = Classic
#   2 = Detailed
list_format = 2

# Filter by publication type.
# -1: Any
#  0: Uncategorized
#  1: Conference proceedings
#  2: Journal
#  3: Work in progress
#  4: Technical report
#  5: Book
#  6: Book chapter
  publication_types = [
    'Any',
    'Uncategorized',  # 0
    'Conference proceedings',  # 1
    'Journal',  # 2
    'Work in progress',  # 3
    'Technical report',  # 4
    'Book',  # 5
    'Book chapter'  # 6
  ]


# Filter toolbar.

# Default filter index (e.g. 0 corresponds to the first `[[filter]]` instance below).
filter_default = 0

# Add or remove as many filters (`[[filter]]` instances) as you like.
# Use "*" tag to show all projects or an existing tag prefixed with "." to filter by specific tag.
# To remove toolbar, delete/comment all instances of `[[filter]]` below.
[[filter]]
  name = "All"
  tag = "*"

[[filter]]
  name = "Languages & Models"
  tag = ".language"

[[filter]]
  name = "Testing"
  tag = ".testing"

[[filter]]
  name = "DevOps"
  tag = ".devops"

[[filter]]
  name = "Variability"
  tag = ".variability"

+++
