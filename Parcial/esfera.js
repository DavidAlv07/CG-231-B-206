        var WIDTH = window.innerWidth;
        var HEIGHT = window.innerHeight;
        //Escena
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0xFFFFFF);
        
        var size = 150;
        var divisions = 160;
        var axesHelper = new THREE.AxesHelper(1000);
        scene.add(axesHelper);
        
        //GRILLA
        const gridHelper = new THREE.GridHelper(size, divisions);
        scene.add(gridHelper);

       //CAMARA
        var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
        camera.position.z = 4.5;
        camera.position.x = -1.2;
        camera.position.y = 2;

        camera.rotation.set(0, -0.5, 0);


        //renderer
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        
        var controls = new THREE.OrbitControls(camera, renderer.domElement);//ORBITCONTROLS

        var pointColor = "#ccffcc";
        var pointLight = new THREE.PointLight(pointColor);
        pointLight.distance = 600; // distancia de luz
        pointLight.position.set (40, 60, 10); // posición
        pointLight.intensity = 10; // intensidad de la luz
        pointLight.visible = true; // ¿Es visible la luz puntual
        
        //CREACION DE LA ESFERA
        var R=1//radio
        
        var geometry = new THREE. SphereGeometry(R);
        var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        var esfera = new THREE.Mesh(geometry, material);

        //DEFINIR FACOTRES DE ESCALA
        var sx=0.5
        var sy=0.5
        var sz=3

        //escalar
       function escalar(esfera){
        esfera.scale.x=sx
        esfera.scale.y=sy
        esfera.scale.z=sz

        return escalar;
       }

        //definir angulos de Rotacion
         function Rotacion(esfera){
        var Rx=150*Math.PI/180
         var Ry=150*Math.PI/180
         var Rz=150*Math.PI/180

         esfera.rotation.set(Rx,Ry,Rz)
         }
  
         var Tx=1.5;
         var Ty=1.3;
         var Tz=2.2;

         esfera.position.x=Tx;
         esfera.position.y=Ty;
         esfera.position.z=Tz;
    
        scene.add(esfera)
        escalar(esfera)
         Rotacion(esfera)
      function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}


render();