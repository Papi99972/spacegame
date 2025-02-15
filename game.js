// Basic setup for the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a light source
const light = new THREE.AmbientLight(0x404040); // Ambient light
scene.add(light);

// Load the 3D model (OBJ + MTL)
const mtlLoader = new THREE.MTLLoader();
mtlLoader.load('path/to/your/model/Intergalactic_Spaceship-(Wavefront).mtl', materials => {
    materials.preload();
    const objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('path/to/your/model/Intergalactic_Spaceship-(Wavefront).obj', object => {
        scene.add(object);
        object.scale.set(0.5, 0.5, 0.5);  // Scale model if necessary
        object.position.set(0, 0, 0);  // Position the model
    });
});

// Handle resizing the window
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
