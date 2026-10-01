const VALUES_DATA = [
  {
    title: "Customer-Centric",
    description:
      "Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.",
  },
  {
    title: "Global Resonance",
    description:
      "Share insights and innovations that have a positive impact across borders and sectors.",
  },
  {
    title: "Ethical Leadership",
    description:
      "Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent.",
  },
  {
    title: "Innovation",
    description:
      "Stay at the vanguard of technological transformation, redefining futures and driving excellence in all our offerings.",
  },
  {
    title: "Commitment to Vision 2030",
    description:
      "Align with and champion Saudi Arabia's technological and societal aspirations.",
  },
  {
    title: "Collaboration",
    description:
      "Forge strategic partnerships across industries and institutions, emphasizing both global and local advancements.",
  },
  {
    title: "Social Responsibility",
    description:
      "Dedicate ourselves to uplifting communities, driving positive change, and promoting sustainable in both business and societal arenas.",
  },
  {
    title: "Workplace Harmony",
    description:
      " Create a nurturing and peaceful environment for our staff, fostering growth, well-being, and unity. We are than a team; we are a family.",
  },
];


const valuesList = document.getElementById("valuesList");

valuesList.innerHTML = VALUES_DATA.map((item, index) => {
  return `
        <div data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="${index * 200}" 
            class=" group rounded-2xl border border-border-value bg-white p-2.5 sm:p-3 motion-soft hover:backdrop-blur-[52px] hover:shadow-[0px_9px_50px_0px_#0000001F]
            ">
            <div class="flex items-start">
              <div class="flex items-center gap-2">    
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="12" fill="url(#paint0_linear_88648_1250)" fill-opacity="0.16"/>
                      <path d="M6 12.84L8.4 15.24M11.76 11.4L14.16 9M9.84 12.84L12.24 15.24L18 9" stroke="url(#paint1_linear_88648_1250)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <defs>
                      <linearGradient id="paint0_linear_88648_1250" x1="2.73798" y1="-7.89125" x2="77.5586" y2="56.8641" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#A854E9"/>
                      <stop offset="1" stop-color="#4F91FC"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_88648_1250" x1="7.36899" y1="6.94827" x2="24.7244" y2="35.8342" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#A854E9"/>
                      <stop offset="1" stop-color="#4F91FC"/>
                      </linearGradient>
                      </defs>
                      </svg>
                </span>
                <h3 class=" font-bold text-base leading-150 text-black">
                        ${item.title}
                </h3>
              </div>
            </div>
            <p class="mt-4 font-normal text-base leading-150 text-copy-neutral">
                  ${item.description}
                </p>
        </div>
    `;
}).join("");