// A.I. Disclaimer: All work for this assignment was completed by myself and entirely without
// the use of artificial intelligence tools such as ChatGPT, MS Copilot, other LLMs, etc.
// Author: Kensey McDowell

import * as THREE from "three";

export default function createFenceGroup() { 
  const fence = new THREE.Group();

  const postMaterial = new THREE.MeshStandardMaterial({ color: new THREE.Color("#786954") }); // brown
  const railMaterial = new THREE.MeshStandardMaterial({ color: new THREE.Color("#786954") }); // brown
  const coneMaterial = new THREE.MeshStandardMaterial({ color: new THREE.Color("#d6bd9a") }); // light brown

  // Verticle posts
  const postGeometry = new THREE.CylinderGeometry(0.3, 0.3, 6, 16);
  const postLeft = new THREE.Mesh(postGeometry, postMaterial);
  postLeft.position.set(-4, 3, 0);
  fence.add(postLeft);

  const postRight = new THREE.Mesh(postGeometry, postMaterial);
  postRight.position.set(4, 3, 0);
  fence.add(postRight);

  // Horizontal rails 
  const railGeometry = new THREE.BoxGeometry(8, 0.3, 0.5);
  const railTop = new THREE.Mesh(railGeometry, railMaterial);
  railTop.position.set(0, 4.5, 0);
  fence.add(railTop);

  const railBottom = new THREE.Mesh(railGeometry, railMaterial);
  railBottom.position.set(0, 2, 0);
  fence.add(railBottom);

  // Diagonal brace 
  const braceGeometry = new THREE.BoxGeometry(8, 0.25, 0.5);
  const brace = new THREE.Mesh(braceGeometry, railMaterial);
  brace.rotation.z = Math.PI / 9; // tilt slightly
  brace.position.set(0, 3.2, 0); // set between rails
  fence.add(brace);

  // Cone tops 
  const coneGeometry = new THREE.ConeGeometry(0.35, 1, 16);
  const coneLeft = new THREE.Mesh(coneGeometry, coneMaterial);
  coneLeft.position.set(-4, 6.5, 0);
  fence.add(coneLeft);

  const coneRight = new THREE.Mesh(coneGeometry, coneMaterial);
  coneRight.position.set(4, 6.5, 0);
  fence.add(coneRight);

  fence.scale.set(0.4, 0.4, 0.4);

  return fence;
}