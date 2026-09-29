/* ===== Patel Foundation — interactions ===== */

/* ---- Site settings: edit these before going live ---- */
const SITE = {
  email: "info@patelfoundation.org", // TODO: replace with the Foundation's real email
  phone: "+263 000 000 000",          // TODO: replace with the Foundation's real phone
};

/* ---- Project data (add new stories here) ----
   category: health | education | skills | community
   status:   Completed | Ongoing | Upcoming
   images:   URLs or local paths like "assets/img/projects/eye1.jpg"   */
const PROJECTS = [
  {
    title: "Employee & Family Eye Clinic",
    category: "health", status: "Completed",
    date: "2–6 June 2025", place: "Steelmakers Industrial Clinic, Redcliff",
    summary: "A medical camp for staff and their families, with free eye tests and prescription glasses.",
    stats: [["730", "screenings"], ["259", "spectacles prescribed"], ["280", "family members served"], ["60", "referrals"]],
    images: ["https://i.postimg.cc/RZn4jmjN/three1.jpg", "https://i.postimg.cc/XvMXRn2b/seven.jpg", "https://i.postimg.cc/85ZpzGbs/five1.jpg", "https://i.postimg.cc/VN1m9vGd/one.jpg"],
    body: `<p>Leading optometrists from across Zimbabwe joined us for a five-day clinic for employees and their families.</p>
      <ul><li>Visual acuity testing and full eye examinations</li><li>Prescription glasses</li><li>Cataract and diabetic retinopathy screening</li><li>Eye strain and safety goggle education</li><li>Family consultations and child screenings</li></ul>
      <blockquote>"This initiative has helped me, and my children finally get proper glasses. I never thought my employer would take care of my family like this." — Nyasha M., Production Line Employee</blockquote>`
  },
  {
    title: "Dental Camp in Remote Areas",
    category: "health", status: "Completed",
    date: "April 2025", place: "Chivi District Hospital, Masvingo",
    summary: "Free dental care for rural communities, from screening and cleaning to extractions and fillings.",
    stats: [["166", "extractions"], ["17", "fillings"], ["20", "clinical exams"], ["60", "patients referred"]],
    images: ["https://app.smlzim.com/web/image/16699-13d0e7b3/web4.webp"],
    body: `<p>Our dental team brought care to people who seldom have access to a dentist.</p>
      <ul><li>Dental screening and diagnosis of dental disease</li><li>Cleaning and fluoride treatment</li><li>Fillings, decay management and extractions</li><li>Oral hygiene education and home care advice</li></ul>
      <p><b>Referrals for further care:</b> scaling and polishing (28), surgical extraction (12), root canal treatment (7), filling (5), prosthodontics (5), orthodontic treatment (3).</p>`
  },
  {
    title: "Stop the Bleed Program",
    category: "health", status: "Completed",
    date: "April 2025", place: "Masvingo, Zimbabwe",
    summary: "We sponsored a US doctor to work with the Rotary Club to bring life-saving bleeding-control training to Zimbabwe.",
    stats: [],
    images: ["https://app.smlzim.com/web/image/16701-509d055c/web5.webp"],
    body: `<p>Led by instructor Dr Nirav Patel (USA) with the Rotary Club, the programme teaches medical staff and communities how to act fast when someone is badly bleeding.</p>
      <ul><li>Applying direct pressure</li><li>Wound packing</li><li>Using a tourniquet</li><li>Emergency response steps</li><li>Trauma care in rural health facilities</li></ul>
      <p class="note">Learn more at <a href="https://www.stopthebleed.org/" target="_blank" rel="noopener">stopthebleed.org</a>.</p>`
  },
  {
    title: "GZU Medical Students: Hands-on Dental Camp Training",
    category: "health", status: "Completed",
    date: "April 2025", place: "Great Zimbabwe University, Masvingo",
    summary: "Medical students from Great Zimbabwe University gained hands-on experience at our outreach dental camp.",
    stats: [["65", "GZU medical students trained"]],
    images: [U("photo-1694286068431-569c90a6df72","Michael Ali","michaeljfali")],
    body: `<p>Students worked alongside qualified clinicians, learning screening, diagnosis and treatment in a real outreach setting, while helping us reach more patients.</p>`
  },
  {
    title: "GZU Stop the Bleed Training & Equipment Donations",
    category: "health", status: "Completed",
    date: "2025", place: "Great Zimbabwe University",
    summary: "Stop the Bleed training for GZU, and bleeding-control equipment donated so the skills can be taught again and again.",
    stats: [], images: [],
    body: `<p>Beyond the training, we donated equipment so the university can keep teaching bleeding control to new groups of students.</p>`
  },
  {
    title: "Nursing School Training & Equipment Donations",
    category: "health", status: "Completed",
    date: "2025", place: "Masvingo",
    summary: "Training and equipment for trainee nurses, strengthening the next generation of frontline health workers.",
    stats: [], images: [], body: `<p>Trainee nurses received Stop the Bleed training, and the school received equipment to support its practical teaching.</p>`
  },
  {
    title: "Masvingo General Hospital Training & Equipment",
    category: "health", status: "Completed",
    date: "April 2025", place: "Masvingo General Hospital",
    summary: "Trauma training for hospital staff, with donated equipment to improve emergency care.",
    stats: [], images: [], body: `<p>Hospital clinicians took part in Stop the Bleed and trauma education, and received equipment to support emergency care in the province.</p>`
  },
  {
    title: "ACS Train-the-Trainer Certification for Masvingo Doctors",
    category: "health", status: "Completed",
    date: "2025", place: "Masvingo",
    summary: "Masvingo doctors earned approved “Train-the-Trainer” certification with the American College of Surgeons (ACS).",
    stats: [], images: [],
    body: `<p>Certified local trainers can now teach bleeding control and trauma techniques themselves, so the skills keep spreading after the visiting team leaves.</p>
      <p>The ACS programme lead has written up the outcomes of the programme in a paper and submitted it for publication.</p>`
  },
  {
    title: "Medical Oxygen During Shortages",
    category: "health", status: "Completed",
    date: "COVID-19 pandemic", place: "Hospitals across Zimbabwe",
    summary: "When hospitals ran short of oxygen, we helped supply medical-grade oxygen to keep patients alive.",
    stats: [], images: ["https://i.postimg.cc/KcnFmM99/oxy.jpg"],
    body: `<p>During the COVID-19 oxygen shortage, oxygen plants ran at full capacity, and medical-grade oxygen was donated to several hospitals.</p>`
  },
  {
    title: "Bursaries for Orphaned & Disadvantaged Children",
    category: "education", status: "Ongoing",
    date: "Since 2016", place: "Zimbabwe",
    summary: "Around 60 bursaries supporting children from primary school all the way to university.",
    stats: [["~60", "bursaries"]], images: ["https://i.postimg.cc/fLkvNFjz/R-12-1.jpg", U("photo-1608485439523-25b28d982428","Joecalih","joecalih")],
    body: `<p>We support children through the whole learning journey: from school enrolment to university and apprenticeships.</p>
      <p>Working with the Cephas Msipa Scholarship Trust, we reach deserving students across the country.</p>`
  },
  {
    title: "Building a School in Chisumbanje, Chiredzi",
    category: "education", status: "Ongoing",
    date: "Ongoing", place: "Chisumbanje, Chiredzi",
    summary: "Classrooms built and furnished in a remote community, with a borehole for clean water and electricity on the way.",
    stats: [], images: [U("photo-1571417800906-5a5058dbd45d","Toby Wong","hitobywong"), U("photo-1760873059715-7c7cfbe2a2c6","Andrew Itaga","and73w")],
    body: `<ul><li>New classrooms built and furnished</li><li>A borehole drilled for clean water</li><li>Electricity under way, using both grid power and solar</li></ul>`
  },
  {
    title: "SkillsMaker: Stop the Bleed Real-World Exposure",
    category: "skills", status: "Completed",
    date: "2025", place: "Masvingo",
    summary: "Students, nurses and medics gained real-world experience through the Stop the Bleed programme.",
    stats: [], images: [], body: `<p>Part of SkillsMaker 2025: taking learners out of the classroom and into real clinical and emergency settings.</p>`
  },
  {
    title: "Internships for Women in ICT",
    category: "skills", status: "Ongoing",
    date: "Annual", place: "Harare Institute of Technology & Redcliff",
    summary: "Yearly work attachments that give young women graduates practical ICT experience.",
    stats: [], images: [U("photo-1655720357872-ce227e4164ba","Iwaria Inc.","iwaria")], body: `<p>Working with Harare Institute of Technology and in Redcliff, we offer yearly attachments so young women graduates can build practical ICT skills and work experience.</p>`
  },
  {
    title: "Code Clubs & Experience AI with the Raspberry Pi Foundation",
    category: "skills", status: "Ongoing",
    date: "From May 2026", place: "Three regions of Zimbabwe",
    summary: "A pilot to set up Code Clubs and teach AI literacy, supported by the Raspberry Pi Foundation.",
    stats: [["3", "regions in the pilot"]], images: [U("photo-1541178735493-479c1a27ed24","X","disruptxn")],
    body: `<p>In May 2026, the Raspberry Pi Foundation confirmed its intent to support the Patel Foundation and the Ministry of Energy and Power Development, together with the Ministries of Primary and Secondary Education and ICT, in a pilot programme.</p>
      <ul><li>Training educators to teach <b>Experience AI</b>, lessons on AI literacy developed with Google DeepMind, with certificates on completion</li><li>Training educators to set up and run <b>Code Clubs</b>, designed for teachers with no coding background</li></ul>`
  },
  {
    title: "Redcliff ICT Program",
    category: "skills", status: "Upcoming",
    date: "H2 2026", place: "Redcliff Constituency",
    summary: "Code Clubs and AI training for primary and secondary students and teachers, starting with 20 teachers.",
    stats: [["20", "teachers in train-the-trainer"]], images: [U("photo-1655720348590-c739c860beed","Iwaria Inc.","iwaria")],
    body: `<p>Supported by the Member of Parliament for Redcliff Constituency. The programme starts by training 20 teachers as trainers, then moves on to students.</p><p>Lessons will be both online and in person, held after school hours and during the holidays.</p>`
  },
  {
    title: "Partnership with Dzikwa Trust",
    category: "community", status: "Upcoming",
    date: "H2 2026", place: "Norton, Harare",
    summary: "Youth capacity building with Dzikwa Trust, part of our Building Resilient Communities programme.",
    stats: [], images: [U("photo-1617056239820-8ce90ba48193","Abubakar Balogun","abubalo")], body: `<p>Part of the Building Resilient Communities youth capacity building programme.</p>`
  },
  {
    title: "Apply ICT in Marketing",
    category: "skills", status: "Ongoing",
    date: "Q3 2026", place: "Zimbabwe",
    summary: "A practical course where students learn to use digital tools in real marketing projects.",
    stats: [], images: [U("photo-1648301033733-44554c74ec50","Creab ThePolymath","cr_eab")], body: `<p>Students learn digital marketing by applying ICT tools to real-world projects.</p>`
  },
  {
    title: "July Community Challenge",
    category: "skills", status: "2026",
    date: "July 2026", place: "Zimbabwe",
    summary: "Young people used ICT and AI to take on real problems facing communities in Africa.",
    stats: [], images: [U("photo-1620831468075-db24ca183258","Kojo Kwarteng","cwojo")], body: `<p>A challenge for young innovators to use ICT and AI to design solutions for their communities.</p>`
  },
  {
    title: "Sustainable Energy & Electrical Training",
    category: "skills", status: "Ongoing",
    date: "Q3 2026", place: "Zimbabwe",
    summary: "Practical training in sustainable energy and electrical skills for young people.",
    stats: [], images: [U("photo-1740825961434-e9287638592b","David Geneugelijk","davidgeneugelijk")], body: `<p>Building skills for jobs in energy, from electrical basics to solar and other sustainable energy systems.</p>`
  },
  {
    title: "Armani Children's Home, Kenya",
    category: "community", status: "Ongoing",
    date: "Ongoing", place: "Kenya",
    summary: "Supporting Alfred and his orphanage team with dormitories, clean water, education, food and more.",
    stats: [["11", "areas of support"]], images: [U("photo-1547496613-4e19af6736dc","bennett tobias","bwtobias"), U("photo-1521493959102-bdd6677fdd81","bill wegener","wegenerb")],
    body: `<ul><li>Help with the school's running costs</li><li>Dormitories for boys and girls, with furniture and curtains</li><li>Borehole water installation</li><li>Hot water and showers for teachers</li><li>Education for girls and boys, plus scholarships for higher education</li><li>Growing food for the community</li><li>Food and clothing packages</li><li>An annual Christmas party for the children</li></ul>`
  },
];

