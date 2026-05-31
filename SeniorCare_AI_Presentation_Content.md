# SeniorCare AI — Contenu Complet de la Présentation PFE
## 17 Slides — Tout en Français
> Basé sur le rapport LaTeX + Template PPT ISITCOM

---

## SLIDE 1 — PAGE DE TITRE

**Titre principal :**
> SeniorCare AI — Bracelet Intelligent pour la Surveillance des Personnes Âgées

**Sous-titre :**
> Présentation du Projet de Fin d'Études — 2025–2026

**Réalisé par :** Mohammed Akrem BEN ABDESSALEM

**Encadré par :**
- Mme Rana EZZINE — Maître Assistante (Encadrante académique)
- M. Racha ZAIBI — Ingénieur R&D (Encadrant professionnel)

**Société d'accueil :** SmartLab — Faculté de Médecine de Monastir

**Diplôme :** Licence en Ingénierie des Systèmes Informatiques — IoT et Systèmes Embarqués

**Image suggérée :** `images/image1/logo_isitcom.jpeg` + `images/image1/Lab.jpg`

---

## SLIDE 2 — PLAN

**Titre :** Plan

**6 sections numérotées :**

| N° | Section |
|----|---------|
| 1 | Introduction |
| 2 | Problématique et Solution Proposée |
| 3 | Méthodologie de Travail |
| 4 | Étude Conceptuelle |
| 5 | Réalisation |
| 6 | Conclusion et Perspectives |

> *(Structure identique au template — remplacer uniquement les titres de section)*

---

## SLIDE 3 — INTRODUCTION (1/1)
### Organisme d'accueil

**Titre de slide :** Introduction — Organisme d'accueil

**Contenu :**

**SmartLab** — Unité de Service Commun et de Recherche (USCR)
Rattachée à la Faculté de Médecine de Monastir (FMM) — Certifiée ISO 21001

**Domaines d'activité :**
- **IoT & Santé Connectée :** Conception de dispositifs portables (wearables) et systèmes de suivi biométrique à distance
- **Recherche & Développement Médical :** Transformation de la recherche académique en applications cliniques concrètes
- **Innovation & Transformation Numérique :** Accompagnement des professionnels de santé dans l'intégration des technologies émergentes

**Image suggérée :** `images/image1/Lab.jpg`

---

## SLIDE 4 — PROBLÉMATIQUE ET SOLUTION PROPOSÉE (1/6)
### Problématique

**Titre de slide :** Problématique

**Contenu :**

**Contexte :**
Le vieillissement de la population impose un suivi médical continu des seniors maintenus à domicile.

**Limites des méthodes actuelles :**
- Contrôles manuels intermittents → retards dans la détection des anomalies
- Aucune donnée en temps réel → réaction tardive face aux urgences
- Charge lourde pour les aidants et le personnel médical

**Risques critiques non couverts :**
- Chutes non détectées → conséquences graves sans intervention rapide
- Troubles cardiaques sans surveillance continue des signes vitaux
- Absence de localisation en cas d'errance ou d'urgence

**Conséquence :** Mise en danger de la sécurité et de la qualité de vie des personnes âgées.

---

## SLIDE 5 — PROBLÉMATIQUE ET SOLUTION PROPOSÉE (2/6)
### Solution Proposée

**Titre de slide :** Solution Proposée — SeniorCare AI

**Contenu :**

**SeniorCare AI** : Système de télésurveillance médicale intelligent et autonome

**3 composantes interconnectées :**

| Composante | Description |
|------------|-------------|
| **Bracelet IoT** | Acquisition continue des signes vitaux + détection de chute + alertes SMS autonomes |
| **Application Mobile** | Interface Médecin (gestion clinique) + Interface Famille (surveillance & localisation) |
| **Cloud Supabase** | Stockage, détection des anomalies, synchronisation temps réel |

**Image suggérée :** `images/image2/archi_global.jpeg`

---

## SLIDE 6 — PROBLÉMATIQUE ET SOLUTION PROPOSÉE (3/6)
### Critique de l'existant vs SeniorCare AI

