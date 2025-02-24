<?php

// Your email address
$to = "info@constructo.com";

$subject = "wiadomość z Twojej strony.";
$name = $_POST["name"];
$tel = $_POST["tel"];
$from = $_POST["email"];
$message = $_POST["message"];

$txt = "Imię: " . $name . "\r\n" . "Telefon kontaktowy: " . $tel . "\r\n" . "Adres e-mail: " . $from . "\r\n" . "\r\n" . "Wiadomość: " . "\r\n" . $message . "\r\n" . "\r\n" . "--------" . "\r\n" . "Wiadomość została wysłana z Twojej strony.";

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

mail($to, $subject, $txt, $headers);

?>