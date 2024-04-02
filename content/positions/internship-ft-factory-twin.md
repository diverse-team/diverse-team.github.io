---
title:  Development of the physical twin of a Fischertechnik-based factory 
starts: 2024
duration: 2-5 months
position: internship
level: (BAC+4 ou BAC+5)
contact: Didier Vojtisek
email: didier.vojtisek@inria.fr
summary: Le but du stage est d'améliorer et d'étendre l'implementation d'une usine Fischertechnik dans l'objectif de l'utiliser dans le cadre de travaux autour des jumeaux numériques.
---

## Context:

The  [https://mbdo.github.io](MBDO) project (Model Based DevOps) aims to provides methodologies and tooling to implement digital twins.

Goals of digital twins contains: monitoring, deviation detection, failure detection, simulation, planning, automatic or assisted reconfiguration, ...

As a digital twins should represent a physical twin,  
the DiverSE team has acquired a set of Fischertechnik modules that will act as the physical part.

The modules creates a Training Factory composed of Vacuum Gripper Robots, Automated HighBayWarehouse, Converyor, MultiProcessing Station, Sorting Line.  

The actuators and sensors of the modules are driven by several RasberryPi with IO bus support.

![](https://www.fischertechnikwebshop.com/image/cache/catalog/fischertechnik/industry2023fotos/554868_Lernfabrik_Training_Factory_Fabrik_24V-3-6-1-500x500.webp)


## Objectives:


Build a realistic support for the factory machines (ie. Fischertechnik modules) in order to implement various scenarios on different factory configurations.

Task list:
(The task list will be adapted with respect to the actual internship duration)

- Improve machine controller. The controller acts at the IO level of the engines and sensors and provide a socket based protocol (Ie. improve machine abstraction on top of actuators and sensors,  add more tests (with simulation/mock support)) 
- Implement a set of orchestration scenarios (Ie. implement tools working on top of the protocol to perform high level scenarios on differents factory layouts)
- Implement a shopping web application (Ie. implement an orchestration coupled with a web server that provide an end user reservation/buy/)
- Add MQTT message service to both the controller and orchestation levels. This service will serve as the base interface for monitoring and synchronizing the physical and digital twins. 
    
    

## Candidate

Send an email to Didier Vojtisek
