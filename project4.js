// A.I. Disclaimer: All work for this assignment was completed by myself and entirely without
// the use of artificial intelligence tools such as ChatGPT, MS Copilot, other LLMs, etc.

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import createAlienMesh from './alien.js';
import createUFOGroup from "./ufo.js";
import createFenceGroup from "./fence.js";
import createAlienMesh from "./alien.js";
import createGroundGroup from "./ground.js";

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
// scene.add(cow);
const fence = createFenceGroup();
scene.add(fence)
const ufo = createUFOGroup();
scene.add(ufo);
const alien = createAlienMesh();
scene.add(alien);

// EXAMPlE
// const geometry = new THREE.BoxGeometry( 10, 10, 10 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.z = 25;


// RENDER ---------------------------------------------------------------------

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();