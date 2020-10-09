---
date: 2020-10-08T13:00:00
title: Modular and distributed IDE # Do not include the name of the event or the speakers
abstract: Integrated Development Environments (IDEs) are indispensable companions to programming languages. They are increasingly turning towards Web-based infrastructure. The rise of a protocol such as the Language Server Protocol (LSP) that standardizes the separation between a language-agnostic IDE, and a language server that provides all language services (\emph{e.g.,} auto completion, compiler...) has allowed the emergence of high quality generic Web components to build the IDE part that runs in the browser.  However, all language services require different computing capacities and response times to guarantee a user-friendly experience within the IDE. The monolithic distribution of all language services prevents to leverage on the available execution platforms (e.g., local platform, application server, cloud). In contrast with the current approaches that provide IDEs in the form of a monolithic client-server architecture, we explore in this paper the modularization of all language services to support their individual deployment and dynamic adaptation within an IDE. We evaluate the performance impact of the distribution of the language services across the available execution platforms on four EMF-based languages, and demonstrate the benefit of a custom distribution.

abstract_short: Fabien presented his last paper accepted at SLE 2020. This paper present his work on distributing IDE services localy and on servers in a smart way.
# A very short abstract # Do not repeat the title of the talk or the name of the event or the name of the speakers
event: DiverSE Coffee
#event_url: https://example.com # Optional
location: Rennes, France
speaker: Fabien Coulon
#image: /images/logo.svg # Optional
#url_video: https://www.youtube.com/embed/Xf1cfemeX_U # Optional. It must be the embed URL.
#url_pdf: documents/example.pdf # example.pdf is expected to be in the static/document. folder. It can also be any URL.
#url_slides: https://github.com/diverse-project/slides/raw/master/2019/stamp/20190328_stamp_solocal.pptx # It can also be a relative address such as documents/example.pdf
---
