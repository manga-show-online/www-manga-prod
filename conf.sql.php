<?php
//die;
$db["host"] = "10.0.104.103";
$db["user"] = "manga";
$db["pass"] = "manGasHow";
//if(!$db["name"])
$db["name"] = "manga";

$con = mysqli_connect($db["host"],$db["user"],$db["pass"],$db["name"]);
if(mysqli_connect_error())
{
    print "Mysqli Connect Err $db[host]\n";
    die;
}
//print_r($con);die;
//$err = mysqli_error($con);
//print_r($err);
//print "!!!!!!!!!!!".$con->connect_error
//die;
?>
