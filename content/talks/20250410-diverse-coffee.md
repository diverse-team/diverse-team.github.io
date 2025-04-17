---
date: 2025-04-10T13:00:00
title: "Managing Conflicts in Cross-DevOps Declarative Reconfigurations"
abstract: >
  Modern distributed systems, especially in Edge Computing and Cyber-Physical contexts, are increasingly managed by cross-functional and cross-geographical DevOps teams—referred to as cross-DevOps. In a such approach, reconfiguration must be decentralized: teams manage different parts of the system independently, without relying on central coordination or continuous connectivity.
  In this presentation, I'll introduce Ballet, a declarative decentralized reconfiguration tool that automates the coordination of changes across cross-DevOps teams through distributed choreographies. During the planning phase, Ballet is able to detect and explain conflicts arising from concurrent reconfiguration goals. If no conflict is found, the reconfiguration plan is fully inferred. As a guarantee, we developed a model checker to formally verify that inferred plans will correctly terminate, providing formal certification of this assumption. Only then is the reconfiguration applied.
  This talk illustrate Ballet's engine using a real-world scenario: the management of a multi-site OpenStack assembly.

event: DiverSE Coffee
location: Rennes, France
speaker: Jolan Philippe

---