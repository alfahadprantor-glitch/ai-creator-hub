
const prompts = [
  {
    id: 1, title: "Cinematic Rainy City", category: "Cinematic",
    description: "A dramatic city street glowing under neon lights and rain.",
    prompt: "A cinematic nighttime city street after heavy rain, neon purple and cyan reflections shimmering across wet asphalt, pedestrians moving naturally beneath umbrellas, slow tracking camera movement, atmospheric fog, realistic lighting, detailed architecture, cinematic color grading, 4K film quality, smooth natural motion."
  },
  {
    id: 2, title: "Golden Hour Mountains", category: "Nature",
    description: "Majestic mountain peaks illuminated by warm sunlight.",
    prompt: "A breathtaking aerial shot of towering mountain peaks at golden hour, warm sunlight spilling over the ridges, clouds drifting through deep valleys, realistic rock textures, smooth drone camera movement, photorealistic details, peaceful atmosphere, 4K cinematic quality."
  },
  {
    id: 3, title: "Floating Fantasy Island", category: "Fantasy",
    description: "A magical island floating above a sea of clouds.",
    prompt: "A magnificent fantasy island floating above an endless sea of clouds, waterfalls cascading into the sky, ancient stone towers covered in glowing vegetation, tiny birds circling cliffs, soft golden sunlight, gentle camera orbit, cinematic composition, smooth realistic animation."
  },
  {
    id: 4, title: "Cyberpunk Future", category: "Sci-Fi",
    description: "A futuristic metropolis filled with holographic displays.",
    prompt: "A futuristic cyberpunk metropolis at night, towering skyscrapers covered in holographic advertisements, flying vehicles between buildings, violet and cyan neon lighting, atmospheric mist, cinematic aerial movement, realistic reflections, intricate architecture, smooth motion, 4K."
  },
  {
    id: 5, title: "Ocean Above the Clouds", category: "Fantasy",
    description: "An impossible ocean suspended high above the world.",
    prompt: "A surreal ocean floating above emerald mountains, enormous waterfalls pouring from the edge of the suspended sea, sunlight passing through water mist, birds gliding through clouds, slow cinematic camera push, extraordinary scale, detailed water, dreamlike photorealism."
  },
  {
    id: 6, title: "Tropical Paradise", category: "Nature",
    description: "A tranquil beach with crystal-clear turquoise water.",
    prompt: "A pristine tropical beach at sunrise, turquoise waves rolling onto white sand, palm leaves swaying in a warm breeze, sunlight glittering across water, distant green islands, smooth low-angle tracking shot, realistic water movement, natural colors, cinematic atmosphere."
  },
  {
    id: 7, title: "Luxury Car Reveal", category: "Cinematic",
    description: "A premium sports car emerging from dramatic shadows.",
    prompt: "A premium futuristic sports car revealed inside a dark luxury studio, purple and cyan rim lighting tracing sculpted bodywork, subtle floor reflections, atmospheric haze, slow camera orbit, realistic metallic paint, dramatic commercial lighting, polished automotive advertisement."
  },
  {
    id: 8, title: "Alien Planet Explorer", category: "Sci-Fi",
    description: "An astronaut exploring a mysterious alien landscape.",
    prompt: "A lone astronaut walking across a mysterious alien planet with enormous crystal formations, rings of a gas giant filling the sky, cosmic dust drifting through the atmosphere, glowing blue plants, slow tracking camera, realistic spacesuit, cinematic science fiction."
  },
  {
    id: 9, title: "Enchanted Forest", category: "Fantasy",
    description: "A magical woodland illuminated by glowing particles.",
    prompt: "A beautiful enchanted forest at twilight, ancient trees covered in bioluminescent moss, glowing particles drifting between branches, a narrow stream reflecting emerald and violet light, delicate mist, slow forward camera movement, intricate textures, atmospheric fantasy cinematography."
  },
  {
    id: 10, title: "Storm Over the Ocean", category: "Nature",
    description: "Powerful waves beneath dramatic storm clouds.",
    prompt: "Enormous ocean waves beneath dark storm clouds, distant lightning illuminating the horizon, sea spray rising naturally, moody blue-gray atmosphere, realistic water physics, slow camera movement above the ocean, detailed clouds, epic nature documentary cinematography."
  },
  {
    id: 11, title: "Neon Underground Tunnel", category: "Cinematic",
    description: "A mysterious neon tunnel with atmospheric lighting.",
    prompt: "A long futuristic underground tunnel illuminated by violet and cyan light strips, glossy floor reflections, rolling fog, repeating architecture fading into the distance, smooth forward dolly movement, cinematic depth of field, realistic materials, immersive futuristic mood."
  },
  {
    id: 12, title: "Space Station Sunrise", category: "Sci-Fi",
    description: "Sunlight rising over Earth from an orbital station.",
    prompt: "A cinematic view from a futuristic orbital station as the sun rises above curved blue Earth, golden light illuminating metallic structures, atmospheric glow along the horizon, stars fading softly, slow camera drift, realistic orbital environment, peaceful grand atmosphere."
  },
  {
    id: 13, title: "Neon City in the Rain", category: "Cinematic",
    description: "A glowing city street with cinematic reflections.",
    prompt: "A cinematic nighttime street soaked in rain, neon signs reflecting across wet pavement, a lone figure walking beneath a transparent umbrella, subtle fog, realistic reflections, slow tracking camera, atmospheric lighting, ultra-detailed, 4K, vertical 9:16."
  },
  {
    id: 14, title: "Floating Islands Above Clouds", category: "Fantasy",
    description: "A spectacular world of floating islands.",
    prompt: "Enormous floating islands above a sea of clouds, waterfalls flowing into the sky, ancient castles, tiny airships traveling between cliffs, golden sunrise, volumetric lighting, slow aerial camera, epic cinematic scale, 4K, vertical 9:16."
  },
  {
    id: 15, title: "Secret Door in the Forest", category: "Fantasy",
    description: "An ancient door reveals a magical world.",
    prompt: "An ancient wooden door between two giant forest trees, glowing blue runes appear as it slowly opens, magical particles drift through mist, camera pushes forward, mysterious atmosphere, realistic textures, cinematic lighting, vertical 9:16."
  },
  {
    id: 16, title: "Miniature City in a Bottle", category: "Fantasy",
    description: "A tiny illuminated city inside transparent glass.",
    prompt: "A tiny futuristic city inside a transparent glass bottle, miniature cars moving on illuminated roads, tiny trains crossing bridges, warm windows glowing at dusk, macro photography, slow orbiting camera, realistic glass refraction, intricate details, vertical 9:16."
  },
  {
    id: 17, title: "City Beneath the Ocean", category: "Sci-Fi",
    description: "A futuristic underwater civilization.",
    prompt: "Reveal a massive futuristic underwater city through crystal-clear water, transparent domes, glowing transport tubes, schools of fish between skyscrapers, sunlight penetrating the deep blue sea, slow cinematic descent, photorealistic, 4K, vertical 9:16."
  },
  {
    id: 18, title: "Last Train of the Future", category: "Sci-Fi",
    description: "A magnetic train racing through a futuristic city.",
    prompt: "A sleek magnetic levitation train races through a futuristic megacity at night, holographic advertisements illuminate glass skyscrapers, light trails streak past windows, smooth tracking camera, realistic motion blur, cinematic science fiction, vertical 9:16."
  },
  {
    id: 19, title: "Tree Growing Through Time", category: "Nature",
    description: "One tree transforms through all four seasons.",
    prompt: "A single ancient tree grows from a tiny seed into a magnificent giant across spring blossoms, summer greenery, autumn leaves and winter snow, seamless time-lapse, fixed camera, natural lighting, photorealistic, vertical 9:16."
  },
  {
    id: 20, title: "Clouds Become Mountains", category: "Fantasy",
    description: "Dreamlike clouds transform into floating mountains.",
    prompt: "Dreamlike clouds transform into enormous snow-covered mountains floating in the sky, golden sunlight passes through mist, distant birds glide between cloud peaks, seamless morphing, slow aerial movement, ethereal atmosphere, cinematic 4K, vertical 9:16."
  },
  {
    id: 21, title: "Crystal Waterfall Cave", category: "Nature",
    description: "A glowing waterfall inside a hidden cavern.",
    prompt: "Inside a hidden cavern, a luminous turquoise waterfall pours into a crystal-clear pool surrounded by glowing mineral formations, sparkling droplets, soft mist, reflected light, slow dolly-in, realistic water simulation, 4K, vertical 9:16."
  },
  {
    id: 22, title: "Desert Turns Into a Garden", category: "Nature",
    description: "A barren desert transforms into lush greenery.",
    prompt: "An endless golden desert transforms into a lush garden as a wave of water crosses the sand, flowers bloom, streams appear and butterflies arrive, seamless time-lapse, wide cinematic shot, realistic environmental transformation, vertical 9:16."
  },
  {
    id: 23, title: "Giant Moon Over a Village", category: "Cinematic",
    description: "A peaceful village beneath an enormous moon.",
    prompt: "A traditional village at twilight as an enormous detailed moon rises behind distant mountains, lanterns glow along a quiet river, thin clouds cross the moon, villagers watch from wooden bridges, slow cinematic pan, photorealistic, vertical 9:16."
  },
  {
    id: 24, title: "Tiny Astronaut on a Flower", category: "Fantasy",
    description: "A miniature explorer discovers an alien flower.",
    prompt: "A tiny astronaut explores the petals of a gigantic glowing flower on an alien planet, sparkling pollen floats like stars, miniature insects move through colorful vegetation, macro cinematography, shallow depth of field, gentle camera orbit, vertical 9:16."
  },
  {
    id: 25, title: "Robot Discovers a Flower", category: "Sci-Fi",
    description: "A robot finds life in an abandoned city.",
    prompt: "An old friendly exploration robot discovers a tiny flower growing through cracked concrete in a deserted futuristic city, gently kneels to observe it, warm sunlight breaks through clouds, emotional storytelling, slow push-in, photorealistic, vertical 9:16."
  },
  {
    id: 26, title: "Infinite Mirror Room", category: "Fantasy",
    description: "An endless tunnel of colorful reflections.",
    prompt: "A futuristic room lined with mirrors and glowing geometric panels, reflections form an infinite tunnel, colors transition from violet to cyan, symmetrical patterns, smooth controlled camera movement, polished surfaces, hypnotic visual rhythm, vertical 9:16."
  },
  {
    id: 27, title: "Liquid Metal Sculpture", category: "Cinematic",
    description: "Reflective liquid metal forms elegant sculptures.",
    prompt: "A reflective liquid-metal ribbon flows across a dark studio floor, rising into elegant abstract sculptures before melting into a smooth pool, fluid motion, dramatic highlights, macro close-ups, luxurious minimal aesthetic, realistic reflections, vertical 9:16."
  },
  {
    id: 28, title: "Colorful Ink in Water", category: "Nature",
    description: "Vivid ink creates flowing underwater patterns.",
    prompt: "Vibrant red, blue, violet and gold ink expands through crystal-clear water, forming delicate flowing ribbons, macro slow motion, dramatic backlighting, sharp fluid details, seamless color transitions, elegant abstract cinematography, vertical 9:16."
  },
  {
    id: 29, title: "Perfect Desk Transformation", category: "Cinematic",
    description: "A messy desk becomes a clean creative workspace.",
    prompt: "A messy creative desk transforms through precise stop-motion movements, pens align, books stack neatly, cables organize, a monitor lights up and a small plant appears, fixed overhead camera, crisp details, satisfying rhythm, vertical 9:16."
  },
  {
    id: 30, title: "Luxury Watch Commercial", category: "Cinematic",
    description: "A premium watch in a dramatic studio.",
    prompt: "A luxury wristwatch rests on a dark polished stone pedestal, water droplets slide across the metal, dramatic rim lighting reveals craftsmanship, slow macro orbit, sharp product focus, realistic materials, elegant black background, vertical 9:16."
  },
  {
    id: 31, title: "Sneaker Emerging From Smoke", category: "Cinematic",
    description: "A sports shoe revealed through colored smoke.",
    prompt: "A modern athletic sneaker emerges from colored studio smoke, the camera circles the shoe as lighting reveals fabric, stitching and sole details, particles float in the background, premium sports advertising, realistic proportions, 4K, vertical 9:16."
  },
  {
    id: 32, title: "Perfume in Golden Light", category: "Cinematic",
    description: "A glass perfume bottle in elegant warm lighting.",
    prompt: "A refined glass perfume bottle stands on a reflective surface surrounded by golden mist and suspended droplets, sunlight refracts through the glass, slow camera movement reveals the bottle details, luxury editorial advertising, photorealistic, vertical 9:16."
  },
  {
    id: 33, title: "Headphones in Zero Gravity", category: "Sci-Fi",
    description: "Wireless headphones float in a futuristic studio.",
    prompt: "Premium wireless headphones float weightlessly in a dark futuristic studio, rotating slowly while cyan light trails circle the ear cups, close-ups reveal realistic padding and materials, dramatic lighting, high-end technology commercial, vertical 9:16."
  },
  {
    id: 34, title: "Holographic Smartphone", category: "Sci-Fi",
    description: "A smartphone surrounded by futuristic interfaces.",
    prompt: "A sleek modern smartphone rotates above a reflective platform while translucent holographic interfaces appear around it, polished edges catch studio lights, smooth macro movement, premium technology advertisement, accurate proportions, no distorted logos, vertical 9:16."
  },
  {
    id: 35, title: "Coffee Pour in Slow Motion", category: "Cinematic",
    description: "Fresh espresso pours into a glass cup.",
    prompt: "Fresh espresso pours into a clear glass cup in extreme slow motion, rich crema forms golden patterns, coffee beans tumble across wood, warm morning light, macro cinematography, realistic liquid dynamics, shallow depth of field, vertical 9:16."
  },
  {
    id: 36, title: "Chocolate Dessert Reveal", category: "Cinematic",
    description: "A glossy chocolate dessert reveals its layers.",
    prompt: "A glossy chocolate sphere rests on an elegant plate as warm chocolate sauce is poured over it, the shell opens to reveal a layered dessert, subtle steam and highlights, macro food photography, smooth camera push-in, premium restaurant commercial, vertical 9:16."
  },
  {
    id: 37, title: "Fruit Floating in Water", category: "Nature",
    description: "Colorful fruit slices suspended in clear water.",
    prompt: "Orange, lemon, strawberry and kiwi slices float through crystal-clear water in slow motion, tiny bubbles cling to fruit surfaces, sunlight creates shimmering caustics, macro close-ups, vivid natural colors, realistic splashes, vertical 9:16."
  },
  {
    id: 38, title: "Tiny Bakery in a Teacup", category: "Fantasy",
    description: "A miniature bakery hidden inside a teacup.",
    prompt: "A whimsical miniature bakery occupies a giant ceramic teacup, tiny bakers carry pastries across little wooden stairs, steam rises from miniature ovens, flour sparkles in warm light, macro tilt-shift photography, cozy storybook atmosphere, vertical 9:16."
  },
  {
    id: 39, title: "Pancakes With Golden Honey", category: "Cinematic",
    description: "A delicious pancake tower in a close-up shot.",
    prompt: "A tall stack of fluffy golden pancakes sits on a ceramic plate as warm honey cascades down the sides, butter melts on top, fresh berries roll into frame, close-up food cinematography, soft natural lighting, appetizing textures, vertical 9:16."
  },
  {
    id: 40, title: "Cat in a Giant Library", category: "Fantasy",
    description: "A curious cat explores a grand old library.",
    prompt: "A curious orange cat explores a grand old library with towering bookshelves, warm sunbeams illuminate floating dust, the cat jumps onto a wooden ladder and watches birds outside a window, low-angle tracking camera, realistic fur and movement, vertical 9:16."
  },
  {
    id: 41, title: "Fox in Fresh Snow", category: "Nature",
    description: "A red fox walks through a quiet winter forest.",
    prompt: "A red fox walks carefully through untouched snow in a pine forest, snowflakes settle on its fur, pawprints form behind it, pale sunlight filters through branches, ground-level tracking camera, realistic animal anatomy and movement, nature documentary, vertical 9:16."
  },
  {
    id: 42, title: "Hummingbird and Flower", category: "Nature",
    description: "A hummingbird hovers beside a vivid flower.",
    prompt: "A hummingbird hovers beside a tropical flower, wings moving in delicate slow motion, sunlight illuminates iridescent feathers, pollen drifts through the air, extreme macro photography, natural colors, realistic movement, soft bokeh, vertical 9:16."
  },
  {
    id: 43, title: "Baby Turtle's Ocean Journey", category: "Nature",
    description: "A tiny sea turtle approaches the ocean.",
    prompt: "A tiny sea turtle crosses a sunlit tropical beach toward sparkling waves, gentle foam reaches the sand, low tracking camera follows its journey, realistic shell texture and movement, peaceful conservation documentary, warm sunrise, vertical 9:16."
  },
  {
    id: 44, title: "Butterflies Form a Spiral", category: "Fantasy",
    description: "Colorful butterflies create a beautiful aerial pattern.",
    prompt: "Hundreds of colorful butterflies rise from a wildflower meadow and form a graceful spiral, sunlight glows through their wings, flowers sway in a breeze, camera tilts upward, realistic wing movement, magical atmosphere, cinematic 4K, vertical 9:16."
  },
  {
    id: 45, title: "Whale Beneath the Aurora", category: "Nature",
    description: "A whale surfaces under glowing northern lights.",
    prompt: "A majestic whale surfaces in a calm Arctic sea beneath vibrant green aurora lights, its reflection ripples across dark water, distant icebergs glow, wide cinematic composition, slow aerial camera, realistic ocean physics, serene atmosphere, vertical 9:16."
  },
  {
    id: 46, title: "Ancient Temple Awakens", category: "Fantasy",
    description: "A forgotten jungle temple opens its doors.",
    prompt: "An ancient stone temple hidden in a jungle awakens as sunlight touches carved symbols, vines move aside, enormous stone doors open and golden dust fills the air, slow cinematic dolly-in, detailed weathered architecture, epic atmosphere, vertical 9:16."
  },
  {
    id: 47, title: "Dragon Through Storm Clouds", category: "Fantasy",
    description: "A majestic dragon flies above rugged mountains.",
    prompt: "A colossal dragon glides between towering storm clouds above rugged mountains, lightning illuminates its scales, powerful wings move with realistic weight, camera tracks alongside it, atmospheric depth, epic fantasy cinematography, detailed creature design, vertical 9:16."
  },
  {
    id: 48, title: "Doorway to Another Galaxy", category: "Sci-Fi",
    description: "An explorer activates an enormous cosmic portal.",
    prompt: "A lone explorer approaches a monumental circular portal on a distant moon, concentric blue light waves reveal a colorful galaxy beyond, dust lifts from the ground, camera advances behind the explorer, cinematic science fiction, realistic lighting, vertical 9:16."
  },
  {
    id: 49, title: "City on a Giant Tree", category: "Fantasy",
    description: "A magical settlement rests across colossal branches.",
    prompt: "A magnificent fantasy city rests across branches of an ancient colossal tree, wooden bridges connect cozy homes, glowing lanterns hang among emerald leaves, waterfalls fall into mist, sweeping aerial reveal, intricate worldbuilding, cinematic 4K, vertical 9:16."
  },
  {
    id: 50, title: "Time Frozen in a Street", category: "Sci-Fi",
    description: "A person walks through a frozen moment in time.",
    prompt: "A busy city street freezes in time while one person walks calmly through suspended raindrops, floating leaves and a bicycle paused mid-motion, camera circles the person, realistic frozen details, dramatic lighting, cinematic color grading, vertical 9:16."
  },
  {
    id: 51, title: "Paper Plane Becomes Aircraft", category: "Fantasy",
    description: "A paper airplane transforms into a real aircraft.",
    prompt: "A folded paper airplane glides through a sunlit room, then seamlessly transforms into a sleek full-size aircraft outside the window, continuous camera tracking, convincing scale transformation, realistic clouds and reflections, imaginative cinematic visuals, vertical 9:16."
  },
  {
    id: 52, title: "House Built in Seconds", category: "Cinematic",
    description: "A modern house assembles through time-lapse.",
    prompt: "On an empty green plot, a modern minimalist house assembles through precise time-lapse motion, foundation appears, walls rise, windows fit into place, roof forms and a garden grows, fixed wide camera, realistic architecture, vertical 9:16."
  },
  {
    id: 53, title: "City Made of Glass", category: "Sci-Fi",
    description: "Transparent towers rise above a reflective lake.",
    prompt: "A futuristic city of transparent glass towers rises above a reflective lake, sunlight refracts into rainbow patterns, sky bridges connect buildings, flying vehicles cross the skyline, slow aerial movement, realistic glass optics, architectural sci-fi, vertical 9:16."
  },
  {
    id: 54, title: "Bioluminescent Midnight Beach", category: "Nature",
    description: "Electric-blue waves glow along a secluded beach.",
    prompt: "Gentle waves wash onto a secluded beach at midnight, every ripple glows electric blue with bioluminescent plankton, stars reflect in shallow water, distant cliffs form silhouettes, low camera glides along the shore, realistic water physics, vertical 9:16."
  },
  {
    id: 55, title: "Mountain Road Above Clouds", category: "Nature",
    description: "A winding road crosses mountains above the clouds.",
    prompt: "A narrow winding road follows towering mountain ridges above a vast sea of clouds, a small car moves around a bend, golden sunrise paints the peaks, sweeping drone camera reveals the landscape, photorealistic travel film, vertical 9:16."
  },
  {
    id: 56, title: "Forest Inside a Glass Cube", category: "Fantasy",
    description: "A miniature forest grows inside transparent glass.",
    prompt: "Inside a transparent glass cube, a miniature forest grows with tiny waterfalls, moss-covered rocks and glowing fireflies, morning mist rises between trees, macro camera circles the cube, realistic glass reflections and refractions, vertical 9:16."
  },
  {
    id: 57, title: "Futuristic Motorcycle Reveal", category: "Cinematic",
    description: "An electric motorcycle in a premium studio.",
    prompt: "A futuristic electric motorcycle stands on a circular platform in an industrial studio, light strips illuminate sculpted bodywork, slow camera orbit reveals mechanical details, realistic metal and rubber textures, high-end vehicle advertisement, 4K, vertical 9:16."
  },
  {
    id: 58, title: "Sneakers Running on Water", category: "Cinematic",
    description: "Athletic shoes create splashes in slow motion.",
    prompt: "Modern running shoes race across a shallow reflective surface in slow motion, each step creates a fan of water droplets, close-up tracking emphasizes cushioning and grip, dramatic sports lighting, realistic fabric and sole details, vertical 9:16."
  },
  {
    id: 59, title: "Beautiful Autumn City", category: "Cinematic",
    description: "Golden leaves drift through a charming old street.",
    prompt: "A charming old European-style street glows with autumn colors, golden leaves drift past stone buildings, bicycles lean beside a small cafe, sunlight reflects from rain-washed cobblestones, slow forward camera glide, photorealistic travel film, vertical 9:16."
  },
  {
    id: 60, title: "Cosmic Flower Bloom", category: "Fantasy",
    description: "A luminous flower blooms among the stars.",
    prompt: "A luminous flower blooms slowly in outer space, each petal reveals swirling nebula colors and star-like particles, distant galaxies rotate softly, macro camera pulls back to reveal the flower among stars, surreal cinematic visuals, 4K, vertical 9:16."
  },
  {
    id: 61, title: "Glass Marble Miniature World", category: "Fantasy",
    description: "A glass marble rolls through a tiny landscape.",
    prompt: "A transparent glass marble rolls through a miniature landscape of tiny bridges, winding tracks and colorful gardens, the world refracts inside the marble, macro tracking camera follows its journey, realistic optical effects, crisp textures, vertical 9:16."
  },
  {
    id: 62, title: "Sunrise Over a Floating Ocean", category: "Fantasy",
    description: "An impossible ocean floats above mountain peaks.",
    prompt: "An impossible ocean floats in the sky above mountains, gentle waves move across its suspended surface while waterfalls descend into clouds, golden sunlight rises behind the horizon, birds glide between islands, aerial reveal, realistic water physics, cinematic 4K, vertical 9:16."
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
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

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
      `${prompt.title} ${prompt.category} ${prompt.description} ${prompt.prompt}`.toLowerCase();

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
        <button class="small-button" data-action="view" data-id="${prompt.id}">View Prompt ↗</button>
        <button class="small-button copy-button" data-action="copy" data-id="${prompt.id}">Copy Prompt</button>
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
  if (event.key === "Escape" && !modalBackdrop.hidden) closeModal();
});

modalCopy.addEventListener("click", () => {
  if (currentPrompt) copyText(currentPrompt.prompt);
});

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
