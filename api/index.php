<?php
// header('Access-Control-Allow-Origin: *');

$data = json_decode(file_get_contents('php://input'), true);
$fullname = $data['fullname'];
$eircode = $data['eircode'];
$phone = $data['phone'];
$message = $data['message'];
$email = $data['email'];
$message = 'Full name: ' . $fullname . "\r\n" . 'Eircode: ' . $eircode . "\r\n" . 'Phone: ' . $phone . "\r\n" . 'Email: ' . $email . "\r\n" . 'Message: ' . $message;

$recipient = 'thekmconstruction@gmail.com';
$subject = 'New message from ' . $fullname;
$headers = 'From:'.$fullname.'<'.$email.'>';

$send = mail($recipient, $subject, $message, $headers) or die("Error!");

exit;
