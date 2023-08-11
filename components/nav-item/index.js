const parentEl = document.getElementById("first-nav-items");

const items = [
  {
    title: "Home",
    src: "./assets/img/home.svg",
    link: "/home",
  },
  {
    title: "Search",
    src: "./assets/img/search.png",
    link: "/search",
  },
  {
    title: "Library",
    src: "./assets/img/library.svg",
    link: "/library",
  },
];

function renderOnScreen() {
  items.forEach((e) => {
    parentEl.innerHTML += `
    <a href=${e.link}>
    <div class="nav-item">
    <img src=${e.src} alt="home" />
    <div>${e.title}</div>
    </div>
    </a>
    `;

    // const node = document.createElement("div");
    // const img = document.createElement("img");
    // img.setAttribute("src", e.src);
    // const nameEl = document.createElement("div");
    // nameEl.innerText = e.title;
    // node.appendChild(img);
    // node.appendChild(nameEl);

    // parentEl.append(node);
  });
}

renderOnScreen();
