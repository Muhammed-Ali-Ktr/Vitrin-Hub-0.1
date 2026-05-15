/**
 * Vitrin — 20 örnek sektör + Apps (siteler/ içindeki projeler)
 */
const projects = [
  {
    id: "avukat",
    name: "Avukat",
    lucide: "scale",
    demos: [
      { title: "Lex & Partners", slug: "kurumsal hukuk" },
      { title: "Dava Portalı", slug: "ceza & medeni" },
      { title: "Avukat Vitrin", slug: "kişisel marka" },
    ],
  },
  {
    id: "disci",
    name: "Dişçi",
    lucide: "smile",
    demos: [
      { title: "Dental Plus", slug: "klinik rezervasyon" },
      { title: "Smile Studio", slug: "implant & estetik" },
      { title: "Ağız Diş Sağlığı", slug: "aile hekimliği" },
    ],
  },
  {
    id: "estetik",
    name: "Estetik",
    lucide: "sparkles",
    demos: [
      { title: "Aura Clinic", slug: "medikal estetik" },
      { title: "Lüks Spa", slug: "cilt & bakım" },
      { title: "Glow House", slug: "lazer & peeling" },
    ],
  },
  {
    id: "restoran",
    name: "Restoran",
    lucide: "utensils-crossed",
    demos: [
      { title: "Maison Table", slug: "fine dining" },
      { title: "Urban Kitchen", slug: "brunch & bar" },
      { title: "Sushi Noir", slug: "rezervasyon & menü" },
    ],
  },
  {
    id: "eticaret",
    name: "E-Ticaret",
    lucide: "shopping-bag",
    demos: [
      { title: "Maison Commerce", slug: "lifestyle shop" },
      { title: "Tech Vault", slug: "elektronik" },
      { title: "Organic Cart", slug: "gıda & abonelik" },
    ],
  },
  {
    id: "gayrimenkul",
    name: "Gayrimenkul",
    lucide: "building-2",
    demos: [
      { title: "Skyline Estates", slug: "satılık & kiralık" },
      { title: "Prime Realty", slug: "lüks konut" },
      { title: "Metro Invest", slug: "ticari portföy" },
    ],
  },
  {
    id: "mimarlik",
    name: "Mimarlık",
    lucide: "landmark",
    demos: [
      { title: "Atelier Form", slug: "mimari ofis" },
      { title: "Volume Studio", slug: "iç mimari" },
      { title: "Grid Architects", slug: "projeler & 3D" },
    ],
  },
  {
    id: "spor",
    name: "Spor",
    lucide: "dumbbell",
    demos: [
      { title: "Iron House", slug: "fitness & PT" },
      { title: "Velocity Run", slug: "koşu & maraton" },
      { title: "Zen Yoga", slug: "stüdyo & üyelik" },
    ],
  },
  {
    id: "psikolog",
    name: "Psikolog",
    lucide: "brain",
    demos: [
      { title: "Mindful Space", slug: "terapi & danışmanlık" },
      { title: "Calm Room", slug: "online seans" },
      { title: "Bloom Psychology", slug: "kurumsal EAP" },
    ],
  },
  {
    id: "otel",
    name: "Otel",
    lucide: "bed-double",
    demos: [
      { title: "Harbor Suites", slug: "butik otel" },
      { title: "Alpine Lodge", slug: "dağ konaklama" },
      { title: "Urban Stay", slug: "şehir oteli" },
    ],
  },
  {
    id: "oto-servis",
    name: "Oto Servis",
    lucide: "car",
    demos: [
      { title: "Precision Garage", slug: "servis & bakım" },
      { title: "Detail Lab", slug: "detay & kaplama" },
      { title: "Turbo Pit", slug: "performans" },
    ],
  },
  {
    id: "saas",
    name: "SaaS",
    lucide: "layout-dashboard",
    demos: [
      { title: "Nimbus CRM", slug: "satış pipeline" },
      { title: "Pulse Analytics", slug: "BI dashboard" },
      { title: "Flow HR", slug: "İK otomasyon" },
    ],
  },
  {
    id: "lojistik",
    name: "Lojistik",
    lucide: "truck",
    demos: [
      { title: "Atlas Freight", slug: "yük taşımacılığı" },
      { title: "Swift Parcel", slug: "kurye & son mil" },
      { title: "Cold Chain", slug: "soğuk zincir" },
    ],
  },
  {
    id: "egitim",
    name: "Eğitim",
    lucide: "graduation-cap",
    demos: [
      { title: "Academy One", slug: "kurs platformu" },
      { title: "STEM Lab", slug: "atölye & bootcamp" },
      { title: "Lingua School", slug: "dil okulu" },
    ],
  },
  {
    id: "kuyumcu",
    name: "Kuyumcu",
    lucide: "gem",
    demos: [
      { title: "Atelier Or", slug: "nişan & özel tasarım" },
      { title: "Luxe Time", slug: "saat & mücevher" },
      { title: "Heritage Jewels", slug: "klasik koleksiyon" },
    ],
  },
  {
    id: "veteriner",
    name: "Veteriner",
    lucide: "paw-print",
    demos: [
      { title: "Pati Klinik", slug: "muayene & aşı" },
      { title: "WildCare Vet", slug: "cerrahi & görüntüleme" },
      { title: "Happy Tails", slug: "pet otel & bakım" },
    ],
  },
  {
    id: "temizlik",
    name: "Temizlik",
    lucide: "droplets",
    demos: [
      { title: "Pure Home", slug: "konut temizlik" },
      { title: "Office Shine", slug: "kurumsal hijyen" },
      { title: "Eco Wash", slug: "halı & koltuk" },
    ],
  },
  {
    id: "sigorta",
    name: "Sigorta",
    lucide: "shield",
    demos: [
      { title: "Guardian Poliçe", slug: "bireysel paketler" },
      { title: "Fleet Cover", slug: "ticari filo" },
      { title: "Life Secure", slug: "hayat & sağlık" },
    ],
  },
  {
    id: "organizasyon",
    name: "Organizasyon",
    lucide: "party-popper",
    demos: [
      { title: "Velvet Events", slug: "düğün & gala" },
      { title: "Summit Pro", slug: "kurumsal etkinlik" },
      { title: "Bloom Décor", slug: "süsleme & konsept" },
    ],
  },
  {
    id: "fotografcilik",
    name: "Fotoğrafçılık",
    lucide: "camera",
    demos: [
      { title: "Mono Lens", slug: "portre & editoryal" },
      { title: "Frame Wedding", slug: "düğün hikayesi" },
      { title: "Studio Noir", slug: "ürün & moda" },
    ],
  },
  {
    id: "apps",
    name: "Apps",
    lucide: "layout-grid",
    demos: [
      { title: "Hava durumu", slug: "tek sayfa", url: "siteler/weather.html" },
      { title: "Planlama", slug: "tek sayfa", url: "siteler/planlama.html" },
      { title: "Keylogger", slug: "tek sayfa", url: "siteler/keyloger.html" },
      { title: "Kalori", slug: "tek sayfa", url: "siteler/calori.html" },
      { title: "YKS uygulaması", slug: "YKS", url: "siteler/YKS/yks.html" },
      { title: "Sporthrone", slug: "Sporthrone", url: "siteler/Sporthrone/sporthrone.html" },
      { title: "Sayaç · YKS", slug: "Sayaç", url: "siteler/Sayaç/yks.html" },
      { title: "Sayaç · YDS 2", slug: "Sayaç", url: "siteler/Sayaç/yds2.html" },
      { title: "Sayaç · YDS 1", slug: "Sayaç", url: "siteler/Sayaç/yds1.html" },
      { title: "Sayaç · YDS İngilizce", slug: "Sayaç", url: "siteler/Sayaç/yds-ingilizce.html" },
      { title: "Sayaç · MEB AGS", slug: "Sayaç", url: "siteler/Sayaç/meb-ags.html" },
      { title: "Sayaç · LGS", slug: "Sayaç", url: "siteler/Sayaç/lgs.html" },
      { title: "Sayaç · KPSS", slug: "Sayaç", url: "siteler/Sayaç/kpss.html" },
      { title: "Sayaç · Geri sayım", slug: "Sayaç", url: "siteler/Sayaç/gerisayım.html" },
      { title: "Sayaç · Geri sayım (alt)", slug: "Sayaç", url: "siteler/Sayaç/geri-sayim.html" },
      { title: "Sayaç · DGS", slug: "Sayaç", url: "siteler/Sayaç/dgs.html" },
      { title: "QR Code", slug: "QR Code", url: "siteler/QR Code/qrcode.html" },
      { title: "Technozift", slug: "Haber Portalı", url: "siteler/Haber Portalı/technozift.html" },
      { title: "Haber · Unreal 5.5", slug: "Haber Portalı", url: "siteler/Haber Portalı/news-unreal-5-5.html" },
      { title: "Haber · React / Next", slug: "Haber Portalı", url: "siteler/Haber Portalı/news-react-next.html" },
      { title: "Haber · Python 3.13", slug: "Haber Portalı", url: "siteler/Haber Portalı/news-python-3-13.html" },
      { title: "Haber · iOS / Android", slug: "Haber Portalı", url: "siteler/Haber Portalı/news-ios-android.html" },
      { title: "Haber · Figma UI", slug: "Haber Portalı", url: "siteler/Haber Portalı/news-figma-ui.html" },
      { title: "Haber · ChatGPT / Claude", slug: "Haber Portalı", url: "siteler/Haber Portalı/news-chatgpt-claude.html" },
      { title: "Flip Clock", slug: "Flip Clock", url: "siteler/Flip Clock/flipclock.html" },
      { title: "Eksik · Sayaç 1", slug: "Eksik Sayfalar", url: "siteler/Eksik Sayfalar/sayac1.html" },
      { title: "Eksik · Portföy", slug: "Eksik Sayfalar", url: "siteler/Eksik Sayfalar/portfoy.html" },
      { title: "Eksik · Parola", slug: "Eksik Sayfalar", url: "siteler/Eksik Sayfalar/parola.html" },
      { title: "Eksik · Flip", slug: "Eksik Sayfalar", url: "siteler/Eksik Sayfalar/flip.html" },
      { title: "Eksik · Ezan", slug: "Eksik Sayfalar", url: "siteler/Eksik Sayfalar/ezan.html" },
      { title: "Eksik · Clock", slug: "Eksik Sayfalar", url: "siteler/Eksik Sayfalar/clock.html" },
      { title: "YKS (E)", slug: "E", url: "siteler/E/yks.html" },
      { title: "3D baskı / tasarım", slug: "3D Tasarım", url: "siteler/3D TASARIM SİTESİ/print.html" },
    ],
  },
];

