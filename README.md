# Tagebuch-App

Diese Website ermöglicht es Benutzern, Tagebucheinträge zu erstellen und zu verwalten. Außerdem kann ein Profil erstellt werden. Die App ist unter folgender Adresse deployed: [webtech-front.vercel.app](https://webtech-front.vercel.app)

## Startseite

Auf der Startseite befindet sich ein Eingabefeld, mit dem Datenbankeinträge erstellt werden können. Automatisch werden eine ID und das aktuelle Datum hinzugefügt.

![](https://github.com/KarimaElSharkawy/WebtechAbgabe/assets/92715986/f85d4770-d5c4-4918-b8ce-02c12de54f26)

### Erstellen

Durch Klicken auf den "Speichern"-Button wird der Text an die Datenbank übergeben. Zur Bestätigung erscheint eine Snackbar, und der Text des Eingabefeldes wird geleert.

![](https://github.com/KarimaElSharkawy/WebtechAbgabe/assets/92715986/832ec45d-2ddc-46fe-aa62-d65b6f9eeb7f)

## Meine Einträge

### Lesen

Auf der Seite „Meine Einträge“ werden alle erstellten Einträge angezeigt. Hier können Einträge auch bearbeitet oder gelöscht werden.

![](https://github.com/KarimaElSharkawy/WebtechAbgabe/assets/92715986/63a52e31-3b98-4c9b-a2ec-f5bc6be6f7ce)

### Aktualisieren

Durch Klicken auf den "Bearbeiten"-Button öffnet sich ein Eingabefeld mit dem Inhalt der ausgewählten Zeile. Der Text kann bearbeitet und durch Klicken auf "Speichern" aktualisiert werden.

![](https://github.com/KarimaElSharkawy/WebtechAbgabe/assets/92715986/8f29cd95-0f80-41b5-b127-62cf6a350252)

### Löschen

Durch Klicken auf den "Löschen"-Button wird der Eintrag aus der Datenbank und der Anzeige entfernt.

![](https://github.com/KarimaElSharkawy/WebtechAbgabe/assets/92715986/afc8bf62-6ea2-4e26-b84c-4f22797337a1)

## Profil

Im Profil werden Benutzerdaten gespeichert und angezeigt. Existieren bereits Datenbankeinträge, werden diese ausgegeben; andernfalls erscheint ein Formular zur Eingabe.

![](https://github.com/KarimaElSharkawy/WebtechAbgabe/assets/92715986/3dbf3200-9731-45e9-a4f3-5e7c4828a553)

Durch Klicken auf "Bearbeiten" kann ein neues Profil erstellt werden. Nach dem Speichern erscheint eine Bestätigung, und die Seite wird aktualisiert.

![](https://github.com/KarimaElSharkawy/WebtechAbgabe/assets/92715986/282261fe-1f88-4149-a6cc-6b4ecfa416d1)

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
