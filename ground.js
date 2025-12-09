// A.I. Disclaimer: All work for this assignment was completed by myself and entirely without
// the use of artificial intelligence tools such as ChatGPT, MS Copilot, other LLMs, etc.

// John Wesley Thompson

import * as THREE from "three";

const grass_texture = new THREE.TextureLoader().load("./assets/grasstexture.png");

function createGroundGroup(){
  // grass_texture.repeat.set(0.25, 0.25);

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(
      20,                         // width
      20                          // height
    ),
    new THREE.MeshStandardMaterial({ 
      map: grass_texture,
    })
  );
  ground.position.set(0, 0, 0);
  ground.rotation.x = -Math.PI / 2 // rotates 90 degrees around x axis

  return ground;
}

export default createGroundGroup;