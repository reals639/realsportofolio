import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;


const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const frontLight = new THREE.DirectionalLight( 0xffffff, 3 );
frontLight.position.set( 5, 10, 7 );
scene.add( frontLight );

const backLight = new THREE.DirectionalLight( 0xffffff, 2 );
backLight.position.set( -5, -10, -7 );
scene.add( backLight );

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;


const loader = new OBJLoader();

loader.load(
  '/stls/pelton.obj',
  ( object ) => {
    const material = new THREE.MeshStandardMaterial( {
      color: 0xffffff,
      metalness: 0.6,
      roughness: 0.1
    } );

    object.traverse( ( child ) => {
      if ( child.isMesh ) {
        child.material = material;
      }
    } );

    const box = new THREE.Box3().setFromObject( object );
    const center = box.getCenter( new THREE.Vector3() );
    const size = box.getSize( new THREE.Vector3() );
    const maxDim = Math.max( size.x, size.y, size.z );
    const autoScale = 3 / maxDim;

    object.position.sub( center ); 
    object.scale.set( autoScale, autoScale, autoScale );

    const wrapper = new THREE.Group();
    wrapper.add( object );
    object.position.multiplyScalar( autoScale );
    scene.add( wrapper );

    console.log( 'OBJ Model loaded successfully!' );
  },
  undefined,
  ( error ) => {
    console.error( 'Error loading pelton.obj:', error );
  }
);

window.addEventListener( 'resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
} );

function animate() {
  controls.update();
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
