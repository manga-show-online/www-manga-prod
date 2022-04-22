<?php
// and copy to chapters and mp3 conf on github

unset($t);
$mp3_domen = "https://mp3.manga-show.online/mp3/";
$t["АННОТАЦИЯ"] 	= "00_MANGA_Anons_MIX_Apple.mp3";
$t["ИНТЕРЛЮДИЯ 1"] 	= "01_MANGA_VSTAVKA-1-Apple.mp3";
$t["ИНТЕРЛЮДИЯ 2"] 	= "02_MANGA_VSTAVKA-2-Apple.mp3";
$t["ГЛАВА 1"] 		= "03_MANGA_Glava1_Master_Apple_-16LUFS.mp3";
$t["ИНТЕРЛЮДИЯ 3"] 	= "04_MANGA_VSTAVKA-3-Apple.mp3";
$t["ГЛАВА 2"] 		= "05_MANGA_Glava2_Master_Apple_-16LUFS.mp3";

$nn = 0;
foreach($t as $k=>$v)
{
$mp3_mas2[$nn] = $v;

$nn++;
}

$mp3_mas = $t;
//die;
?>