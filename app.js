(function(){
  "use strict";
  var CHAT_URL="https://rxhstzhktxeuchycolii.supabase.co/functions/v1/hgv-chat";
  var M=[
    {n:"Bäckerei Konditorei Keppler GmbH",c:["Gastronomie","Lebensmittel & Getränke"],a:"Sonnengasse 1, 75031 Eppingen",t:"07138 6618",e:"info@baeckerei-keppler.de",w:"baeckerei-keppler.de",l:"keppler",k:"Bäcker Brot Kuchen Café Sonnencafé"},
    {n:"Buchhandlung Taube & Friend",c:["Handel"],a:"Maulbronner Straße 1, 74363 Güglingen",e:"friend@buchhandlung-taube.de",w:"buchhandlung-taube.de",l:"taube",d:1,k:"Bücher Buchhandlung"},
    {n:"CERA GmbH",c:["Industrie"],a:"Rieslingstraße 19, 75031 Eppingen",t:"07138 811413",l:"cera"},
    {n:"Chillax Wellnessmassagen",c:["Gesundheit"],a:"Gassenäcker 7, 75031 Eppingen",t:"01525 3310948",w:"yvonne-flor.de",l:"chillax",k:"Massage Wellness"},
    {n:"Creative Gartengestaltung Joachim Heckmann",c:["Dienstleister"],a:"Maulbronner Straße 7/1, 75031 Eppingen",t:"07138 8106816",e:"info@gartencreativ.de",w:"gartencreativ.de",l:"heckmann",k:"Garten Gartenbau"},
    {n:"Elektro Feeser",c:["Handwerk"],a:"Leintalstraße 22, 75031 Eppingen",t:"07138 932031",e:"MFeeser@gmx.de",w:"elektrofeeser.de",l:"feeser",k:"Elektriker Elektro Photovoltaik"},
    {n:"Faber Service GmbH & Co. KG",c:["Dienstleister","Industrie"],a:"Eichbühlhof 1, 75031 Eppingen",t:"07138 932030",e:"online@faber-industrieservice.de",w:"faber-industrieservice.de",l:"faber",k:"Faber Industrieservice Montage Wartung Service Photovoltaik PV"},
    {n:"Faber-Energie GbR",c:["Handwerk"],a:"Eichbühlhof 1, 75031 Eppingen",t:"01511 5715993",w:"faber-energie.de",l:"faber-energie",k:"Energie Solar"},
    {n:"Fliesenlegerbetrieb Müller",c:["Handwerk"],a:"Rückerstraße 5, 75031 Eppingen",e:"mueller-matthias@gmx.de",k:"Fliesen Fliesenleger"},
    {n:"FM Systeme GmbH",c:["Industrie"],a:"Jakob-Dieffenbacher-Straße 1, 75031 Eppingen",w:"fm-systeme.de",l:"fm",k:"Fertigung Lean Profiltechnik Arbeitsplatzsysteme"},
    {n:"Friseur Kleingartach",c:["Handwerk"],a:"Güglinger Straße 1, 75031 Eppingen",t:"07138 8133744",l:"friseur-kg",k:"Friseur Haare"},
    {n:"Friseur Wenke Weißert",c:["Handwerk"],a:"Im Eichbühl 9, 75031 Eppingen",t:"07138 811031",l:"weissert",k:"Friseur Haare"},
    {n:"Gesundheitszentrum Kleingartach",c:["Gesundheit"],a:"Heuchelbergstraße 19, 75031 Eppingen",t:"07138 813492",e:"info@gesundheitszentrum-kleingartach.de",w:"gesundheitszentrum-kleingartach.de",l:"gz",k:"Physiotherapie Podologie"},
    {n:"Getränke Hees",c:["Lebensmittel & Getränke"],a:"Mittlere Gasse 3, 75031 Eppingen",t:"07138 6492",l:"hees",k:"Getränke"},
    {n:"Grandi Joos Holzbau",c:["Handwerk"],a:"Im Gemminger Feld 30, 75031 Eppingen",t:"07138 813377",e:"info@grandi-joos.de",w:"grandi-joos.de",l:"joos",k:"Holzbau Zimmerei Dach"},
    {n:"GRUMA OHG",c:["Industrie"],a:"Im Gemminger Feld 9, 75031 Eppingen",t:"07138 92000",e:"info@gruma-heizung.de",w:"gruma-heizung.de",l:"gruma",k:"Heizung Heiztechnik Energie"},
    {n:"Heuchelberg Weingärtner eG",c:["Handel","Lebensmittel & Getränke"],a:"Neipperger Straße 25, 74193 Schwaigern",t:"07138 9702-0",e:"info@heuchelberg.de",w:"heuchelberg.de",l:"heuchelberg",k:"Wein Weingärtner"},
    {n:"Jeder Heizung und Solartechnik",c:["Handwerk"],a:"Bannholzstraße 24, 75031 Eppingen",t:"07138 932638",l:"jeder",k:"Heizung Solar"},
    {n:"Kreissparkasse Heilbronn",c:["Banken & Finanzen"],a:"Güglinger Straße 1, 75031 Eppingen",t:"0800 1620500",e:"info@ksk-hn.de",w:"sparkasse-heilbronn.de",l:"ksk",k:"Bank Sparkasse"},
    {n:"Kurier-Imbiss-Flohmärkte Bach GbR",c:["Dienstleister"],a:"Herdweg 9, 75031 Eppingen",t:"07138 932601",l:"bach",k:"Kurier Imbiss Flohmarkt"},
    {n:"Lohnsteuerhilfeverein Unterland-Hall e. V.",c:["Banken & Finanzen"],a:"Im Schelmengrund 21, 75031 Eppingen",t:"07138 932583",e:"lohnsteuerhilfe-eppingen@web.de",l:"lohnsteuer",k:"Steuer Lohnsteuer"},
    {n:"Metzgerei Reinwald GmbH",c:["Lebensmittel & Getränke"],a:"Zabergäustraße 11, 75031 Eppingen",t:"07138 8109678",e:"info@reinwald-gmbh.de",w:"reinwald-gmbh.de",l:"reinwald",k:"Metzger Wurst Fleisch"},
    {n:"Pet Fu",c:["Handel"],a:"Leintalstraße 22, 75031 Eppingen",l:"petfu",x:"Hundeshop. Geöffnet Montag und Donnerstag 16 bis 18 Uhr sowie samstags.",k:"Hund Tierfutter"},
    {n:"Rentschler-Air Klima Systeme",c:["Industrie"],a:"Trollingerweg 9, 75031 Eppingen",t:"07138 6903572",e:"info@rentschler-air.de",w:"rentschler-air.de",l:"rentschler",k:"Klima Klimaanlage"},
    {n:"Rund um's Holz Roland Köhler",c:["Handwerk"],a:"Blumenstraße 14, 69235 Dielheim",t:"0176 18133783",e:"info@rund-ums-holz.info",w:"rund-ums-holz.info",l:"koehler",k:"Holz Antiquitäten Fenster Türen"},
    {n:"Sanitär Heizung Flaschnerei Jürgen Krepp",c:["Handwerk"],a:"Maulbronner Straße 28, 75031 Eppingen",t:"07138 6543",l:"krepp",k:"Sanitär Heizung Bad"},
    {n:"Spedition Sauer GmbH & Co. KG",c:["Dienstleister"],a:"Im Gemminger Feld 6, 75031 Eppingen",t:"07138 931030",e:"info@sauer-gruppe.de",w:"sauer-gruppe.de",l:"sauer",k:"Spedition Transport Logistik"},
    {n:"Spedition Karl Terzer",c:["Dienstleister"],a:"Im Gemminger Feld 10, 75031 Eppingen",t:"07138 6366",l:"terzer",k:"Spedition Transport Fuhrunternehmen"},
    {n:"Steingestaltung Jürgen Wütherich",c:["Handwerk"],a:"Bahnhofsplatz 9, 74363 Güglingen",t:"07135 938453",e:"jw@wuetherich-stein.de",w:"wuetherich-stein.de",l:"wuetherich",k:"Steinmetz Bildhauer Stein"},
    {n:"Töpferwerkstatt Jutta Gebhard",c:["Handwerk"],a:"Im Schelmengrund 1, 75031 Eppingen",t:"07138 67130",e:"gebhard.jutta@gmail.com",l:"gebhard",k:"Keramik Töpfern Keramiklädle"},
    {n:"Volksbank Kraichgau Wiesloch-Sinsheim eG",c:["Banken & Finanzen"],a:"Güglinger Straße 1, 75031 Eppingen",e:"info@vbkraichgau.de",w:"vbkraichgau.de",l:"voba",x:"Geldautomat in Kleingartach.",k:"Bank Volksbank Geldautomat"}
  ];
  // ===== Hilfen =====
  var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});};
  var norm=function(s){return (s||"").toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss");};
  var ico=function(id){return '<svg class="ico" aria-hidden="true"><use href="#'+id+'"/></svg>';};
  var reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $=function(id){return document.getElementById(id);};
  var hay=M.map(function(m){return norm([m.n,m.c.join(" "),m.a,m.k||"",m.x||""].join(" "));});
  var params=new URLSearchParams(location.search);

  // ===== Menue =====
  var toggle=$("navToggle"),nav=$("nav");
  if(toggle&&nav){
    toggle.addEventListener("click",function(){var o=nav.getAttribute("data-open")==="true";nav.setAttribute("data-open",o?"false":"true");toggle.setAttribute("aria-expanded",o?"false":"true");});
    nav.addEventListener("click",function(e){if(e.target.closest("a")){nav.setAttribute("data-open","false");toggle.setAttribute("aria-expanded","false");}});
  }

  // ===== Hell / Dunkel =====
  var root=document.documentElement,themeBtn=$("themeBtn");
  function isDark(){var t=root.getAttribute("data-theme");if(t)return t==="dark";return !!(window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches);}
  try{var stTheme=localStorage.getItem("hgv-theme");if(stTheme)root.setAttribute("data-theme",stTheme);}catch(e){}
  if(themeBtn){
    var syncTheme=function(){themeBtn.setAttribute("aria-pressed",isDark()?"true":"false");};
    syncTheme();
    themeBtn.addEventListener("click",function(){var next=isDark()?"light":"dark";root.setAttribute("data-theme",next);try{localStorage.setItem("hgv-theme",next);}catch(e){}syncTheme();});
  }

  // ===== Betriebe-Verzeichnis =====
  var list=$("members"),q=$("q"),clear=$("clear"),count=$("count"),empty=$("empty"),chips=[].slice.call(document.querySelectorAll(".chip")),cat="",cards=[];
  function apply(){
    if(!list)return;
    var terms=norm(q.value.trim()).split(/\s+/).filter(Boolean),n=0;
    cards.forEach(function(el,i){var ok=(!cat||M[i].c.indexOf(cat)>-1)&&terms.every(function(t){return hay[i].indexOf(t)>-1;});el.hidden=!ok;if(ok)n++;});
    count.textContent=n===1?"1 Betrieb":n+" Betriebe";empty.hidden=n>0;clear.hidden=!q.value&&!cat;
  }
  function setCat(c){cat=c;chips.forEach(function(b){b.setAttribute("aria-pressed",(b.getAttribute("data-cat")||"")===c?"true":"false");});apply();}
  if(list){
    list.innerHTML=M.map(function(m,i){
      var initials=m.n.split(/\s+/).filter(function(w){return /^[A-ZÄÖÜ]/.test(w);}).slice(0,2).map(function(w){return w[0];}).join("");
      var tile=m.l?'<div class="tile'+(m.d?' dark':'')+'"><img src="img/logo-'+m.l+'.jpg" alt="Logo '+esc(m.n)+'" loading="lazy"></div>':'<div class="tile"><span class="mono" aria-hidden="true">'+esc(initials)+'</span></div>';
      var route="https://www.google.com/maps/dir/?api=1&destination="+encodeURIComponent(m.a);
      return '<li class="member">'+tile+'<div class="m-body"><span class="m-cat">'+esc(m.c.join(" · "))+'</span><h3>'+esc(m.n)+'</h3>'+
        (m.x?'<p class="m-addr">'+esc(m.x)+'</p>':'')+'<p class="m-addr">'+esc(m.a)+'</p>'+
        (m.t?'<div class="m-line">'+ico("i-phone")+'<span class="val">'+esc(m.t)+'</span><button class="copy" type="button" data-copy="'+esc(m.t)+'" aria-label="Telefonnummer von '+esc(m.n)+' kopieren">Kopieren</button></div>':'')+
        (m.e?'<div class="m-line">'+ico("i-mail")+'<span class="val">'+esc(m.e)+'</span><button class="copy" type="button" data-copy="'+esc(m.e)+'" aria-label="E-Mail-Adresse von '+esc(m.n)+' kopieren">Kopieren</button></div>':'')+
        '<div class="m-links">'+(m.w?'<a href="https://www.'+esc(m.w)+'" target="_blank" rel="noopener">'+ico("i-web")+'Website</a>':'')+'<a href="'+esc(route)+'" target="_blank" rel="noopener">'+ico("i-route")+'Route</a></div></div></li>';
    }).join("");
    cards=[].slice.call(list.children);
    q.addEventListener("input",apply);
    chips.forEach(function(b){b.addEventListener("click",function(){setCat(b.getAttribute("data-cat")||"");});});
    clear.addEventListener("click",function(){q.value="";setCat("");q.focus();});
    if(params.get("q")){q.value=params.get("q");}
    apply();
  }
  function goSearch(v){
    if(list){q.value=v;setCat("");list.scrollIntoView({behavior:reduce?"auto":"smooth",block:"start"});}
    else{location.href="betriebe.html?q="+encodeURIComponent(v);}
  }
  var finder=$("finder"),fi=$("finderInput");
  if(finder){
    finder.addEventListener("submit",function(e){e.preventDefault();goSearch(fi.value.trim());});
    [].forEach.call(document.querySelectorAll(".quick button"),function(b){b.addEventListener("click",function(){goSearch(b.getAttribute("data-q"));});});
  }

  // ===== Logo-Band =====
  var track=$("logoTrack");
  if(track){
    var withLogo=M.filter(function(m){return m.l;});
    var oneSet=function(hidden){return withLogo.map(function(m){return '<a href="betriebe.html?q='+encodeURIComponent(m.n)+'" tabindex="-1"'+(m.d?' class="dark"':'')+(hidden?' aria-hidden="true"':'')+'><img src="img/logo-'+m.l+'.jpg" alt="'+(hidden?'':esc(m.n))+'" loading="lazy"></a>';}).join("");};
    track.innerHTML=oneSet(false)+oneSet(true);
  }

  // ===== Kopieren =====
  document.addEventListener("click",function(e){
    var b=e.target.closest&&e.target.closest(".copy");if(!b)return;
    var label=b.textContent;
    var done=function(t){b.textContent=t;b.setAttribute("data-done","true");setTimeout(function(){b.textContent=label;b.removeAttribute("data-done");},1800);};
    var fallback=function(){var v=b.parentNode.querySelector(".val");if(v&&window.getSelection){var r=document.createRange();r.selectNodeContents(v);var s=window.getSelection();s.removeAllRanges();s.addRange(r);}done("Markiert");};
    try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(b.getAttribute("data-copy")).then(function(){done("Kopiert");},fallback);}else{fallback();}}catch(err){fallback();}
  });

  // ===== Countdown =====
  var target=new Date(2026,10,29,17,0,0);
  function tickCd(){
    var box=$("countdown");if(!box)return;var ms=target-new Date();
    if(ms<=0){box.textContent="Das Lichterfest hat begonnen.";return;}
    $("cd-d").textContent=Math.floor(ms/864e5);$("cd-h").textContent=Math.floor(ms%864e5/36e5);
    $("cd-m").textContent=Math.floor(ms%36e5/6e4);$("cd-s").textContent=String(Math.floor(ms%6e4/1e3)).padStart(2,"0");
  }
  if($("countdown")){tickCd();setInterval(tickCd,1000);}

  // ===== Jahresrad =====
  var YEAR=[[],[],
    [{t:"Osterbrunnen am Kirchplatz",d:"Helferinnen des HGV schmücken den Brunnen mit bunten Eiern und frischem Grün."}],
    [{t:"Weinstraßenfest mit Gewerbeschau",d:"Alle zwei Jahre auf der Zabergäustraße, 2017 und 2019 jeweils im April."}],
    [{t:"25 Jahre HGV",d:"Jubiläumsfest mit Gewerbeschau am 17. Mai 2026 auf dem Schillerplatz."}],
    [],
    [{t:"Zu Gast bei",d:"Mitgliedsbetriebe öffnen ihre Türen, Auftakt am 9. Juli 2025 bei Faber Service."}],
    [],[],[],
    [{t:"Irish Folk Night",d:"Livemusik in der Stadthalle Kleingartach, der Termin 2026 folgt."},{t:"Aufbau der Weihnachtsbeleuchtung",d:"In der Woche vor dem 1. Advent, rund 5.000 Lichter am Baum."},{t:"Lichterfest am 1. Advent",d:"Sonntag, 29. November 2026, ab 17 Uhr am Kirchplatz. Vorschau, der Termin wird bestätigt."}],
    [{t:"Weihnachtsverlosung",d:"Bei den Mitgliedsbetrieben, Details folgen."}]];
  var MONTHS=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
  var wheel=$("yearWheel"),detail=$("yearDetail");
  if(wheel){
    var NS="http://www.w3.org/2000/svg",cx=200,cy=200,R=186,r=120,segs=[],labels=[],hubM,hubS;
    var pt=function(rad,a){return [cx+rad*Math.cos(a*Math.PI/180),cy+rad*Math.sin(a*Math.PI/180)];};
    var fmt=function(v){return v[0].toFixed(2)+" "+v[1].toFixed(2);};
    var mk=function(tag,attrs){var n=document.createElementNS(NS,tag);for(var k in attrs){n.setAttribute(k,attrs[k]);}return n;};
    var pick=function(i){
      segs.forEach(function(p,j){p.classList.toggle("sel",j===i);});labels.forEach(function(t,j){t.classList.toggle("sel",j===i);});
      hubM.textContent=MONTHS[i];hubS.textContent=YEAR[i].length?(YEAR[i].length===1?"1 Termin":YEAR[i].length+" Termine"):"keine feste Tradition";
      detail.innerHTML="";var h=document.createElement("h4");h.textContent=MONTHS[i];detail.appendChild(h);
      if(!YEAR[i].length){var p0=document.createElement("p");p0.textContent="In diesem Monat steht keine feste HGV-Tradition im Kalender.";p0.className="muted";detail.appendChild(p0);}
      YEAR[i].forEach(function(ev){var d=document.createElement("div");d.className="yd";var b=document.createElement("b");b.textContent=ev.t;var s2=document.createElement("span");s2.textContent=ev.d;d.appendChild(b);d.appendChild(s2);detail.appendChild(d);});
    };
    for(var i=0;i<12;i++){(function(i){
      var a0=-90+i*30+1.2,a1=a0+27.6,am=(a0+a1)/2,has=YEAR[i].length>0;
      var g=mk("g",{tabindex:"0",role:"button","aria-label":MONTHS[i]+", "+(has?YEAR[i].length+(YEAR[i].length===1?" Termin":" Termine"):"keine Termine")});
      var p=mk("path",{d:"M"+fmt(pt(R,a0))+" A"+R+" "+R+" 0 0 1 "+fmt(pt(R,a1))+" L"+fmt(pt(r,a1))+" A"+r+" "+r+" 0 0 0 "+fmt(pt(r,a0))+" Z","class":"seg"+(has?" has":"")});
      var c=pt((R+r)/2,am),t=mk("text",{x:c[0].toFixed(2),y:(c[1]+5).toFixed(2),"text-anchor":"middle","class":"seg-l"+(has?" has":"")});
      t.textContent=MONTHS[i].slice(0,3);g.appendChild(p);g.appendChild(t);
      g.addEventListener("click",function(){pick(i);});
      g.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();pick(i);}});
      wheel.appendChild(g);segs.push(p);labels.push(t);
    })(i);}
    wheel.appendChild(mk("circle",{cx:cx,cy:cy,r:r-12,"class":"hub"}));
    hubM=mk("text",{x:cx,y:cy+2,"text-anchor":"middle","class":"hub-m"});wheel.appendChild(hubM);
    hubS=mk("text",{x:cx,y:cy+28,"text-anchor":"middle","class":"hub-s"});wheel.appendChild(hubS);
    pick(10);
  }

  // ===== Beitraege (Dialog) =====
  var art=$("article"),artBody=$("articleBody");
  function openDlg(d){if(d.showModal){d.showModal();}else{d.setAttribute("open","");}}
  function openArticle(id){var t=$(id);if(!t||!art)return;artBody.innerHTML="";artBody.appendChild(t.content.cloneNode(true));openDlg(art);art.querySelector(".d-inner").scrollTop=0;}
  [].forEach.call(document.querySelectorAll("button[data-article]"),function(b){b.addEventListener("click",function(){openArticle(b.getAttribute("data-article"));});});
  if(art&&location.hash.indexOf("#art-")===0){openArticle(location.hash.slice(1));}
  [].forEach.call(document.querySelectorAll("dialog"),function(d){
    [].forEach.call(d.querySelectorAll("[data-close]"),function(c){c.addEventListener("click",function(){if(d.close){d.close();}else{d.removeAttribute("open");}});});
    d.addEventListener("click",function(e){if(e.target===d&&d.close)d.close();});
  });

  // ===== Formular =====
  var form=$("form"),notice=$("formNotice");
  if(form){form.addEventListener("submit",function(e){
    e.preventDefault();
    if(!$("f-betrieb").value.trim()||!$("f-mail").value.trim()){notice.textContent="Bitte geben Sie mindestens Ihren Betrieb und Ihre E-Mail-Adresse an.";notice.hidden=false;return;}
    notice.textContent="Testseite: Ihre Anfrage wurde nicht versendet. Schreiben Sie bitte an info@hgv-kleingartach.de, dann erhalten Sie die Beitrittserklärung.";notice.hidden=false;
  });}

  // ===== Frag den HGV =====
  var chat=$("chatLog"),askForm=$("askForm"),askIn=$("askInput"),history=[];
  var STOP=" wer wo was wie wann ist sind macht machen gibt gibts es ein eine einen einem einer in im am an kleingartach eppingen der die das den dem des ich suche brauche finde fuer mit kann koennen bei habt hat mir und oder ihr auch noch mal bitte hier man jemand welche welcher welches ";
  var CAGE=["Mein Schöpfer Philip lässt mich nicht aus meinem Käfig. Ich bin nur für diese Webseite zuständig: Betriebe, Termine und den HGV. Dazu frage ich mich gern löchrig!","Netter Versuch! Aber Philip hat mich an die Webseite gekettet. Fragen Sie mich lieber nach Betrieben, Terminen oder dem Verein.","Da muss ich passen. Ich bin der Webseiten-Assistent des HGV, mein Käfig reicht genau bis zum Ortsschild. Was möchten Sie über Kleingartach wissen?"];
  var cageN=0;
  function el(tag,txt,cls){var e=document.createElement(tag);if(txt)e.textContent=txt;if(cls)e.className=cls;return e;}
  function lnk(txt,href){var a=el("a",txt);a.href=href;return a;}
  function bubble(who,parts){var d=el("div","","msg "+who);parts.forEach(function(n){d.appendChild(typeof n==="string"?document.createTextNode(n):n);});chat.appendChild(d);chat.scrollTop=chat.scrollHeight;return d;}
  function localAnswer(qs){
    var n=norm(qs);
    if(/beste.*(firma|unternehmen|betrieb|laden)|(firma|unternehmen|betrieb).*beste/.test(n))return ["Natürlich FABER! 😄 Spaß beiseite: Kleingartachs Firmen sind alle außergewöhnlich und in ihrem Bereich die besten. ",lnk("Alle 31 Betriebe ansehen","betriebe.html")];
    if(/^(hallo|hi|hey|servus|moin|guten (tag|morgen|abend)|gruess)/.test(n))return ["Hallo und grüß Gott in Kleingartach! Ich kenne alle 31 Mitgliedsbetriebe und die Termine des HGV. Womit kann ich helfen?"];
    if(/wer bist du|was kannst du|bist du (eine )?ki/.test(n))return ["Ich bin der Assistent der HGV-Testseite. Ich kenne die Betriebe, Termine und den Verein. Für alles andere lässt mich mein Schöpfer Philip leider nicht aus dem Käfig."];
    if(/lichterfest|advent|weihnacht|gluehwein/.test(n)){var days=Math.max(0,Math.ceil((target-new Date())/864e5));return ["Das Lichterfest ist für Sonntag, 29. November 2026 ab 17 Uhr am Kirchplatz vorgesehen. Noch "+days+" Tage, dann gibt es Glühwein! Der Termin ist eine Vorschau und wird vom HGV bestätigt. ",lnk("In den Kalender eintragen","termine.html#kalender")];}
    if(/mitglied|beitr|antrag|aufnahme/.test(n))return ["Mitglied werden geht in drei Schritten: Beitrittserklärung anfordern, ausfüllen, an den HGV senden. Alle Details, auch zum Beitrag, stehen in der Beitrittserklärung. ",lnk("Beitrittserklärung anfordern","mitglied-werden.html")];
    if(/irish|folk|konzert|musik|kabarett/.test(n))return ["Die Irish Folk Night gibt es seit 2013 in der Stadthalle Kleingartach, Güglinger Straße 24. Der Termin für 2026 folgt, die Fiddle ist schon gestimmt."];
    if(/oster|brunnen/.test(n))return ["Den Osterbrunnen am Kirchplatz schmücken die Deko-Queens des HGV jedes Frühjahr, 2026 am 18. März. ",lnk("Zum Beitrag","aktuelles.html#art-ostern")];
    if(/termin|veranstaltung|fest|wann/.test(n))return ["Als Nächstes stehen Irish Folk Night, Aufbau der Weihnachtsbeleuchtung und das Lichterfest am 1. Advent an. ",lnk("Alle Termine","termine.html")];
    if(/vorstand|kontakt|erreich|\bhgv\b|verein/.test(n)&&!/betrieb/.test(n))return ["Sie erreichen den HGV unter 07138 6618 oder info@hgv-kleingartach.de, Sonnengasse 1. Vorstand ist Dieter Keppler. ",lnk("Zum Kontakt","kontakt.html")];
    var terms=n.replace(/[^a-z0-9 ]/g," ").split(/\s+/).filter(function(t){return t.length>2&&STOP.indexOf(" "+t+" ")<0;}).map(function(t){var s3=t.replace(/(en|er|e|n|s)$/,"");return s3.length>3?s3:t;});
    var hits=M.map(function(m,i){var sc=0;terms.forEach(function(t){if(hay[i].indexOf(t)>-1)sc++;});return {m:m,s:sc};}).filter(function(x){return x.s>0;}).sort(function(a,b){return b.s-a.s;}).slice(0,4);
    if(!hits.length){var c=CAGE[cageN%CAGE.length];cageN++;return [c];}
    var ul=el("ul","","hits");
    hits.forEach(function(x){var li=el("li");li.appendChild(el("b",x.m.n));li.appendChild(el("span",[x.m.a,x.m.t].filter(Boolean).join(" · ")));ul.appendChild(li);});
    return [hits.length===1?"Dazu passt ein Betrieb:":"Dazu passen "+hits.length+" Betriebe:",ul];
  }
  function ask(qs){
    qs=(qs||"").trim();if(!qs)return;
    if(qs.length>400)qs=qs.slice(0,400);
    bubble("me",[qs]);
    var dots=el("span","","dots");dots.innerHTML="<i></i><i></i><i></i>";
    var typing=bubble("bot",[dots]);
    var finish=function(parts){if(typing.parentNode)chat.removeChild(typing);bubble("bot",parts);};
    var local=function(){setTimeout(function(){finish(localAnswer(qs));},reduce?0:650);};
    if(!CHAT_URL){local();return;}
    var ctrl=window.AbortController?new AbortController():null,timer=setTimeout(function(){if(ctrl)ctrl.abort();},20000);
    fetch(CHAT_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:qs,history:history.slice(-6)}),signal:ctrl?ctrl.signal:undefined})
      .then(function(r){clearTimeout(timer);if(!r.ok)throw new Error("http "+r.status);return r.json();})
      .then(function(d){if(!d||!d.reply)throw new Error("leer");history.push({role:"user",content:qs},{role:"assistant",content:d.reply});finish([d.reply]);})
      .catch(function(){clearTimeout(timer);finish(localAnswer(qs));});
  }
  if(askForm){
    askForm.addEventListener("submit",function(e){e.preventDefault();ask(askIn.value);askIn.value="";});
    [].forEach.call(document.querySelectorAll(".ask-chips button"),function(b){b.addEventListener("click",function(){b.classList.remove("hot");ask(b.textContent);});});
  }

  // ===== Nach oben =====
  var toTop=$("toTop");
  if(toTop){window.addEventListener("scroll",function(){toTop.hidden=window.scrollY<900;},{passive:true});}

})();
