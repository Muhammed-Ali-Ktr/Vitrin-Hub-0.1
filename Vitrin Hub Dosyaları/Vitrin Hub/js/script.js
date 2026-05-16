const sectors = [
  { category: "Avukatlık & Hukuk", icon: "fa-solid fa-scale-balanced", hue: 218 },
  { category: "Diş Hekimliği", icon: "fa-solid fa-tooth", hue: 188 },
  { category: "Estetik & Güzellik Merkezi", icon: "fa-solid fa-spa", hue: 305 },
  { category: "Cafe & Restoran", icon: "fa-solid fa-mug-hot", hue: 28 },
  { category: "E-Ticaret (Giyim/Moda)", icon: "fa-solid fa-shirt", hue: 335 },
  { category: "Gayrimenkul & Emlak", icon: "fa-solid fa-building", hue: 38 },
  { category: "Mimarlık & İç Mimarlık", icon: "fa-solid fa-drafting-compass", hue: 24 },
  { category: "Spor Salonu & Personal Trainer", icon: "fa-solid fa-dumbbell", hue: 152 },
  { category: "Psikolog & Danışmanlık", icon: "fa-solid fa-brain", hue: 265 },
  { category: "Otel & Turizm", icon: "fa-solid fa-hotel", hue: 200 },
  { category: "Oto Servis & Tamir", icon: "fa-solid fa-car", hue: 2 },
  { category: "Yazılım & SaaS", icon: "fa-solid fa-laptop-code", hue: 228 },
  { category: "Lojistik & Nakliyat", icon: "fa-solid fa-truck-fast", hue: 42 },
  { category: "Eğitim & Online Kurs", icon: "fa-solid fa-graduation-cap", hue: 258 },
  { category: "Kuyumculuk & Aksesuar", icon: "fa-solid fa-gem", hue: 318 },
  { category: "Veteriner Kliniği", icon: "fa-solid fa-paw", hue: 168 },
  { category: "Temizlik Şirketi", icon: "fa-solid fa-broom", hue: 178 },
  { category: "Sigorta Acentesi", icon: "fa-solid fa-shield-halved", hue: 208 },
  { category: "Organizasyon & Düğün", icon: "fa-solid fa-champagne-glasses", hue: 328 },
  { category: "Fotoğrafçılık", icon: "fa-solid fa-camera", hue: 285 },
];

