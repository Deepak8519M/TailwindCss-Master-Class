const button = document.getElementById("magicBtn");
const glow = document.getElementById("glowCircle");

button.addEventListener("mousemove", (e) => {
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  glow.style.left = `${x}px`;
  glow.style.top = `${y}px`;

  const proximity = Math.min(x, rect.width - x);
  const boost = 1 + (30 - proximity) / 40; // Edges = higher scale
  glow.style.transform = `translate(-50%, -50%) scale(${boost})`;
  glow.style.opacity = "1";
});

button.addEventListener("mouseleave", () => {
  glow.style.opacity = "0";
});
