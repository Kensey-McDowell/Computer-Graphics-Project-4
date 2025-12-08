// A.I. Disclaimer: All work for this assignment was completed by myself and entirely without
// the use of artificial intelligence tools such as ChatGPT, MS Copilot, other LLMs, etc.
// Author: Kensey McDowell

import * as THREE from 'three';

export default function createPitchfork() {
    const fork = new THREE.Group();
    
    // Materials
    const woodBrown = new THREE.MeshStandardMaterial({ color: 0x8B4513 }); // Handle
    const steelGray = new THREE.MeshStandardMaterial({ color: 0xAAAAAA }); // Metal parts

    // Handle dimensions
    const handleLength = 4;
    const handleRadius = 0.05;

    // Prong dimensions
    const prongLength = 0.8;
    const prongRadius = 0.05; 
    const prongSpacing = 0.23;
    const numProngs = 4;

    // Bar dimensions
    const barHeight = 0.05;
    const barWidth = (numProngs - 1) * prongSpacing + prongRadius * 3; // Width covers all prongs
    const barDepth = 0.05;
    
    // Handle
    const handleGeom = new THREE.CylinderGeometry(handleRadius, handleRadius, handleLength, 8);
    const handleMesh = new THREE.Mesh(handleGeom, woodBrown);
    
    handleMesh.position.y = handleLength / 2;
    fork.add(handleMesh);

    const barGeom = new THREE.BoxGeometry(barWidth, barHeight, barDepth);
    const barMesh = new THREE.Mesh(barGeom, steelGray);
    
    barMesh.position.y = 0; // Set at base of handle
    
    fork.add(barMesh);

    const prongGeom = new THREE.ConeGeometry(prongRadius, prongLength, 8);
    
    prongGeom.rotateX(Math.PI); 

    for (let i = 0; i < numProngs; i++) {
        const prongMesh = new THREE.Mesh(prongGeom, steelGray);
        
        const startX = -((numProngs - 1) * prongSpacing) / 2;
        const xPos = startX + (i * prongSpacing);
        
        const yPos = prongLength / 2;
        
        prongMesh.position.set(xPos, -yPos, 0); 
        
        fork.add(prongMesh);
    }
    
    fork.rotation.x = Math.PI / 5; 
    
    fork.position.set(8, 0.6, 2.5); 

    return fork;
}