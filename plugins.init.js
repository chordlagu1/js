function checkMusicType(){jQuery('input[name="music-type"]').parent().removeClass('radio-item-active');jQuery('input[name="music-type"]:checked').parent().addClass('radio-item-active');}
jQuery('input[name="music-type"]').on('change',checkMusicType);checkMusicType();jQuery("pre").transpose();jQuery("pre span:first").css('font-weight','bold');jQuery("span").filter(function(){return jQuery(this).text().indexOf(" :")>=0}).css('font-weight','bold');jQuery(".transpose-keys a").filter(function(){return jQuery.inArray(jQuery(this).text(),["Ab","A#","Db","Eb","Gb"])!==-1}).hide();jQuery("#btnPDF").click(function(){var form=document.createElement("form");var textarea=document.createElement("textarea");var input=document.createElement("input");var html=jQuery("pre").clone();jQuery("span",html).first().text(jQuery("span",html).first().text().replace("Chord ",""));jQuery("span",html).first().after("Key : "+jQuery(".selected").text());jQuery("span",html).first().wrap("<h1></h1>");form.method="POST";form.action="/pdf/pdf.php";textarea.name="HTML";textarea.value="<pre>"+html.html()+"</pre>";var artist=jQuery('.song-detail-artist').text();var artistText=artist?' ('+artist+')':'';input.name="Title";input.value=jQuery(".song-detail-title").text()+artistText;form.appendChild(textarea);form.appendChild(input);document.body.appendChild(form);form.submit();form.remove();});jQuery("#btnPrint").click(function(){var html=jQuery("pre").clone();jQuery("span",html).first().after("<br><span>Key : "+jQuery(".selected").text()+"</span>");jQuery("span",html).first().text(jQuery("span",html).first().text().replace("Chord ","")).css({"font-size":"2em","font-weight":"bold"});var w=window.open();w.document.write("<style>.c,.on{ color: #007acc; }</style>");w.document.write("<link rel='icon' href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXFp6mPvg671udUaektHlNrJztWM74442tzR8DdP33DnWhxOtB2hAGnH_Rm6J3swmBvL1671o1Gk5dJ1LgfXIabeDtpWZMesNsEDPEJZFG1V9lDXWNVQZLFMBd2tqoLCSqBIEtrs3kaaAMrSP_-_QXqWL3EJ--hDI6CdtiQZBy4KzwIDCLu9CiEEmBXY7f/s320/Chordlagu1.png' type='image/x-icon'/>");w.document.write("<label style='font-size:2em; font-weight:bold'>CHORD-LAGU.COM</label>"+"<pre>"+html.html()+"</pre>");w.document.title="Cetak - Chord-Lagu.com";w.document.close();w.focus();w.print();w.close();});jQuery("#btnPDF,#btnPrint").attr("disabled",false);jQuery("#spinnerTransposer").hide();var head=document.getElementsByTagName('head')[0];jQuery('input[name="music-type"][value="Piano"]').one('click',function(){var scriptPiano=document.createElement('script');scriptPiano.src='/wp-includes/js/piano.js';var cssPiano=document.createElement('link');cssPiano.rel='stylesheet';cssPiano.href='/wp-includes/css/piano.css';head.append(scriptPiano);head.append(cssPiano);});jQuery('span.c').one('mouseover',function(e){var $span=jQuery(this);var scriptTooltip=document.createElement('script');scriptTooltip.src='/wp-includes/js/jquery/jquery.tooltip.js';var cssTooltip=document.createElement('link');cssTooltip.rel='stylesheet';cssTooltip.href='/wp-includes/css/jquery.tooltip.css';head.append(scriptTooltip);head.append(cssTooltip);scriptTooltip.onload=function(){var scriptRaphael=document.createElement('script');scriptRaphael.src='https://cdn.statically.io/gh/chordlagu1/js/main/raphael.js';head.append(scriptRaphael);scriptRaphael.onload=function(){var scriptJTab=document.createElement('script');scriptJTab.src='/wp-includes/js/jtab.js';head.append(scriptJTab);scriptJTab.onload=function(){jQuery('span.c').off('mouseover');var scriptInitPlugins=document.createElement('script');scriptInitPlugins.src='/wp-includes/js/jquery/plugins.init.js?v=0.1.0';head.append(scriptTooltip,scriptJTab,scriptInitPlugins);scriptInitPlugins.onload=function(){$span.trigger('mouseover')};};};};});jQuery('.transpose-keys').wrap('<div id="chord-settings" class="flex"></div>');jQuery('#chord-settings').append('<div class="font-size-setting"><button id="btnDecreaseFontSize" class="font-size-button mr-1"><img src="https://cdn.statically.io/gh/chordlagu1/js/main/search-minus.svg" width="16"></button><button id="btnIncreaseFontSize" class="font-size-button"><img src="https://cdn.statically.io/gh/chordlagu1/js/main/search-plus.svg" width="16"></i></button></div>');jQuery('#btnIncreaseFontSize').click(function(){var fontSize=jQuery('pre').css('font-size');var fontSizeNumber=Number(fontSize.replace('px',''));if(fontSizeNumber<20){var nextFontSize=fontSizeNumber+1;jQuery('pre').css('font-size',nextFontSize+'px');}});jQuery('#btnDecreaseFontSize').click(function(){var fontSize=jQuery('pre').css('font-size');var fontSizeNumber=Number(fontSize.replace('px',''));if(fontSizeNumber>8){var nextFontSize=fontSizeNumber-1;jQuery('pre').css('font-size',nextFontSize+'px');}});