**Titre de slide :** Solutions existantes vs SeniorCare AI

**Tableau comparatif :**

| Critère | Apple Watch | BioIntelliSense | Philips Lifeline | **SeniorCare AI** |
|---------|-------------|-----------------|------------------|-------------------|
| Dépendance matérielle | iPhone requis | Hub dédié | Bouton uniquement | **Autonome** |
| Alertes autonomes | Impossible sans iPhone | Impossible sans réseau | Bouton manuel | **SMS GSM direct** |
| Suivi médecin | Limité | Limité | Absent | **Dossier complet + PDF** |
| Géofencing | Basique | Absent | Absent | **50–500 m configurable** |
| Rapport médical | Absent | Partiel | Absent | **PDF exportable** |
| Coût | Élevé | Abonnement coûteux | Abonnement mensuel | **Solution ouverte** |

**Conclusion :** SeniorCare AI comble toutes les lacunes identifiées par une approche autonome, ouverte et complète.

---

## SLIDE 7 — PROBLÉMATIQUE ET SOLUTION PROPOSÉE (4/6)
### Besoins Fonctionnels

**Titre de slide :** Besoins Fonctionnels

**Liste :**

1. **Authentification** — Connexion sécurisée JWT avec redirection automatique selon le rôle (médecin / famille)
2. **Gestion des patients** — Création de dossiers, génération du code SC-XXXX, accès famille via ce code
3. **Surveillance temps réel** — BPM, SpO₂, température, détection de chute mis à jour automatiquement
4. **Alertes SMS géolocalisées** — Envoi autonome via module GSM SIM800L avec position Google Maps
5. **Synchronisation des seuils** — Récupération dynamique depuis Supabase sans reprogrammation du firmware
6. **Espace Médecin** — Courbes historiques (24h / 7j / 30j), notes médicales confidentielles, rapport PDF
7. **Espace Famille** — Localisation GPS sur carte, géofencing (50–500 m), gestion des contacts d'urgence
8. **Affichage OLED** — Données biométriques, état GPS et alertes affichés localement sur le bracelet

---

## SLIDE 8 — PROBLÉMATIQUE ET SOLUTION PROPOSÉE (5/6)
### Besoins Non Fonctionnels

**Titre de slide :** Besoins Non Fonctionnels

**Liste :**

| Critère | Exigence |
|---------|----------|
| **Performance** | Mise à jour des signes vitaux < 15 s · SMS < 60 s · Détection de chute < 5 s |
| **Fiabilité** | Transmission stable · Alertes SMS sans connexion Internet |
| **Sécurité** | JWT + Row-Level Security (RLS) · Notes médicales invisibles pour la famille |
| **Utilisabilité** | Interface professionnelle médecin · Interface simplifiée famille |
| **Maintenabilité** | Seuils modifiables sans reprogrammer le bracelet |
| **Portabilité** | Application Flutter → Android et iOS |
| **Autonomie** | Batterie 18650 > 8 heures de fonctionnement continu |

---

## SLIDE 9 — PROBLÉMATIQUE ET SOLUTION PROPOSÉE (6/6)
### Architecture Globale

**Titre de slide :** Architecture Globale — SeniorCare AI

**Contenu (3 couches) :**

**Couche 1 — Bracelet IoT (Hardware)**
- Microcontrôleur : ESP32 (dual-core, 240 MHz, Wi-Fi intégré)
- Capteurs : MAX30102 (FC + SpO₂) · MLX90614 (Température IR) · MPU6050 (Chute)
- Communication : WiFi → données cloud · SIM800L → SMS d'urgence
- Localisation : GPS NEO-6M · Affichage : OLED SSD1306

**Couche 2 — Cloud (Supabase)**
- Base PostgreSQL (7 tables)
- Edge Functions serverless (détection des anomalies)
- Realtime WebSocket (synchronisation temps réel)

**Couche 3 — Application Mobile (Flutter)**
- Interface Médecin : gestion clinique, courbes, rapports PDF
- Interface Famille : surveillance, GPS, géofencing

**Image suggérée :** `images/image2/archi_global.jpeg`