/* Stock photo helper: Unsplash photos (free Unsplash License), shown as "Illustrative photo" */
function U(id, name, user, w = 1200) {
  return { src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`, stock: true, name, user };
}
const srcOf = im => typeof im === "string" ? im : im.src;

const ICONS = { health: "🩺", education: "🎓", skills: "💻", community: "🤝" };
const LABELS = { health: "Health", education: "Education", skills: "Skills & ICT", community: "Community" };

/* ---- Helpers ---- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ---- Header / nav ---- */
const header = $(".site-header");
const toTop = $("#toTop");
const onScroll = () => {
  const y = window.scrollY;
  header.classList.toggle("scrolled", y > 20);
  toTop.classList.toggle("show", y > 700);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const nav = $("#nav"), toggle = $("#navToggle");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
$$("#nav a").forEach(a => a.addEventListener("click", () => { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", false); }));

// highlight current section in nav
const navLinks = $$("#nav a:not(.btn)");
const secObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
navLinks.forEach(l => { const s = $(l.getAttribute("href")); if (s) secObs.observe(s); });

/* ---- Reveal on scroll ---- */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); revObs.unobserve(e.target); } });
}, { threshold: 0.12 });
$$(".reveal").forEach(el => revObs.observe(el));

/* ---- Counters ---- */
const countObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.count, prefix = el.dataset.prefix || "";
    const fmt = n => el.hasAttribute("data-nofmt") ? String(n) : n.toLocaleString();
    const start = el.hasAttribute("data-nofmt") ? end - 30 : 0;
    const t0 = performance.now(), dur = 1600;
    const tick = t => {
      const p = Math.min((t - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + fmt(Math.round(start + (end - start) * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countObs.unobserve(el);
  });
}, { threshold: 0.6 });
$$("[data-count]").forEach(el => countObs.observe(el));

/* ---- Approach roots ---- */
const ROOTS = {
  impact: ["Impact", "Delivering programmes that create measurable and lasting outcomes."],
  partnership: ["Partnership", "Working collaboratively with communities, governments, organisations, and stakeholders."],
  sustainability: ["Sustainability", "Creating initiatives designed to continue generating value for future generations."],
  integrity: ["Integrity", "Operating with transparency, accountability, and responsibility in all our activities."],
};
const panel = $("#rootPanel");
$$(".root").forEach(btn => btn.addEventListener("click", () => {
  $$(".root").forEach(b => { b.classList.toggle("active", b === btn); b.setAttribute("aria-selected", b === btn); });
  const [h, p] = ROOTS[btn.dataset.root];
  panel.innerHTML = `<h3>${h}</h3><p>${p}</p>`;
  panel.classList.remove("swap"); void panel.offsetWidth; panel.classList.add("swap");
}));

/* ---- Projects grid ---- */
const grid = $("#projectGrid"), empty = $("#emptyMsg"), search = $("#projectSearch");
let filter = "all";

function cardHTML(p, i) {
  const first = p.images[0];
  const img = first ? `<img loading="lazy" src="${srcOf(first).replace("w=1200", "w=700")}" alt="" onerror="this.remove()">` : "";
  const badge = first && first.stock ? `<span class="stock-badge">Illustrative photo</span>` : "";
  return `<button class="card" data-i="${i}" aria-label="Read more: ${p.title}">
    <div class="card-media bg-${p.category}">
      <span class="glyph" aria-hidden="true">${ICONS[p.category]}</span>${img}
      <span class="tag">${LABELS[p.category]}</span>
      <span class="status ${p.status.toLowerCase()}">${p.status}</span>${badge}
    </div>
    <div class="card-body">
      <div class="meta">${p.date} · ${p.place}</div>
      <h3>${p.title}</h3>
      <p>${p.summary}</p>
      <span class="more">Read the story →</span>
    </div>
  </button>`;
}

function render() {
  const q = search.value.trim().toLowerCase();
  const list = PROJECTS.map((p, i) => [p, i]).filter(([p]) =>
    (filter === "all" || p.category === filter) &&
    (!q || (p.title + p.summary + p.place + p.body).toLowerCase().includes(q)));
  grid.innerHTML = list.map(([p, i]) => cardHTML(p, i)).join("");
  empty.hidden = list.length > 0;
}
$$(".chip").forEach(c => c.addEventListener("click", () => {
  $$(".chip").forEach(x => x.classList.toggle("active", x === c));
  filter = c.dataset.filter; render();
}));
search.addEventListener("input", render);
render();

/* ---- Modal ---- */
window.galleryFail = img => {
  const g = img.parentElement; img.remove();
  if (!g.querySelector("img")) { const cat = g.dataset.cat; g.innerHTML = `<div class="fallback bg-${cat}">${ICONS[cat]}</div>`; }
};
const modal = $("#projectModal");
grid.addEventListener("click", e => {
  const card = e.target.closest(".card"); if (!card) return;
  const p = PROJECTS[+card.dataset.i];
  $("#modalMeta").textContent = `${LABELS[p.category]} · ${p.date} · ${p.place}`;
  $("#modalTitle").textContent = p.title;
  $("#modalStats").innerHTML = p.stats.map(([n, l]) => `<div><strong>${n}</strong><span>${l}</span></div>`).join("");
  $("#modalContent").innerHTML = p.body;
  const g = $("#modalGallery");
  g.className = "modal-gallery"; g.dataset.cat = p.category;
  g.innerHTML = p.images.length
    ? p.images.map(im => typeof im === "string"
        ? `<img src="${im}" alt="${p.title}" onerror="galleryFail(this)">`
        : `<figure><img src="${im.src}" alt="Illustrative photo" onerror="galleryFail(this)"><figcaption>Illustrative photo · <a href="https://unsplash.com/@${im.user}?utm_source=patel_foundation&utm_medium=referral" target="_blank" rel="noopener">${im.name}</a> / Unsplash</figcaption></figure>`).join("")
    : `<div class="fallback bg-${p.category}">${ICONS[p.category]}</div>`;
  modal.showModal();
  modal.scrollTop = 0;
});
$("#modalClose").addEventListener("click", () => modal.close());
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

/* ---- Contact ---- */
const emailEl = $("#contactEmail");
emailEl.textContent = SITE.email; emailEl.href = "mailto:" + SITE.email;
$("#contactPhone").textContent = SITE.phone;

$("#contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target, note = $("#formNote");
  let ok = true;
  ["name", "email", "message"].forEach(n => {
    const el = f.elements[n], bad = !el.value.trim() || (n === "email" && !/^\S+@\S+\.\S+$/.test(el.value));
    el.classList.toggle("invalid", bad); if (bad) ok = false;
  });
  if (!ok) { note.style.color = "#c0392b"; note.textContent = "Please fill in your name, a valid email and a message."; return; }
  const subject = encodeURIComponent(`${f.topic.value}: ${f.name.value}`);
  const body = encodeURIComponent(`${f.message.value}\n\n— ${f.name.value} (${f.email.value})`);
  window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  note.style.color = ""; note.textContent = "Thank you! Your email app should open with your message ready to send.";
  f.reset();
});

/* ---- Partners marquee: duplicate for a seamless loop ---- */
const track = $(".marquee-track");
[...track.children].forEach(c => { const d = c.cloneNode(true); d.setAttribute("aria-hidden", "true"); track.appendChild(d); });

$("#year").textContent = new Date().getFullYear();
