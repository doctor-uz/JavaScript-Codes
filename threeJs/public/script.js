//this is where ALL of our 3js code goes!

//========== this is 1. SECENE ===================================
var scene = new THREE.Scene(); //create SCENE

//=========== CAMERA =========================================
var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1, //oldingi qator
    500 //orqa qator
);
camera.position.z = 30; //z kordinata uqi
// camera.position.set(12, 10, 100);
//===========end CAMERA ========================================

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); //kenglik va balandlik
document.body.appendChild(renderer.domElement); //butun web sahifasida
//========enddddd SCENE ==========================================

//==========let there be LIGHT =====================================
var light = new THREE.AmbientLight(0xffffff);
scene.add(light);
//=========end LIGHT ===============================================

//==========the MESH (ie 3 objects)=====================================

var geometry = new THREE.SphereGeometry(8, 32, 32); //10 radius, 32 lar kenglik va balandlik segmentlar
var material = new THREE.MeshPhongMaterial(); //usti silliq va yaltiroq material
material.map = new THREE.TextureLoader().load("/assets/earthmap4k.jpg");
var earthMesh = new THREE.Mesh(geometry, material);

earthMesh.position.set(0, 1, 0);
scene.add(earthMesh);
var pivot = new THREE.Object3D();
earthMesh.add(pivot);

var geometry1 = new THREE.SphereGeometry(5, 32, 32);
var material1 = new THREE.MeshPhongMaterial();
material1.map = new THREE.TextureLoader().load("/assets/moonmap4k.jpg");
var moonMesh = new THREE.Mesh(geometry1, material1);

moonMesh.position.set(15, 0, 0);
pivot.add(moonMesh);

var geometry2 = new THREE.SphereGeometry(3, 32, 32);
var material2 = new THREE.MeshPhongMaterial();
material2.map = new THREE.TextureLoader().load("/assets/marsmap1k.jpg");
var marsMesh = new THREE.Mesh(geometry2, material2);

marsMesh.position.set(30, 0, 0);
pivot.add(marsMesh);

//=========end MESH ====================================================

var loader = new THREE.FontLoader();

loader.load("assets/fonts/helvetiker_regular.typeface.json", function(font) {
    var fontgeometry = new THREE.TextGeometry("test", {
        font: font,
        size: 5,
        height: 1,
        curveSegments: 2,
        bevelEnabled: false,
        bevelThickness: 1,
        bevelSize: 2,
        bevelSegments: 2
    });
    var fontmaterial = new THREE.MeshPhongMaterial();
    var fontMesh = new THREE.Mesh(fontgeometry, fontmaterial);
    fontMesh.position.set(-30, 15, 1);
    fontMesh.rotation.x += 0.005;
    scene.add(fontMesh);
});

//=======ORBIT controls =================================================
var orbit = new THREE.OrbitControls(camera, renderer.domElement); // sichqoncha bn boshqarish uchun
orbit.enableZoom = false;
//=======end ORBIT  controls ============================================

//============SKYBOX ====================
var imagePrefix = "/assets/";
var urls = [
    "space.jpg",
    "space.jpg",
    "space.jpg",
    "space.jpg",
    "space.jpg",
    "space.jpg"
];
var skyBox = new THREE.CubeTextureLoader().setPath(imagePrefix).load(urls);
scene.background = skyBox;
//===========end SKYBOX ========================

//===========dat.GUI ============================
//user interacting
var controls = new function() {
    this.guiRotationX = 0.005;
    this.guiRotationY = 0.005;
}();

var gui = new dat.GUI();
gui.add(controls, "guiRotationX", 0, 0.2);
gui.add(controls, "guiRotationY", 0, 0.2);
// gui.add(controls, "color");

var Configuracion = function() {
    this.color = "#ffae23";
};
var conf = new Configuracion();

gui.addColor(conf, "color").onChange(function(newcolor) {
    //the return value by the chooser is like as: #ffff so
    //remove the # and replace by 0x
    // colorValue = colorValue.replace("#", "0x");
    //create a Color
    var colorObject = new THREE.Color(newcolor);
    //set the color in the object
    // console.log("Color: ", conf);
    console.log("real color is: ", conf.color);
    newcolor = conf.color.replace("#", "0x");
    console.log("New color", newcolor);
    // console.log("This is configuracion: ", conf);
    // this.fontMesh.material.color = new THREE.Color(this.newcolor);
});

//==========end dat.GUI ===========================

//=============== RENDER all the lovly code we have written============

var render = function() {
    requestAnimationFrame(render);
    // moonMesh.rotation.y += 0.1;
    //pivot bulgani uchun faqat EarthMeshga controlni berishimiz mumkin
    earthMesh.rotation.x += controls.guiRotationX;
    earthMesh.rotation.y += controls.guiRotationY;
    this.newcolor += controls.newcolor;
    renderer.render(scene, camera);
};
render();

//=============end RENDER =============================================

//
