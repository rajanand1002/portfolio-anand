// Loads every image in src/assets so components can reference them by filename string.
// Put anand.jpg, anand2.jpg, anand3.jpg, portfolio2.png, TaskManager.png, TicTacToe.png,
// Blinkit.png in src/assets/ and they'll resolve automatically.

const modules = import.meta.glob("./assets/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
  import: "default",
});

const images = {};
for (const path in modules) {
  const filename = path.split("/").pop();
  images[filename] = modules[path];
}

export function getImage(filename) {
  return images[filename] || "";
}

export default images;
