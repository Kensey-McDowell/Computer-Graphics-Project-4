// A.I. Disclaimer: All work for this assignment was completed by myself and entirely without
// the use of artificial intelligence tools such as ChatGPT, MS Copilot, other LLMs, etc.

// John Wesley Thompson

import * as THREE from "three";

const mat_light_grey = new THREE.MeshBasicMaterial({ color: 0xa0a8b0 });
const mat_dark_grey = new THREE.MeshBasicMaterial({ color: 0x636363 });
const translucent_light_blue = new THREE.MeshBasicMaterial({
    color: 0x89cff0,
    transparent: true,
    opacity: 0.5
});
const translucent_yellow = new THREE.MeshBasicMaterial({
    color: 0xffed29,
    transparent: true,
    opacity: 0.5
});


function createUFOGroup(){
    const ufo = new THREE.Group();
    
    const ufo_radius = 5;
    const ufo_height = 10;
    
    ufo.position.set(0, ufo_height, 0);
    
    // body middle ----------
    const body_middle_height = 1;
    const body_middle = new THREE.Mesh(
        new THREE.CylinderGeometry(
            ufo_radius,         // radius top
            ufo_radius,         // radius bottom
            body_middle_height, // height
            32,                 // radial segments
            1,                  // height segments
            true                // openended
        ), mat_dark_grey     // mesh material
    );
    body_middle.position.set(0, 0, 0);
    ufo.add(body_middle);

    // body top ----------
    const body_top_top_radius = 2.5;
    const body_top = new THREE.Mesh(
        new THREE.CylinderGeometry(
            body_top_top_radius,
            ufo_radius,
            1,
            32,
            1,
            true
        ), mat_light_grey
    );
    body_top.position.set(0, body_middle_height, 0);
    ufo.add(body_top);

    // body bottom ----------
    const body_bottom = new THREE.Mesh(
        new THREE.CylinderGeometry(
            ufo_radius,
            0.01,                  // 0 to make a cone shape
            1,
            32,
            1,
            false
        ), mat_light_grey
    );
    body_bottom.position.set(0, -body_middle_height, 0);
    ufo.add(body_bottom);

    // alien window ----------
    const alien_window = new THREE.Mesh(
        new THREE.SphereGeometry(
            body_top_top_radius,        // radius
            16,                         // width segments
            16                          // height segments
        ), translucent_light_blue
    );
    alien_window.position.set(0, body_middle_height * 2 - 0.5, 0);
    ufo.add(alien_window);

    // tractor beam ----------
    const tractor_beam_y_pos = ufo_height
    const tractor_beam = new THREE.Mesh(
        new THREE.BoxGeometry(
            2,                          // width
            ufo_height,                 // height
            2                           // depth
        ), translucent_yellow
    );
    tractor_beam.position.set(0, -ufo_height / 2, 0);
    ufo.add(tractor_beam);

    return ufo;
}

export default createUFOGroup;
