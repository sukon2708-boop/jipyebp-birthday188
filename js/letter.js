const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ แก้ข้อความจดหมายตรงนี้ได้เลย
const MESSAGE = `
Happy Birthday นะค้าบที่รัก
เค้าขอให้ที่รักมีความสุขมากๆๆๆนะคับ ทำอะไรมีสติให้เยอะๆ 
ต่อจากนี้อย่าคิดว่าตัวเองไม่มีใครอย่าคิดว่าอยู่ตัวคนเดียวนะ 
เธอมีเค้าอยู่ตรงนี้เสมอนะคับ
เค้ารักเธอมากๆๆๆนะ💕
`;

function open(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}
function close(){ modalBackdrop.style.display = "none"; }

openLetter.addEventListener("click", open);
readBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop) close();
});
