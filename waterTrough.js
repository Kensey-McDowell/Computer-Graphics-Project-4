// A.I. Disclaimer: All work for this assignment was completed by myself and entirely without
// the use of artificial intelligence tools such as ChatGPT, MS Copilot, other LLMs, etc.
// Author: Kensey McDowell

import * as THREE from 'three';

export default function createWaterTrough() {
    const trough = new THREE.Group();
    
    // Materials
    const darkGray = new THREE.MeshStandardMaterial({ color: 0x444444 });
    const waterBlue = new THREE.MeshStandardMaterial({ color: 0x4aa0e0, transparent: true, opacity: 0.8 });

    // Dimensions
    const radius = 1;      
    const length = 6;      
    const wallThickness = 0.1;

    const outerRadius = radius;
    const shellHeight = length; 
    
    // Half-cylinder shell
    const shellGeom = new THREE.CylinderGeometry(
        outerRadius, outerRadius, shellHeight, 
        32, 1, false,
        Math.PI, Math.PI 
    );

    shellGeom.rotateZ(Math.PI / 2); 
    
    const shellMesh = new THREE.Mesh(shellGeom, darkGray);
    shellMesh.position.set(0, wallThickness + outerRadius, 0); 
    trough.add(shellMesh);
    
    const capThickness = wallThickness;
    const innerRadius = outerRadius - wallThickness; 
    
    const Cap = new THREE.CylinderGeometry(
        outerRadius, outerRadius, capThickness, 
        32, 1, false,
        Math.PI, Math.PI 
    );
    
    Cap.rotateZ(Math.PI / 2); 

    const cap1 = new THREE.Mesh(Cap, darkGray);

    cap1.position.set(length / 2, outerRadius + wallThickness, 0); 
    trough.add(cap1);

    const cap2 = new THREE.Mesh(Cap, darkGray);
    
    cap2.position.set(-length / 2, outerRadius + wallThickness, 0); 
    trough.add(cap2);
    
    const waterHeight = wallThickness * 0.5; 
    const innerLength = length - (capThickness * 2); 
    const waterWidth = innerRadius * 2; 
    
    const water = new THREE.BoxGeometry(innerLength, waterHeight, waterWidth);
    const waterMesh = new THREE.Mesh(water, waterBlue);

    const waterFillLevel = 0.95; 
    
    waterMesh.position.set(
        0, 
        wallThickness + (outerRadius * waterFillLevel) - (waterHeight), 
        0
    ); 
    trough.add(waterMesh);
    
    const leg = new THREE.BoxGeometry(0.2, 0.25, 0.2);
    
    const leg1 = new THREE.Mesh(leg, darkGray);
    leg1.position.set(-2.9, 0, 0);
    trough.add(leg1);

    const leg2 = new THREE.Mesh(leg, darkGray);
    leg2.position.set(2.9, 0, 0);
    trough.add(leg2);

    trough.position.set(-6.95, 0.25, 8.8);

    return trough;
}