// System for Displaying local or network Files and links
function getUsrResource(remote, local) {
  fabmo.isOnline(function(err, online) {
    if(err) {
      console.log("isOnline Error");
      return;         
    }
    if(online) {
      fabmo.navigate(remote,{target : '_blank'});    }
      //fabmo.navigate(remote,{target : '_self'});    }
    else {
      fabmo.navigate(local,{target : '_blank'});
    }
  });
}

// Calls to Display System
$("#get-safety").click(function(evt) {
    getUsrResource('http://docs.handibot.com/doc-output/Handibot_Safety.pdf', 'assets/docs/Handibot 2 MANUAL Safe Use Source_v002.pdf');
});
$("#get-manual").click(function(evt) {
    fabmo.navigate('http://docs.handibot.com', {target : '_blank'});
});
$("#go-forum").click(function(evt) {
    fabmo.navigate('https://handibot.com/forum/list.php?2', {target : '_blank'});
});
$("#get-design").click(function(evt) {
    fabmo.navigate('http://docs.handibot.com', {target : '_blank'});
});



//        getUsrResource('http://www.shopbottools.com/ShopBotDocs/files/SBG00253140912CommandRefV3.pdf', 'assets/docs/ComRef.pdf')       
//        getUsrResource('https://handibot.com/forum/list.php?2', 'assets/docs/No_Internet.pdf');




// Other
$("#config-tab-link").click(function(evt) {
	fabmo.getConfig(function(err, cfg) {
		$('#config-system-config').text(JSON.stringify(cfg));
	});
});

fabmo.getConfig(function(err, cfg) {
	$('#config-system-config').text(JSON.stringify(cfg));
});

