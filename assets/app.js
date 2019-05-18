const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', onResize);

let material1 = new THREE.MeshBasicMaterial({
  color    : 0x0000ff,
  side     : THREE.DoubleSide,
  wireframe: true

});
let material2 = new THREE.MeshBasicMaterial({
  color    : 0xff00ff,
  side     : THREE.DoubleSide,
  wireframe: true
});

let geometry = new THREE.BoxBufferGeometry(1, 1, 1, 1, 1, 1);

let materials = [
  material1,
  material1,
  material2,
  material2,
  material1,
  material1
];

let mesh = new THREE.Mesh(geometry, materials);
scene.add(mesh);

camera.position.z = 1.5;

let animate = function ()
{
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.0003;
  mesh.rotation.y += 0.0003;

  renderer.render(scene, camera);
};

animate();

function onResize()
{
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}