const els = {
  grid: document.getElementById("sectorGrid"),
  viewGrid: document.getElementById("viewGrid"),
  viewDetail: document.getElementById("viewDetail"),
  backBtn: document.getElementById("backBtn"),
  search: document.getElementById("q"),
  detailTitle: document.getElementById("detailTitle"),
  demoList: document.getElementById("demoList"),
};

let filtered = [...projects];

function normalize(s) {
  return String(s)
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

function paintIcons() {
  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons({ attrs: { "stroke-width": "1.35" } });
  }
}

function renderSectors(list) {
  els.grid.innerHTML = "";
  const frag = document.createDocumentFragment();

  list.forEach((p) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "sector";
    if (p.id === "apps") btn.classList.add("sector--apps");
    btn.dataset.id = p.id;
    btn.innerHTML = `
      <div class="sector__icon-wrap">
        <span class="sector__icon" aria-hidden="true">
          <i data-lucide="${p.lucide}"></i>
        </span>
      </div>
      <span class="sector__name">${p.name}</span>
    `;
    frag.appendChild(btn);
  });

  els.grid.appendChild(frag);
  paintIcons();

  els.grid.querySelectorAll(".sector").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const sector = projects.find((x) => x.id === id);
      if (sector) openSector(sector);
    });
  });
}

