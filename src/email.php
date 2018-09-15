<?php


require("class.phpmailer.php");
require("class.smtp.php");



$nombre = $_POST["nombre"];

$email = $_POST["correo"];

$asunto = $_POST["asunto"];

$mensaje = $_POST["comentarios"];


$destinatario = "alexis.fereira@gmail.com";


// Datos de la cuenta de correo utilizada para enviar vía SMTP
$smtpHost = "mail.gmail.com";  // Dominio alternativo brindado en el email de alta 
$smtpUsuario = "";  // Mi cuenta de correo
$smtpClave = "";  // Mi contraseña




$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 587; 
$mail->IsHTML(true); 
$mail->CharSet = "utf-8";

$mailAdmin = new PHPMailer();
$mailAdmin->IsSMTP();
$mailAdmin->SMTPAuth = true;
$mailAdmin->Port = 587; 
$mailAdmin->IsHTML(true); 
$mailAdmin->CharSet = "utf-8";

// VALORES A MODIFICAR //
$mail->Host = $smtpHost; 
$mail->Username = $smtpUsuario; 
$mail->Password = $smtpClave;

$mailAdmin->Host = $smtpHost; 
$mailAdmin->Username = $smtpUsuario; 
$mailAdmin->Password = $smtpClave;


$mail->From = $email; // Email desde donde envío el correo.
$mail->FromName = $nombre;
$mail->AddAddress($email); // Esta es la dirección a donde enviamos los datos del formulario

$mailAdmin->From = $email; // Email desde donde envío el correo.
$mailAdmin->FromName = $nombre;
$mailAdmin->AddAddress($destinatario);

$mail->Subject = "MOBEUS | ¡Gracias por escribirnos! "; // Este es el titulo del email.
$mensajeHtml = nl2br($mensaje);
$mail->Body = "
<!DOCTYPE html>
<html lang=\"en\" style=\"margin: 0;padding: 0;border: 0;\">
<head style=\"margin: 0;padding: 0;border: 0;\">
    <meta charset=\"UTF-8\" style=\"margin: 0;padding: 0;border: 0;\">
    <title style=\"margin: 0;padding: 0;border: 0;\">Document</title>
</head>

<body style=\"margin: 0;padding: 0;border: 0;\">
    <div class=\"container\" style=\"margin: 0;padding: 1em .5em 2em;border: 0;background-color: #1973B5;width: 100%;font-family: sans-serif;color: #44444;\">
        <div class=\"content\" style=\"margin: 0 auto;padding: 1em;border: 0;background-color: white;background-image: url(img/fondo-email.png);position: top;background-size: 100% auto;background-repeat: no-repeat;max-width: 650px;\">
            <table style=\"margin: 0;padding: 0;border: 0;border-collapse: collapse;width: 100%;\">
                <tr style=\"margin: 0;padding: 0;border: 0;\"><td class=\"logo\" style=\"margin: 0;padding: 0 0 2em 0;border: 0;\"><img src=\"https://mobeus.com.ar/public/c29e413325d212b34b08fd67561ac336.png\" alt=\"\" style=\"margin: auto;padding: 0;border: 0;width: 100%;display: block;max-width: 250px;\"></td></tr>
                <tr class=\"tr\" style=\"margin: 0;padding: 0;border: 0;\"><td class=\"titulo\" style=\"margin: 0;padding: 0;border: 0;text-align: center;padding-bottom: 2em;\"><h2 style=\"margin: 0;padding: 0;border: 0;\">¡Gracias por escribirnos!</h2></td></tr>
                <tr class=\"tr\" style=\"margin: 0;padding: 0;border: 0;\"><td class=\"texto\" style=\"margin: 0;padding: 0;border: 0;padding-bottom: 2em;\">
                    <p style=\"margin: auto;padding: 0;border: 0;max-width: 600px;display: block;\">Estimado {$nombre}: <br style=\"margin: 0;padding: 0;border: 0;\"><br style=\"margin: 0;padding: 0;border: 0;\">
                        Gracias por enviarnos tus comentarios, los revisaremos y nos pondremos en contacto contigoen la brevedad.
                        <br style=\"margin: 0;padding: 0;border: 0;\"><br style=\"margin: 0;padding: 0;border: 0;\">
                        Cordialmente, <br style=\"margin: 0;padding: 0;border: 0;\"> el esquipo de Mobeus.
                    </p>
                    <a href=\"https://mobeus.com.ar/\">mobeus.com.ar</a>
                </td></tr>
            </table>
        </div>
    </div>
</body>
</html> "; // Texto del email en formato HTML
$mail->AltBody = "{$mensaje} \n\n "; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

$mailAdmin->Subject = "Formulario desde el Sitio Web"; // Este es el titulo del email.
$mensajeHtml = nl2br($mensaje);
$mailAdmin->Body = "
<!DOCTYPE html>
<html lang=\"en\" style=\"margin: 0;padding: 0;border: 0;\">
<head style=\"margin: 0;padding: 0;border: 0;\">
    <meta charset=\"UTF-8\" style=\"margin: 0;padding: 0;border: 0;\">
    <title style=\"margin: 0;padding: 0;border: 0;\">Document</title>
</head>

<body style=\"margin: 0;padding: 0;border: 0;\">
    <div class=\"container\" style=\"margin: 0;padding: 1em .5em 2em;border: 0;background-color: #1973B5;width: 100%;font-family: sans-serif;color: #44444;\">
        <div class=\"content\" style=\"margin: 0 auto;padding: 1em;border: 0;background-color: white;background-image: url(img/fondo-email.png);position: top;background-size: 100% auto;background-repeat: no-repeat;max-width: 650px;\">
            <table style=\"margin: 0;padding: 0;border: 0;border-collapse: collapse;width: 100%;\">
                <tr style=\"margin: 0;padding: 0;border: 0;\"><td class=\"logo\" style=\"margin: 0;padding: 0 0 2em 0;border: 0;\"><img src=\"https://mobeus.com.ar/public/c29e413325d212b34b08fd67561ac336.png\" alt=\"\" style=\"margin: auto;padding: 0;border: 0;width: 100%;display: block;max-width: 250px;\"></td></tr>
                <tr class=\"tr\" style=\"margin: 0;padding: 0;border: 0;\"><td class=\"titulo\" style=\"margin: 0;padding: 0;border: 0;text-align: center;padding-bottom: 2em;\"><h2 style=\"margin: 0;padding: 0;border: 0;\">¡Mensaje desde la web!</h2></td></tr>
                <tr class=\"tr\" style=\"margin: 0;padding: 0;border: 0;\"><td class=\"texto\" style=\"margin: 0;padding: 0;border: 0;padding-bottom: 2em;\">
                    <p style=\"margin: auto;padding: 0;border: 0;max-width: 600px;display: block;\">
                    Mensaje de: ${nombre} <br> Correo: ${email} <br> Asunto: ${asunto} <br><br><br> ${comentarios} 
                    </p>
                    <a href=\"https://mobeus.com.ar/\">mobeus.com.ar</a>
                </td></tr>
            </table>
        </div>
    </div>
</body>
</html> "; // Texto del email en formato HTML
$mail->AltBody = "{$mensaje} \n\n "; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

$mailAdmin->AltBody = "{$mensaje} \n\n ";

$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);


$mailAdmin->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

$estadoEnvio = $mail->Send(); 

$mailAdmin->Send()

?>

