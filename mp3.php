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
$t["ИНТЕРЛЮДИЯ 4"]	= "06_MANGA_VSTAVKA-4-Apple.mp3";
$t["ГЛАВА 3"]		= "07_MANGA_Glava3_Master_Apple_-16LUFS.mp3";
$t["ИНТЕРЛЮДИЯ 5"]	= "08_MANGA_VSTAVKA-5-Apple.mp3";

$a = "
АННОТАЦИЯ	00_MANGA_Anons_MIX_Apple.mp3
ИНТЕРЛЮДИЯ 1	01_MANGA_VSTAVKA-1-Apple.mp3
ИНТЕРЛЮДИЯ 2	02_MANGA_VSTAVKA-2-Apple.mp3
ГЛАВА 1		03_MANGA_Glava1_Master_Apple_-16LUFS.mp3
ИНТЕРЛЮДИЯ 3	04_MANGA_VSTAVKA-3-Apple.mp3
ГЛАВА 2		05_MANGA_Glava2_Master_Apple_-16LUFS.mp3
ИНТЕРЛЮДИЯ 4	06_MANGA_VSTAVKA-4-Apple.mp3
ГЛАВА 3		07_MANGA_Glava3_Master_Apple_-16LUFS.mp3
ИНТЕРЛЮДИЯ 5	08_MANGA_VSTAVKA-5-Apple.mp3	
ГЛАВА 4		09_MANGA_Glava4_Master_Apple_-16LUFS.mp3
ГЛАВА 5		10_MANGA_Glava5_Master_Apple_-16LUFS_OK.mp3
ГЛАВА 6		11_MANGA_Glava6_Master_Apple_-16LUFS.mp3
ГЛАВА 7		12_MANGA_Glava7_Master_Apple_-16LUFS.mp3
ГЛАВА 8		13_MANGA_Glava8_Master_Apple_-16LUFS.mp3
ГЛАВА 9		14_MANGA_Glava9_Master_Apple_-16LUFS.mp3
ГЛАВА 10	15_MANGA_Glava10_Master_Apple_Spotyfy-16LUFS-1TP.mp3
ГЛАВА 11	16_MANGA_Glava11_Master_Apple_Spotify-16LUFS-1TP.mp3
ГЛАВА 12	17_MANGA_Glava12_Master_Apple_Spotify-16LUFS-1TP_NO_PART2.mp3
ГЛАВА 13	18_MANGA_Glava13_Master_Apple_Spotify-16LUFS-1TP.mp3
";
$a = trim($a);
$mas = explode("\n",$a);
foreach($mas as $nn2 => $l)
{
    $nn = $nn2+1;
    $l = str_replace("\t\t","\t",$l);
    $l = str_replace("\t\t","\t",$l);
    $t2 = explode("\t",$l);
    $v3[name] = $t2[0];
    $v3[mp3] = $t2[1];
    $v3[txt] = $t3[2];
    $v4[$v3[name]] = $v3[mp3];
    $mp3_mas2[$nn] = $v3[mp3];
    $mp3_mas3[$nn] = $v3;
}

/*
$nn = 0;
foreach($t as $k=>$v)
{
$nn++;
$mp3_mas2[$nn] = $v;


}

$mp3_mas = $t;
*/
$mp3_mas = $v4;
//die;
?>