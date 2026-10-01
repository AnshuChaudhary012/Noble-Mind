const footerData = [
  {
    title: "Main Menu",
    links: ["Home", "About Us", "How it Works", "Why Choose Us", "Steps"],
  },
  {
    title: "Legal",
    links: ["Terms ", "Privacy"],
  },
];

const footer = document.getElementById("footer");
footer.innerHTML = `

  <div class="grid grid-cols-2 xl:gap-35.5 lg:gap-30 gap-20 ">
    ${footerData
      .map(
        (section) => `
          <div class="max-w-max">
            <h3 class="font-bold max-w-max text-base leading-150 text-white">
              ${section.title}
            </h3>
            <ul class="flex flex-col gap-2 mt-3">
              ${section.links
                .map(
                  (link) => `
                    <li class="footer-link group relative w-fit text-white/80 font-normal text-base leading-150 cursor-pointer">
                      <a href="#" class=" block">
                        ${link}
                      </a>
                    </li>
                  `,
                )
                .join("")}
            </ul>
          </div>
        `,
      )
      .join("")}
  </div>
  `;