setInterval(function(){
		let skip = document.getElementsByClassName("ytp-ad-skip-button-modern");
		if(skip != undefined && skip.length > 0){
			skip[0].click();
		}

		let banner =  document.getElementsByClassName("ytp-ad-overlay-close-button");
		if(banner != undefined && banner.length > 0){
			banner[0].click(); // use remove
		}

		let right_add = document.getElementById("player-ads");
		if(right_add != undefined){
			right_add.remove();
		}
},3000)
