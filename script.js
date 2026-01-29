const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

document.querySelectorAll(".menu a").forEach(a => {
  a.addEventListener("click", () => menu.classList.remove("open"));
});

// Copy message (simple contact form)
const copyBtn = document.getElementById("copyBtn");
const statusEl = document.getElementById("copyStatus");

copyBtn.addEventListener("click", async () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("msg").value.trim();

  const text =
`Name: ${name}
Email: ${email}
Message: ${msg}`;

  try{
    await navigator.clipboard.writeText(text);
    statusEl.textContent = "Copied! Now paste it in WhatsApp/Email.";
  }catch(e){
    statusEl.textContent = "Copy failed. Please manually select and copy.";
  }
});
