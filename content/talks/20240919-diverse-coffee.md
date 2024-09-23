---
date: 2024-09-19T13:00:00
title: "Client-side and Server-side Tracking on Meta: Effectiveness and Accuracy"
abstract: >
  
  Growing concern over digital privacy has led to the widespread use of tracking restriction tools, such as ad blockers, Virtual Private Networks (VPN), and privacy-focused web browsers. All major browser vendors have also deprecated, or plan to deprecate, third-party cookies to reduce tracking. Despite these efforts, advertising companies continuously innovate to overcome these restrictions. Recently, advertising platforms, like Meta, have been promoting server-side tracking solutions to bypass traditional browser-based tracking restrictions. This paper explores how server-side tracking technologies can link website visitors with their user accounts on Meta products. The goal is to assess the effectiveness and accuracy of employing this technology, as well as the effect of tracking restrictions on online tracking. Our methodology involves a series of experiments where we integrate Meta's client-side tracker (the Meta Pixel) and server-side technology (the Conversions API) on different web pages. We then drive traffic to these pages and evaluate the success rate of linking website visitors to their profiles on Meta products. Our findings show that Meta's server-side technology can match between 34% and 51% of website visitors to user profiles on Meta products using basic information like the visitor's IP address, user agent, and location data. This is comparable to Pixel-based user matching in optimal conditions (i.e., in the absence of tracking restrictions), which links between 42% and 61% of user profiles. Nevertheless, we see a considerable difference in accuracy: while the Pixel-based tracking achieves 100% accuracy, less than 65% of the profiles matched by server-side tracking are accurate.

event: DiverSE Coffee
location: Rennes, France
speaker: Walter Rudametkin

---