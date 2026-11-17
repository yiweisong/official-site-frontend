import * as THREE from 'three';
import {OrbitControls} from 'three/addons/OrbitControls.js';
let waveMeshArr = [];
const cities = [
    {
        lnglat: [-71.2342, 42.6106],
        text: 'Tewksbury, MA',
    },
    {
        lnglat: [-121.8863, 37.3382],
        text: 'San Jose, California',
    },
    {
        lnglat: [-88.1473, 41.7508],
        text: 'Naperville, Illinois',
    },
    {
        lnglat: [104.195397, 35.86166],
        text: '中国',
    },
];
var clock = new THREE.Clock();
const scene = new THREE.Scene();
scene.background = null;
var canvas = document.querySelector('#earth');

var w = canvas.clientWidth;
const camera = new THREE.OrthographicCamera(-17, 17, 17, -17, 1, 1e3);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, precision: "highp" });
renderer.setSize(w, w);
renderer.shadowMap.enabled = false;
renderer.shadowMap.type = THREE.PCFShadowMap;
canvas.appendChild(renderer.domElement);

const groupDots = new THREE.Group();
const groupLines = new THREE.Group();
const aGroup = new THREE.Group();

// const loader = new THREE.TextureLoader();
// const map_texture = loader.load("static/images/map.jpg");
// map_texture.anisotropy = 8
// const geometry = new THREE.SphereGeometry(15, 400, 400);
// const material = new THREE.MeshBasicMaterial({map: map_texture,transparent:false,depthTest:true});
//
// const earth = new THREE.Mesh(geometry, material);
// scene.add(earth);
const img = new Image();

// 一定要在 src 前设置
img.crossOrigin = "anonymous";

img.src = "static/images/map.jpg";

img.onload = function () {

    const canvas2 = document.createElement("canvas");
    const ctx = canvas2.getContext("2d");

    canvas2.width = img.width;
    canvas2.height = img.height;

    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(
        0,
        0,
        img.width,
        img.height
    ).data;

    createEarthParticles(imageData, img.width, img.height);
};
function createEarthParticles(data,width,height){

    const positions = [];

    for(let y = 0; y < height; y += 2){

        for(let x = 0; x < width; x += 2){

            const i = (y * width + x) * 4

            const r = data[i]
            const g = data[i+1]
            const b = data[i+2]

            const brightness = (r + g + b) / 3

            if(brightness > 60){

                const lng = x / width * 360 - 180
                const lat = 90 - y / height * 180

                const pos = createPosition([lng, lat], 15)

                positions.push(pos.x, pos.y, pos.z)

            }

        }

    }

    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions,3)
    );

    const material = new THREE.PointsMaterial({
        color:0x000000,
        size:0.08,
        transparent:true,
        opacity:0.9
    });

    const earthPoints = new THREE.Points(geometry,material);

    scene.add(earthPoints);
}



// 2
// const map_texture2 = loader.load("");
// const geometry2 = new THREE.SphereGeometry(14.7, 256, 256);
//
// // 用受光材质
// const material2 = new THREE.MeshStandardMaterial({
//     map: map_texture2,
//     roughness: 0.8,
//     metalness: 0.1,
// });

// const earth2 = new THREE.Mesh(geometry2, material2);
// scene.add(earth2);

// const environment = new RoomEnvironment();
// const pmremGenerator = new THREE.PMREMGenerator( renderer );
// const envMap = pmremGenerator.fromScene( environment,0.04 ).texture;
// scene.environment = envMap;


// 灯光组合
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
// scene.add(ambientLight);


const control = new OrbitControls(camera, renderer.domElement);
const group = new THREE.Group();

control.enableZoom = false;
control.enablePan = false;
control.autoRotateSpeed = 1;
control.enableDamping = true;
control.autoRotate = true;
control.addEventListener('start', function () {
    $('.index6 .wrap .content #earth .point').removeClass('hide on2');
});

