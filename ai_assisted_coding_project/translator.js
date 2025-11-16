document.getElementById("translateBtn").addEventListener("click", async () => {
  const text = document.getElementById("inputText").value.trim();
  const source = document.getElementById("sourceLang").value;
  const target = document.getElementById("targetLang").value;

  if (!text) {
    document.getElementById("outputText").textContent = "Please enter text to translate.";
    return;
  }

  try {
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source}|${target}`);
    const data = await res.json();
    const translated = data.responseData.translatedText;

    document.getElementById("outputText").textContent = translated;
  } catch (err) {
    document.getElementById("outputText").textContent = "Translation failed. Please try again.";
  }
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});