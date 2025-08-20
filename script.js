const container = document.getElementById("container");
const cubes = document.querySelectorAll(".cube");

let activeCube = null;
let offsetX = 0;
let offsetY = 0;

// Position cubes initially in a grid
cubes.forEach((cube, index) => {
  let row = Math.floor(index / 3);
  let col = index % 3;
  cube.style.left = `${col * 160 + 20}px`; // 100px size + 20px gap
  cube.style.top = `${row * 160 + 20}px`;
  
  cube.addEventListener("mousedown", (e) => {
    activeCube = cube;
    offsetX = e.clientX - cube.offsetLeft;
    offsetY = e.clientY - cube.offsetTop;
  });
});

document.addEventListener("mousemove", (e) => {
  if (activeCube) {
    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;

    // Boundary conditions
    const maxX = container.clientWidth - activeCube.clientWidth;
    const maxY = container.clientHeight - activeCube.clientHeight;

    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;
    if (newX > maxX) newX = maxX;
    if (newY > maxY) newY = maxY;

    activeCube.style.left = `${newX}px`;
    activeCube.style.top = `${newY}px`;
  }
});

document.addEventListener("mouseup", () => {
  activeCube = null;
});