function swapViews(showDetail) {
  const grid = els.viewGrid;
  const detail = els.viewDetail;
  const DURATION = 560;

  if (showDetail) {
    grid.classList.remove("is-active");
    grid.classList.add("is-leaving");

    detail.hidden = false;
    requestAnimationFrame(() => {
      detail.classList.add("is-active");
    });

    window.setTimeout(() => {
      grid.hidden = true;
      grid.classList.remove("is-leaving");
    }, DURATION);
  } else {
    detail.classList.remove("is-active");

    grid.hidden = false;
    grid.classList.remove("is-leaving");
    grid.classList.remove("is-active");
    grid.classList.add("from-left");

    requestAnimationFrame(() => {
      grid.classList.add("is-active");
    });

    window.setTimeout(() => {
      detail.hidden = true;
      grid.classList.remove("from-left");
    }, DURATION);
  }
}

function demoHint(d, i, hasUrl) {
  if (!d.slug) return hasUrl ? `Öğe ${i + 1}` : `Demo ${i + 1}`;
  return hasUrl ? `${i + 1} · ${d.slug}` : `Demo ${i + 1} · ${d.slug}`;
}

function openSector(sector) {
  els.detailTitle.textContent = sector.name;
  els.demoList.innerHTML = "";

  sector.demos.forEach((d, i) => {
    const row = document.createElement("div");
    row.className = "demo demo--row";

    const iconLucide = d.lucide || sector.lucide;
    const hint = demoHint(d, i, Boolean(d.url));

    const iconWrap = document.createElement("span");
    iconWrap.className = "demo__icon-wrap";

    const iconI = document.createElement("i");
    iconI.setAttribute("data-lucide", iconLucide);

    const text = document.createElement("div");
    text.className = "demo__text";

    const titleEl = document.createElement("span");
    titleEl.className = "demo__title";
    titleEl.textContent = d.title;

    const hintEl = document.createElement("span");
    hintEl.className = "demo__hint";
    hintEl.textContent = hint;

    text.append(titleEl, hintEl);

    if (d.url) {
      const link = document.createElement("a");
      link.className = "demo__icon-link";
      link.href = d.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-label", `${d.title} — yeni sekmede aç`);
      iconWrap.appendChild(iconI);
      link.appendChild(iconWrap);
      row.append(link, text);
    } else {
      const stub = document.createElement("span");
      stub.className = "demo__icon-hit";
      stub.setAttribute("aria-hidden", "true");
      iconWrap.appendChild(iconI);
      stub.appendChild(iconWrap);
      row.append(stub, text);
    }

    els.demoList.appendChild(row);
  });

  paintIcons();
  els.backBtn.hidden = false;
  swapViews(true);
}

function closeSector() {
  els.backBtn.hidden = true;
  swapViews(false);
}

function sectorMatchesQuery(p, q) {
  if (normalize(p.name).includes(q)) return true;
  return p.demos.some((d) => {
    const slug = d.slug != null ? String(d.slug) : "";
    const title = d.title != null ? String(d.title) : "";
    const file = d.url ? normalize(d.url.split("/").pop() || "") : "";
    return (
      normalize(title).includes(q) ||
      normalize(slug).includes(q) ||
      (file && file.includes(q))
    );
  });
}

function onSearch() {
  const raw = els.search.value.trim();
  const q = normalize(raw);
  if (!q) {
    filtered = [...projects];
  } else {
    filtered = projects.filter((p) => sectorMatchesQuery(p, q));
  }
  renderSectors(filtered);
}

els.search.addEventListener("input", onSearch);
els.backBtn.addEventListener("click", closeSector);

renderSectors(filtered);
