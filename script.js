const prompts = [
  {
    id: 1,
    title: "Cinematic Rainy City",
    category: "Cinematic",
    description: "A dramatic city street glowing under neon lights and rain.",
    prompt: "A cinematic nighttime city street after heavy rain, neon purple and cyan reflections shimmering across wet asphalt, pedestrians moving naturally beneath umbrellas, slow tracking camera movement, atmospheric fog, realistic lighting, detailed architecture, professional anamorphic lens, cinematic color grading, 4K film quality, smooth natural motion."
  },
  {
    id: 2,
    title: "Golden Hour Mountains",
    category: "Nature",
    description: "Majestic mountain peaks illuminated by warm sunlight.",
    prompt: "A breathtaking cinematic aerial shot of towering mountain peaks at golden hour, warm sunlight spilling over the ridges, clouds drifting slowly through deep valleys, subtle atmospheric haze, realistic rock textures, smooth drone camera movement, natural color grading, photorealistic details, peaceful atmosphere, 4K cinematic quality."
  },
  {
    id: 3,
    title: "Floating Fantasy Island",
    category: "Fantasy",
    description: "A magical island floating above a sea of clouds.",
    prompt: "A magnificent fantasy island floating above an endless sea of clouds, waterfalls cascading into the sky, ancient stone towers covered in glowing vegetation, tiny birds circling the cliffs, soft golden sunlight, gentle camera orbit, rich environmental details, magical atmosphere, cinematic composition, smooth realistic animation."
  },
  {
    id: 4,
    title: "Cyberpunk Future",
    category: "Sci-Fi",
    description: "A futuristic metropolis filled with holographic displays.",
    prompt: "A futuristic cyberpunk metropolis at night, towering skyscrapers covered in animated holographic advertisements, flying vehicles moving between buildings, violet and cyan neon lighting, atmospheric mist, cinematic aerial camera movement, realistic reflections, intricate futuristic architecture, immersive science fiction atmosphere, smooth motion, 4K quality."
  },
  {
    id: 5,
    title: "Ocean Above the Clouds",
    category: "Fantasy",
    description: "An impossible ocean suspended high above the world.",
    prompt: "A surreal ocean floating high above a landscape of emerald mountains, enormous waterfalls pouring from the edge of the suspended sea, sunlight passing through fine water mist, distant birds gliding through clouds, slow cinematic camera push, extraordinary scale, physically detailed water, dreamlike yet photorealistic visuals."
  },
  {
    id: 6,
    title: "Tropical Paradise",
    category: "Nature",
    description: "A tranquil tropical beach with crystal-clear turquoise water.",
    prompt: "A pristine tropical beach at sunrise, crystal-clear turquoise waves rolling gently onto white sand, palm leaves swaying in a warm breeze, sunlight glittering across the water, distant green islands, smooth low-angle tracking shot, realistic water movement, natural colors, tranquil cinematic atmosphere, high detail."
  },
  {
    id: 7,
    title: "Luxury Car Reveal",
    category: "Cinematic",
    description: "A premium sports car emerging from dramatic shadows.",
    prompt: "A premium futuristic sports car revealed inside a dark luxury studio, elegant purple and cyan rim lighting tracing the sculpted bodywork, subtle floor reflections, thin atmospheric haze, slow camera orbit, realistic metallic paint and glass reflections, dramatic commercial lighting, polished automotive advertisement, smooth motion, ultra-detailed cinematic look."
  },
  {
    id: 8,
    title: "Alien Planet Explorer",
    category: "Sci-Fi",
    description: "An astronaut exploring a mysterious alien landscape.",
    prompt: "A lone astronaut walking across a mysterious alien planet with enormous crystal formations, distant rings of a gas giant filling the sky, fine cosmic dust drifting through the atmosphere, glowing blue plants, slow tracking camera, realistic spacesuit materials, immense environmental scale, cinematic science fiction lighting, detailed photorealistic rendering."
  },
  {
    id: 9,
    title: "Enchanted Forest",
    category: "Fantasy",
    description: "A magical woodland illuminated by glowing particles.",
    prompt: "A beautiful enchanted forest at twilight, ancient trees covered in soft bioluminescent moss, tiny glowing particles drifting between branches, a narrow stream reflecting emerald and violet light, delicate mist near the ground, slow forward camera movement, intricate natural textures, atmospheric fantasy cinematography, smooth motion."
  },
  {
    id: 10,
    title: "Storm Over the Ocean",
    category: "Nature",
    description: "Powerful waves beneath dramatic storm clouds.",
    prompt: "A dramatic wide cinematic shot of enormous ocean waves beneath dark storm clouds, distant lightning illuminating the horizon, sea spray rising naturally from crashing waves, moody blue-gray atmosphere, realistic water physics, slow camera movement above the ocean surface, detailed cloud formations, epic nature documentary cinematography."
  },
  {
    id: 11,
    title: "Neon Underground Tunnel",
    category: "Cinematic",
    description: "A mysterious neon tunnel with atmospheric lighting.",
    prompt: "A long futuristic underground tunnel illuminated by alternating violet and cyan light strips, glossy floor reflections, thin rolling fog, repeating architectural patterns fading into the distance, smooth forward dolly camera movement, cinematic depth of field, realistic materials, carefully balanced highlights, immersive futuristic mood, high detail."
  },
  {
    id: 12,
    title: "Space Station Sunrise",
    category: "Sci-Fi",
    description: "Sunlight rising over Earth from an orbital station.",
    prompt: "A cinematic view from a futuristic orbital space station as the sun rises above the curved blue Earth, golden light gradually illuminating metallic station structures, delicate atmospheric glow along the planet's horizon, stars fading softly in the background, slow camera drift, realistic orbital environment, detailed science fiction visuals, peaceful grand atmosphere."
  }
];

