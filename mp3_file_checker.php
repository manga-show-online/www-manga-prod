#!/usr/bin/php
<?php
include "mp3.php";

$d = __DIR__;
$d = dirname($d);
$d .= "/www-manga-chapters";
$d .= "/htdocs/mp3/";
print_r($mp3_mas2);
foreach($mp3_mas2 as $k=>$v)
{
    $f = $d.$v;
    print $k."\t";

    $flag = "N";
    if(file_exists($f))$flag = "Y";
    print $flag."\t";

    print $f."\t";
    print "\n";
}