(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const fmt = (n, d = 0) => Number(n).toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
  const WA = document.body.dataset.wa;

  /* mobile nav */
  const menuBtn = $(".menu-btn");
  const mnav = $(".mobile-nav");
  if (menuBtn && mnav) {
    menuBtn.addEventListener("click", () => {
      const open = mnav.dataset.open === "true";
      mnav.dataset.open = String(!open);
      menuBtn.setAttribute("aria-expanded", String(!open));
      menuBtn.textContent = open ? "Menu" : "Close";
    });
  }

  /* header shadow once the page scrolls */
  const hdr = $(".header");
  if (hdr) {
    const onScroll = () => hdr.classList.toggle("is-scrolled", scrollY > 8);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* price range chart tooltip */
  $$(".pr").forEach((fig) => {
    const tip = $(".pr__tip", fig);
    $$(".pr__row", fig).forEach((row) => {
      const show = (x) => {
        const fr = fig.getBoundingClientRect(), rr = row.getBoundingClientRect();
        tip.textContent = row.dataset.tip;
        tip.hidden = false;
        const w = tip.offsetWidth;
        tip.style.left = Math.min(Math.max(x - fr.left, w / 2 + 4), fr.width - w / 2 - 4) + "px";
        tip.style.top = rr.top - fr.top + 6 + "px";
      };
      row.addEventListener("mousemove", (e) => show(e.clientX));
      row.addEventListener("focus", () => { const r = row.getBoundingClientRect(); show(r.left + r.width / 2); });
      row.addEventListener("mouseleave", () => (tip.hidden = true));
      row.addEventListener("blur", () => (tip.hidden = true));
    });
  });

  /* hero video: desktop only, respects reduced motion and data saver, pauses off-screen */
  const hv = $(".hero__video");
  if (hv) {
    const saveData = navigator.connection && navigator.connection.saveData;
    const wide = matchMedia("(min-width: 768px)").matches;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (wide && !still && !saveData) {
      const btn = $(".hero__pause");
      const pauseIcon = btn.innerHTML;
      const playIcon = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3.5v9a.5.5 0 0 0 .77.42l7-4.5a.5.5 0 0 0 0-.84l-7-4.5A.5.5 0 0 0 5 3.5Z"/></svg>';
      let userPaused = false;
      hv.src = hv.dataset.src;
      hv.addEventListener("playing", () => { hv.classList.add("is-playing"); btn.hidden = false; }, { once: true });
      hv.play().catch(() => {});
      btn.addEventListener("click", () => {
        userPaused = !hv.paused;
        if (userPaused) hv.pause(); else hv.play().catch(() => {});
        btn.innerHTML = userPaused ? playIcon : pauseIcon;
        btn.setAttribute("aria-label", userPaused ? "Play background video" : "Pause background video");
      });
      if ("IntersectionObserver" in window) {
        new IntersectionObserver(([e]) => {
          if (userPaused) return;
          if (e.isIntersecting) hv.play().catch(() => {}); else hv.pause();
        }).observe(hv);
      }
    }
  }

  /* count-up numbers when they come into view */
  const counters = $$("[data-count]");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (counters.length && "IntersectionObserver" in window && !reduce) {
    const run = (el) => {
      const end = +el.dataset.count, t0 = performance.now(), dur = 1400;
      const step = (t) => {
        const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
        el.textContent = fmt(Math.round(end * e));
        if (k < 1) requestAnimationFrame(step);
      };
      el.textContent = "0";
      requestAnimationFrame(step);
    };
    const co = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { run(e.target); co.unobserve(e.target); }
    }), { threshold: 0.6 });
    counters.forEach((el) => co.observe(el));
  }

  /* gentle parallax on full-bleed photographs */
  const para = $$("[data-parallax]");
  if (para.length && !reduce) {
    const tick = () => para.forEach((el) => {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      el.style.transform = `translateY(${((r.top + r.height / 2 - innerHeight / 2) * -0.08).toFixed(1)}px)`;
    });
    addEventListener("scroll", () => requestAnimationFrame(tick), { passive: true });
    tick();
  }

  /* reveal on scroll */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { rootMargin: "0px 0px -8% 0px" });
    $$(".reveal").forEach((el) => io.observe(el));
  } else $$(".reveal").forEach((el) => el.classList.add("in"));

  /* clickable table rows */
  $$("tr[data-href]").forEach((tr) => tr.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    location.href = tr.dataset.href;
  }));

  /* marketplace */
  const mk = $("#market");
  if (mk) {
    const cards = $$(".pcard", mk);
    const rows = $$(".mk-table tbody tr", mk);
    const state = { cat: "All", q: "", reg: "", status: "", sort: "featured" };
    const params = new URLSearchParams(location.search);
    if (params.get("category")) state.cat = params.get("category");
    if (params.get("q")) state.q = params.get("q");

    const grid = $(".grid-cards", mk);
    const tbody = $(".mk-table tbody", mk);
    const count = $("#mk-count");
    const vol = $("#mk-vol");
    const empty = $(".empty", mk);

    function apply() {
      const q = state.q.trim().toLowerCase();
      const match = (el) =>
        (state.cat === "All" || el.dataset.cat === state.cat) &&
        (!state.reg || el.dataset.reg === state.reg) &&
        (!state.status || el.dataset.status === state.status) &&
        (!q || el.dataset.search.includes(q));
      const cmp = {
        featured: (a, b) => a.dataset.i - b.dataset.i,
        "price-asc": (a, b) => a.dataset.price - b.dataset.price,
        "price-desc": (a, b) => b.dataset.price - a.dataset.price,
        "volume-desc": (a, b) => b.dataset.vol - a.dataset.vol,
        vintage: (a, b) => b.dataset.vintage - a.dataset.vintage || a.dataset.i - b.dataset.i,
        name: (a, b) => a.dataset.name.localeCompare(b.dataset.name),
      }[state.sort];
      let n = 0, v = 0;
      [...cards].sort(cmp).forEach((c) => {
        const ok = match(c);
        c.classList.toggle("hidden", !ok);
        if (ok) { n++; v += +c.dataset.vol; }
        grid.appendChild(c);
      });
      [...rows].sort(cmp).forEach((r) => { r.classList.toggle("hidden", !match(r)); tbody.appendChild(r); });
      count.textContent = n;
      vol.textContent = fmt(v);
      empty.style.display = n ? "none" : "block";
      $$(".chip[data-cat]", mk).forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.cat === state.cat)));
      const url = new URL(location);
      state.cat === "All" ? url.searchParams.delete("category") : url.searchParams.set("category", state.cat);
      state.q ? url.searchParams.set("q", state.q) : url.searchParams.delete("q");
      history.replaceState(null, "", url);
    }
    $$(".chip[data-cat]", mk).forEach((b) => b.addEventListener("click", () => { state.cat = b.dataset.cat; apply(); }));
    const qi = $("#mk-q");
    qi.value = state.q;
    qi.addEventListener("input", () => { state.q = qi.value; apply(); });
    $("#mk-reg").addEventListener("change", (e) => { state.reg = e.target.value; apply(); });
    $("#mk-status").addEventListener("change", (e) => { state.status = e.target.value; apply(); });
    $("#mk-sort").addEventListener("change", (e) => { state.sort = e.target.value; apply(); });
    $$(".viewtoggle button", mk).forEach((b) => b.addEventListener("click", () => {
      mk.dataset.view = b.dataset.view;
      $$(".viewtoggle button", mk).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      try { localStorage.setItem("mk-view", b.dataset.view); } catch (e) {}
    }));
    try {
      const v = localStorage.getItem("mk-view");
      if (v) $(`.viewtoggle button[data-view="${v}"]`, mk)?.click();
    } catch (e) {}
    $("#mk-reset")?.addEventListener("click", () => {
      Object.assign(state, { cat: "All", q: "", reg: "", status: "" });
      qi.value = ""; $("#mk-reg").value = ""; $("#mk-status").value = "";
      apply();
    });
    apply();
  }

  /* project buy box */
  const bb = $(".buybox");
  if (bb) {
    const price = +bb.dataset.price, max = +bb.dataset.max;
    const inp = $("#bb-qty"), tot = $("#bb-total");
    const upd = () => {
      let q = Math.max(0, Math.min(max, Math.round(+inp.value || 0)));
      tot.textContent = "$" + fmt(q * price, 2);
      const msg = `Hi, I'd like to buy ${fmt(q)} tCO2e of "${bb.dataset.name}" (${bb.dataset.registry}, vintage ${bb.dataset.vintage}) listed at $${price.toFixed(2)}/tCO2e.`;
      $("#bb-wa").href = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
      $("#bb-enquire").href = `/contact/?topic=buy&project=${encodeURIComponent(bb.dataset.slug)}&qty=${q}`;
    };
    inp.addEventListener("input", upd);
    upd();
  }

  /* knowledge base topic chips (mobile): bring the current topic into view */
  const kside = $(".kbt-side");
  const kcur = kside && $('a[aria-current="page"]', kside);
  if (kcur && kside.scrollWidth > kside.clientWidth) {
    const offset = kcur.getBoundingClientRect().left - kside.getBoundingClientRect().left + kside.scrollLeft;
    kside.scrollLeft = offset - (kside.clientWidth - kcur.offsetWidth) / 2;
  }

  /* table of contents highlight */
  const toc = $(".toc");
  if (toc && "IntersectionObserver" in window) {
    const links = new Map($$("a", toc).map((a) => [a.getAttribute("href").slice(1), a]));
    const heads = $$(".prose h2[id], .prose h3[id]").filter((h) => links.has(h.id));
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((a) => a.classList.remove("active"));
          links.get(e.target.id)?.classList.add("active");
        }
      });
    }, { rootMargin: "-10% 0px -80% 0px" });
    heads.forEach((h) => io.observe(h));
  }

  /* knowledge base + insights search */
  const kbs = $("#kb-search");
  if (kbs) {
    const out = $("#kb-results");
    let index = null;
    const load = () => index || (index = fetch(kbs.dataset.index).then((r) => r.json()));
    const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
    kbs.addEventListener("focus", load, { once: true });
    kbs.addEventListener("input", async () => {
      const q = kbs.value.trim().toLowerCase();
      if (q.length < 2) { out.style.display = "none"; return; }
      const words = q.split(/\s+/);
      const data = await load();
      const hits = data
        .map((d) => {
          const t = d.title.toLowerCase(), b = d.text;
          let s = 0;
          for (const w of words) {
            if (t.includes(w)) s += 5;
            else if (b.includes(w)) s += 1;
            else return null;
          }
          return { d, s };
        })
        .filter(Boolean).sort((a, b) => b.s - a.s).slice(0, 12);
      out.innerHTML = hits.length
        ? hits.map(({ d }) => `<li><a href="${d.url}"><small>${esc(d.group)}</small>${esc(d.title)}</a></li>`).join("")
        : `<li><a href="/contact/?topic=question&q=${encodeURIComponent(kbs.value)}"><small>No match</small>Ask our team about “${esc(kbs.value)}”</a></li>`;
      out.style.display = "block";
    });
  }

  /* insights filter + load more */
  const ins = $("#insights");
  if (ins) {
    const items = $$(".acard", ins);
    const more = $("#ins-more");
    const PAGE = 18;
    let topic = new URLSearchParams(location.search).get("topic") || "All";
    let shown = PAGE;
    function apply() {
      let n = 0, total = 0;
      items.forEach((it) => {
        const ok = topic === "All" || it.dataset.topic === topic;
        if (ok) total++;
        const vis = ok && n < shown;
        if (vis) n++;
        it.classList.toggle("hidden", !vis);
      });
      more.classList.toggle("hidden", n >= total);
      $$(".chip[data-topic]", ins).forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.topic === topic)));
    }
    $$(".chip[data-topic]", ins).forEach((b) => b.addEventListener("click", () => {
      topic = b.dataset.topic; shown = PAGE; apply();
      const url = new URL(location);
      topic === "All" ? url.searchParams.delete("topic") : url.searchParams.set("topic", topic);
      history.replaceState(null, "", url);
    }));
    more.addEventListener("click", () => { shown += PAGE; apply(); });
    apply();
  }

  /* CORSIA offsetting estimator */
  const calc = $("#calc");
  if (calc) {
    const F = { jet: 3.16, avgas: 3.10 };
    let mode = "fuel";
    const v = (id) => Math.max(0, parseFloat($(id).value) || 0);
    $$(".seg button", calc).forEach((b) => b.addEventListener("click", () => {
      mode = b.dataset.mode;
      $$(".seg button", calc).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      $("#c-fuel-wrap").classList.toggle("hidden", mode !== "fuel");
      $("#c-co2-wrap").classList.toggle("hidden", mode !== "co2");
      run();
    }));
    function run() {
      const emissions = mode === "fuel" ? v("#c-fuel") * F[$("#c-fueltype").value] : v("#c-co2");
      const gf = v("#c-gf") / 100;
      const saf = v("#c-saf");
      const gross = emissions * gf;
      const net = Math.max(0, gross - saf);
      const price = v("#c-price");
      $("#o-em").textContent = fmt(emissions) + " tCO₂";
      $("#o-gross").textContent = fmt(gross) + " t";
      $("#o-saf").textContent = "− " + fmt(Math.min(saf, gross)) + " t";
      $("#o-net").innerHTML = fmt(Math.ceil(net)) + " <small>units</small>";
      $("#o-cost").textContent = "$" + fmt(Math.ceil(net) * price);
      $("#o-cost-inr").textContent = "≈ ₹" + fmt(Math.ceil(net) * price * v("#c-fx"));
      const below = emissions > 0 && emissions < 10000;
      $("#o-threshold").classList.toggle("hidden", !below);
      const msg = `Hi, I used the CORSIA estimator: ${fmt(emissions)} tCO2 in-scope emissions, growth factor ${fmt(gf * 100, 2)}%, estimated requirement ${fmt(Math.ceil(net))} units. I'd like a proper assessment.`;
      $("#o-wa").href = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
    }
    $$("input, select", calc).forEach((el) => el.addEventListener("input", run));
    run();
  }

  /* contact form: hands off to WhatsApp or email */
  const form = $("#enquiry");
  if (form) {
    const p = new URLSearchParams(location.search);
    const topic = p.get("topic");
    if (topic && form.topic.querySelector(`option[value="${topic}"]`)) form.topic.value = topic;
    const proj = p.get("project");
    if (proj) {
      const title = form.dataset.projects ? JSON.parse(form.dataset.projects)[proj] : null;
      if (title) form.message.value = `I'm interested in buying ${p.get("qty") ? fmt(+p.get("qty")) + " tCO2e of " : ""}"${title}". Please share availability and next steps.`;
    }
    if (p.get("q")) form.message.value = `Question: ${p.get("q")}`;
    const compose = () => {
      const f = new FormData(form);
      const topicLabel = form.topic.selectedOptions[0].text;
      return [
        `Enquiry: ${topicLabel}`,
        `Name: ${f.get("name")}`,
        f.get("company") ? `Company: ${f.get("company")}` : null,
        `Email: ${f.get("email")}`,
        f.get("phone") ? `Phone: ${f.get("phone")}` : null,
        f.get("volume") ? `Indicative volume: ${f.get("volume")} tCO2e` : null,
        "",
        f.get("message"),
      ].filter((x) => x !== null).join("\n");
    };
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const via = e.submitter?.value || "whatsapp";
      const text = compose();
      if (via === "email") {
        location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent("Carbon credit enquiry — " + form.topic.selectedOptions[0].text)}&body=${encodeURIComponent(text)}`;
      } else {
        window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
      }
      $(".form__ok", form).style.display = "block";
    });
  }
})();
