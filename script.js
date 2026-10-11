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

{
  id: 13,
  title: "Neon City in the Rain",
  category: "Cinematic",
  prompt: "Create a cinematic nighttime city street soaked in rain, glowing neon signs reflecting across wet pavement, a lone figure walking under a transparent umbrella, subtle fog, realistic reflections, slow tracking camera, atmospheric lighting, ultra-detailed, 4K, vertical 9:16."
},
{
  id: 14,
  title: "Floating Islands Above the Clouds",
  category: "Fantasy",
  prompt: "A breathtaking fantasy world of enormous floating islands above a sea of clouds, waterfalls flowing into the sky, tiny airships traveling between ancient castles, golden sunrise, volumetric lighting, slow aerial camera movement, epic cinematic scale, 4K, vertical 9:16."
},
{
  id: 15,
  title: "The Secret Door in the Forest",
  category: "Fantasy",
  prompt: "Deep inside an enchanted forest, an ancient wooden door stands between two giant trees, glowing blue runes appear as it slowly opens, magical particles drift through the mist, camera slowly pushes forward, mysterious atmosphere, realistic textures, cinematic lighting, vertical 9:16."
},
{
  id: 16,
  title: "Miniature City in a Glass Bottle",
  category: "Satisfying",
  prompt: "A tiny futuristic city built inside a transparent glass bottle, miniature cars moving along illuminated roads, tiny trains crossing bridges, warm windows glowing at dusk, macro photography, slow orbiting camera, realistic glass refraction, intricate details, 4K, vertical 9:16."
},
{
  id: 17,
  title: "A City Beneath the Ocean",
  category: "Sci-Fi",
  prompt: "Reveal a massive futuristic underwater city through crystal-clear ocean water, transparent domes, glowing transport tubes, schools of fish swimming between skyscrapers, sunlight rays penetrating the deep blue sea, slow cinematic camera descent, photorealistic, 4K, vertical 9:16."
},
{
  id: 18,
  title: "The Last Train of the Future",
  category: "Sci-Fi",
  prompt: "A sleek magnetic levitation train races through a futuristic megacity at night, holographic advertisements illuminate glass skyscrapers, light trails streak past the windows, smooth side-tracking camera, dramatic reflections, realistic motion blur, cinematic science fiction, 4K, vertical 9:16."
},
{
  id: 19,
  title: "A Tree Growing Through Time",
  category: "Nature",
  prompt: "Show a single ancient tree growing from a tiny seed into a magnificent giant across the seasons, spring blossoms, summer greenery, autumn leaves and winter snow, seamless time-lapse transformation, fixed camera, natural lighting, emotionally uplifting, photorealistic, vertical 9:16."
},
{
  id: 20,
  title: "Clouds Turning Into Mountains",
  category: "Fantasy",
  prompt: "Dreamlike clouds slowly transform into enormous snow-covered mountains floating in the sky, golden sunlight passes through the mist, distant birds glide between cloud peaks, gradual seamless morphing, slow aerial camera movement, ethereal atmosphere, cinematic 4K, vertical 9:16."
},
{
  id: 21,
  title: "Crystal Waterfall in a Hidden Cave",
  category: "Nature",
  prompt: "Inside a hidden cavern, a luminous turquoise waterfall pours into a crystal-clear pool surrounded by glowing mineral formations, water droplets sparkle in the air, soft mist and reflected light, slow dolly-in shot, highly realistic water simulation, 4K, vertical 9:16."
},
{
  id: 22,
  title: "Desert Turns Into a Garden",
  category: "Nature",
  prompt: "An endless golden desert transforms into a lush green garden as a wave of water travels across the sand, flowers bloom in its path, small streams appear and butterflies arrive, seamless time-lapse, wide cinematic shot, realistic environmental transformation, vertical 9:16."
},
{
  id: 23,
  title: "A Giant Moon Rising Behind a Village",
  category: "Cinematic",
  prompt: "A peaceful traditional village at twilight as an enormous detailed moon rises behind distant mountains, lanterns glow along a quiet river, thin clouds pass across the moon, villagers watch from wooden bridges, slow cinematic pan, atmospheric realism, 4K, vertical 9:16."
},
{
  id: 24,
  title: "A Tiny Astronaut on a Giant Flower",
  category: "Fantasy",
  prompt: "A tiny astronaut explores the petals of a gigantic glowing flower on an alien planet, sparkling pollen floats like stars, miniature insects move through the colorful vegetation, macro cinematic photography, shallow depth of field, gentle camera orbit, intricate details, vertical 9:16."
},
{
  id: 25,
  title: "Robot Discovering Its First Flower",
  category: "Sci-Fi",
  prompt: "An old friendly exploration robot wanders through a deserted futuristic city and discovers a tiny flower growing through cracked concrete, it gently kneels to observe the flower, warm sunlight breaks through clouds, subtle emotional storytelling, slow push-in, photorealistic, vertical 9:16."
},
{
  id: 26,
  title: "The Infinite Mirror Room",
  category: "Satisfying",
  prompt: "A futuristic room lined with endless mirrors and glowing geometric light panels, reflections form an infinite tunnel of symmetrical patterns, colors transition smoothly from violet to cyan, perfectly controlled camera movement, polished surfaces, hypnotic visual rhythm, 4K, vertical 9:16."
},
{
  id: 27,
  title: "Liquid Metal Sculpture",
  category: "Satisfying",
  prompt: "A reflective liquid-metal ribbon flows gracefully across a dark studio floor, rising into elegant abstract sculptures before melting back into a smooth pool, precise fluid motion, studio highlights, macro close-ups, luxurious minimal aesthetic, physically realistic reflections, 4K, vertical 9:16."
},
{
  id: 28,
  title: "Colorful Ink in Clear Water",
  category: "Satisfying",
  prompt: "Vibrant clouds of red, blue, violet and gold ink slowly expand through crystal-clear water, forming delicate flowing ribbons and layered patterns, macro slow motion, dramatic backlighting, sharp fluid details, seamless color transitions, elegant abstract cinematography, vertical 9:16."
},
{
  id: 29,
  title: "Perfectly Organized Desk Transformation",
  category: "Satisfying",
  prompt: "A messy creative desk transforms into a beautifully organized workspace through precise stop-motion movements, pens align, books stack neatly, cables disappear, a monitor lights up and a small plant is placed beside it, fixed overhead camera, crisp details, satisfying rhythm, vertical 9:16."
},
{
  id: 30,
  title: "Luxury Watch Macro Commercial",
  category: "Product",
  prompt: "Create a premium commercial for a luxury wristwatch resting on a dark polished stone pedestal, controlled water droplets slide across the metal surface, dramatic rim lighting reveals the craftsmanship, slow macro orbit, sharp product focus, realistic materials, elegant black background, vertical 9:16."
},
{
  id: 31,
  title: "Sneaker Emerging From Smoke",
  category: "Product",
  prompt: "A modern athletic sneaker emerges from soft clouds of colored studio smoke, the camera circles the shoe as directional lighting reveals fabric texture, stitching and sole details, subtle particles float in the background, premium sports advertising style, realistic product proportions, 4K, vertical 9:16."
},
{
  id: 32,
  title: "Perfume in a Golden Light",
  category: "Product",
  prompt: "A refined glass perfume bottle stands on a reflective surface surrounded by delicate golden mist and suspended water droplets, warm sunlight refracts through the glass, the camera slowly moves closer to reveal the label and bottle details, luxury editorial advertising, photorealistic, vertical 9:16."
},
{
  id: 33,
  title: "Wireless Headphones in Zero Gravity",
  category: "Product",
  prompt: "Premium wireless headphones float weightlessly inside a dark futuristic studio, rotating slowly while elegant cyan light trails circle the ear cups, close-up shots reveal realistic padding and material textures, dramatic controlled lighting, high-end technology commercial, crisp focus, vertical 9:16."
},
{
  id: 34,
  title: "Smartphone With a Holographic Interface",
  category: "Product",
  prompt: "A sleek modern smartphone rotates above a minimal reflective platform while translucent holographic interface elements appear around it, polished edges catch soft studio lights, smooth macro camera movement, clean premium technology advertisement, accurate proportions, no extra text or distorted logos, 4K, vertical 9:16."
},
{
  id: 35,
  title: "Coffee Pour in Extreme Slow Motion",
  category: "Food",
  prompt: "Fresh espresso pours into a clear glass cup in extreme slow motion, rich crema forms delicate golden patterns, a few coffee beans tumble across a wooden surface, warm morning window light, macro cinematography, realistic liquid dynamics, shallow depth of field, vertical 9:16."
},
{
  id: 36,
  title: "Chocolate Dessert Reveal",
  category: "Food",
  prompt: "A glossy chocolate sphere rests on an elegant dessert plate as warm chocolate sauce is poured over it, the shell slowly opens to reveal a beautifully layered dessert, steam and subtle highlights add realism, macro food photography, smooth camera push-in, premium restaurant commercial, vertical 9:16."
},
{
  id: 37,
  title: "Fruit Slices Floating in Water",
  category: "Food",
  prompt: "Fresh orange, lemon, strawberry and kiwi slices float through crystal-clear water in elegant slow motion, tiny bubbles cling to the fruit surfaces, sunlight creates shimmering caustics, macro close-ups, vivid natural colors, realistic water splashes, refreshing beverage advertisement, vertical 9:16."
},
{
  id: 38,
  title: "A Tiny Bakery in a Teacup",
  category: "Fantasy",
  prompt: "A whimsical miniature bakery occupies the inside of a giant ceramic teacup, tiny bakers carry warm pastries across little wooden stairs, steam rises from miniature ovens, flour particles sparkle in warm light, macro tilt-shift photography, cozy storybook atmosphere, intricate details, vertical 9:16."
},
{
  id: 39,
  title: "Pancake Tower With Honey",
  category: "Food",
  prompt: "A tall stack of fluffy golden pancakes sits on a ceramic plate as warm honey slowly cascades down the sides, butter melts on top, fresh berries roll gently into frame, close-up food cinematography, soft natural lighting, appetizing textures, realistic syrup motion, vertical 9:16."
},
{
  id: 40,
  title: "Cat Exploring a Giant Library",
  category: "Animals",
  prompt: "A curious orange cat explores a grand old library with towering bookshelves, warm sunbeams illuminate floating dust, the cat jumps onto a wooden ladder and watches tiny birds outside a tall window, low-angle tracking camera, realistic fur and natural movement, cozy cinematic mood, vertical 9:16."
},
{
  id: 41,
  title: "Fox Walking Through Fresh Snow",
  category: "Animals",
  prompt: "A red fox walks carefully through untouched snow in a quiet pine forest, delicate snowflakes settle on its fur, visible pawprints form behind it, pale winter sunlight filters through branches, camera follows at ground level, realistic animal anatomy and movement, cinematic nature documentary, 4K, vertical 9:16."
},
{
  id: 42,
  title: "Hummingbird in a Flower Garden",
  category: "Animals",
  prompt: "A hummingbird hovers beside a vivid tropical flower, its wings moving in delicate slow motion as sunlight illuminates iridescent feathers, tiny pollen particles drift through the air, extreme macro photography, natural colors, precise animal motion, soft bokeh background, 4K, vertical 9:16."
},
{
  id: 43,
  title: "Baby Turtle's First Ocean Journey",
  category: "Animals",
  prompt: "A tiny sea turtle moves across a sunlit tropical beach toward sparkling ocean waves, gentle foam reaches the sand as the turtle continues forward, low tracking camera follows its journey, realistic shell texture and movement, peaceful conservation-documentary style, warm sunrise, vertical 9:16."
},
{
  id: 44,
  title: "Butterflies Form a Spiral",
  category: "Nature",
  prompt: "Hundreds of colorful butterflies rise from a wildflower meadow and form a graceful spiral in the air, sunlight glows through their wings, flowers sway in a gentle breeze, camera slowly tilts upward, realistic wing movement, magical but natural atmosphere, cinematic 4K, vertical 9:16."
},
{
  id: 45,
  title: "A Whale Beneath the Aurora",
  category: "Nature",
  prompt: "A majestic whale surfaces in a calm Arctic sea beneath vibrant green aurora lights, its reflection ripples across dark water, distant icebergs glow under the night sky, wide cinematic composition, slow aerial camera movement, realistic ocean physics, serene documentary atmosphere, vertical 9:16."
},
{
  id: 46,
  title: "Ancient Temple Awakens",
  category: "Fantasy",
  prompt: "An ancient stone temple hidden in a jungle slowly awakens as sunlight touches its carved symbols, vines move aside, enormous stone doors open and golden dust fills the air, slow cinematic dolly-in, detailed weathered architecture, mysterious epic atmosphere, realistic lighting, vertical 9:16."
},
{
  id: 47,
  title: "A Dragon Flying Through Storm Clouds",
  category: "Fantasy",
  prompt: "A colossal elegant dragon glides between towering storm clouds above rugged mountains, lightning illuminates its scales for brief moments, powerful wings move with realistic weight, the camera tracks alongside it, atmospheric depth, epic fantasy cinematography, detailed creature design, 4K, vertical 9:16."
},
{
  id: 48,
  title: "The Doorway to Another Galaxy",
  category: "Sci-Fi",
  prompt: "A lone explorer approaches a monumental circular portal on a distant moon, the portal activates with concentric waves of blue light and reveals a colorful galaxy beyond, dust lifts from the ground, camera slowly advances behind the explorer, cinematic science fiction, realistic lighting, vertical 9:16."
},
{
  id: 49,
  title: "A City Built on a Giant Tree",
  category: "Fantasy",
  prompt: "A magnificent fantasy city rests across the branches of an ancient colossal tree, wooden bridges connect cozy homes, glowing lanterns hang among emerald leaves, tiny waterfalls fall into mist below, a sweeping aerial camera reveals the entire settlement, intricate worldbuilding, cinematic 4K, vertical 9:16."
},
{
  id: 50,
  title: "Time Frozen in a Busy Street",
  category: "Cinematic",
  prompt: "A busy city street freezes in time while one person walks calmly through suspended raindrops, floating leaves and a bicycle paused mid-motion, the camera smoothly circles the person, realistic frozen details, dramatic natural lighting, subtle cinematic color grading, seamless motion, 4K, vertical 9:16."
},
{
  id: 51,
  title: "A Paper Plane Becomes a Real Aircraft",
  category: "Fantasy",
  prompt: "A folded paper airplane glides through a sunlit room, then seamlessly transforms into a sleek full-size aircraft as it passes through an open window into the sky, continuous camera tracking, convincing scale transformation, realistic clouds and reflections, imaginative cinematic visual, vertical 9:16."
},
{
  id: 52,
  title: "A House Assembled in Seconds",
  category: "Satisfying",
  prompt: "On an empty green plot, a modern minimalist house assembles through precise time-lapse motion, foundation appears, walls rise, windows fit into place, a roof forms and a garden grows around the finished home, fixed wide camera, clean architectural visualization, realistic materials, vertical 9:16."
},
{
  id: 53,
  title: "A City Made Entirely of Glass",
  category: "Sci-Fi",
  prompt: "A breathtaking futuristic city made of transparent glass towers rises above a calm reflective lake, sunlight refracts into subtle rainbow patterns, sky bridges connect buildings, tiny flying vehicles cross the skyline, slow aerial camera movement, realistic glass optics, architectural sci-fi visualization, 4K, vertical 9:16."
},
{
  id: 54,
  title: "Bioluminescent Beach at Midnight",
  category: "Nature",
  prompt: "Gentle waves wash onto a secluded beach at midnight, every ripple glows electric blue with bioluminescent plankton, stars reflect in shallow water and distant cliffs form silhouettes, low camera glides along the shoreline, realistic water physics, tranquil cinematic atmosphere, 4K, vertical 9:16."
},
{
  id: 55,
  title: "A Mountain Road Above the Clouds",
  category: "Cinematic",
  prompt: "A narrow winding road travels along the ridge of towering mountains above a vast sea of clouds, a small car moves carefully around a bend, golden sunrise paints the peaks, sweeping drone camera reveals the immense landscape, photorealistic atmosphere, cinematic travel film, vertical 9:16."
},
{
  id: 56,
  title: "A Glass Cube Filled With a Forest",
  category: "Fantasy",
  prompt: "Inside a perfectly transparent glass cube, a miniature lush forest grows with tiny waterfalls, moss-covered rocks and glowing fireflies, morning mist rises between miniature trees, macro camera slowly circles the cube, realistic glass reflections and refractions, detailed miniature world, vertical 9:16."
},
{
  id: 57,
  title: "A Futuristic Motorcycle Reveal",
  category: "Product",
  prompt: "A futuristic electric motorcycle stands on a dark circular platform in a premium industrial studio, thin light strips illuminate its sculpted bodywork, the camera performs a slow smooth orbit and close-ups reveal mechanical details, realistic metal and rubber textures, high-end vehicle advertisement, 4K, vertical 9:16."
},
{
  id: 58,
  title: "Sneakers Running Across Water",
  category: "Product",
  prompt: "A pair of modern running shoes races across a shallow reflective surface in slow motion, each step creates a controlled fan of water droplets, close-up tracking emphasizes cushioning and grip, dramatic athletic lighting, realistic fabric and sole details, premium sports commercial, vertical 9:16."
},
{
  id: 59,
  title: "A Beautiful City in Autumn",
  category: "Cinematic",
  prompt: "A charming European-style street glows with warm autumn colors, golden leaves drift past old stone buildings, bicycles lean beside a small cafe and soft sunlight reflects from rain-washed cobblestones, a slow forward camera glide creates a peaceful travel-film atmosphere, photorealistic, 4K, vertical 9:16."
},
{
  id: 60,
  title: "A Cosmic Flower Bloom",
  category: "Fantasy",
  prompt: "A luminous flower blooms slowly in the darkness of outer space, each petal reveals swirling nebula colors and tiny star-like particles, distant galaxies rotate softly in the background, macro camera pulls back to reveal the flower floating among the stars, elegant surreal cinematography, 4K, vertical 9:16."
},
{
  id: 61,
  title: "A Glass Marble Through a Miniature World",
  category: "Satisfying",
  prompt: "A transparent glass marble rolls through an intricate miniature landscape of tiny bridges, winding tracks and colorful gardens, the world refracts and distorts beautifully inside the marble, macro tracking camera follows its smooth journey, realistic optical effects, crisp textures, satisfying visual rhythm, vertical 9:16."
},
{
  id: 62,
  title: "Sunrise Over a Floating Ocean",
  category: "Fantasy",
  prompt: "An impossible ocean floats in the sky above a quiet mountain range, gentle waves move across its suspended surface while waterfalls descend into clouds, a golden sun rises behind the horizon, birds glide between floating islands, slow aerial reveal, coherent reflections and water physics, epic cinematic 4K, vertical 9:16."
}