---

## SLIDE 10 — MÉTHODOLOGIE DE TRAVAIL (1/2)
### Méthodologie Scrum

**Titre de slide :** Méthodologie Scrum

**Contenu :**

**Définition :**
> Scrum est un framework agile permettant de résoudre des problèmes complexes de façon adaptative, en fournissant des livrables de haute valeur de manière itérative et incrémentale.

**Pourquoi Scrum pour SeniorCare AI ?**

| Critère | Scrum |
|---------|-------|
| Gestion itérative | ✅ Sprints successifs |
| Flexibilité | ✅ Adaptation aux changements |
| Cadence de livraison | ✅ Incrément à chaque sprint |
| Adaptabilité | ✅ Backlog révisable |
| Collaboration | ✅ Rituels quotidiens |

**Image suggérée :** `images/image1/process_scrum.png`

---

## SLIDE 11 — MÉTHODOLOGIE DE TRAVAIL (2/2)
### Équipe, Artefacts et Sprints

**Titre de slide :** Équipe Scrum · Artefacts · Planification

**Équipe Scrum :**
- **Product Owner :** Racha ZAIBI (Ingénieur R&D — SmartLab)
- **Scrum Master / Développeur :** Mohammed Akrem BEN ABDESSALEM
- **Encadrante académique :** Rana EZZINE

**Artefacts :**
- **Product Backlog :** 22 User Stories priorisées (méthode MoSCoW — Must / Should / Could)
- **Sprint Backlog :** Tâches techniques découpées par sprint

**Planification des 3 Sprints :**

| Sprint | Objectif | Durée |
|--------|----------|-------|
| Sprint 1 | Conception et réalisation du prototype hardware | 6 semaines |
| Sprint 2 | Développement de l'application mobile | 5 semaines |
| Sprint 3 | Intégration et communication Bracelet–Supabase–App | 3 semaines |

---

## SLIDE 12 — ÉTUDE CONCEPTUELLE (1/2)
### Diagramme des Cas d'Utilisation Global

**Titre de slide :** Diagramme des Cas d'Utilisation Global

**Contenu :**

**5 acteurs du système :**

| Acteur | Rôle |
|--------|------|
| **Patient** | Porte le bracelet — bénéficiaire passif |
| **Médecin** | Gestion clinique : dossiers, seuils, historiques, rapports PDF |
| **Famille** | Surveillance temps réel, localisation GPS, gestion des alertes |
| **Bracelet** | Acquisition des signes vitaux, détection de chute, envoi des alertes |
| **Supabase** | Authentification, stockage, synchronisation temps réel |

