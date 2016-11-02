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
    getUsrResource('http://docs.handibot.com/doc-output/Handibot2_Safety.pdf', 'assets/docs/Handibot2_Safety.pdf');
});
$("#get-manual").click(function(evt) {
    getUsrResource('http://docs.handibot.com', 'assets/docs/Handibot2_DOCS.pdf') 
});
$("#go-forum").click(function(evt) {
    getUsrResource('https://handibot.com/forum/list.php?2', 'assets/docs/No_Internet.pdf');
});
$("#get-design").click(function(evt) {
    getUsrResource('http://docs.handibot.com', 'assets/docs/Handibot2_DesignSoftware.pdf');
});


// Other
$("#config-tab-link").click(function(evt) {
	fabmo.getConfig(function(err, cfg) {
		$('#config-system-config').text(JSON.stringify(cfg));
	});
});

