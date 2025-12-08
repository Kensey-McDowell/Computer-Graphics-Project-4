// A.I. Disclaimer: All work for this assignment was completed by myself and entirely without
// the use of artificial intelligence tools such as ChatGPT, MS Copilot, other LLMs, etc.
// Author: Kensey McDowell

import * as THREE from 'three';

export default function createHayBale() {
    const haybale = new THREE.Group();
    const textloader = new THREE.TextureLoader();

    const bale = new THREE.Mesh(
        new THREE.CylinderGeometry(1.5, 1.5, 3),
        new THREE.MeshStandardMaterial({ roughness: 0.4, metalness: 0.0 })
    );

    bale.rotation.z = Math.PI/2;

    haybale.add(bale);

    return haybale;
}