camera.position.z = 90;
var pointMeshArr = [];

//
function createFlyLine(start, end, color = 0xD71518, heightScale = 0.35) {
    const angle = start.angleTo(end);
    const arcHeight = 15.2 + angle * 15.2 * heightScale;

    const mid = start.clone().add(end).multiplyScalar(0.5);
    mid.normalize().multiplyScalar(arcHeight);

    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);

    const tubularSegments = 300;
    const radius = 0.05;
    const radialSegments = 8;

    const geometry = new THREE.TubeGeometry(
        curve,
        tubularSegments,
        radius,
        radialSegments,
        false
    );
    // 给 TubeGeometry 造 distance
    const pos = geometry.getAttribute('position');
    const count = pos.count;

    let totalDist = 0;
    const lineDistances = new Float32Array(count);

    const tempA = new THREE.Vector3();
    const tempB = new THREE.Vector3();

    for (let i = 0; i < count; i++) {
        tempA.fromBufferAttribute(pos, i);
        if (i > 0) {
            tempB.fromBufferAttribute(pos, i - 1);
            totalDist += tempA.distanceTo(tempB);
        }
        lineDistances[i] = totalDist;
    }

    geometry.setAttribute(
        'lineDistance',
        new THREE.BufferAttribute(lineDistances, 1)
    );


    const material = new THREE.ShaderMaterial({
        transparent: true,
        depthTest: true,
        depthWrite: false,
        uniforms: {
            uTime: { value: Math.random() * totalDist },
            uTotal: { value: totalDist },
            uLength: { value: totalDist * 0.54 },
            color: { value: new THREE.Color(color) }
        },
        vertexShader: `
            attribute float lineDistance;
            varying float vLineDistance;
            void main() {
                vLineDistance = lineDistance;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float uTime;
            uniform float uTotal;
            uniform float uLength;
            uniform vec3 color;
            varying float vLineDistance;

            void main() {
                float head = mod(uTime, uTotal);
                float tail = head - uLength;

                if (vLineDistance < tail || vLineDistance > head) discard;

                float alpha = (vLineDistance - tail) / uLength;
                alpha = pow(alpha, 1.6);

                gl_FragColor = vec4(color, alpha);
            }
        `
    });

    const mesh = new THREE.Mesh(geometry, material);

    return {
        line: mesh,
        speed: totalDist * 0.008
    };
}




let flyLines = [];

const chinaIndex = cities.findIndex(c => c.text === '中国');
const chinaPos = createPosition(cities[chinaIndex].lnglat, 15);

cities.forEach(city => {
    if (city.text === '中国') return;

    const start = chinaPos.clone();
    const end = createPosition(city.lnglat, 15);

    const fly = createFlyLine(start, end, city.color || 0xD71518, 0.35);
    // scene.add(fly.line);

    // 小球
    const ballGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const ballMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const ball = new THREE.Mesh(ballGeometry, ballMaterial);
    ball.position.copy(start); // 小球从中国出发
    // scene.add(ball);

    fly.ball = ball;
    fly.progress = 0; // 小球进度
    flyLines.push(fly);
});


// 创建点位 Mesh
for (var i = 0; i < cities.length; i++) {
    let position = createPosition(cities[i].lnglat, 15);
    var cityPointMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(cities[i].color),
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        depthTest: true,
    });
    var cityGeometry = new THREE.PlaneGeometry(1, 0.5);
    cityGeometry.translate(0, 0.5, 0);
    var cityMesh = new THREE.Mesh(cityGeometry, cityPointMaterial);
    cityMesh.scale.set(1, 2, 1);
    cityMesh.position.copy(position);
    scene.add(cityMesh);
    pointMeshArr.push(cityMesh);
}

