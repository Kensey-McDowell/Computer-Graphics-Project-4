// A.I. Disclaimer: All work for this assignment was completed by myself and entirely without
// the use of artificial intelligence tools such as ChatGPT, MS Copilot, other LLMs, etc.

// John Wesley Thompson

import * as THREE from "three";

const mat_green = new THREE.MeshBasicMaterial({
    color: 0x14452f,
    side: THREE.DoubleSide
});

function createGroundGroup(){
    const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(
            20,                         // width
            20                          // height
        ), mat_green
    );
    ground.position.set(0, 0, 0);
    ground.rotation.x = -Math.PI / 2 // rotates 90 degrees around x axis

    return ground;
}

export default createGroundGroup;