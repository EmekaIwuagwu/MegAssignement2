<?php
$host = 'localhost';
$user = 'id17456651_root';
$pass = 'EmekaIwuagwu87**';
$db = 'id17456651_test_people_db';

$con = mysqli_connect($host, $user, $pass, $db) or die('Cannot connect, Reason: '.mysqli_error());

$mainjson = file_get_contents('php://'input);
$obj = json_decode($mainjson,true);

$fullname = $obj['fullname'];
$gender = $obj['gender'];
$email = $obj['email'];
$salary = $obj['salary'];
$dob = $obj['dob'];

$sql = "insert into employeeDB (fullname, gender, email, salary, dob) values ('".$fullname."', '".$gender."', '".$email."', '".$salary."', '".$dob."')";

if(mysqli_query($con, $sql))
{
	$msg = "OK";
	$json = json_encode($msg);
	echo $json;
}
else{
	$error_msg = "Bad Entry!";
	$json = json_encode($error_msg);
	echo $json;
}

mysqli_close($con);

?>