---
title: This is the title of the main page

sections:
    axes:
        inverted: true
        # title: Research Axes
        iconinverted: true
        iconstyle: round
        iconsize: 3x
        # iconcolor: primary
        # buttonstyle: primary
        buttonlabel: View More
        # textstyle: text-light
        items:
            - icon: project-diagram  # An icon accepts the same parameters as icons/simple.html or icons/round.html
              title: Modeling and Language Engineering
              color: primary
            #   url: /
            #   button: primary
            #   text: text-primary
            - icon: check-double
              title: Advanced testing
              color: secondary
            #   text: text-secondary
            #   url: /
            #   button: outline-secondary
            - icon: infinity
              title: DevOps for distributed and heterogeneous systems
              color: success
            #   text: text-success
            #   url: /
            #   button: success
            - icon: dice
              title: Variability Engineering
              color: danger
            #   text: text-danger
            #   url: /
            #   button: danger
    publications:
        title: Recent Publications 
        icon: file-alt
        inverted: true 
        size: 3x
        render: home/recent-publications.html
    talks:
        title: Recent Talks
        icon: chalkboard-teacher
        position: left
        inverted: true
        size: 3x
        render: home/recent-talks.html
---

And here is the content