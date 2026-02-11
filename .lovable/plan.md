

# Discord Ticket Bot Dashboard

## Übersicht
Ein modernes, helles Dashboard zur Verwaltung und Überwachung eines Discord Ticket Bots – mit Login-System und umfangreichen Statistiken sowie Bot-Konfiguration.

---

## 1. Authentifizierung (Login/Signup)
- Login- und Registrierungsseite mit E-Mail & Passwort
- Geschützte Routen – nur eingeloggte Nutzer sehen das Dashboard
- Supabase Auth als Backend für Nutzer-Verwaltung

## 2. Dashboard Layout
- **Sidebar-Navigation** mit Menüpunkten: Dashboard, Tickets, Konfiguration, Team
- **Header** mit Nutzername/Avatar und Logout-Button
- Clean, modernes Design mit hellem Theme

## 3. Dashboard-Startseite (Übersicht)
- **Statistik-Karten**: Offene Tickets, Geschlossene Tickets heute, Durchschnittliche Antwortzeit, Aktive Supporter
- **Charts**: Ticket-Verlauf der letzten 7 Tage (Linien-/Balkendiagramm), Verteilung nach Kategorie (Donut-Chart)
- **Letzte Aktivitäten**: Liste der neuesten Ticket-Aktionen

## 4. Ticket-Übersicht
- Tabelle aller Tickets mit Status (offen/in Bearbeitung/geschlossen), Kategorie, Ersteller, Zugewiesener Supporter, Erstelldatum
- Filter nach Status und Kategorie
- Suchfunktion
- Ticket-Detailansicht mit Nachrichtenverlauf (Beispieldaten)

## 5. Bot-Konfiguration
- **Ticket-Kategorien** verwalten (hinzufügen, bearbeiten, löschen)
- **Auto-Reply Nachrichten** konfigurieren (Begrüßung, Abschluss)
- **Support-Rollen** zuweisen – welche Discord-Rollen Tickets bearbeiten dürfen
- **Kanal-Einstellungen** – in welcher Kategorie Ticket-Kanäle erstellt werden

## 6. Team-Übersicht
- Liste der Supporter mit Statistiken (bearbeitete Tickets, Durchschnittliche Antwortzeit)
- Leistungs-Ranking

---

**Hinweis:** Alle Daten sind zunächst Beispieldaten (Prototyp). Die UI ist so aufgebaut, dass später eine echte Discord-Bot-Anbindung möglich wäre.

