/* Baut die Seite aus inhalt.js – hier musst du normalerweise nichts ändern. */
(function () {
  "use strict";
  var I = window.INHALT;
  if (!I) { document.body.innerHTML = '<p class="noscript">Fehler in <b>inhalt.js</b> – meist fehlt ein Komma oder ein Anführungszeichen.</p>'; return; }
  var S = I.seite || {}, E = I.einstellungen || {};

  /* ---------- Helfer ---------- */
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function inline(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|mailto:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }
  function absaetze(s) {
    return String(s || "").trim().split(/\n\s*\n/).filter(Boolean)
      .map(function (p) { return "<p>" + inline(p.trim()).replace(/\n/g, "<br>") + "</p>"; }).join("");
  }
  function extern(url) { return /^https?:\/\//.test(url || ""); }
  var ICON_PFEIL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
  var ICON_RAUS  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>';
  function meta(sel, wert) { var m = document.querySelector(sel); if (m && wert) m.setAttribute("content", wert); }

  /* ---------- Farbschema ---------- */
  if (E.farbschema === "hell" || E.farbschema === "dunkel") {
    document.documentElement.setAttribute("data-schema", E.farbschema);
    document.querySelectorAll('meta[name="theme-color"]').forEach(function (m) { m.setAttribute("content", E.farbschema === "dunkel" ? "#131210" : "#F6F2EC"); });
  }

  /* ---------- Meta / Teilen ---------- */
  if (S.seitentitel) document.title = S.seitentitel;
  meta('meta[name="description"]', S.beschreibung);
  meta('meta[property="og:title"]', S.seitentitel || S.name);
  meta('meta[property="og:description"]', S.beschreibung);
  if (S.teilenBild) meta('meta[property="og:image"]', new URL(S.teilenBild, location.href).href);

  /* ---------- Meditativer Hintergrund ---------- */
  // Silhouette: Mann im Lotussitz (eigene Vektorgrafik, viewBox 400×360)
  var FIGUR = '<ellipse cx="200" cy="63" rx="25.5" ry="29.5"/><ellipse cx="175.5" cy="68" rx="3.2" ry="6.8"/><ellipse cx="224.5" cy="68" rx="3.2" ry="6.8"/><path d="M 186 84 C 186 102 182 109 169 113 C 153 118 137 120 129 131 C 121 142 122 157 129 170 C 140 194 152 222 159 252 L 241 252 C 248 222 260 194 271 170 C 278 157 279 142 271 131 C 263 120 247 118 231 113 C 218 109 214 102 214 84 Z"/><path d="M 130 138 C 120 166 113 198 115 227 C 108 249 96 268 86 283 C 80 292 83 301 93 302 C 103 303 113 299 118 291 C 127 274 137 256 142 235 C 146 214 149 193 150 174 Z"/><path d="M 270 138 C 280 166 287 198 285 227 C 292 249 304 268 314 283 C 320 292 317 301 307 302 C 297 303 287 299 282 291 C 273 274 263 256 258 235 C 254 214 251 193 250 174 Z"/><path d="M 162 244 C 134 252 104 266 84 286 C 70 300 72 321 94 328 C 128 339 172 338 200 332 C 228 338 272 339 306 328 C 328 321 330 300 316 286 C 296 266 266 252 238 244 Z"/>';
  if (E.hintergrund !== false || E.figur !== false) {
    var bg = document.createElement("div");
    bg.className = "bg"; bg.setAttribute("aria-hidden", "true");
    var html = "";
    if (E.hintergrund !== false) html += '<span class="orb o1"></span><span class="orb o2"></span><span class="orb o3"></span>';
    if (E.figur !== false) html +=
      '<div class="szene">' +
        '<div class="aura-wabern"><div class="aura"></div></div>' +
        '<div class="strahlen"><div class="s1"></div><div class="s2"></div></div>' +
        '<div class="boden"></div>' +
        '<svg class="fig-saum" viewBox="0 0 400 360"><defs><filter id="saum" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter></defs><g filter="url(#saum)">' + FIGUR + '</g></svg>' +
        '<svg class="fig" viewBox="0 0 400 360"><g>' + FIGUR + '</g></svg>' +
        '<div class="herz"></div>' +
      '</div>' +
      '<div class="schleier"></div>';
    bg.innerHTML = html;
    document.body.insertBefore(bg, document.body.firstChild);
    document.documentElement.classList.add("mit-figur");
    var root = document.documentElement.style;
    if (typeof E.figurUnschaerfe === "number") root.setProperty("--schleier-blur", Math.max(0, E.figurUnschaerfe) + "px");
    if (typeof E.figurMatt === "number") root.setProperty("--schleier-matt", Math.min(1, Math.max(0, E.figurMatt)));
  }

  /* ---------- Kopf ---------- */
  var hero = document.getElementById("hero");
  hero.className += " ein";
  var avatar = S.bild ? '<img class="avatar" src="' + esc(S.bild) + '" alt="' + esc(S.name) + '" width="116" height="116">' : "";
  if (avatar && E.atemkreis !== false) avatar = '<div class="atem"><span class="atem-licht"></span><span class="atem-ring"></span>' + avatar + "</div>";
  hero.innerHTML =
    avatar +
    "<h1>" + esc(S.name) + "</h1>" +
    (S.untertitel ? '<p class="sub">' + esc(S.untertitel) + "</p>" : "") +
    (S.intro ? '<div class="intro">' + absaetze(S.intro) + "</div>" : "");

  /* ---------- Bereiche & Karten ---------- */
  var root = document.getElementById("bereiche"), verz = 1, alleKarten = [];
  (I.bereiche || []).forEach(function (b, bi) {
    var sec = document.createElement("section");
    sec.className = "bereich ein";
    sec.style.animationDelay = (0.08 * verz++) + "s";
    sec.innerHTML =
      '<div class="bereich-kopf"><h2>' + esc(b.titel) + "</h2></div>" +
      (b.untertitel ? '<p class="bereich-sub">' + esc(b.untertitel) + "</p>" : "") +
      '<div class="liste"></div>';
    var liste = sec.querySelector(".liste");

    (b.projekte || []).forEach(function (p, pi) {
      var id = p.id || ("p" + bi + "-" + pi), bodyId = "inhalt-" + id;
      var k = document.createElement("article");
      k.className = "karte"; k.id = id;
      var links = (p.links || []).filter(function (l) { return l && l.url; });
      k.innerHTML =
        '<button class="kopf" aria-expanded="false" aria-controls="' + esc(bodyId) + '">' +
          (p.bild ? '<img class="thumb" src="' + esc(p.bild) + '" alt="" loading="lazy" width="64" height="64">' : "") +
          '<span class="kopf-text"><span class="titel">' + esc(p.titel) + "</span>" +
            (p.kurz ? '<span class="kurz">' + esc(p.kurz) + "</span>" : "") + "</span>" +
          '<span class="pfeil" aria-hidden="true">' + ICON_PFEIL + "</span>" +
        "</button>" +
        '<div class="body" id="' + esc(bodyId) + '" role="region" aria-label="' + esc(p.titel) + '"><div class="body-innen"><div class="inhalt">' +
          (p.bild ? '<img class="hauptbild" data-src="' + esc(p.bild) + '" alt="' + esc(p.titel) + '">' : "") +
          (p.galerie && p.galerie.length ? '<div class="galerie">' + p.galerie.map(function (g) { return '<img data-src="' + esc(g) + '" alt="">'; }).join("") + "</div>" : "") +
          (p.text ? '<div class="text">' + absaetze(p.text) + "</div>" : "") +
          (p.merkmale && p.merkmale.length ? '<ul class="merkmale">' + p.merkmale.map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("") + "</ul>" : "") +
          (links.length ? '<div class="links">' + links.map(function (l, i) {
            var ext = extern(l.url);
            return '<a class="btn' + (i === 0 ? " primaer" : "") + '" href="' + esc(l.url) + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + ">" + esc(l.text || "Öffnen") + (ext ? ICON_RAUS : "") + "</a>";
          }).join("") + "</div>" : "") +
        "</div></div></div>";

      k.querySelector(".kopf").addEventListener("click", function () { umschalten(k); });
      liste.appendChild(k); alleKarten.push(k);
    });
    root.appendChild(sec);
  });

  /* ---------- Auf-/Zuklappen ---------- */
  function bilderLaden(k) {
    k.querySelectorAll("img[data-src]").forEach(function (img) { img.src = img.getAttribute("data-src"); img.removeAttribute("data-src"); });
  }
  function setze(k, auf) {
    k.classList.toggle("offen", auf);
    k.querySelector(".kopf").setAttribute("aria-expanded", String(auf));
  }
  function umschalten(k, ohneScroll) {
    var auf = !k.classList.contains("offen");
    if (auf) bilderLaden(k);
    if (auf && E.nurEinsOffen !== false) alleKarten.forEach(function (o) { if (o !== k) setze(o, false); });
    setze(k, auf);
    try { history.replaceState(null, "", auf ? "#" + k.id : location.pathname + location.search); } catch (e) {}
    if (auf && !ohneScroll) setTimeout(function () {
      var r = k.getBoundingClientRect();
      if (r.top < 0 || r.top > window.innerHeight * 0.6) window.scrollTo({ top: window.scrollY + r.top - 20, behavior: "smooth" });
    }, 470);
  }

  /* ---------- Bild-Vollansicht (Galerie antippen) ---------- */
  var lb = document.createElement("div");
  lb.className = "lightbox"; lb.innerHTML = '<img alt="">';
  document.body.appendChild(lb);
  lb.addEventListener("click", function () { lb.classList.remove("an"); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") lb.classList.remove("an"); });
  root.addEventListener("click", function (e) {
    var t = e.target;
    if (t.tagName === "IMG" && t.closest(".galerie")) { lb.querySelector("img").src = t.src; lb.classList.add("an"); }
  });

  /* ---------- Fuß ---------- */
  var foot = document.getElementById("foot"), rechts = [];
  if (S.impressum) rechts.push('<a href="' + esc(S.impressum) + '">Impressum</a>');
  if (S.datenschutz) rechts.push('<a href="' + esc(S.datenschutz) + '">Datenschutz</a>');
  foot.className += " ein"; foot.style.animationDelay = (0.08 * verz) + "s";
  foot.innerHTML =
    (S.kontakt && S.kontakt.url ? '<a class="btn" href="' + esc(S.kontakt.url) + '">' + esc(S.kontakt.text || "Kontakt") + "</a>" : "") +
    "<small>© " + new Date().getFullYear() + " " + esc(S.name) + (rechts.length ? '<span class="sep">·</span>' + rechts.join('<span class="sep">·</span>') : "") + "</small>";

  /* ---------- Einblend-Klasse nach der Animation entfernen
     (sonst können die Karten das Licht dahinter nicht weichzeichnen) ---------- */
  document.querySelectorAll(".ein").forEach(function (el) {
    el.addEventListener("animationend", function (e) { if (e.target === el) el.classList.remove("ein"); });
  });

  /* ---------- Direktlink: deineseite.de/#bodenlos ---------- */
  var ziel = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (ziel && ziel.classList.contains("karte")) { umschalten(ziel, true); setTimeout(function () { ziel.scrollIntoView({ block: "start" }); }, 60); }
})();
