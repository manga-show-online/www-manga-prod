<?php

include "../conf.php";
$t = $_SERVER['REQUEST_URI'];
$t = explode("/",$t);
$item = $t[1];
$item2 = $t[2];


switch($item)
{
    case "link":
	$browser = $_SERVER['HTTP_USER_AGENT'];
	$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
	
	unset($q);
	$q[hash] = $item2;
	$q_add = mas2sqlmas($q);
	$query = "SELECT * FROM link WHERE ".implode(" AND ",$q_add)."";
	//print $query."\n";
	$res = mysqli_query($con,$query);
	$kolvo = mysqli_num_rows($res);

	if($kolvo)
	{
	$row = mysqli_fetch_assoc($res);
	//print_r($row);
	if(!$row[browser])
	{
	    unset($q);
	    $q[browser] = $browser;
	    $q[ip] = $ip;
    	    $q_add = mas2sqlmas($q);
	    $query = "UPDATE link SET ".implode(",",$q_add)." WHERE id = '$row[id]'";
	    //print $query."\n";
	    $res = mysqli_query($con,$query);


	    print "Redirect after 2 sec";
	    print "<script>";
//	    print "";
	    print "localStorage.setItem('$key_name', '".$row[hash]."');";
	    print "setTimeout(reload,2000);";
	    print "function reload(){window.location.href = '/';}";
	    print "</script>";
	    die;
	}
	if($row[browser] && $row[browser] != $browser)
	{
	    $err = "Ссылка устарела.";
	    //die("err1");
	}

	if($row[browser] && $row[browser] == $browser)
	{
	    //die("err2");
	    header("Location: /");
	    die;
	}
	}
	else
	{
	    $err = "Ссылка не существует.";
	}

	if(!$err)
	$err = "Неведомая ошибка";

	if($err)
	{
	    $f = "index-err.html";
	    $a = file_get_contents($f);
	    $a = str_replace("<!--ERR_TEXT-->",$err,$a);
	    print $a;
	    //print $err;
	}
    
	die;
    break;
    default:
$f = "index.html";
$a = file_get_contents($f);


$a = str_replace(" href=\"fonts/"," href=\"/fonts/",$a);
$a = str_replace(" href=\"favicon/"," href=\"/favicon/",$a);
$a = str_replace(" href=\"fonts/"," href=\"/fonts/",$a);
$a = str_replace(" href=\"css/"," href=\"/css/",$a);
$a = str_replace(" src=\"images/"," src=\"/images/",$a);
$a = str_replace("</body>"," <script src=\"/js_mp3/\"></script>\n</body>",$a);

$a = str_replace('<a href="/en/index.html" class="language">','<a href="/en/index.html" class="language d-none">',$a);

$a = str_replace("<audio id=\"audio-top\"","<div><audio id=\"audio-top\"",$a);
$a = str_replace("<audio id=\"playlist\"","<div class=\"audio_blk\" id=audio_blk><audio id=\"playlist\"",$a);
$a = str_replace("</audio>","</audio></div>",$a);

$a = str_replace("src=\"METAVERSE_TRACK.wav\"","src=\"/METAVERSE_TRACK.mp3\"",$a);


reset($mp3_mas);
$t = "";
$nn = 0;
$t = "<div class=\"titles-tab\">";
foreach($mp3_mas as $n=>$v)
{
    $nn++;
    $lock = "";
    //if($v == "")
    if($nn>1)
    $lock = "lock";
    $t .= "<a id=atab$nn class=\"tab tab-$nn ".($nn==1?"active":"")." $lock\" href=\"#tab-$nn\"><span>$n</span></a>";
}
$t .= "</div>";

$preg = "/\<div class\=\"titles-tab\"\>(.*?)\<\/div\>/sim";
//$a = str_replace("<div class=\"titles-tab\"></div>",$t,$a);
$s = "<div class=\"titles-tab\">$t</div>";
$a = preg_replace($preg,$s,$a);

$preg = "/\<audio id\=\"playlist\".*?\<\/audio\>/sim";


$t = "";
$t .= "<audio id=\"playlist\" tabindex=\"0\">";

reset($mp3_mas);
$nn = 0;
foreach($mp3_mas as $n=>$v)
{
    if($v)
    {
    $nn++;
    $t .= "<source src=\"".$mp3_domen."$nn\" data-track-number=\"$nn\" />";
    }
}

$t .= "</audio>";

$a = preg_replace($preg,$t,$a);


$t = '                                
		    <div id=tg_insert>
					<div class=" row open-telegram">
                                        <div class="col-12 col-md-9">Чтобы получить доступ к полной версии аудиосериала, перейдите в наш телеграмм бот</div>
                                        <div class="col-12 col-md-3 open-telegram__btn">
                                                <a href=http://t.me/manga_online_bot class="btn btn-telegram" target=tg>
                                                        <img src="/images/telegram.svg" alt="telegram" />
                                                        Открыть
                                                </a>
                                        </div>
					</div>
		    </div>
';
$a = str_replace("<div id=tg_insert></div>",$t,$a);


print $a;
//	    print "<script>";
//	    print "console.log(localStorage.getItem('$key_name'));";
//	    print "</script>";
//print_r($mp3_mas);
}
//phpinfo();die;


?>