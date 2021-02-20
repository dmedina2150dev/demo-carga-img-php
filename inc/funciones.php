<?php
    $archivo = $_FILES['archivo'];
    $ext = $_POST['ext'];

    if ($archivo["type"] == 'image/png' || $archivo["type"] == 'image/jpg' || $archivo["type"] == 'image/jpeg') {
        
       
        
        $nombre_encriptado = md5_file($archivo["tmp_name"]).'.'.$ext;
        $rutaGuardar = '../archivo/'.$nombre_encriptado; 
        
        
        move_uploaded_file($archivo['tmp_name'], $rutaGuardar);
        
        $correcto = "Proceso Completo";
        
        echo $correcto;

    }

    

?>