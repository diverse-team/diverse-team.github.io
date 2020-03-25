# How to add a new talk?

In the root of the project run the following command:

```bash
hugo new talks/<new-talk>.md
```

Replace `<new-talk>` with an indicative name to identify the entry. 
Favor the following format: `YYYYMMDD-<event>-<presenter>`, for example, `20200325-diverse-coffe-stern`, that is, first the date of the talk, then the name of the event and then the name of the speaker. 

The command above will generate a `<new-talk>.md` file in the `content/talks` directory.
The content of the file will look like this:

```
---
date: 2018-08-30T13:00:00
title: A Temporal Model for Interactive Diagnosis of Adaptive Systems
abstract: A long abstract
abstract_short: A very short abstract
event: DiverSe Coffee
event_url: https://example.com # Optional
location: Rennes, France
speaker: Severa Stern
image: /images/logo.svg # Optional
url_video: https://www.youtube.com/embed/Xf1cfemeX_U # Optional. It must be the embed URL.
url_pdf: documents/example.pdf # example.pdf is expected to be in the static/document. folder. It can also be any URL.
url_slides: https://github.com/diverse-project/slides/raw/master/2019/stamp/20190328_stamp_solocal.pptx # It can also be a relative address such as documents/example.pdf
---
```

## Parameters

* `date`: (**Mandatory**) The date of the talk, use `YYYY-MM-DDTHH:mm:ss`.
* `title`: (**Mandatory**) The title of the talk. *Please, avoid adding the name of the event or the name of the speaker. Those will be shown by the side of the title anyways.*
* `abstract`: (**Mandatory**) A long abstract fo the talk
* `abstract_short`: (**Optional**) A one sentence abstract for the talk. *Avoid repeating the title and the speakers.*
* `event_url`: (**Optional**) The URL of the event.
* `location`: (**Mandatory**) Usually `Rennes, France`.
* `speaker`: (**Mandatory**) Name of the speaker. If there is more than one use a list.
* `image`: (**Optional**) URL of an arbitrary image.
* `url_video`: (**Optional**) URL of an arbitrary video. It must be the embed URL, for example: https://www.youtube.com/embed/Xf1cfemeX_U  if the video is hosted on Youtube. 
* `url_pdf`:  (**Optional**) A URL to a document. It could be included in the website if required. Notice that `documents/example.pdf` expects `example.pdf` to be stored in `static/document`. It can also be any URL.
* `url_slides`: (**Optional**) It behaves in the same way as `url_pdf`.
