// A.I. Disclaimer: All work for this assignment was completed by myself and entirely without
// the use of artificial intelligence tools such as ChatGPT, MS Copilot, other LLMs, etc.
// Author: Kensey McDowell

import * as THREE from "three";

export default function createPoopSwirl() {

    const poopswirl = new THREE.Group();

    // Create the Main Swirl Body 
    const points = [];
    const height = 1.8; 
    const segments = 128; 

    const maxRadius = 1.0; 
    const numRidges = 3; 
    const ridgeDepth = 0.1; 

    for (let i = 0; i <= segments; i++) {
        const t = i / segments; 
        
        const startRadius = 0.1; 
        const baseRadius = startRadius + (maxRadius - startRadius) * Math.pow(t, 0.5); 
        
        const ridgeEffect = (1 - Math.cos(t * numRidges * 2 * Math.PI)) * 0.5; 
        let finalRadius = baseRadius - (ridgeEffect * ridgeDepth);
        
        finalRadius = Math.max(0.001, finalRadius); 

        points.push(new THREE.Vector2(finalRadius, t * height));
    }

    // Capture the radius
    const actualSwirlBottomRadius = points[0].x; 

    const swirlGeometry = new THREE.LatheGeometry(points, 64);

    const swirlMaterial = new THREE.MeshStandardMaterial({
        color: 0x7a4a0c,    
        roughness: 0.9,
        metalness: 0.1
    });

    const swirl = new THREE.Mesh(swirlGeometry, swirlMaterial);
    swirl.castShadow = true;
    swirl.receiveShadow = true;
    swirl.rotation.x = Math.PI; 
    poopswirl.add(swirl);

    poopswirl.scale.set(0.3, 0.3, 0.3); 
    poopswirl.position.set(3, 0.5, 0);

    return poopswirl;
}