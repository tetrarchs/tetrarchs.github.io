function rule(colour,width){
// Draw a suitable thick rule e.g. rule("red"), default is orange.
// If black is needed use rule("black") as rule("0") gives an empty table.
if(!colour){colour="#ff9900"};
if(ie()) {
  if(!width){
    document.write("<table border=0 cellspacing=0 cellpadding=0 bgcolor=", colour, " width='107%' style='width:107.0%;margin-left:-1.0cm;background:", colour, ";border-collapse:collapse;'><tr style='height:2.85pt'> <td width='100%' style='padding:0cm 5.4pt 0cm 5.4pt;height:2.85pt'><h6 style='margin:0cm;margin-bottom:.0001pt;'>&nbsp;</h6></td></tr></table>");
  	} else {
  	document.write("<table align=center border=0 cellspacing=0 cellpadding=0 bgcolor=", colour, " width='", width,"' style='margin-left:-1.0cm;background:", colour, ";border-collapse:collapse;'><tr style='height:2.85pt'> <td width='100%' style='padding:0cm 5.4pt 0cm 5.4pt;height:2.85pt'><h6 style='margin:0cm;margin-bottom:.0001pt;'>&nbsp;</h6></td></tr></table>");
  	}
  } else {
  if(!width){width="100%"};
  document.write("<hr width=",width," size=4>");
  }
}

function ie(){
if (navigator.appName == "Microsoft Internet Explorer"){
  return true;
  } else {
  return false;
  }
}

function bgpath(){
if (ie()){document.write("..")}
}

function mailto(name,domain,aka,moretext)
{
// Hide e-mail addresses from spammers
// e.g. a link to Simon@mail.com becomes 
// mailto("Simon","mail.com",<alias>,<additional text>)
if(!aka){aka=name+"@"+domain}
document.write("<a href='mailto:",name,"@",domain,"?subject=Feedback for ",aka," [from ",document.location.pathname,"]'>",aka,"<\/a>",moretext?moretext:"")
}
