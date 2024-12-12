---
date: 2024-11-21T13:00:00
title: "Exhaustive Android device fingerprinting & Exploration des configurations et de leur impact sur les empreintes (variabilité)"
abstract: >
  
  ### Exhaustive Android device fingerprinting, by Sihem Bouhenniche

    Abstract: With approximately 70% of the global market share, Android is the most popular mobile operating system. One significant challenges it faces is safeguarding user privacy and protecting personal data,with tracking being a major concern. Tracking involves identifying users across multiple platforms using various techniques, one of which is device fingerprinting. This technique identifies a device based on its unique properties, making tracking transparent, as it can be performed passively without explicit consent from users.
    In this presentation, I will introduce a permission-less method for exhaustively fingerprinting Android devices. This approach combines executing shell commands, querying all documented Android APIs, and retrieving content provider values. Through experiments conducted on a diverse set of devices running SDK versions 28 to 35, we generate fingerprints containing over 130,000 attributes per device. Our findings reveal the impact of vendor variations and Android versions on device fingerprinting. Additionally, we identify previously unexplored attributes, including those introduced by manufacturer-specific customization, that significantly influence device fingerprinting.

  ### Exploration des configurations et de leur impact sur les empreintes (variabilité), by Maxime Huyghe

    Abstract: Browser fingerprinting has become a prevalent technique for tracking and identifying users online, posing significant privacy risks. The increasing variability in web browser configurations, coupled with the continuous evolution of browser features, presents complex challenges in understanding and mitigating the impact of fingerprinting. In this paper, we introduce a novel approach that combines feature modeling techniques with tree-based representations to capture the intricate relationships and constraints within browser fingerprints. By translating 22, 773 fingerprints into a feature model with 34, 557 nodes, we enable a comprehensive analysis of their variability and uniqueness across 1, 519 switches and 596 flags on 7 headless and headful browser versions. Our methodology facilitates various use cases, such as generating representative fingerprints for testing, detecting anomalies, and identifying discriminating attributes. We aim to provide developers and researchers with a powerful tool for studying browser fingerprints and developing effective strategies to enhance user privacy in the face of evolving tracking techniques.
    https://mhuyghe.fr

event: DiverSE Coffee
location: Rennes, France
speaker: Sihem Bouhenniche & Maxime Huyghe

---