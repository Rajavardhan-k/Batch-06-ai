let currentLang = "en";
let translations = {};

async function loadLanguage(lang) {
  currentLang = lang;
  const res = await fetch(`locales/${lang}.json`);
  translations = await res.json();

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.getElementById("title").textContent = translations.title;
  document.getElementById("sectionTitle").textContent = translations.sectionTitle;
  document.getElementById("description").textContent = translations.description;
  document.getElementById("aboutTitle").textContent = translations.about_title;
  document.getElementById("aboutText").textContent = translations.about_text;
  document.getElementById("howItWorksTitle").textContent = translations.how_it_works_title;
  document.getElementById("howItWorksText").textContent = translations.how_it_works_text;
  document.getElementById("benefitsTitle").textContent = translations.benefits_title;

  const benefitsList = document.getElementById("benefitsList");
  benefitsList.innerHTML = "";
  translations.benefits_list.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    benefitsList.appendChild(li);
  });

  document.getElementById("testimonialsTitle").textContent = translations.testimonials_title;
  const testimonialsList = document.getElementById("testimonials");
  testimonialsList.innerHTML = "";
  translations.testimonials.forEach(line => {
    const li = document.createElement("li");
    li.textContent = line;
    testimonialsList.appendChild(li);
  });

  document.getElementById("faqTitle").textContent = translations.faq_title;
  const faqDiv = document.getElementById("faq");
  faqDiv.innerHTML = "";
  translations.faq.forEach(item => {
    const q = document.createElement("h4");
    q.textContent = item.q;
    const a = document.createElement("p");
    a.textContent = item.a;
    faqDiv.appendChild(q);
    faqDiv.appendChild(a);
  });

  document.getElementById("cta").textContent = translations.cta;
}

document.getElementById("languageSwitcher").addEventListener("change", (e) => {
  loadLanguage(e.target.value);
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.getElementById("cta").addEventListener("click", () => {
  window.location.href = "translator.html";
});

window.onload = () => loadLanguage("en");