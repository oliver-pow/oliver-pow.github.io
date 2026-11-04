
const grid = document.querySelector("#project-grid");
const filters = document.querySelector("#filters");
const count = document.querySelector("#project-count");
const empty = document.querySelector("#empty-state");
const dialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");

const imageLightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = imageLightbox.querySelector(".lightbox-close");

const categories = [
  "All",
  ...new Set(projects.map(p => p.category).filter(Boolean))
];

let activeFilter = "All";

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[c]);
}

// Create category filter buttons
function renderFilters() {
  filters.innerHTML = categories.map(category => `
    <button
      class="filter-button ${category === activeFilter ? "active" : ""}"
      data-filter="${escapeHTML(category)}"
      aria-pressed="${category === activeFilter}">
      ${escapeHTML(category)}
    </button>
  `).join("");

  filters.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderFilters();
      renderProjects();
    });
  });
}

// Generate project cards
function renderProjects() {
  const visible = projects.filter(project =>
    activeFilter === "All" || project.category === activeFilter
  );

  count.textContent =
    `${visible.length} PROJECT${visible.length === 1 ? "" : "S"}`;

  empty.hidden = visible.length !== 0;

  grid.innerHTML = visible.map((project, index) => {
    const firstMedia = project.media?.[0];

    let thumbnail = "";

    if (!firstMedia) {
      thumbnail = `
        <div class="image-placeholder">
          <span>PROJECT ${String(index + 1).padStart(2, "0")}</span>
          <b>+</b>
        </div>
      `;
    } else if (firstMedia.type === "video") {
      thumbnail = `
        <video
          src="${escapeHTML(firstMedia.src)}"
          muted
          playsinline
          preload="metadata">
        </video>
      `;
    } else {
      thumbnail = `
        <img
          src="${escapeHTML(firstMedia.src)}"
          alt="${escapeHTML(project.title)} project photograph"
          loading="lazy">
      `;
    }

    return `
      <article class="project-card">
        <button
          class="project-open"
          data-index="${projects.indexOf(project)}"
          aria-label="View ${escapeHTML(project.title)} details">

          <div class="project-image ${firstMedia ? "has-image" : ""}">
            ${thumbnail}
          </div>

          <div class="card-body">
            <div class="card-meta">
              <span>${escapeHTML(project.category)}</span>
              <span>${escapeHTML(project.date)}</span>
            </div>

            <h3>${escapeHTML(project.title)}</h3>

            <p>${escapeHTML(project.summary)}</p>

            <span class="card-link">
              View project <span aria-hidden="true">↗</span>
            </span>
          </div>
        </button>
      </article>
    `;
  }).join("");

  grid.querySelectorAll(".project-open").forEach(button => {
    button.addEventListener("click", () => {
      openProject(projects[Number(button.dataset.index)]);
    });
  });
}

// Open project details
function openProject(project) {

  // Generate reference links
  const resources = (project.resources || []).map(resource => `
    <a
      href="${escapeHTML(resource.url)}"
      target="_blank"
      rel="noopener noreferrer">

      <strong>${escapeHTML(resource.name)}</strong>
      <span>${escapeHTML(resource.description)}</span>
      <span class="resource-arrow">↗</span>
    </a>
  `).join("");

  // Generate project gallery
  const media = (project.media || []).map(item => {

    if (item.type === "video") {
      return `
        <video
          class="dialog-media"
          controls
          playsinline
          preload="metadata">

          <source src="${escapeHTML(item.src)}">

          Your browser does not support video playback.
        </video>
      `;
    }

    return `
      <img
        class="dialog-media"
        src="${escapeHTML(item.src)}"
        alt="${escapeHTML(project.title)} project photograph"
        loading="lazy">
    `;
  }).join("");

  // External project link
  const link = project.link
    ? `
      <a
        class="button primary"
        href="${escapeHTML(project.link)}"
        target="_blank"
        rel="noopener noreferrer">
        View project link ↗
      </a>
    `
    : "";

  // Build popup
  dialogContent.innerHTML = `
    <p class="eyebrow">
      ${escapeHTML(project.category)} · ${escapeHTML(project.date)}
    </p>

  <h2>${escapeHTML(project.title)}</h2>

    
  
    </p>${escapeHTML(project.summary)}
  

    <h3>Overview</h3>
    <p>${escapeHTML(project.details)}</p>

    <h3>Challenges & problem-solving</h3>
    <p>${escapeHTML(project.challenges)}</p>

    <h3>Results & what I learned</h3>
    <p>${escapeHTML(project.outcome)}</p>
    ${resources ? `
      <h3>References & resources</h3>
      <div class="resource-list">
        ${resources}
      </div>
    ` : ""}

    ${link}

    ${media ? `
      <h3>Project media</h3>
      <div class="dialog-gallery">
        ${media}
      </div>
    ` : ""}
    
  `;
 dialog.showModal();

requestAnimationFrame(() => {
  dialog.scrollTop = 0;
  dialogContent.scrollTop = 0;

  const scrollable = dialog.querySelector(".project-dialog");
  if (scrollable) scrollable.scrollTop = 0;
});
}

// Close project popup
document.querySelector("#dialog-close").addEventListener("click", () => {
  dialog.close();
});

// Close project popup by clicking outside
dialog.addEventListener("click", event => {
  if (event.target === dialog) {
    dialog.close();
  }
});

// Stop videos when popup closes
dialog.addEventListener("close", () => {
  dialogContent.querySelectorAll("video").forEach(video => {
    video.pause();
    video.currentTime = 0;
  });
});

// Open expanded image
document.addEventListener("click", event => {
  const image = event.target.closest(".project-dialog img.dialog-media");

  if (!image) return;

  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  imageLightbox.showModal();
});

// Close lightbox with button
lightboxClose.addEventListener("click", () => {
  imageLightbox.close();
});

// Close lightbox by clicking outside image
imageLightbox.addEventListener("click", event => {
  if (event.target === imageLightbox) {
    imageLightbox.close();
  }
});

// Clear lightbox image after closing
imageLightbox.addEventListener("close", () => {
  lightboxImage.src = "";
});

// Current year
document.querySelector("#year").textContent =
  new Date().getFullYear();

// Initial rendering
renderFilters();
renderProjects();
