// A.I. Disclaimer: All work for this assignment was completed by myself and entirely without
// the use of artificial intelligence tools such as ChatGPT, MS Copilot, other LLMs, etc.

// John Wesley Thompson

import * as THREE from "three";

const mat_cream = new THREE.MeshBasicMaterial({color: 0xfffdd0})

const mat_brown = new THREE.MeshBasicMaterial({
  color: 0x4c3228,
  side: THREE.DoubleSide
});

const mat_white = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide
});

const mat_very_dark_grey = new THREE.MeshBasicMaterial({
  color: 0x010101,
  side: THREE.DoubleSide
});

function createCowGroup(){

  // cow head --------------------
  const cow_head = new THREE.Group();

  // head
  const head_vertices = new Float32Array([
    
    // right side ----------

    // forehead
    1.0, 1.8, 0.0,
    0.0, 2.0, 0.2,
    0.0, 0.0, 0.2,

    // cheekbone
    1.2, 0.5, 0.0,
    1.0, 1.8, 0.0,
    0.0, 0.0, 0.2,

    // snout
    0.0, 2.0, 0.2,
    0.0, -2.0, 0.2,
    0.5, -2.0, 0.0,

    // top head
    1.0, 1.8, 0.0,
    0.0, 2.0, -1.0,
    0.0, 2.0, 0.2,

    1.0, 1.8, 0.0,
    1.0, 1.8, -1.0,
    0.0, 2.0, -1.0,

    // side head
    1.2, 0.5, 0.0,
    1.2, 0.5, -1.0,
    1.0, 1.8, 0.0,

    1.2, 0.5, -1.0,
    1.0, 1.8, -1.0,
    1.0, 1.8, 0.0,

    // below snout
    0.5, -2.0, 0.0,
    0.0, -2.0, 0.2,
    0.0, -2.0, -1.0,

    0.0, -2.0, -1.0,
    0.5, -2.0, -1.0,
    0.5, -2.0, 0.0,

    // forehead back
    1.0, 1.8, -1.0,
    0.0, 2.0, -1.0,
    0.0, 0.0, -1.0,

    // cheekbone back
    1.2, 0.5, -1.0,
    1.0, 1.8, -1.0,
    0.0, 0.0, -1.0,

    // snout back
    0.0, 2.0, -1.0,
    0.0, -2.0, -1.0,
    0.5, -2.0, -1.0,

    // cheek cheek
    0.5, -2.0, -1.0,
    0.5, -0.2, -0.5,
    0.5, -2.0, 0.0,

    1.2, 0.5, 0.0,
    1.2, 0.5, -1.0,
    0.5, -0.2, -0.5,

    0.5, -2.0, -1.0,
    0.5, -0.2, -0.5,
    0.2, 0.15, -1.0,

    0.5, -2.0, 0.0,
    0.5, -0.2, -0.5,
    0.2, 0.15, 0.17,

    0.2, 0.15, 0.17,
    0.5, -0.2, -0.5,
    1.2, 0.5, 0.0,

    0.2, 0.15, -1.0,
    0.5, -0.2, -0.5,
    1.2, 0.5, -1.0,

    // left side ----------

    // forehead
    -1.0, 1.8, 0.0,
    0.0, 2.0, 0.2,
    0.0, 0.0, 0.2,

    // cheekbone
    -1.2, 0.5, 0.0,
    -1.0, 1.8, 0.0,
    0.0, 0.0, 0.2,

    // snout
    0.0, 2.0, 0.2,
    0.0, -2.0, 0.2,
    -0.5, -2.0, 0.0,

    // top head
    -1.0, 1.8, 0.0,
    0.0, 2.0, -1.0,
    0.0, 2.0, 0.2,

    -1.0, 1.8, 0.0,
    -1.0, 1.8, -1.0,
    0.0, 2.0, -1.0,

    // side head
    -1.2, 0.5, 0.0,
    -1.2, 0.5, -1.0,
    -1.0, 1.8, 0.0,

    -1.2, 0.5, -1.0,
    -1.0, 1.8, -1.0,
    -1.0, 1.8, 0.0,

    // below snout
    -0.5, -2.0, 0.0,
    0.0, -2.0, 0.2,
    0.0, -2.0, -1.0,

    0.0, -2.0, -1.0,
    -0.5, -2.0, -1.0,
    -0.5, -2.0, 0.0,

    // forehead back
    -1.0, 1.8, -1.0,
    0.0, 2.0, -1.0,
    0.0, 0.0, -1.0,

    // cheekbone back
    -1.2, 0.5, -1.0,
    -1.0, 1.8, -1.0,
    0.0, 0.0, -1.0,

    // snout back
    0.0, 2.0, -1.0,
    0.0, -2.0, -1.0,
    -0.5, -2.0, -1.0,

    // cheek cheek
    -0.5, -2.0, -1.0,
    -0.5, -0.2, -0.5,
    -0.5, -2.0, 0.0,

    -1.2, 0.5, 0.0,
    -1.2, 0.5, -1.0,
    -0.5, -0.2, -0.5,

    -0.5, -2.0, -1.0,
    -0.5, -0.2, -0.5,
    -0.2, 0.15, -1.0,

    -0.5, -2.0, 0.0,
    -0.5, -0.2, -0.5,
    -0.2, 0.15, 0.17,

    -0.2, 0.15, 0.17,
    -0.5, -0.2, -0.5,
    -1.2, 0.5, 0.0,

    -0.2, 0.15, -1.0,
    -0.5, -0.2, -0.5,
    -1.2, 0.5, -1.0,
    
  ]);

  const head_geometry = new THREE.BufferGeometry();
  head_geometry.setAttribute("position", new THREE.BufferAttribute(head_vertices, 3));

  const head_mesh = new THREE.Mesh(head_geometry, mat_white);

  cow_head.add(head_mesh);

  // head features ----------

  // left eye
  const left_eye = new THREE.Mesh(
    new THREE.SphereGeometry(
      0.5,
      10,
      10,
    ), mat_cream
  );
  left_eye.position.set(-0.8, 0.5, -0.1);
  cow_head.add(left_eye);

  const left_pupil = new THREE.Mesh(
    new THREE.SphereGeometry(
      0.25,
      8,
      8,
    ), mat_very_dark_grey
  );
  left_pupil.position.set(-1.0, 0.5, 0.3);
  cow_head.add(left_pupil);

  // right eye
  const right_eye = new THREE.Mesh(
    new THREE.SphereGeometry(
      0.5,
      10,
      10,
    ), mat_cream
  );
  right_eye.position.set(0.8, 0.5, -0.1);
  cow_head.add(right_eye);

  const right_pupil = new THREE.Mesh(
    new THREE.SphereGeometry(
      0.25,
      8,
      8,
    ), mat_very_dark_grey
  );
  right_pupil.position.set(1.0, 0.5, 0.3);
  cow_head.add(right_pupil);

  // nose
  const nose = new THREE.Mesh(
    new THREE.CircleGeometry(
      0.5,          // radius
      16            // segments
    ), mat_brown
  );
  nose.position.set(0, -2, 0.2);
  nose.rotateX(Math.PI / 4)
  cow_head.add(nose);

  // left ear
  const left_ear = new THREE.Mesh(
    new THREE.BoxGeometry(
      0.5,
      1.0,
      0.25
    ), mat_white
  );
  left_ear.position.set(-1.5, 1.5, -0.5);
  left_ear.rotateZ(Math.PI / 2.5)
  cow_head.add(left_ear);

  // right ear
  const right_ear = new THREE.Mesh(
    new THREE.BoxGeometry(
      0.5,
      1.0,
      0.25
    ), mat_white
  );
  right_ear.position.set(1.5, 1.5, -0.5);
  right_ear.rotateZ(Math.PI / -2.5)
  cow_head.add(right_ear);


  // cow body --------------------

  const cow_body = new THREE.Group();

  // center body
  const center_body = new THREE.Mesh(
    new THREE.CylinderGeometry(
        2,
        2,
        3,
        32,
        1,
        true
    ), mat_white
  );
  center_body.position.set(0, 0, 0);
  center_body.rotateX(Math.PI / 2);
  cow_body.add(center_body);

  // front body
  const front_body = new THREE.Mesh(
    new THREE.SphereGeometry(
        2,
        32,
        32
    ), mat_very_dark_grey
  );
  front_body.position.set(0, 0, 1.5);
  cow_body.add(front_body);

  // back body
  const back_body = new THREE.Mesh(
    new THREE.SphereGeometry(
        2,
        32,
        32
    ), mat_very_dark_grey
  );
  back_body.position.set(0, 0, -1.5);
  cow_body.add(back_body);

  // tail
  const tail = new THREE.Mesh(
    new THREE.BoxGeometry(
      0.5,
      3.0,
      0.5
    ), mat_white
  );
  tail.position.set(0, 1.0, -3.75);
  tail.rotateX(Math.PI / 2)
  cow_body.add(tail);

  // left front leg
  const lf_leg = new THREE.Mesh(
    new THREE.BoxGeometry(
      1.0,
      4.0,
      1.0
    ), mat_white
  );
  lf_leg.position.set(-1.0, -1.0, 2.0);
  cow_body.add(lf_leg);

  // right front leg
  const rf_leg = new THREE.Mesh(
    new THREE.BoxGeometry(
      1.0,
      4.0,
      1.0
    ), mat_white
  );
  rf_leg.position.set(1.0, -1.0, 2.0);
  cow_body.add(rf_leg);

  // left back leg
  const lb_leg = new THREE.Mesh(
    new THREE.BoxGeometry(
      1.0,
      4.0,
      1.0
    ), mat_white
  );
  lb_leg.position.set(-1.0, -1.0, -2.0);
  cow_body.add(lb_leg);

  // right back leg
  const rb_leg = new THREE.Mesh(
    new THREE.BoxGeometry(
      1.0,
      4.0,
      1.0
    ), mat_white
  );
  rb_leg.position.set(1.0, -1.0, -2.0);
  cow_body.add(rb_leg);

  // put head on cow
  cow_head.position.set(0, 2.0, 3.75);
  cow_head.rotateX(Math.PI / -4.5);
  cow_body.add(cow_head);

  // scale cow
  cow_body.scale.set(0.5, 0.5, 0.5);
  cow_body.position.set(0, 1.5, 0)
  return cow_body;
}

export default createCowGroup;
