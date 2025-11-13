// A.I. Disclaimer: All work for this assignment was completed by myself and entirely without
// the use of artificial intelligence tools such as ChatGPT, MS Copilot, other LLMs, etc.

// Kensey McDowell and John Wesley Thompson

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import createGroundGroup from "./ground.js";
import createUFOGroup from "./ufo.js";
import createFenceGroup from "./fence.js";
import createAlienMesh from "./alien.js";
import createCowGroup from "./cow.js";

// INITIALIZE THE SCENE, CAMERA, AND RENDERER ---------------------------------

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(    // one of many camera types
    window.innerWidth / - 2,                    // left plane of camera frustum
    window.innerWidth / 2,                      // right plane of camera frustum
    window.innerHeight / 2,                     // top plane of camera frustum
    window.innerHeight / - 2,                   // bottom plane of camera frustum
    0.1,                                        // near clipping plane
    1000);                                      // far clipping plane

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // adds renderer to html

// ADD OBJECTS ----------------------------------------------------------------

const ground = createGroundGroup();
scene.add(ground);
const cow = createCowGroup();
cow.position.set(0.0, 4.0, 0.0);
scene.add(cow);
const fence = createFenceGroup();
scene.add(fence)
const ufo = createUFOGroup();
scene.add(ufo);
const alien = createAlienMesh();
scene.add(alien);

// EXAMPLE
// const geometry = new THREE.BoxGeometry( 10, 10, 10 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.z = 20;


// RENDER ---------------------------------------------------------------------

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();
