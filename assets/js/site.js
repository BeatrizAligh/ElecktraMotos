(() => {
  const body = document.body;
  const base = body.dataset.base || ".";
  const page = body.dataset.page || "";
  const fontAwesomeId = "font-awesome-cdn";
  const logoSrc = `${base}/assets/img/LogoElecktra.png`;

  if (!document.getElementById(fontAwesomeId)) {
    const link = document.createElement("link");
    link.id = fontAwesomeId;
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
    link.crossOrigin = "anonymous";
    link.referrerPolicy = "no-referrer";
    document.head.appendChild(link);
  }

  const routes = {
    home: `${base}/index.html`,
    nosotros: `${base}/pages/nosotros.html`,
    marcas: `${base}/pages/marcas.html`,
    promociones: `${base}/pages/promociones.html`,
    puntos: `${base}/pages/puntos-de-venta.html`,
    blogs: `${base}/pages/blogs.html`,
    franquicias: `${base}/pages/franquicias.html`,
    faq: `${base}/pages/faq.html`,
    registro: `${base}/pages/registro.html`,
    motos: `${base}/pages/marcas.html#catalogo`
  };

  const navItems = [
    { key: "nosotros", label: "Nosotros", href: routes.nosotros },
    { key: "marcas", label: "Marcas", href: routes.marcas },
    { key: "promociones", label: "Promociones", href: routes.promociones },
    { key: "puntos", label: "Puntos de venta", href: routes.puntos },
    { key: "blogs", label: "Blogs", href: routes.blogs },
    { key: "franquicias", label: "Franquicias", href: routes.franquicias },
    { key: "faq", label: "FAQ", href: routes.faq }
  ];

  const headerTarget = document.querySelector("[data-site-header]");
  const footerTarget = document.querySelector("[data-site-footer]");

  const navLinks = navItems.map((item) => {
    const active = item.key === page ? "active" : "";
    const current = item.key === page ? ' aria-current="page"' : "";
    return `<li class="nav-item"><a class="nav-link ${active}" href="${item.href}"${current}>${item.label}</a></li>`;
  }).join("");

  headerTarget.innerHTML = `
    <header class="site-header">
      <nav class="navbar navbar-expand-xl navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="${routes.home}">
            <img class="Logo" src="${logoSrc}" alt="Logo Elektra Motos">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#siteNav" aria-controls="siteNav" aria-expanded="false" aria-label="Abrir navegacion">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="siteNav">
            <ul class="navbar-nav ms-auto align-items-xl-center gap-xl-2">
              ${navLinks}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `;

  footerTarget.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="row g-4 align-items-start justify-content-center">
          <div class="col-lg-3">
            <div class="footer-brand">
              <a class="navbar-brand footer-brand-logo mb-3" href="${routes.home}">
                <img class="Logo footer-logo" src="${logoSrc}" alt="Logo Elektra Motos">
              </a>
              <div class="footer-social" aria-label="Redes sociales">
                <a class="footer-social-link" href="#" aria-label="X">
                  <i class="fa-brands fa-x-twitter" aria-hidden="true"></i>
                </a>
                <a class="footer-social-link" href="#" aria-label="Instagram">
                  <i class="fa-brands fa-instagram" aria-hidden="true"></i>
                </a>
                <a class="footer-social-link" href="#" aria-label="YouTube">
                  <i class="fa-brands fa-youtube" aria-hidden="true"></i>
                </a>
                <a class="footer-social-link" href="#" aria-label="LinkedIn">
                  <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-6">.
            <div class="footer-grid footer-bars">
              <div class="footer-list">
                <a href="${routes.nosotros}">Nosotros</a>
                <a href="${routes.marcas}">Marcas</a>
                <a href="${routes.motos}">Motos</a>
                <a href="${routes.promociones}">Promociones</a>
                <a href="${routes.puntos}">Puntos de venta</a>
                <a href="${routes.blogs}">Blogs</a>
                <a href="${routes.franquicias}">Franquicias</a>
                <a href="${routes.faq}">FAQ</a>
              </div>
            </div>
          </div>       
          <div class="col-lg-3">
            <div class="footer-grid">
              <a  href="#" class="footer-title">Contacto</a>
              <div class="footer-contact">
              <span>Derechos reservados Elektra Motos <span data-year></span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;

  const yearTarget = document.querySelector("[data-year]");
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  document.querySelectorAll("[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });

  const brandsIntroCard = document.querySelector("[data-brands-intro-card]");
  const brandsIntroLogo = document.querySelector("[data-brands-intro-logo] img");
  const brandsIntroCopyA = document.querySelector("[data-brands-intro-copy-a]");
  const brandsIntroCopyB = document.querySelector("[data-brands-intro-copy-b]");
  const desktopBrandTriggers = document.querySelectorAll(".brands-logo-trigger");
  const mobileBrandsCarousel = document.querySelector("#brandsLogoCarousel");

  if (brandsIntroCard && brandsIntroLogo && brandsIntroCopyA && brandsIntroCopyB) {
    const updateBrandsIntro = (source) => {
      const introLogo = source?.dataset?.introLogo;
      const introCopyA = source?.dataset?.introCopyA;
      const introCopyB = source?.dataset?.introCopyB;
      const brandName = source?.dataset?.brandName || "Marca";

      if (introLogo) {
        brandsIntroLogo.src = introLogo;
      }

      brandsIntroLogo.alt = `Logo ${brandName}`;

      if (introCopyA) {
        brandsIntroCopyA.textContent = introCopyA;
      }

      if (introCopyB) {
        brandsIntroCopyB.textContent = introCopyB;
      }
    };

    if (desktopBrandTriggers.length) {
      const setActiveDesktopBrand = (target) => {
        desktopBrandTriggers.forEach((item) => item.classList.remove("is-active"));
        target.classList.add("is-active");
      };

      desktopBrandTriggers.forEach((trigger) => {
        trigger.addEventListener("mouseenter", () => {
          updateBrandsIntro(trigger);
          setActiveDesktopBrand(trigger);
        });

        trigger.addEventListener("focus", () => {
          updateBrandsIntro(trigger);
          setActiveDesktopBrand(trigger);
        });

        trigger.addEventListener("click", () => {
          updateBrandsIntro(trigger);
          setActiveDesktopBrand(trigger);
        });

        trigger.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            updateBrandsIntro(trigger);
            setActiveDesktopBrand(trigger);
          }
        });
      });
    }

    if (mobileBrandsCarousel) {
      mobileBrandsCarousel.addEventListener("slid.bs.carousel", (event) => {
        const activeItem = event.relatedTarget || mobileBrandsCarousel.querySelector(".carousel-item.active");
        if (activeItem) {
          updateBrandsIntro(activeItem);
        }
      });
    }
  }

  const storeMapFrame = document.querySelector(".store-map-frame");
  const storeLocationButtons = document.querySelectorAll(".store-location-item");

  if (storeMapFrame && storeLocationButtons.length) {
    const updateStoreMap = (button) => {
      storeLocationButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const address = button.dataset.address || button.textContent.trim();
      storeMapFrame.src = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
    };

    storeLocationButtons.forEach((button) => {
      button.addEventListener("click", () => updateStoreMap(button));
    });
  }
})();


