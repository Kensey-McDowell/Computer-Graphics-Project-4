// A.I. Disclaimer: All work for this assignment was completed by myself and entirely without
// the use of artificial intelligence tools such as ChatGPT, MS Copilot, other LLMs, etc.
// Author: Kensey McDowell

import * as THREE from 'three';

export default function createUFOSign() {

    const warningsign = new THREE.Group();

    // Sign shape 
    const shape = new THREE.Shape();
    shape.moveTo(0, 1);
    shape.lineTo(1, 0);
    shape.lineTo(0, -1);
    shape.lineTo(-1, 0);
    shape.lineTo(0, 1);

    // Extrude into a 3D sign 
    const extrudeSettings = {
        depth: 0.3,
        bevelEnabled: false,
    };

    const signGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const signMaterial = new THREE.MeshStandardMaterial({
        color: 0xF6FF00,
        metalness: 0.2,
        roughness: 0.6
    });

    const sign = new THREE.Mesh(signGeometry, signMaterial);
    sign.position.y = 2;

    // UFO icon 
    const iconGroup = new THREE.Group();

    const ufoBody = new THREE.Mesh(
        new THREE.CircleGeometry(0.4, 32),
        new THREE.MeshStandardMaterial({ color: 0x000000 })
    );
    ufoBody.position.z = 0.16;
    ufoBody.scale.set(1,0.5,1.5);

    const ufoDome = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 8),
        new THREE.MeshStandardMaterial({ color: 0x000000 })
    );

    iconGroup.add(ufoBody, ufoDome);
    warningsign.add(sign, iconGroup);

    // Add pole 
    const pole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 2.75),
        new THREE.MeshStandardMaterial({ color: 0x888888 })
    );

    warningsign.add(pole);
    sign.position.set(-2.5, 3, 10);
    pole.position.set(-2.5, 1.4, 10);
    ufoBody.position.set(-2.5, 3, 10.5);
    ufoDome.position.set(-2.5, 3.25, 10.5);

    return warningsign;
}