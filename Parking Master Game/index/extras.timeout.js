var errC=setInterval(function(){loc.search.includes("?timeout-exceeded=true")&&(clearInterval(errC),document.alert({title:'Error',html:'Oops! A timeout exceeded of over '+100*Math.ceil(Number(new URLSearchParams(location.search).get("timeout-time"))/100)+'ms. Here is what you can do:<br><ul><li>Try again in a few minutes. - Website may have too much traffic</li><br><li>Check your network connection.</li><br><li>If javascript is disabled, enable it in your browser.</li></ul><br><b>Error Code: <span style="opacity:0.6;cursor:pointer;text-decoration:underline;" onclick="location.href=\'/help.html#err-connection-timed-out\'">ERR_CONNECTION_TIMED_OUT</span></b>',button:'Close'}));},1000);