//CONNECT BLOG DATA WITH DETAIL PAGE
const id = localStorage.getItem("blogSeleccionado");

const blog = blogData.find(b => b.id == id);

if (blog) {
  document.getElementById("blog-titulo").innerText = blog.titulo;
  document.getElementById("blog-fecha").innerText = blog.fecha;
  document.getElementById("blog-img").src = blog.imagen;
  document.getElementById("blog-contenido").innerHTML = blog.contenido;
}

function selectBlog(id) {
  localStorage.setItem("blogSeleccionado", id);
}

//SEARCH BLOGS
function renderResultados(lista) {

  resultsList.innerHTML = "";

  if (lista.length === 0) {
    resultsList.innerHTML = "<p>No se encontraron resultados</p>";
    return;
  }

  lista.forEach(blog => {
    resultsList.innerHTML += `
      <div class="col-6 col-md-4">
        <div class="blog-card">
          <img src="${blog.imagen}" class="img-fluid">
          <p>${blog.titulo}</p>
        </div>
      </div>
    `;
  });
}

const input = document.getElementById("searchInput");
const defaultList = document.getElementById("default-blog-list");
const resultsList = document.getElementById("search-results");


if (input) {
input.addEventListener("input", () => {
  
  const value = input.value.toLowerCase().trim();

  // 🔥 si está vacío → mostrar normal
  if (value === "") {
    defaultList.classList.remove("d-none");
    resultsList.classList.add("d-none");
    resultsList.innerHTML = "";
    return;
  }

  // 🔥 ocultar default y mostrar búsqueda
  defaultList.classList.add("d-none");
  resultsList.classList.remove("d-none");

  const resultados = blogData.filter(blog =>
    blog.titulo.toLowerCase().includes(value) ||
    blog.descripcion.toLowerCase().includes(value)
  );

  renderResultados(resultados);

});
}
  






