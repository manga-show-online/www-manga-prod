#!/usr/bin/php
<?php

$name = "Глава 10. Джия";
$f = "glava_10.";
$a = file_get_contents($f."txt");
$a = trim($a);
$a = str_replace("-","—",$a);
//$a = "\n".$a."\n";
$a = str_replace("\n","</p>\n<p>",$a);
$a = "<p>$a</p>";
$f2 = "glava.html.def";
$b = file_get_contents($f2);
$b = str_replace("[:name:]",$name,$b);
$b = str_replace("[:txt:]",$a,$b);

file_put_contents($f."html",$b);