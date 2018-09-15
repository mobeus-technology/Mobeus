<?php
    $user_correo = $_POST["correo"];
    $user_nombre = $_POST["nombre"];
    $user_mensaje = $_POST["coments"];
    $user_subject=$_POST["asunto"];

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= 'From: <no-reply@innotesysd.com>\r\n';

    $user_message = '<h1>' . $user_mensaje . '</h1>';

    mail($user_correo, "¡Gracias por contactarnos!", $user_message, $headers );

    $developer_to = "alexis.fereira@gmail.com";
    $developer_subject = "Mensaje de un usuario de INNOTESYSD.COM";

    $developer_headers = 'MIME-Version: 1.0\r\n';
    $developer_headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $developer_headers .= 'From: <' . $user_correo . '>\r\n';

    $user_message = '

            	<div style="background: white; width: 95%; margin: 50px auto; max-width: 600px; padding: 10px;">
                   <h2 style="margin: 25px 0;">Mensaje enviado desde la web</h2>
                  <p style="color: #999; margin-bottom: 25px;">
                      ' . $user_mensaje . '
                  </p>

                  <small> ' . $user_nombre . ' </small>
                  <small>'. $user_empresa . '</small>
                </div>';

    mail($developer_to, $developer_subject, $user_message, $headers);
?>
