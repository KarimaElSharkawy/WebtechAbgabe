

# WebTech Accessibility Projekt

## Inhaltsverzeichnis

1. [Einführung](#einführung)  
2. [Ziel des Projekts](#ziel-des-projekts)  
3. [Übersicht über die WCAG 2.2 Erfolgskriterien](#übersicht-über-die-wcag-22-erfolgskriterien)  
4. [Projekt Setup](#projekt-setup)  
   - [Werkzeuge und Technologien](#werkzeuge-und-technologien)  
5. [Erfolgskriterien der WCAG 2.2](#erfolgskriterien-der-wcag-22)  
   - [1.3.1 Info and Relationships](#131-info-and-relationships)  
   - [1.3.2 Meaningful Sequence](#132-meaningful-sequence)  
   - [1.4.3 Contrast (Minimum)](#143-contrast-minimum)  
   - [1.4.4 Resize Text](#144-resize-text)  
   - [2.4.2 Page Titled](#242-page-titled)  
   - [2.4.4 Link Purpose (In Context)](#244-link-purpose-in-context)  
   - [3.3.1 Error Identification](#331-error-identification)  
   - [3.3.2 Labels or Instructions](#332-labels-or-instructions)  
6. [Implementierung der Zugänglichkeitsfeatures](#implementierung-der-zugänglichkeitsfeatures)  
   - [Semantisches Markup](#semantisches-markup)  
   - [Tastaturbedienbarkeit](#tastaturbedienbarkeit)  
   - [Sprachangabe im Dokument](#sprachangabe-im-dokument)  
   - [Fokus-Ring](#fokus-ring)  
   - [Skip-Link](#skip-link)  
7. [Präsentation und Diskussion](#präsentation-und-diskussion)  
   - [Zusammenfassung der umgesetzten Features](#zusammenfassung-der-umgesetzten-features)  
   - [Herausforderungen und Lösungsansätze](#herausforderungen-und-lösungsansätze)  
8. [Fazit](#fazit)  
   - [Bewertung des Projekterfolgs](#bewertung-des-projekterfolgs)  
   - [Mögliche Verbesserungen und Erweiterungen](#mögliche-verbesserungen-und-erweiterungen)  
9. [Anhang](#anhang)  
   - [Zusätzliche Ressourcen und Referenzen](#zusätzliche-ressourcen-und-referenzen)  

---

## Einführung

Dieses Projekt befasst sich mit der Entwicklung einer barrierefreien Webanwendung, die sich an den Web Content Accessibility Guidelines (WCAG) 2.2 orientiert. Die Aufgabe bestand darin, eine Webanwendung zu erstellen, die den Anforderungen der Barrierefreiheit entspricht. Dabei wurden mehrere Erfolgskriterien der WCAG 2.2 umgesetzt, um die Zugänglichkeit der Anwendung zu verbessern.

## Ziel des Projekts

Das Ziel dieses Projekts ist es, eine zugängliche Webanwendung zu entwickeln, die den Standards der WCAG 2.2 entspricht. Diese Richtlinien ermöglichen es, Webinhalte so zu gestalten, dass sie von allen Menschen, insbesondere von Menschen mit Behinderungen, genutzt werden können. Wichtige Aspekte der Zugänglichkeit umfassen Tastaturnavigation, ausreichenden Kontrast, klare Strukturierung von Inhalten sowie die Erkennung und Beschreibung von Fehlern bei Benutzereingaben.

## Übersicht über die WCAG 2.2 Erfolgskriterien

In diesem Projekt wurden insgesamt acht WCAG 2.2 Erfolgskriterien umgesetzt:

- **1.3.1 Info and Relationships**: Informationen und Beziehungen müssen programmatisch bestimmt werden können.
- **1.3.2 Meaningful Sequence**: Inhalte sollten in einer sinnvollen Reihenfolge dargestellt werden.
- **1.4.3 Contrast (Minimum)**: Der Text muss ein ausreichendes Kontrastverhältnis aufweisen.
- **1.4.4 Resize Text**: Der Text kann bis zu 200 % vergrößert werden, ohne dass Inhalte verloren gehen.
- **2.4.2 Page Titled**: Jede Seite muss einen beschreibenden Titel haben.
- **2.4.4 Link Purpose (In Context)**: Der Zweck eines Links muss im Kontext verständlich sein.
- **3.3.1 Error Identification**: Eingabefehler müssen erkannt und dem Benutzer beschrieben werden.
- **3.3.2 Labels or Instructions**: Labels oder Anweisungen müssen bei Benutzereingaben bereitgestellt werden.

## Projekt Setup

### Werkzeuge und Technologien

Im Projekt wurden folgende Technologien und Werkzeuge verwendet:

- **Angular**: Hauptframework für die Entwicklung der Webanwendung.
- **TypeScript**: Programmiersprache für die Applikationslogik.
- **HTML/CSS**: Für den Aufbau und die Gestaltung der Benutzeroberfläche.
- **Git**: Versionskontrolle und Zusammenarbeit im Team.
- **Lighthouse und axe**: Tools zur Überprüfung der Barrierefreiheit.

## Erfolgskriterien der WCAG 2.2

### 1.3.1 Info and Relationships

**Codebeispiel:**
```html
<div class="form-group">
  <label for="eintragText" aria-label="Tagebuch Eintrag">Schreibe hier, wie dein Tag war:</label>
  <textarea id="eintragText" class="form-control" [(ngModel)]="eintragText" aria-required="true"></textarea>
</div>
```
**Beschreibung**: Durch die Verwendung von ARIA-Attributen wird sichergestellt, dass die Beziehungen zwischen den Eingabeelementen und deren Beschriftungen klar und verständlich sind. Die Informationen und Beziehungen in der Benutzeroberfläche werden somit auch für Screenreader-Nutzer zugänglich.

### 1.3.2 Meaningful Sequence

**Codebeispiel:**
```html
<button mat-icon-button (click)="toggleFontSizeControl()" aria-label="Schriftgröße anpassen" tabindex="0">
  <mat-icon>accessibility</mat-icon>
</button>
```
**Beschreibung**: Um sicherzustellen, dass die Inhalte in einer sinnvollen Reihenfolge durchlaufen werden, wurde `tabindex` verwendet. Dies gewährleistet eine logische und barrierefreie Reihenfolge der interaktiven Elemente.

### 1.4.3 Contrast (Minimum)

**Codebeispiel:**
```css
.high-contrast body {
  background-color: #000000 !important;
  color: #FFFF00 !important;
}
```
**Beschreibung**: Ein ausreichender Farbkontrast zwischen Text und Hintergrund wurde erreicht, um die Lesbarkeit zu verbessern. Die Mindestanforderungen (4.5:1 für normalen Text) wurden erfüllt.

### 1.4.4 Resize Text

**Codebeispiel:**
```css
body.large-text {
  font-size: 200%;
}
```
**Beschreibung**: Alle Textelemente können ohne Verlust der Funktionalität um bis zu 200 % vergrößert werden, wodurch die Zugänglichkeit für Menschen mit Sehbehinderungen verbessert wird.

### 2.4.2 Page Titled

**Codebeispiel:**
```html
<head>
  <title>Startseite - WebTech Tagebuch</title>
</head>
```
**Beschreibung**: Jede Seite wurde mit einem beschreibenden Titel versehen, um den Zweck der Seite deutlich zu machen und die Navigation für Screenreader-Nutzer zu erleichtern.

### 2.4.4 Link Purpose (In Context)

**Codebeispiel:**
```html
<a href="https://github.com/KarimaElSharkawy/WebtechAbgabe.git" target="_blank" aria-label="GitHub für WebTech 2024 Projekt">
  Karima el Sharkawy - WebTech 2024 GitHub Projekt
</a>
```
**Beschreibung**: Links wurden mit aussagekräftigen Texten oder ARIA-Labels versehen, um den Zweck jedes Links klar darzustellen und die Benutzerfreundlichkeit zu verbessern.

### 3.3.1 Error Identification

**Codebeispiel:**
```html
<div *ngIf="entryError" class="text-danger" aria-live="polite">
  Bitte geben Sie einen Eintrag ein, bevor Sie fortfahren.
</div>
```
**Beschreibung**: Fehlermeldungen wurden implementiert, um Benutzer bei falschen oder fehlenden Eingaben zu informieren. Durch ARIA-Attribute wird sichergestellt, dass Screenreader-Nutzer ebenfalls über die Fehler benachrichtigt werden.

### 3.3.2 Labels or Instructions

**Codebeispiel:**
```html
<label for="eintragText" aria-label="Tagebuch Eintrag">Schreibe hier, wie dein Tag war:</label>
```
**Beschreibung**: Jedes Formularelement wurde mit klaren Labels versehen, um den Zweck der Eingabe eindeutig darzustellen und den Nutzern die Bedienung zu erleichtern.

## Implementierung der Zugänglichkeitsfeatures

### Semantisches Markup

**Beschreibung**: Es wurden semantische HTML-Tags wie `<header>`, `<nav>`, `<main>`, und `<footer>` verwendet, um die Struktur der Seiteninhalte zu verdeutlichen und sie für assistive Technologien besser zugänglich zu machen.

### Tastaturbedienbarkeit

**Beschreibung**: Alle interaktiven Elemente können per Tab-Taste erreicht werden. Die Navigationsreihenfolge wurde durch `tabindex` gesteuert, um eine sinnvolle Abfolge sicherzustellen.

### Sprachangabe im Dokument

**Beschreibung**: Die Sprache des Dokuments wurde in der `index.html` korrekt angegeben:
```html
<html lang="de">
```
Dies hilft Screenreadern, die richtige Sprache für die Inhalte zu verwenden.

### Fokus-Ring

**Beschreibung**: Ein Fokus-Ring wurde für alle interaktiven Elemente implementiert, um den aktuellen Fokus für Tastaturnutzer visuell hervorzuheben:
```css
button:focus, a:focus {
  outline: 2px solid #00FFFF;
}
```

### Skip-Link

**Beschreibung**: Ein Skip-Link wurde implementiert, um Benutzern die Möglichkeit zu geben, direkt zum Hauptinhalt zu springen und somit lange Navigationsleisten zu überspringen:
```html
<a href="#main-content" class="skip-link">Zum Inhalt springen</a>
```

## Präsentation und Diskussion

### Zusammenfassung der umgesetzten Features

- Implementierung von semantischem HTML-Markup.
- Anpassungen des Kontrasts und der Schriftgrößen.
- Implementierung von Fehlererkennung und klaren Labels für Formulare.
- Verbesserung der Tastaturzugänglichkeit und Implementierung eines Skip-Links.

### Herausforderungen und Lösungsansätze

Eine der größten Herausforderungen bestand darin, die ARIA-Attribute in komplexen Formularen und Tabellen konsistent anzuwenden. Mithilfe von Tools wie **Lighthouse** und **axe** konnten Zugänglichkeitsschwächen identifiziert und behoben werden.

## Fazit

### Bewertung des Projekterfolgs

Das Projekt erfüllt alle Anforderungen der WCAG 2.2. Die umgesetzten Maßnahmen verbessern die Zugänglichkeit für alle Benutzer, insbesondere für Menschen mit Behinderungen, und die Anwendung ist mit assistiven Technologien gut bedienbar.

### Mögliche Verbesserungen und Erweiterungen

- Weitere Tests mit Benutzern mit Behinderungen könnten helfen, die Benutzerfreundlichkeit weiter zu verbessern.
- Zusätzliche WCAG-Erfolgskriterien könnten in zukünftigen Versionen implementiert werden.
- Die ARIA-Attribute könnten erweitert werden, um die Benutzererfahrung weiter zu optimieren.

## Anhang

### Zusätzliche Ressourcen und Referenzen

- [WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/)
- [Lighthouse für Barrierefreiheitstests](https://developers.google.com/web/tools/lighthouse)



