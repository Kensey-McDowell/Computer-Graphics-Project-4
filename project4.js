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
import createTreeMesh from "./tree.js";


const TREECOUNT = 10;

// INITIALIZE THE SCENE, CAMERA, AND RENDERER ---------------------------------

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(  // one of many camera types
  window.innerWidth / - 2,                    // left plane of camera frustum
  window.innerWidth / 2,                      // right plane of camera frustum
  window.innerHeight / 2,                     // top plane of camera frustum
  window.innerHeight / - 2,                   // bottom plane of camera frustum
  0.1,                                        // near clipping plane
  1000                                        // far clipping plane
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // adds renderer to html

// ADD OBJECTS ----------------------------------------------------------------

const ground = createGroundGroup();
scene.add(ground);
const cow = createCowGroup();

const cow_start_y_pos = 4;
cow.position.set(0.0, cow_start_y_pos, 0.0);
scene.add(cow);
const fence = createFenceGroup();
scene.add(fence)
const ufo = createUFOGroup();
scene.add(ufo);
const alien = createAlienMesh();
scene.add(alien);
scatterTrees(-10, 10, -25, -10);

// EXAMPLE
// const geometry = new THREE.BoxGeometry( 10, 10, 10 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.z = 20;

function scatterTrees(x_min, x_max, z_min, z_max){

  for (let i = 0; i < TREECOUNT; i++){
    let tree = createTreeMesh();
    let temp_x = (Math.random() * (x_max - x_min + 1)) + x_min;
    let temp_z = (Math.random() * (z_max - z_min + 1)) + z_min;

    tree.position.set(temp_x, 0, temp_z);
    scene.add(tree);
  }

}


// RENDER ---------------------------------------------------------------------

const controls = new OrbitControls(camera, renderer.domElement);

const clock = new THREE.Clock();
let animation_active = false;
let paused_time = 0;

function triggerAnimation(event){
  const last_animation_state = animation_active;

  if (event.key === 'a' || event.key === 'A'){
    animation_active = !animation_active;
  }

  if (last_animation_state != animation_active){
    if (animation_active){
      clock.start()
    } else {
      paused_time += clock.getElapsedTime(); 
      clock.stop();
    }
  }
}
document.addEventListener("keypress", triggerAnimation);

function animate() {
  requestAnimationFrame(animate);

  if (animation_active){
    const new_cow_y_pos =  2 * Math.sin(clock.getElapsedTime() + paused_time) + cow_start_y_pos;
    cow.position.set(0.0, new_cow_y_pos, 0.0);
  }

  controls.update();
  renderer.render(scene, camera);
}

animate();