function createPosition(lnglat, radius) {
    let spherical = new THREE.Spherical();
    spherical.radius = radius;
    const lng = lnglat[0];
    const lat = lnglat[1];
    spherical.phi = (90 - lat) * (Math.PI / 180);
    spherical.theta = (lng + 90) * (Math.PI / 180);
    let position = new THREE.Vector3();
    position.setFromSpherical(spherical);
    return position;
}

function onresize() {
    let w = canvas.clientWidth;
    let h = canvas.clientHeight;
    camera.aspect = w / h;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
}

window.addEventListener('resize',onresize)

function rotateToPoint(lnglat,index) {
    const spherical = new THREE.Spherical();
    spherical.radius = camera.position.distanceTo(scene.position);
    spherical.phi = (90 - lnglat[1]) * (Math.PI / 180);
    spherical.theta = (lnglat[0] + 90) * (Math.PI / 180);

    const targetPosition = new THREE.Vector3();
    targetPosition.setFromSpherical(spherical);

    const currentPos = new THREE.Vector3().copy(camera.position);
    const tween = new TWEEN.Tween(currentPos)
        .to(targetPosition, 1000)
        .easing(TWEEN.Easing.Quartic.InOut)
        .onUpdate(() => {
            camera.position.copy(currentPos);
            camera.lookAt(scene.position);
        })
        .start();
}


function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
    control.update();

    flyLines.forEach((fly, i) => {
        if (fly.line.material && fly.line.material.uniforms) {
            fly.line.material.uniforms.uTime.value += fly.speed;
        }

        // fly.progress += 0.01;
        // if (fly.progress > 1) fly.progress = 0;
        // const pointIndex = Math.floor(fly.progress * (fly.points.length - 1));
        // fly.ball.position.copy(fly.points[pointIndex]);
    });


    renderer.render(scene, camera);



    for (let i in pointMeshArr) {
        const meshPosition = pointMeshArr[i].position.clone().project(camera);
        const x = (meshPosition.x * 0.5 + 0.5) * canvas.clientWidth;
        const y = (-meshPosition.y * 0.5 + 0.5) * canvas.clientHeight;
        $('.point').eq(i)[0].style.transform = `translate(${x}px, ${y}px)`;

        const worldPosition = pointMeshArr[i].getWorldPosition(new THREE.Vector3());
        const s = worldPosition.dot(camera.getWorldDirection(new THREE.Vector3()));
        if (s >= -1) {
            gsap.to($('.point').eq(i), { opacity: 0, duration: 0.1 });
            $('.point').eq(i).removeClass('point_on')
        } else {
            gsap.to($('.point').eq(i), { opacity: s > -.1 && s <= 0 ? -10 * s : 1, duration: 0.5 });
            $('.point').eq(i).addClass('point_on')
        }
    }
}

animate();

$('#earth').hover(function () {
    control.autoRotate = false;
}, function () {
    control.autoRotate = true;
});

var menu_isCooldown2 = false;
$('#earth .point:not(.ban)').each(function (i,e) {
    $(e).click(function () {
        if (!menu_isCooldown2) {
            // if(clientWidth>1/**/024){
            //     lenis.stop()
            // }
            var index = $(this).index();
            on(this)
            $(this).addClass('on2').siblings().removeClass('on2')
            $(this).removeClass('hide').siblings().addClass('hide')

            $('.contact2 .wrap .content .cut .list').removeClass('on').eq(index).addClass('on')
            $('.contact2 .wrap .content .message .item').removeClass('on').eq(index).addClass('on')
            if ($(this).is('.opacity')) {
                $('.point.china').addClass('on')
            }
            control.autoRotate = false;
            rotateToPoint(cities[index].lnglat, index);
            menu_isCooldown2 = true;
            setTimeout(() => {
                menu_isCooldown2 = false;
            }, 1000);
        }
    })
})

$('.contact2 .wrap .content .cut .list').click(function () {
    var index = $(this).index()
    $('.contact2 .wrap .content #earth .point').eq(index).click()
})