const grid = document.getElementById("promptGrid");
const searchInput = document.getElementById("searchInput");
const filterRow = document.getElementById("filterRow");
const emptyState = document.getElementById("emptyState");
const toast = document.getElementById("toast");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalText = document.getElementById("modalText");
const modalCopy = document.getElementById("modalCopy");
const modalClose = document.getElementById("modalClose");

let activeCategory = "All";
let currentPrompt = null;
let lastFocusedElement = null;
let toastTimer;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.focus();
      area.select();

      const success = document.execCommand("copy");
      area.remove();

      if (!success) throw new Error("Copy failed");
    }

    showToast("✓ Prompt copied to clipboard!");
  } catch (error) {
    showToast("Copy failed. Please try again.");
  }
}

function getFilteredPrompts() {
  const query = searchInput.value.trim().toLowerCase();

  return prompts.filter(prompt => {
    const matchesCategory =
      activeCategory === "All" || prompt.category === activeCategory;

    const searchableText =
      `${prompt.title} ${prompt.category} ${prompt.description} ${prompt.prompt}`
        .toLowerCase();

    return matchesCategory && searchableText.includes(query);
  });
}

function renderPrompts() {
  const filtered = getFilteredPrompts();

  emptyState.hidden = filtered.length !== 0;

  grid.innerHTML = filtered.map((prompt, index) => `
    <article class="prompt-card" style="animation-delay:${Math.min(index * 45, 270)}ms">
      <div class="prompt-card-top">
        <span class="prompt-badge">${escapeHTML(prompt.category)}</span>
        <span class="prompt-number">PROMPT ${String(prompt.id).padStart(2, "0")}</span>
      </div>
      <h3>${escapeHTML(prompt.title)}</h3>
      <p>${escapeHTML(prompt.description)}</p>
      <div class="prompt-actions">
        <button class="small-button" data-action="view" data-id="${prompt.id}">
          View Prompt ↗
        </button>
        <button class="small-button copy-button" data-action="copy" data-id="${prompt.id}">
          Copy Prompt
        </button>
      </div>
    </article>
  `).join("");
}

function setCategory(category) {
  activeCategory = category;

  filterRow.querySelectorAll(".filter").forEach(button => {
    const active = button.dataset.filter === category;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  renderPrompts();
}

function openModal(prompt, trigger) {
  currentPrompt = prompt;
  lastFocusedElement = trigger;

  modalTitle.textContent = prompt.title;
  modalCategory.textContent = `${prompt.category.toUpperCase()} · FULL PROMPT`;
  modalText.textContent = prompt.prompt;

  modalBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  modalBackdrop.hidden = true;
  document.body.style.overflow = "";

  if (lastFocusedElement) lastFocusedElement.focus();

  currentPrompt = null;
}

grid.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const prompt = prompts.find(item => item.id === Number(button.dataset.id));
  if (!prompt) return;

  if (button.dataset.action === "copy") {
    copyText(prompt.prompt);
  } else {
    openModal(prompt, button);
  }
});

searchInput.addEventListener("input", renderPrompts);

filterRow.addEventListener("click", event => {
  const button = event.target.closest("button[data-filter]");
  if (button) setCategory(button.dataset.filter);
});

document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", () => {
    setCategory(card.dataset.category);
    document.getElementById("prompts").scrollIntoView({ behavior: "smooth" });
  });
});

modalClose.addEventListener("click", closeModal);

modalBackdrop.addEventListener("click", event => {
  if (event.target === modalBackdrop) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modalBackdrop.hidden) {
    closeModal();
  }
});

modalCopy.addEventListener("click", () => {
  if (currentPrompt) copyText(currentPrompt.prompt);
});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => element.classList.add("visible"));
}

document.getElementById("year").textContent = new Date().getFullYear();

renderPrompts();
