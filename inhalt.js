/* ════════════════════════════════════════════════════════════════════
   INHALT DEINER SEITE
   ────────────────────────────────────────────────────────────────────
   Das ist die EINZIGE Datei, die du zum Pflegen anfassen musst.

   Regeln (dann kann nichts kaputtgehen):
   • Text steht immer zwischen Anführungszeichen "…" oder Backticks `…`
   • Längere Texte in Backticks `…` – dort sind Zeilenumbrüche erlaubt.
     Leerzeile = neuer Absatz.  **fett**  *kursiv*  [Linktext](https://…)
   • Nach jedem Eintrag ein Komma.
   • Bilder liegen im Ordner "bilder/" → hier nur "bilder/name.jpg" eintragen.
   • Etwas nicht gewünscht? Einfach leer lassen: ""  bzw. []
   ════════════════════════════════════════════════════════════════════ */

window.INHALT = {

  /* ───────────── KOPFBEREICH ───────────── */
  seite: {
    name:      "Nils",
    untertitel:"I just love to create.",
    intro:     `Apps, Meditationen, Essays – Dinge, die ich baue, spreche und schreibe.
Klick dich durch und schau, was zu dir passt.`,
    bild:      "bilder/portrait.jpg",       // rundes Profilbild (quadratisch, ~600×600)
    kontakt:   { text: "Schreib mir", url: "mailto:nils.wiedemann@web.de" },
    impressum: "impressum.html",
    datenschutz:"datenschutz.html",

    // Für Google & Vorschau beim Teilen (WhatsApp, Instagram …)
    seitentitel:  "Nils – kreative Projekte",
    beschreibung: "A hub of my creative expressions.",
    teilenBild:   "bilder/og.jpg",          // 1200×630
  },

  /* ───────────── VERHALTEN ───────────── */
  einstellungen: {
    farbschema:   "auto", // "auto" = folgt dem Gerät · "hell" · "dunkel" (Licht wirkt dunkel am stärksten)
    nurEinsOffen: true,   // true = beim Aufklappen schließt sich das vorherige
    figur:        true,   // true = meditierende Silhouette mit goldenem Licht im Hintergrund
    figurUnschaerfe: 10,  // Weichzeichner über Figur & Licht: 0 = scharf · 10 = weich · 25 = sehr verschwommen
    figurMatt:      0.15, // Mattierung (Schleier in Hintergrundfarbe): 0 = aus · 0.3 = dezent · 0.6 = stark gedämpft
    hintergrund:  true,   // true = zusätzlich sanft wandernde Farbflächen
    atemkreis:    true,   // true = Atemkreis um das Profilbild (ein Atemzug ≈ 11 Sek.)
  },

  /* ───────────── BEREICHE & PROJEKTE ─────────────
     Jeder Bereich hat eine Überschrift und beliebig viele Projekte.
     Reihenfolge hier = Reihenfolge auf der Seite.

     Felder eines Projekts:
       id       kurzer Name ohne Leerzeichen → Direktlink: deineseite.de/#id
       titel    Name
       kurz     Einzeiler (sichtbar im zugeklappten Zustand)
       bild     Hauptbild (Querformat, ideal 1600×1000)
       galerie  weitere Bilder, z. B. Screenshots (Hochformat geht gut) → [] = keine
       text     Vorstellung (2–4 kurze Absätze reichen)
       merkmale kleine Stichwort-Badges → [] = keine
       links    Buttons. Der erste wird hervorgehoben.
  ─────────────────────────────────────────────── */
  bereiche: [

    {
      titel: "Apps",
      untertitel: "Kleine Spiele und Werkzeuge, die ich gebaut habe.",
      projekte: [
        {
          id:    "bodenlos",
          titel: "Bodenlos",
          kurz:  "Das Trinkspiel ohne Boden",
          bild:  "bilder/bodenlos.jpg",
          galerie: [],
          text: `Ein Handy, eine Runde, drei Stapel. Wähle dein Level, erfülle die Aufgabe auf der Karte – und reich das Handy weiter.

**Grün** ist leicht, **Gelb** wird mutiger, **Rot** ist nur für die Härtesten.
Läuft direkt im Browser, kein Download, keine Anmeldung. Ab 18 – trinkt verantwortungsvoll.`,
          merkmale: ["Pass-the-Phone", "3 Stufen", "Ab 18"],
          links: [
            { text: "Jetzt spielen", url: "https://three-stack-task-trek.lovable.app" },
          ],
        },
        {
          id:    "alltag",
          titel: "alltag",
          kurz:  "Kleine Schritte. Jeden Tag.",
          bild:  "bilder/alltag.jpg",
          galerie: ["bilder/alltag-woche.jpg", "bilder/alltag-wochentage.jpg"],
          text: `Ein ruhiger Gewohnheits-Tracker für die kleinen Dinge, die auf Dauer den Unterschied machen – mehr Wasser trinken, jeden Tag ein paar Seiten lesen, was immer dir wichtig ist.

Hake deine Gewohnheiten ab und sieh deinen Fortschritt über Tag, Woche, Monat und Jahr.
Du musst nicht perfekt sein. Nur dranbleiben.`,
          merkmale: ["Gewohnheiten", "Statistiken", "Kostenlos"],
          links: [
            { text: "alltag starten", url: "https://steady-streak-weekly-habits.lovable.app" },
          ],
        },
      ],
    },

    {
      titel: "Hören",
      untertitel: "",
      projekte: [
        {
          id:    "meditation",
          titel: "Guided Meditations",
          kurz:  "Geführte Meditationen auf Spotify",
          bild:  "bilder/meditation.jpg",
          galerie: [],
          text: `Kurze, ruhige Sessions zum Ankommen, Durchatmen und Nach-innen-Hören.

Ideal für den Morgen, eine Pause zwischendurch oder den Abend.`,
          merkmale: ["Podcast"],
          links: [
            { text: "Auf Spotify hören", url: "https://open.spotify.com/show/3ejLkdE3Pa3UzITGjDFwXb" },
          ],
        },
      ],
    },

    {
      titel: "Lesen",
      untertitel: "",
      projekte: [
        {
          id:    "essays",
          titel: "Inly auf Substack",
          kurz:  "Essays über das, was innen passiert",
          bild:  "bilder/substack.jpg",
          galerie: ["bilder/substack-bild.jpg", "bilder/substack-artikel.jpg"],
          text: `Persönliche Texte über das Menschsein – über Hoffnung in schweren Zeiten, die Geschichten, die wir uns selbst erzählen, und das, was bleibt, wenn man genauer hinschaut.

Neue Essays kommen direkt in dein Postfach, wenn du magst.`,
          merkmale: ["Essays", "Newsletter"],
          links: [
            { text: "Lesen auf Substack", url: "https://open.substack.com/pub/inly" },
          ],
        },
      ],
    },

  ],
};