const projects = [
  { id: "law-1", category: "Avukatlık & Hukuk", title: "Hukuk Bürosu Alpha", url: "https://example.com/demo/law-alpha", description: "Kurumsal hukuk ve danışmanlık vitrini." },
  { id: "law-2", category: "Avukatlık & Hukuk", title: "İcra & Alacak Portalı", url: "https://example.com/demo/law-icra", description: "İcra süreçleri için sade bilgi mimarisi." },
  { id: "law-3", category: "Avukatlık & Hukuk", title: "Aile Hukuku Studio", url: "https://example.com/demo/law-aile", description: "Randevu ve içerik odaklı tek sayfa." },
  { id: "dent-1", category: "Diş Hekimliği", title: "Ağız Diş Kliniği", url: "https://example.com/demo/dent-agiz", description: "Hizmetler ve tedavi özetleri." },
  { id: "dent-2", category: "Diş Hekimliği", title: "Ortodonti Merkezi", url: "https://example.com/demo/dent-orto", description: "Şeffaf plak ve braket vitrin sayfası." },
  { id: "dent-3", category: "Diş Hekimliği", title: "Çocuk Diş Polikliniği", url: "https://example.com/demo/dent-cocuk", description: "Ebeveyn odaklı minimal arayüz." },
  { id: "est-1", category: "Estetik & Güzellik Merkezi", title: "Glow Skin Lab", url: "https://example.com/demo/est-glow", description: "Cilt bakımı paketleri ve galeri." },
  { id: "est-2", category: "Estetik & Güzellik Merkezi", title: "Lazer & Epilasyon", url: "https://example.com/demo/est-lazer", description: "Seans planı ve fiyat özetleri." },
  { id: "est-3", category: "Estetik & Güzellik Merkezi", title: "Medikal Estetik Klinik", url: "https://example.com/demo/est-medikal", description: "Uygulama listesi ve doktor vitrinleri." },
  { id: "cafe-1", category: "Cafe & Restoran", title: "Brunch & Kahve", url: "https://example.com/demo/cafe-brunch", description: "Menü ve konum odaklı landing." },
  { id: "cafe-2", category: "Cafe & Restoran", title: "Fine Dining Noir", url: "https://example.com/demo/cafe-noir", description: "Rezervasyon çağrısı ve şef seçkisi." },
  { id: "cafe-3", category: "Cafe & Restoran", title: "Sokak Lezzetleri", url: "https://example.com/demo/cafe-sokak", description: "Hızlı servis ve teslimat vurgusu." },
  { id: "fash-1", category: "E-Ticaret (Giyim/Moda)", title: "Capsule Wardrobe Shop", url: "https://example.com/demo/fash-capsule", description: "Koleksiyon ve beden rehberi." },
  { id: "fash-2", category: "E-Ticaret (Giyim/Moda)", title: "Streetwear Drop", url: "https://example.com/demo/fash-street", description: "Sınırlı seri ürün vitrin şablonu." },
  { id: "fash-3", category: "E-Ticaret (Giyim/Moda)", title: "Sürdürülebilir Moda", url: "https://example.com/demo/fash-eco", description: "Malzeme ve üretim şeffaflığı." },
  { id: "real-1", category: "Gayrimenkul & Emlak", title: "Şehir Merkezi Portföy", url: "https://example.com/demo/real-sehir", description: "İlan kartları ve filtre alanı." },
  { id: "real-2", category: "Gayrimenkul & Emlak", title: "Villa & Arsa Ofisi", url: "https://example.com/demo/real-villa", description: "Geniş görsel ve harita çağrısı." },
  { id: "real-3", category: "Gayrimenkul & Emlak", title: "Kiralık Daire Ajansı", url: "https://example.com/demo/real-kiralik", description: "Hızlı arama ve iletişim CTA." },
  { id: "arch-1", category: "Mimarlık & İç Mimarlık", title: "Studio Linea", url: "https://example.com/demo/arch-linea", description: "Proje galerisi ve tipoloji etiketleri." },
  { id: "arch-2", category: "Mimarlık & İç Mimarlık", title: "İç Mimari Atölye", url: "https://example.com/demo/arch-ic", description: "Malzeme paleti ve moodboard." },
  { id: "arch-3", category: "Mimarlık & İç Mimarlık", title: "Konut Tasarım Bürosu", url: "https://example.com/demo/arch-konut", description: "Süreç adımları ve referanslar." },
  { id: "gym-1", category: "Spor Salonu & Personal Trainer", title: "Iron Box Gym", url: "https://example.com/demo/gym-iron", description: "Üyelik paketleri ve ders saatleri." },
  { id: "gym-2", category: "Spor Salonu & Personal Trainer", title: "PT Studio One", url: "https://example.com/demo/gym-pt", description: "Kişisel antrenör vitrin akışı." },
  { id: "gym-3", category: "Spor Salonu & Personal Trainer", title: "CrossFit Quarter", url: "https://example.com/demo/gym-cross", description: "WOD takvimi ve ekip tanıtımı." },
  { id: "psy-1", category: "Psikolog & Danışmanlık", title: "Mindful Terapi", url: "https://example.com/demo/psy-mind", description: "Gizlilik ve seans bilgisi odaklı." },
  { id: "psy-2", category: "Psikolog & Danışmanlık", title: "Kurumsal Koçluk", url: "https://example.com/demo/psy-kurum", description: "B2B danışmanlık paketleri." },
  { id: "psy-3", category: "Psikolog & Danışmanlık", title: "Çocuk & Ergen Merkezi", url: "https://example.com/demo/psy-cocuk", description: "Veli bilgilendirme ve yönlendirme." },
  { id: "hotel-1", category: "Otel & Turizm", title: "Boutique Otel Luna", url: "https://example.com/demo/hotel-luna", description: "Oda tipleri ve doluluk çağrısı." },
  { id: "hotel-2", category: "Otel & Turizm", title: "Şehir Turları", url: "https://example.com/demo/hotel-tur", description: "Rota ve bilet özet kartları." },
  { id: "hotel-3", category: "Otel & Turizm", title: "Termal Resort", url: "https://example.com/demo/hotel-termal", description: "Spa paketleri ve aktiviteler." },
  { id: "auto-1", category: "Oto Servis & Tamir", title: "Garage Pro Servis", url: "https://example.com/demo/auto-garage", description: "Bakım paketleri ve randevu." },
  { id: "auto-2", category: "Oto Servis & Tamir", title: "Lastik & Balans", url: "https://example.com/demo/auto-lastik", description: "Mevsimsel kampanya vitrinleri." },
  { id: "auto-3", category: "Oto Servis & Tamir", title: "Elektrikli Araç Bakım", url: "https://example.com/demo/auto-ev", description: "EV hizmetleri ve sertifikalar." },
  { id: "saas-1", category: "Yazılım & SaaS", title: "Analytics Pulse", url: "https://example.com/demo/saas-analytics", description: "Özellik blokları ve fiyatlandırma." },
  { id: "saas-2", category: "Yazılım & SaaS", title: "Teamflow CRM", url: "https://example.com/demo/saas-crm", description: "Pipeline ve entegrasyon rozetleri." },
  { id: "saas-3", category: "Yazılım & SaaS", title: "SecureAuth API", url: "https://example.com/demo/saas-auth", description: "Güvenlik ve dokümantasyon CTA." },
  { id: "log-1", category: "Lojistik & Nakliyat", title: "Hızlı Kargo Ağı", url: "https://example.com/demo/log-kargo", description: "Takip ve SLA özetleri." },
  { id: "log-2", category: "Lojistik & Nakliyat", title: "Depo Yönetimi", url: "https://example.com/demo/log-depo", description: "Kapasite ve entegrasyonlar." },
  { id: "log-3", category: "Lojistik & Nakliyat", title: "Uluslararası Taşımacılık", url: "https://example.com/demo/log-ulus", description: "Gümrük ve rota bilgi kartları." },
  { id: "edu-1", category: "Eğitim & Online Kurs", title: "Kod Akademi", url: "https://example.com/demo/edu-kod", description: "Modül listesi ve sertifika." },
  { id: "edu-2", category: "Eğitim & Online Kurs", title: "Dil Okulu Online", url: "https://example.com/demo/edu-dil", description: "Seviye testi ve ders paketleri." },
  { id: "edu-3", category: "Eğitim & Online Kurs", title: "Meslek Edindirme", url: "https://example.com/demo/edu-meslek", description: "Katalog ve başvuru formu." },
  { id: "jew-1", category: "Kuyumculuk & Aksesuar", title: "Atölye Altın", url: "https://example.com/demo/jew-atolye", description: "Koleksiyon ve ölçü rehberi." },
  { id: "jew-2", category: "Kuyumculuk & Aksesuar", title: "Minimal Silver", url: "https://example.com/demo/jew-silver", description: "Ürün detay ve malzeme rozetleri." },
  { id: "jew-3", category: "Kuyumculuk & Aksesuar", title: "Özel Tasarım Yüzük", url: "https://example.com/demo/jew-ozel", description: "Sipariş süreci ve örnekler." },
  { id: "vet-1", category: "Veteriner Kliniği", title: "Patili Sağlık", url: "https://example.com/demo/vet-patili", description: "Aşı takvimi ve acil iletişim." },
  { id: "vet-2", category: "Veteriner Kliniği", title: "Cerrahi Veteriner", url: "https://example.com/demo/vet-cerrahi", description: "Operasyon öncesi bilgilendirme." },
  { id: "vet-3", category: "Veteriner Kliniği", title: "Egzotik Hayvan Kliniği", url: "https://example.com/demo/vet-egzotik", description: "Uzmanlık alanı ve randevu." },
  { id: "clean-1", category: "Temizlik Şirketi", title: "Ofis Temizlik Pro", url: "https://example.com/demo/clean-ofis", description: "Sözleşme ve periyot seçenekleri." },
  { id: "clean-2", category: "Temizlik Şirketi", title: "Ev Temizlik Ekibi", url: "https://example.com/demo/clean-ev", description: "Paket saatleri ve ekip güveni." },
  { id: "clean-3", category: "Temizlik Şirketi", title: "Endüstriyel Hijyen", url: "https://example.com/demo/clean-endust", description: "Sertifika ve alan kapsamı." },
  { id: "ins-1", category: "Sigorta Acentesi", title: "Tam Kasko Merkezi", url: "https://example.com/demo/ins-kasko", description: "Hızlı teklif ve karşılaştırma." },
  { id: "ins-2", category: "Sigorta Acentesi", title: "Sağlık Poliçeleri", url: "https://example.com/demo/ins-saglik", description: "Aile ve bireysel plan özetleri." },
  { id: "ins-3", category: "Sigorta Acentesi", title: "İşyeri Risk Yönetimi", url: "https://example.com/demo/ins-is", description: "Sektörel teminat kartları." },
  { id: "wed-1", category: "Organizasyon & Düğün", title: "Garden Wedding Co.", url: "https://example.com/demo/wed-garden", description: "Paket ve mekân galerisi." },
  { id: "wed-2", category: "Organizasyon & Düğün", title: "Davet & Catering", url: "https://example.com/demo/wed-catering", description: "Menü örnekleri ve kapasite." },
  { id: "wed-3", category: "Organizasyon & Düğün", title: "Konsept Dekor Studio", url: "https://example.com/demo/wed-dekor", description: "Temalar ve referans listesi." },
  { id: "photo-1", category: "Fotoğrafçılık", title: "Düğün Fotoğrafçılığı", url: "https://example.com/demo/photo-dugun", description: "Albüm örnekleri ve paketler." },
  { id: "photo-2", category: "Fotoğrafçılık", title: "Ürün Çekimi Stüdyo", url: "https://example.com/demo/photo-urun", description: "E-ticaret vitrin çekimleri." },
  { id: "photo-3", category: "Fotoğrafçılık", title: "Kurumsal Portre", url: "https://example.com/demo/photo-kurumsal", description: "Ekip ve yönetim fotoğrafları." },
];

