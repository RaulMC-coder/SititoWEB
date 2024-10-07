if(window.DeviceOrientationEvent){
    window.addEventListener('deviceorientation', function(event){
        let gamma = event.gamma; //Inclinacion del dispositivo en eje Y

        //Mapear gamma de -90 a 90 grados a un rango de 0 a 180 grados
        let steeringAngle = (gamma + 90) * (180/180);
        
        //Aplicar la rotacion al volante 
        this.document.getElementById('volante').style.transform = `rotate(${steeringAngle}deg)`;

    });
} else{
    alert("La API de orientacion del dispositivo no es compatible con este navegador.");
}