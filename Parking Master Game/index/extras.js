var errC=setInterval(function(){loc.search.includes("?timeout-exceeded=true")&&(clearInterval(errC),document.alert({title:'Error',html:'Oops! A timeout exceeded of over '+100*Math.ceil(Number(new URLSearchParams(location.search).get("timeout-time"))/100)+'ms. Here is what you can do:<br><ul><li>Try again in a few minutes. - Website may have too much traffic</li><br><li>Check your network connection.</li><br><li>If javascript is disabled, enable it in your browser.</li></ul><br><b>Error Code: <span style="opacity:0.6;cursor:pointer;text-decoration:underline;" onclick="location.href=\'/help.html#err-connection-timed-out\'">ERR_CONNECTION_TIMED_OUT</span></b>',button:'Close'}));},1000);setInterval(function(){document.querySelector("details").hasAttribute("open")?document.querySelector("details").querySelector("summary").style.borderRight="none":document.querySelector("details").querySelector("summary").style.borderRight="0.1vw solid #222"},100);const md=(e,E)=>({month:e,day:E}),toMd=e=>md(e.getMonth(),e.getDate()),before=(e,E)=>e.month<E.month||e.month===E.month&&e.day<=E.day,after=(e,E)=>!before(e,E),between=(e,E,t)=>after(e,E)&&before(e,t),season=(e,t)=>((E=toMd(e))=>Object.keys(t).find(e=>t[e](E)))(),MARCH_EQUINOX=md(2,20),JUNE_SOLSTICE=md(5,21),SEPTEMBER_EQUINOX=md(8,23),DECEMBER_SOLSTICE=md(11,21),NEW_YEAR=md(0,1),seasons={spring:e=>between(e,MARCH_EQUINOX,JUNE_SOLSTICE),summer:e=>between(e,JUNE_SOLSTICE,SEPTEMBER_EQUINOX),fall:e=>between(e,SEPTEMBER_EQUINOX,DECEMBER_SOLSTICE),winter:e=>between(e,DECEMBER_SOLSTICE,NEW_YEAR)||between(e,NEW_YEAR,MARCH_EQUINOX)};function getSeason(){return season(new Date,seasons)}!async function(){getSeason()&&("spring"==getSeason()||"summer"==getSeason()||("fall"==getSeason()?void(0):getSeason()))}();document.head.innerHTML+='<style>.pm-tooltip{position:relative;display:inline-block;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pm-tooltip .pm-popuptext{visibility:hidden;width:130px;background-color:#bbb;color:#555;text-align:center;border-radius:6px;padding:8px 0;position:absolute;z-index:100;bottom:125%;left:50%;margin-left:-80px;cursor:text;font-family:Arial,helvetica,sans-serif,Lato,Roboto,Verdana!important;text-align:center}.pm-tooltip .pm-popuptext::after{content:"";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#ababab transparent transparent transparent}.pm-tooltip .show{visibility:visible;-webkit-animation:fadeIn .15s;animation:fadeIn .1s}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}</style>';for(var pmTooltipText,pmTooltip,i=0;i<document.querySelectorAll(".pm-tooltip").length;i++)pmTooltip=document.querySelectorAll(".pm-tooltip")[i],pmTooltipText=document.querySelectorAll(".pm-popuptext")[i];function openPopUp(){pmTooltipText.classList.toggle("show")}function closePopUp(){pmTooltipText.classList.toggle("show")}pmTooltip.onmouseover=setTimeout(openPopUp,1000),pmTooltip.onmouseout=closePopUp;