**Image suggérée :** `images/image2/case.png` (diagramme de cas d'utilisation complet)

---

## SLIDE 13 — ÉTUDE CONCEPTUELLE (2/2)
### Structure de la Base de Données

**Titre de slide :** Structure de la Base de Données — PostgreSQL (Supabase)

**Contenu :**

**7 tables spécialisées :**

| Table | Contenu |
|-------|---------|
| `patients` | Informations médicales, code SC-XXXX |
| `profiles` | Comptes utilisateurs (médecin / famille) + rôles |
| `vitals` | Mesures biométriques en temps réel (BPM, SpO₂, Temp, GPS) |
| `thresholds` | Seuils médicaux personnalisés par patient |
| `alerts` | Journal des alertes déclenchées |
| `family_access` | Droits d'accès famille via code SC-XXXX |
| `medical_notes` | Notes confidentielles du médecin |

**Sécurité :** Row-Level Security (RLS) — chaque rôle ne voit que ses données

**Image suggérée :** `images/image5/shema_strucure_BD.png`

---

## SLIDE 14 — RÉALISATION
### Les 3 Sprints en un coup d'œil

**Titre de slide :** Réalisation — Synthèse des 3 Sprints

**Sprint 1 — Prototype Hardware**
- PCB double couche sur-mesure (EasyEDA)
- Boîtier ergonomique imprimé en 3D (SolidWorks)
- 8 composants intégrés : ESP32 · MAX30102 · MLX90614 · MPU6050 · SIM800L · NEO-6M · OLED · Batterie 18650

**Sprint 2 — Application Mobile Flutter**
- Authentification JWT par rôle
- Interface Médecin : liste patients · courbes historiques · rapport PDF · configuration des seuils
- Interface Famille : signes vitaux temps réel · carte GPS · géofencing · journal des alertes

**Sprint 3 — Intégration Complète**
- Flux : Bracelet → WiFi → Supabase → App (temps réel)
- SMS autonome via SIM800L (lien Google Maps intégré)
- Machine à 3 états : NORMAL → ALERTE → APPEL

**Images suggérées :**
- `images/image3/sys_globale_en_face.png` (bracelet 3D)
- `images/image4/dashboard_medecin.jpeg` + `images/image4/dashboard_famille.jpeg`
- `images/image5/flux.png` (flux d'intégration)
- `images/image5/sms_alerte_reel.jpeg` (SMS réel)

---

## SLIDE 15 — CONCLUSION ET PERSPECTIVES (1/2)
### Conclusion

**Titre de slide :** Conclusion

**Bilan du projet :**

SeniorCare AI est un système de télésurveillance médicale complet, couvrant l'intégralité de la chaîne technologique : du capteur biométrique embarqué jusqu'à l'interface mobile de supervision médicale.

**Objectifs atteints :**
- ✅ Bracelet IoT fonctionnel : mesure continue des signes vitaux + détection de chute
- ✅ Application Flutter multi-rôles déployée (Médecin + Famille)
- ✅ Backend Supabase intégré avec Edge Functions serverless
- ✅ SMS d'urgence autonome sans dépendance à un service tiers

**Performances validées en conditions réelles :**

| Indicateur | Résultat |
|------------|----------|
| Transmission des signes vitaux | < **15 secondes** |
| Détection de chute | < **5 secondes** |
| Émission du SMS d'urgence | < **60 secondes** |
| Autonomie batterie | > **8 heures** |

---

## SLIDE 16 — CONCLUSION ET PERSPECTIVES (2/2)
### Perspectives

**Titre de slide :** Perspectives

**Évolutions envisagées :**

| Perspective | Description |
|-------------|-------------|
| **TinyML sur ESP32** | Intégration d'algorithmes de machine learning embarqués pour une analyse prédictive des épisodes critiques directement sur le microcontrôleur |
| **Module ECG** | Ajout d'un électrocardiogramme pour un diagnostic cardiovasculaire affiné |
| **Architecture multi-patients** | Déploiement dans des établissements de soins professionnels (EHPAD) avec gestion de plusieurs patients simultanément |
| **Extension iOS** | Application déjà développée en Flutter → portabilité native vers iOS sans refonte majeure |

**Vision :**
> Une assistance médicale connectée, intelligente et proactive — au service du maintien à domicile des personnes âgées.

---

## SLIDE 17 — FIN

**Titre :** Merci de votre attention

**Sous-texte (optionnel) :**
> Questions & Échanges

---

## RÉCAPITULATIF DES IMAGES À UTILISER

| Slide | Image | Chemin |
|-------|-------|--------|
| 1 | Logo ISITCOM + SmartLab | `image1/logo_isitcom.jpeg` + `image1/Lab.jpg` |
| 3 | Logo SmartLab | `image1/Lab.jpg` |
| 5 | Architecture globale | `image2/archi_global.jpeg` |
| 9 | Architecture globale | `image2/archi_global.jpeg` |
| 10 | Processus Scrum | `image1/process_scrum.png` |
| 12 | Diagramme cas d'utilisation | `image2/case.png` |
| 13 | Schéma base de données | `image5/shema_strucure_BD.png` |
| 14 | Bracelet 3D | `image3/sys_globale_en_face.png` |
| 14 | Dashboard médecin | `image4/dashboard_medecin.jpeg` |
| 14 | Dashboard famille | `image4/dashboard_famille.jpeg` |
| 14 | Flux intégration | `image5/flux.png` |
| 14 | SMS réel | `image5/sms_alerte_reel.jpeg` |
