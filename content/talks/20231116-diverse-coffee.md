---
date: 2023-11-16T13:00:00
title: "Designing swh-alter Recovery Bundles"
abstract: >
  Software Heritage is an ambitious initiative to collect, preserve, and share the
  entire corpus of publicly accessible software source code. But retrieving all
  source code publicly available in an automated manner sometimes archives content
  that should not have been archived. In order to process the seldom takedown
  notices, we still need tools to remove data from the archive. But this is
  frightening: some piece of codes are now only available through Software
  Heritage and they really should not be lost by mistake. And at the same time,
  some content really need to be deleted from the servers for legal or moral
  reasons.


  How can we reconcile the need to recover from eventual mistakes and have some
  assurance that legally or morally reprehensible data is not easily kept
  available? *swh-alter Recovery Bundles* aim to do so by requiring multiple
  independent parties to agree when data needs to be recovered. This is achieved
  by using asymmetric cryptography in conjunction with secret sharing cryptography
  to protect backed up data.


  During this DiverSE coffee, we will explore why and how recovery bundles were
  designed, and the limits of the resulting system.
event: DiverSE Coffee
location: Rennes, France
speaker: Lunar
---
