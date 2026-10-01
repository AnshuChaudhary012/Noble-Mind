//  vision section
const CONTENT_DATA = [
  "The future of how we live, work, and learn. We see a world where technology is not just a tool but a transformative force for good, reshaping every aspect of human existence.",
  "Technology is seen as a force for good, capable of driving positive change in society and improving the human experience.",
  "Share insights and innovations that have a positive impact across borders and sectors.",
];



const contentList = document.getElementById("contentList");

contentList.innerHTML = CONTENT_DATA.map((item, index) => {
  return `
    <div data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="${index * 200}" 
      class="flex gap-2.5 items-start border border-border-vision rounded-2xl px-3 py-3">

      <span>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="16" fill="url(#paint0_linear_88648_1136)" fill-opacity="0.12"/>
            <path d="M8 17.12L11.2 20.32M15.68 15.2L18.88 12M13.12 17.12L16.32 20.32L24 12" stroke="url(#paint1_linear_88648_1136)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
            <linearGradient id="paint0_linear_88648_1136" x1="3.65064" y1="-10.5217" x2="103.411" y2="75.8188" gradientUnits="userSpaceOnUse">
            <stop stop-color="#A854E9"/>
            <stop offset="1" stop-color="#4F91FC"/>
            </linearGradient>
            <linearGradient id="paint1_linear_88648_1136" x1="9.82532" y1="9.26437" x2="32.9659" y2="47.7789" gradientUnits="userSpaceOnUse">
            <stop stop-color="#A854E9"/>
            <stop offset="1" stop-color="#4F91FC"/>
            </linearGradient>
            </defs>
        </svg>

      </span>

      <p class="text-base leading-150 font-normal text-copy">
        ${item}
      </p>

    </div>
  `;
}).join("");