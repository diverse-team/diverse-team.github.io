---
date: 2024-11-07T13:00:00
title: "Greetings; Privacy, IoT, and encrypted DNS"
abstract: >
  
  During the past decades, we have witnessed the emergence of connected devices, commonly known as the Internet of Things (IoT). This diverse ecosystem encompasses a wide range of specialized devices, from IP cameras to water leak detectors, each designed to meet specific objectives and constraints regarding energy consumption, computing power, or cost. The rapid development of various technologies and their networking is accompanied by the generation of a significant volume of data, raising privacy concerns, particularly in sensitive areas such as healthcare or smart homes.

  In this thesis, we leverage machine learning techniques to explore privacy issues related to connected objects through their network protocols. First, we study potential attacks on LoRaWAN, a long-range, low-power protocol. We explore the relationship between two protocol identifiers and show that their theoretical separation can be undermined using metadata produced during network connection. By adopting a multi-domain approach (content, time, and radio), we demonstrate that this metadata allows an attacker to uniquely identify devices despite traffic encryption, paving the way for tracking or re-identification.

  Then, we explore possible countermeasures by systematically analyzing the data used in these attacks and proposing techniques to obfuscate or reduce their relevance. We show that only a combined approach offers real protection. Additionally, we propose and evaluate various temporary pseudonym solutions tailored to the constraints of LoRaWAN, particularly energy consumption.

  Finally, we adapt our machine learning methodology to DNS, a protocol widely deployed in consumer IoT. Our attack is again based on metadata and enables device identification despite the encryption of DNS-over-HTTPS traffic. Exploring potential countermeasures, we observe non-compliance with padding standards, leading to partial compromise of user privacy.

  More generally, our work highlights that the efforts made by IoT protocols such as LoRaWAN to protect privacy are insufficient. Potentially profound changes are necessary to adequately address these issues.


event: DiverSE Coffee
location: Rennes, France
speaker: Samuel Pélissier

---

