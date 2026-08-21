/**
 * app.js — application logic.
 * Responsibilities:
 *  - Render the date timeline + report panel from window.DATES / window.REPORTS.
 *  - Switch dates: destroy active Chart.js instances first (destroyActiveCharts)
 *    to prevent canvas conflicts (project convention).
 *  - Tag functionality: stored in localStorage (key: stock-review-tags-v1);
 *    a date card shows a yellow star ONLY when a tag is added.
 *  - Section TOC with scroll-spy, smooth scroll, back-to-top, mobile drawer,
 *    scroll reveal, and runtime chart palette resolved from CSS variables.
 */
(function () {
  "use strict";

  var TAGS_KEY = "stock-review-tags-v1";
  var DEFAULT_DATE = (window.DATES && window.DATES[0] && window.DATES[0].date) || "2026-08-20";

  var state = {
    activeDate: DEFAULT_DATE,
    charts: [],
    tags: loadTags()
  };

  // ---------- DOM refs ----------
  var $timeline = document.getElementById("timeline");
  var $sidebarCount = document.getElementById("sidebarCount");
  var $report = document.getElementById("report");
  var $toc = document.getElementById("toc");
  var $toTop = document.getElementById("toTop");
  var $menuBtn = document.getElementById("menuBtn");
  var $sidebar = document.getElementById("sidebar");
  var $backdrop = document.getElementById("backdrop");
  var $dialog = document.getElementById("tagDialog");
  var $dialogOverlay = document.getElementById("tagOverlay");
  var $dialogDate = document.getElementById("tagDialogDate");
  var $tagInput = document.getElementById("tagInput");
  var $activeDateEl = document.getElementById("activeDate");

  // ---------- Tags (localStorage) ----------
  function loadTags() {
    try { return JSON.parse(localStorage.getItem(TAGS_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveTags() {
    try { localStorage.setItem(TAGS_KEY, JSON.stringify(state.tags)); } catch (e) {}
  }

  // ---------- Chart palette (resolved from CSS vars) ----------
  function cssVar(name, fallback) {
    var v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return v || fallback;
  }
  function buildPalette() {
    var chartFont = '"SF Pro Text", system-ui, sans-serif';
    var tickColor = cssVar("--viz-ui-chart-tick", "#9599A6");
    var gridColor = cssVar("--viz-ui-chart-axis", "rgba(224, 226, 242, 0.16)");
    var tooltipBg = cssVar("--viz-ui-bg-tooltip", "#1A1B1D");
    return {
      chartFont: chartFont,
      tickColor: tickColor,
      gridColor: gridColor,
      tooltipBg: tooltipBg,
      green: cssVar("--stock-up", "#F65A5A"),
      red: cssVar("--stock-down", "#33C192"),
      amber: cssVar("--status-warning-default", "#D27E24"),
      commonOptions: function () {
        return {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: tickColor, font: { family: chartFont, size: 12 }, boxWidth: 12 } },
            tooltip: this.tooltip({ displayColors: true })
          },
          scales: {
            x: { ticks: { color: tickColor, font: { family: chartFont, size: 11 } }, grid: { color: gridColor } },
            y: { ticks: { color: tickColor, font: { family: chartFont, size: 11 } }, grid: { color: gridColor } }
          }
        };
      },
      tooltip: function (opts) {
        opts = opts || {};
        return {
          backgroundColor: tooltipBg,
          titleColor: "#D1D3DB",
          bodyColor: tickColor,
          borderColor: "rgba(224, 226, 242, 0.24)",
          borderWidth: 1,
          titleFont: { family: chartFont, size: 13, weight: "600" },
          bodyFont: { family: chartFont, size: 12 },
          padding: 10,
          cornerRadius: 6,
          displayColors: opts.displayColors !== false,
          callbacks: opts.valueFmt ? { label: opts.valueFmt } : undefined
        };
      }
    };
  }

  // ---------- Chart lifecycle ----------
  function destroyActiveCharts() {
    state.charts.forEach(function (c) { try { c.destroy(); } catch (e) {} });
    state.charts = [];
  }

  // ---------- Rendering ----------
  function renderTimeline() {
    $timeline.innerHTML = "";
    $sidebarCount.textContent = String(window.DATES.length) + " 篇";
    window.DATES.forEach(function (d) {
      var tag = state.tags[d.date];
      var card = document.createElement("button");
      card.type = "button";
      card.className = "date-card" + (d.date === state.activeDate ? " is-active" : "") + (tag ? " is-tagged" : "");
      card.dataset.date = d.date;
      card.innerHTML =
        '<span class="date-card__rail"><span class="date-card__dot"></span></span>' +
        '<span class="date-card__body">' +
          '<span class="date-card__date">' + d.date + "</span>" +
          '<span class="date-card__sub">' + (tag ? escapeHtml(tag) : escapeHtml(d.subtitle)) + "</span>" +
        "</span>" +
        '<svg class="date-card__star" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01z"/></svg>';
      card.addEventListener("click", function () { selectDate(d.date); });
      card.addEventListener("contextmenu", function (e) { e.preventDefault(); openTagDialog(d.date); });
      $timeline.appendChild(card);
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function renderReport() {
    destroyActiveCharts();
    var report = window.REPORTS[state.activeDate];

    if (!report) {
      $toc.innerHTML = '<span class="toc__label">目录</span>';
      var meta = dateMeta(state.activeDate);
      $report.innerHTML =
        '<div class="report__section">' +
          '<header class="ds-pagehead">' +
            '<div class="ds-pagehead__main">' +
              '<div class="flex items-center gap-3 flex-wrap"><span class="ds-tag ds-tag--brand">A股</span><h1 class="ds-pagehead__title">收盘复盘 · ' + state.activeDate + "</h1></div>" +
              '<p class="ds-pagehead__subtitle">' + escapeHtml(meta.subtitle) + "</p>" +
            "</div>" +
            '<div class="ds-pagehead__actions"><span class="ds-tag">' + state.activeDate + "</span></div>" +
          "</header>" +
        "</div>" +
        '<div class="state-box">' +
          '<span class="state-box__icon"><i data-lucide="file-search"></i></span>' +
          '<div class="state-box__title">该日期报告整理中</div>' +
          '<div class="state-box__desc">此日期的报告尚未迁移到新版深色设计，可右键日期卡片添加标记，或选择 2026-08-20 查看完整示例。</div>' +
        "</div>";
      refreshIcons();
      return;
    }

    // TOC
    var tocHtml = '<span class="toc__label">目录</span>';
    report.sections.forEach(function (s, i) {
      tocHtml += '<a class="toc__link' + (i === 0 ? " is-active" : "") + '" href="#sec-' + s.id + '" data-target="sec-' + s.id + '">' +
        '<span class="font-mono" style="color:var(--bg-brand);margin-right:6px;">' + s.index + "</span>" + escapeHtml(s.title) + "</a>";
    });
    $toc.innerHTML = tocHtml;

    // Report body
    var h = report.header;
    var html =
      '<header class="ds-pagehead">' +
        '<div class="ds-pagehead__main">' +
          '<div class="flex items-center gap-3 flex-wrap"><span class="ds-tag ds-tag--brand">' + escapeHtml(h.tag) + "</span>" +
            '<h1 class="ds-pagehead__title">' + escapeHtml(h.title) + "</h1></div>" +
          '<p class="ds-pagehead__subtitle">' + escapeHtml(h.subtitle) + "</p>" +
        "</div>" +
        '<div class="ds-pagehead__actions"><span class="ds-tag">' + escapeHtml(h.dateLabel) + "</span></div>" +
      "</header>";

    html += '<div class="ds-stack-40">';
    report.sections.forEach(function (s) {
      html +=
        '<section class="report__section ds-stack-24 reveal" id="sec-' + s.id + '">' +
          '<div class="section-head"><span class="section-head__index">' + s.index + "</span>" +
            '<h2 class="h2">' + escapeHtml(s.title) + "</h2></div>" +
          s.html +
        "</section>";
    });
    html += "</div>";

    if (report.footer) {
      html += '<footer class="report-footer">' +
        "<p>" + escapeHtml(report.footer.disclaimer) + "</p>" +
        "<p>" + escapeHtml(report.footer.generatedAt) + "</p>" +
        "</footer>";
    }

    $report.innerHTML = html;
    refreshIcons();

    // Charts: discover canvases in DOM order and consume in factory order.
    if (report.charts && window.Chart) {
      var palette = buildPalette();
      var canvases = Array.prototype.slice.call($report.querySelectorAll("canvas"));
      report.charts.forEach(function (factory, i) {
        var cfg = factory(palette);
        var el = canvases[i];
        if (!el) return;
        el.style.maxWidth = "100%";
        state.charts.push(new Chart(el.getContext("2d"), cfg));
      });
    }

    // Wire TOC clicks (smooth scroll)
    wireToc();
    // Scroll reveal
    setupReveal();
    // Reset scroll position
    window.scrollTo({ top: 0, behavior: "auto" });
    // Refresh back-to-top visibility
    updateToTop();
  }

  function dateMeta(date) {
    for (var i = 0; i < window.DATES.length; i++) {
      if (window.DATES[i].date === date) return window.DATES[i];
    }
    return { date: date, subtitle: "" };
  }

  function refreshIcons() {
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  }

  // ---------- Date switching ----------
  function selectDate(date) {
    if (date === state.activeDate) { closeSidebar(); return; }
    state.activeDate = date;
    if ($activeDateEl) $activeDateEl.textContent = date;
    renderTimeline();
    renderReport();
    closeSidebar();
  }

  // ---------- TOC scroll-spy ----------
  var spySections = [];
  function wireToc() {
    spySections = Array.prototype.slice.call($report.querySelectorAll(".report__section"));
    var links = Array.prototype.slice.call($toc.querySelectorAll(".toc__link"));
    links.forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var el = document.getElementById(a.dataset.target);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function updateSpy() {
    if (!spySections.length) return;
    var offset = 140;
    var current = spySections[0];
    for (var i = 0; i < spySections.length; i++) {
      if (spySections[i].getBoundingClientRect().top - offset <= 0) current = spySections[i];
    }
    var id = current.id;
    var links = $toc.querySelectorAll(".toc__link");
    links.forEach(function (a) {
      a.classList.toggle("is-active", a.dataset.target === id);
    });
  }

  // ---------- Back to top ----------
  function updateToTop() {
    if (window.scrollY > 400) $toTop.classList.add("is-visible");
    else $toTop.classList.remove("is-visible");
  }

  // ---------- Scroll reveal ----------
  var revealObserver = null;
  function setupReveal() {
    var els = $report.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); revealObserver.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
    els.forEach(function (el) { revealObserver.observe(el); });
  }

  // ---------- Mobile sidebar drawer ----------
  function openSidebar() { $sidebar.classList.add("is-open"); $backdrop.classList.add("is-open"); }
  function closeSidebar() { $sidebar.classList.remove("is-open"); $backdrop.classList.remove("is-open"); }

  // ---------- Tag dialog ----------
  function openTagDialog(date) {
    $dialogDate.textContent = date;
    $tagInput.value = state.tags[date] || "";
    $dialogOverlay.classList.add("is-open");
    setTimeout(function () { $tagInput.focus(); }, 50);
  }
  function closeTagDialog() { $dialogOverlay.classList.remove("is-open"); }
  function saveTag() {
    var val = $tagInput.value.trim();
    if (val) state.tags[state.activeDate] = val;
    else delete state.tags[state.activeDate];
    saveTags();
    renderTimeline();
    closeTagDialog();
  }
  function clearTag() {
    delete state.tags[state.activeDate];
    saveTags();
    renderTimeline();
    closeTagDialog();
  }

  // ---------- Events ----------
  window.addEventListener("scroll", function () { updateSpy(); updateToTop(); }, { passive: true });
  window.addEventListener("resize", updateSpy, { passive: true });
  $toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  $menuBtn.addEventListener("click", openSidebar);
  $backdrop.addEventListener("click", closeSidebar);
  document.getElementById("tagBtn").addEventListener("click", function () { openTagDialog(state.activeDate); });
  document.getElementById("tagCancel").addEventListener("click", closeTagDialog);
  document.getElementById("tagSave").addEventListener("click", saveTag);
  document.getElementById("tagClear").addEventListener("click", clearTag);
  $dialogOverlay.addEventListener("click", function (e) { if (e.target === $dialogOverlay) closeTagDialog(); });
  $tagInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") saveTag();
    if (e.key === "Escape") closeTagDialog();
  });
  // Keyboard: left/right to switch dates
  document.addEventListener("keydown", function (e) {
    if ($dialogOverlay.classList.contains("is-open")) return;
    if (e.target && /^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
    var idx = -1;
    for (var i = 0; i < window.DATES.length; i++) { if (window.DATES[i].date === state.activeDate) { idx = i; break; } }
    if (e.key === "ArrowLeft" && idx < window.DATES.length - 1) { selectDate(window.DATES[idx + 1].date); }
    else if (e.key === "ArrowRight" && idx > 0) { selectDate(window.DATES[idx - 1].date); }
  });

  // ---------- Boot ----------
  function boot() {
    if ($activeDateEl) $activeDateEl.textContent = state.activeDate;
    renderTimeline();
    renderReport();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
