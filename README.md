# Tagebuch-Seite

Diese Website ermöglicht es Benutzern, Tagebucheinträge zu erstellen und zu verwalten. Außerdem kann ein Profil erstellt werden. Die App ist unter folgender Adresse deployed: [webtech-front.vercel.app](https://webtech-front.vercel.app)

## Inhaltsverzeichnis

- [Startseite](#startseite)
  - [Erstellen](#erstellen)
- [Meine Einträge](#meine-einträge)
  - [Lesen](#lesen)
  - [Aktualisieren](#aktualisieren)
  - [Löschen](#löschen)
- [Profil](#profil)
- [Installation und Nutzung](#installation-und-nutzung)
  - [Klonen des Repositories](#klonen-des-repositories)
  - [Einrichtung und Start des Backend-Servers](#einrichtung-und-start-des-backend-servers)
  - [Einrichtung und Start der Frontend-Anwendung](#einrichtung-und-start-der-frontend-anwendung)
- [Verwendete Technologien](#verwendete-technologien)
- [Deployment](#deployment)

## Startseite

Auf der Startseite befindet sich ein Eingabefeld, mit dem Datenbankeinträge erstellt werden können. Automatisch werden eine ID und das aktuelle Datum hinzugefügt.


<img width="1442" alt="Bildschirmfoto 2024-03-26 um 23 17 22" src="https://github.com/KarimaElSharkawy/WebtechAbgabe/assets/92715986/0ebaa7e5-be07-4aa9-b90c-cad1a151ab14">


### Erstellen

Durch Klicken auf den "Speichern"-Button wird der Text an die Datenbank übergeben. Zur Bestätigung erscheint eine Snackbar, und der Text des Eingabefeldes wird geleert.


<img width="1465" alt="Bildschirmfoto 2024-03-26 um 23 17 40" src="https://github.com/KarimaElSharkawy/WebtechAbgabe/assets/92715986/1777d973-b20f-4892-a062-a270f099ec25">


## Meine Einträge

### Lesen


Auf der Seite „Meine Einträge“ werden alle erstellten Einträge angezeigt. Hier können Einträge auch bearbeitet oder gelöscht werden.


<img width="1436" alt="Bildschirmfoto 2024-03-26 um 23 18 18" src="https://github.com/KarimaElSharkawy/WebtechAbgabe/assets/92715986/57a94b14-772f-4809-91dd-4672a01c46fd">


### Aktualisieren


Durch Klicken auf den "Bearbeiten"-Button öffnet sich ein Eingabefeld mit dem Inhalt der ausgewählten Zeile. Der Text kann bearbeitet und durch Klicken auf "Speichern" aktualisiert werden.


<img width="1452" alt="Bildschirmfoto 2024-03-26 um 23 18 32" src="https://github.com/KarimaElSharkawy/WebtechAbgabe/assets/92715986/bdcb0d80-cdd2-4dfa-8eaa-177b74a54da7">


### Löschen


Durch Klicken auf den "Löschen"-Button wird der Eintrag aus der Datenbank und der Anzeige entfernt.


<img width="1455" alt="Bildschirmfoto 2024-03-26 um 23 18 44" src="https://github.com/KarimaElSharkawy/WebtechAbgabe/assets/92715986/b3684b81-4cc4-41d6-b597-fa266e6a7735">


## Profil


Im Profil werden Benutzerdaten gespeichert und angezeigt. Existieren bereits Datenbankeinträge, werden diese ausgegeben; andernfalls erscheint ein Formular zur Eingabe.


<img width="1459" alt="Bildschirmfoto 2024-03-26 um 23 18 56" src="https://github.com/KarimaElSharkawy/WebtechAbgabe/assets/92715986/8c7ea18f-39a9-4599-9a74-f192b28f2c76">


Durch Klicken auf "Bearbeiten" kann ein neues Profil erstellt werden. Nach dem Speichern erscheint eine Bestätigung, und die Seite wird aktualisiert.


<img width="1450" alt="Bildschirmfoto 2024-03-26 um 23 19 16" src="https://github.com/KarimaElSharkawy/WebtechAbgabe/assets/92715986/03d181f2-3a72-42ad-bc82-6bc083422c8a">
<img width="1440" alt="Bildschirmfoto 2024-03-26 um 23 19 23" src="https://github.com/KarimaElSharkawy/WebtechAbgabe/assets/92715986/d2b95360-1d94-45cb-b4ed-e4412b76b6f5">


## Installation und Nutzung

### Klonen des Repositories

git clone https://github.com/KarimaElSharkawy/WebtechAbgabe.git
cd WebtechAbgabe


### Einrichtung und Start des Backend-Servers

cd backend
npm install
npm start


### Einrichtung und Start der Frontend-Anwendung

cd frontend
npm install
ng serve


## Verwendete Technologien

- **Frontend:** Angular
- **Backend:** Node.js
- **Datenbank:** PostgreSQL

## Deployment

Das Frontend wurde mit GitHub und Vercel deployed, das Backend und die PostgreSQL-Datenbank mit Render.
