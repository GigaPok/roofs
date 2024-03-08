<!-- <?php

header("Access-Control-Allow-Origin: http://localhost:3000")

$fullname = $_POST['fullname'];
  $eircode = $_POST['eircode'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $message = $_POST['message'];

$message = 'Full name: ' . $fullname . "\r\n" . 'Eircode: ' . $eircode . "\r\n" . 'Phone: ' . $phone . "\r\n" . 'Email: ' . $email . "\r\n" . 'Message ' . $message;

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "karkusashvili9999@gmail.com";

mail($recipient, $subject, $message, $mailheader) or die("Error!");

$echo ("send")
?> -->

<?php


$fullname = $_POST['fullname'];
$eircode = $_POST['eircode'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];
$message = 'Full name: ' . $fullname . "\r\n" . 'Eircode: ' . $eircode . "\r\n" . 'Phone: ' . $phone . "\r\n" . 'Email: ' . $email . "\r\n" . 'Message: ' . $message;

$to = 'karkusashvili9999@gmail.com';
$subject = 'New message from ' . $fullname;
$headers = 'From: ' . $email;

mail($to, $subject, $message, $headers) or die("Error!");

echo "sent";

exit;
?>