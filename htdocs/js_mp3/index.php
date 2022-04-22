var t = '';
var x = '';

<?php
include "../../conf.php";
//print_r($mp3_mas);
//print "==========\n";
print "var mp3_hash = localStorage.getItem('$key_name');";

print "function all_mp3()
{
";
print "t = '<audio id=\"playlist\" tabindex=\"0\">';\n";

$nn = 0;

reset($mp3_mas);
foreach($mp3_mas as $n=>$v)
{
    $nn++;
//    print "t += '';\n";
    if($v)
    {
    print "document.getElementById('atab$nn').className = 'tab tab-$nn';";
    print "t += '<source src=\"".$mp3_domen."'+mp3_hash+'/$nn/?".time()."\" data-track-number=\"$nn\" />';\n";
//    print "t += '<source src=\"".$mp3_domen."'+mp3_hash+'/$nn/".time()."/listen_$nn.mp3\" data-track-number=\"$nn\" />';\n";
    }

}

print "t += '</audio>'\n";
/*
print "
var x = document.getElementsByClassName('full_read');
var l = x.length;
for(var i=0;i<l;i++)
{
    console.log(x[i]);
    x[i].className = '';
//    x[i].className = '';
}
//x.removeClass('d-none');
//document.querySelector(\".full_read\").classList.remove('d-none');
//console.log(x);
return t;
}
";
*/
print "
return t;
}
";

?>

    
function no_auth()
{
    t = '<audio id="playlist" tabindex="0">';
    t += "<source src=/chapters/MANGA_Anons_MIX_Apple.mp3 data-track-number=1 />";
    t += "</audio>";

    return t;
}

x = document.getElementById('audio_blk');
console.log("MP3 HASH: "+mp3_hash);
//if (typeof(mp3_hash) != 'undefined' && mp3_hash != null)
if(mp3_hash == null)
{
audio_data = no_auth();
//console.log(1);
document.getElementById('txt_comments').className = 'd-none';
}
else
{
document.getElementById('tg_insert').innerHTML = '';
document.getElementById('txt_comments').className = '';

audio_data = all_mp3();
//console.log(2);
}
//console.log(audio_data);

x.innerHTML = audio_data;
