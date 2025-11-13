// A.I. Disclaimer: All work for this assignment was completed by myself and entirely without
// the use of artificial intelligence tools such as ChatGPT, MS Copilot, other LLMs, etc.

import * as THREE from "three";

export default function createAlienMesh() {
  const alien = new THREE.Group();

  // Head
  const headGeometry = new THREE.BufferGeometry();

  // Vertices
  const headVertices = [
    // Top vertex 
    0, 2.2, 0,       

    // Upper ring
    0.4, 1.8, 0.4,   
    -0.4, 1.8, 0.4,  
    0.4, 1.8, -0.4,  
    -0.4, 1.8, -0.4, 

    // Middle ring 
    0.6, 1.2, 0.6,   
    -0.6, 1.2, 0.6,  
    0.6, 1.2, -0.6,  
    -0.6, 1.2, -0.6, 

    // Lower ring 
    0.5, 0.4, 0.5,   
    -0.5, 0.4, 0.5,  
    0.5, 0.4, -0.5,  
    -0.5, 0.4, -0.5, 

    // Chin vertex 
    0, -0.8, 0       
  ];

  headGeometry.setAttribute( "position", new THREE.BufferAttribute(new Float32Array(headVertices), 3));

  // Faces 
  const headIndices = [
    // top to upper ring
    0,1,2, 0,1,3, 0,2,4, 0,3,4,

    // upper to middle ring
    1,2,6, 1,6,5,
    3,4,8, 3,8,7,
    1,3,7, 1,7,5,
    2,4,8, 2,8,6,

    // middle to lower ring
    5,6,10, 5,10,9,
    7,8,12, 7,12,11,
    5,7,11, 5,11,9,
    6,8,12, 6,12,10,

    // lower ring to chin
    9,10,13, 11,12,13, 9,11,13, 10,12,13
  ];

  headGeometry.setIndex(headIndices);
  headGeometry.computeVertexNormals();

  const headMaterial = new THREE.MeshBasicMaterial({
    color: 0x7fff00,
    side: THREE.DoubleSide
  });

  const head = new THREE.Mesh(headGeometry, headMaterial);
  head.position.set(0, 1.8, 0.4);
  head.scale.set(1, 0.7, 0.8);
  alien.add(head);

  // Eyes
  const eyeGeometry = new THREE.SphereGeometry(0.25, 8, 8);
  const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

  const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
  leftEye.position.set(-0.3, 2.6, 0.85);
  alien.add(leftEye);

  const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
  rightEye.position.set(0.3, 2.6, 0.85);
  alien.add(rightEye);

  // Body
  const bodyGeometry = new THREE.BufferGeometry();
  const bodyVerts = new Float32Array([
    // bottom rectangle
    -0.6, 0, 0.5,   
     0.6, 0, 0.5,   
     0.6, 0, -0.5,  
    -0.6, 0, -0.5,  
    // top rectangle 
    -0.4, 1.5, 0.4, 
     0.4, 1.5, 0.4, 
     0.4, 1.5, -0.4,
    -0.4, 1.5, -0.4 
  ]);

  const bodyIndices = [
    // bottom
    0,1,2, 0,2,3,
    // top
    4,5,6, 4,6,7,
    // sides
    0,1,5, 0,5,4,
    1,2,6, 1,6,5,
    2,3,7, 2,7,6,
    3,0,4, 3,4,7
  ];

  bodyGeometry.setAttribute("position", new THREE.BufferAttribute(bodyVerts, 3));
  bodyGeometry.setIndex(bodyIndices);
  bodyGeometry.computeVertexNormals();

  const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x1e90ff, side: THREE.DoubleSide });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  alien.add(body);

  alien.scale.set(1, 1, 1);
  alien.position.set(-4, 0, 4);

  return alien;
}