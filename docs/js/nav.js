/* ============================================================
   MOOSEVILLE ADVENTURES — Design Wiki · nav.js
   Injects the shared sidebar navigation synchronously.
   Place <nav class="sidebar" id="site-nav"></nav> and this
   <script> tag at the top of <body> before other content.
   ============================================================ */
(function () {
  var nav = document.getElementById('site-nav');
  if (!nav) return;
  nav.innerHTML = `
  <a href="index.html" class="sidebar-brand">
    <img width=200 src="img/Mooseville.png" alt="Mooseville Adventures" class="brand-moose">
  </a>
  <div class="nav-group">
    <div class="nav-group-label">Story</div>
    <a href="lore.html" class="nav-link"><span class="nav-icon"><img src="img/book.svg" alt="Open Book"></span> World Lore</a>
    <a href="characters.html" class="nav-link"><span class="nav-icon"><img src="img/moose.svg" alt="Moose"></span> Characters &amp; NPCs</a>
  </div>
  <div class="nav-group">
    <div class="nav-group-label">World</div>
    <a href="world.html" class="nav-link"><span class="nav-icon"><img src="img/map.svg" alt="Map"></span> Biomes &amp; Maps</a>
  </div>
  <div class="nav-group">
    <div class="nav-group-label">Art Direction</div>
    <a href="art.html" class="nav-link"><span class="nav-icon"><img src="img/palette.svg" alt="Palette"></span> Visual Style Guide</a>
    <a href="character-art.html" class="nav-link"><span class="nav-icon"><img src="img/pencil.svg" alt="Pencil"></span> Character Art Sheets</a>
  </div>
  <div class="nav-group">
    <div class="nav-group-label">Game Design</div>
    <a href="design.html" class="nav-link"><span class="nav-icon"><img src="img/gear.svg" alt="Gear"></span> Systems &amp; Economy</a>
    <a href="assets.html" class="nav-link"><span class="nav-icon"><img src="img/construction.svg" alt="Construction"></span> Asset Catalog</a>
  </div>
  <div class="nav-group">
    <div class="nav-group-label">Audio</div>
    <a href="audio.html" class="nav-link"><span class="nav-icon"><img src="img/music.svg" alt="Music"></span> Audio Design</a>
  </div>
  <div class="nav-group">
    <div class="nav-group-label">Production</div>
    <a href="milestones.html" class="nav-link"><span class="nav-icon"><img src="img/chart.svg" alt="Chart"></span> Milestone Tracker</a>
    <a href="technical.html" class="nav-link"><span class="nav-icon"><img src="img/wrench.svg" alt="Wrench"></span> Technical Reference</a>
  </div>
  <div class="nav-group">
    <a href="index.html" class="nav-link"><span class="nav-icon"><img src="img/home.svg" alt="Home"></span> Home</a>
  </div>
  <div class="sidebar-footer">Mooseville Adventures<br>Design Wiki — Internal Use</div>
`;
})();
