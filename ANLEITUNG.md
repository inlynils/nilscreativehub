# Deine Seite – Anleitung

## Was ist was?

| Datei / Ordner      | Wofür                                                    | Anfassen? |
|---------------------|----------------------------------------------------------|-----------|
| `inhalt.js`         | **Alle Texte, Bilder, Links, Reihenfolge**               | ✅ ja     |
| `bilder/`           | Deine Bilder                                             | ✅ ja     |
| `impressum.html`    | Impressum (Platzhalter ersetzen!)                        | einmalig  |
| `datenschutz.html`  | Datenschutz (Entwurf prüfen!)                            | einmalig  |
| `style.css`         | Design. Farben stehen ganz oben unter „Farben“           | optional  |
| `index.html`, `app.js`, `fonts/` | Technik                                     | ❌ nein   |

---

## 1 · Online stellen (einmalig, ca. 10 Minuten, kostenlos)

Gehostet wird bei **GitHub Pages**. Das ist gratis, ohne Werbung, und du kannst
danach alles direkt im Browser bearbeiten, auch am Handy.

1. Konto anlegen auf **github.com** (der Benutzername steht später in der Adresse).
2. Oben rechts **+ → New repository**
   - Name: z. B. `nils`
   - **Public** auswählen (Pflicht für kostenloses Hosting)
   - **Create repository**
3. Auf der neuen Seite den Link **„uploading an existing file“** anklicken.
4. Den entpackten Ordner öffnen, **alles darin markieren** (inkl. der Ordner
   `bilder` und `fonts`) und ins Browserfenster ziehen. Danach unten **Commit changes**.
5. Im Repository: **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main**, Ordner **/ (root)** → **Save**
6. Nach 1–2 Minuten ist die Seite online unter
   **`https://DEINNAME.github.io/nils/`**

---

## 2 · Texte & Links ändern

1. Auf github.com dein Repository öffnen → **`inhalt.js`** anklicken
2. Rechts oben auf den **Stift ✏️** klicken
3. Ändern → oben rechts **Commit changes…** → nochmal **Commit changes**
4. Nach etwa 1 Minute ist die Änderung live (Seite neu laden, notfalls mit Strg + F5)

**Neue App / neues Projekt:** Einen kompletten Block von `{` bis `},` kopieren,
darunter einfügen, Inhalte ändern. Die `id` muss eindeutig sein.

**Reihenfolge ändern:** Die Blöcke einfach verschieben.

**Neuer Bereich** (z. B. „Kunst“ für Midjourney-Bilder): einen Block
`{ titel: "...", untertitel: "...", projekte: [ ... ] },` unter `bereiche` ergänzen.

---

## 3 · Bilder austauschen

1. Im Repository den Ordner **`bilder`** öffnen → **Add file → Upload files**
2. Bild hochladen → **Commit changes**
3. In `inhalt.js` den Dateinamen eintragen, z. B. `bild: "bilder/meinbild.jpg"`

> Lädst du ein Bild mit **genau demselben Namen** hoch (z. B. `portrait.jpg`),
> wird das alte ersetzt, ohne dass du `inhalt.js` ändern musst.

**Tipps für schöne & schnelle Bilder**
- Format **JPG** (oder WebP), Querformat ca. **1600 × 1000 px** für Hauptbilder
- Profilbild **quadratisch**, ca. 600 × 600 px
- Screenshots für die Galerie gern im **Hochformat**
- Möglichst **unter 400 KB**. Zum Verkleinern eignet sich kostenlos **squoosh.app**
- Dateinamen ohne Leerzeichen und Umlaute: `app-zwei.jpg` statt `App Zwei.jpg`

---

## 4 · Wenn etwas schiefgeht

- **Seite zeigt „Fehler in inhalt.js“**: Meist fehlt ein Komma `,` oder ein
  Anführungszeichen. Die Stelle, die du zuletzt geändert hast, genau prüfen.
- **Schnell zurück zur letzten funktionierenden Version:** `inhalt.js` öffnen →
  **History** → alte Version öffnen → Inhalt kopieren → wieder einfügen.
- **Bild wird nicht angezeigt:** Groß- und Kleinschreibung beachten.
  `Bild.JPG` ≠ `bild.jpg`

---

## 5 · Extras

- **Direktlink zu einem Projekt:** `…/nils/#bodenlos` öffnet die Seite mit
  aufgeklapptem Projekt. Praktisch für Instagram-Stories oder WhatsApp.
- **Farbschema:** in `inhalt.js` → `farbschema: "auto"` folgt dem Gerät,
  `"dunkel"` oder `"hell"` erzwingt eines davon. Das goldene Licht der Figur wirkt
  im dunklen Schema am stärksten.
- **Meditierende Figur / Hintergrund:** in `inhalt.js` → `figur`, `hintergrund`,
  `atemkreis` jeweils `true` (an) oder `false` (aus).
  Wie weich und gedämpft Figur & Licht wirken: `figurUnschaerfe` (0 = scharf,
  10 = weich, 25 = sehr verschwommen) und `figurMatt` (0 = aus, 0.15 = dezent,
  0.4 = stark gedämpft). Lichtstärke, Goldton und
  Farbe der Silhouette stehen in `style.css` im Abschnitt „Meditierende Figur“
  (`--licht`, `--gold`, `--figur-farbe`).
- **Eigene Domain** (optional, ca. 10 € im Jahr, z. B. bei INWX, Strato oder IONOS):
  Settings → Pages → **Custom domain** eintragen und beim Domain-Anbieter die
  DNS-Einträge setzen, die GitHub dir anzeigt.
- **Farben ändern:** in `style.css` ganz oben. `--accent` ist der Goldton,
  der zweite Block gilt für den Dunkelmodus.