const viewSectors = document.getElementById("viewSectors");
const viewProjects = document.getElementById("viewProjects");
const sectorGrid = document.getElementById("sectorGrid");
const sectorPills = document.getElementById("sectorPills");
const projectList = document.getElementById("projectList");
const projectsTitle = document.getElementById("projectsTitle");
const btnBack = document.getElementById("btnBack");

let lastOpenedCategory = null;

function syncActiveCategory(category) {
  sectorPills.querySelectorAll(".pill").forEach((el) => el.classList.remove("is-active"));
  sectorGrid.querySelectorAll(".sector-card").forEach((el) => el.classList.remove("is-active"));
  if (!category) return;
  const pill = sectorPills.querySelector(`[data-category="${CSS.escape(category)}"]`);
  const tile = sectorGrid.querySelector(`[data-category="${CSS.escape(category)}"]`);
  if (pill) pill.classList.add("is-active");
  if (tile) tile.classList.add("is-active");
}

function openCategory(category) {
  lastOpenedCategory = category;
  syncActiveCategory(category);
  showProjectsForCategory(category);
}

function renderSectors() {
  sectorPills.replaceChildren();
  sectorGrid.replaceChildren();

  sectors.forEach((sector) => {
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = "pill";
    pill.dataset.category = sector.category;
    pill.title = sector.category;
    pill.setAttribute("aria-label", `${sector.category} demolarını aç`);
    pill.textContent = sector.category;
    pill.addEventListener("click", () => openCategory(sector.category));
    sectorPills.appendChild(pill);
  });

  sectors.forEach((sector) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "sector-card";
    btn.dataset.category = sector.category;
    btn.style.setProperty("--hue", String(sector.hue));
    btn.setAttribute("aria-label", `${sector.category} demolarını göster`);

    const icon = document.createElement("i");
    icon.className = `sector-card__icon ${sector.icon}`;
    icon.setAttribute("aria-hidden", "true");

    const name = document.createElement("p");
    name.className = "sector-card__name";
    name.textContent = sector.category;

    btn.append(icon, name);
    btn.addEventListener("click", () => openCategory(sector.category));
    sectorGrid.appendChild(btn);
  });
}

function getProjectsByCategory(category) {
  return projects.filter((p) => p.category === category);
}

function showProjectsForCategory(category) {
  const list = getProjectsByCategory(category);
  projectsTitle.textContent = category;
  projectList.replaceChildren();

  list.forEach((project) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "project-card";
    a.href = project.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    const title = document.createElement("p");
    title.className = "project-card__title";
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.className = "project-card__desc";
    desc.textContent = project.description;

    const url = document.createElement("p");
    url.className = "project-card__url";
    url.textContent = project.url;

    a.append(title, desc, url);
    li.appendChild(a);
    projectList.appendChild(li);
  });

  viewSectors.classList.add("hidden");
  viewProjects.classList.remove("hidden");
  btnBack.classList.remove("hidden");
}

function showSectors() {
  viewProjects.classList.add("hidden");
  viewSectors.classList.remove("hidden");
  btnBack.classList.add("hidden");
  projectsTitle.textContent = "";
  syncActiveCategory(lastOpenedCategory);
}

btnBack.addEventListener("click", showSectors);

renderSectors();
