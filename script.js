setInterval(function(){
	var skip = document.getElementsByClassName("ytp-ad-skip-button");
	var banner =  document.getElementsByClassName("ytp-ad-overlay-close-button");
	if(skip != undefined && skip.length > 0){
		skip[0].click();
	}
	if(banner != undefined && banner.length > 0){
		banner[0].click();
	}
	
},3000)