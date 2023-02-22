// 取得圖片數量
const imageCount = 41;

// 取得容器
const container = document.querySelector(".others-partners");

// 動態生成 img 標籤，並加入到容器中
for (let i = 1; i <= imageCount; i++) {
  const img = document.createElement("img");
  img.classList.add("w-[15%]", "aspect-square", "object-contain");
  img.src = `/images/partner/other-partners/lg/partner${i
    .toString()
    .padStart(2, "0")}.png`;
  img.alt = `Partner ${i} logo`;
  img.style.width = "16.6667%";
  container.appendChild(img);
}
