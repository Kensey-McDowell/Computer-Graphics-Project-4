// A.I. Disclaimer: All work for this assignment was completed by myself and entirely without
// the use of artificial intelligence tools such as ChatGPT, MS Copilot, other LLMs, etc.

// John Wesley Thompson

import * as THREE from "three";

const mat_brown = new THREE.MeshStandardMaterial({color: 0x140d07});
const mat_green = new THREE.MeshStandardMaterial({color: 0x1a2421});

function createTreeMesh(){
  const tree = new THREE.Group();

  const treetop_height = 7;
  const treetop = new THREE.Mesh(
    new THREE.CylinderGeometry(
      0,                  // radius top
      2,                  // radius bottom
      treetop_height,     // height
      32,                 // radial segments
      1,                  // height segments
      false               // openended
    ), mat_green          // mesh material
  );

  const trunk_height = 5;
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(
      0.5,                // radius top
      0.5,                // radius bottom
      trunk_height,       // height
      32,                 // radial segments
      1,                  // height segments
      false               // openended
    ), mat_brown          // mesh material
  );
  trunk.position.set(0, trunk_height / 2, 0);
  treetop.position.set(0, (treetop_height + trunk_height) / 2, 0);

  tree.add(treetop);
  tree.add(trunk);

  return tree;
}

export default createTreeMesh;