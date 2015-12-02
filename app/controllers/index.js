function doOpen(){
	if (OS_ANDROID) {
		var activity = $.getView().activity;
		var menuItem = null;
		
		activity.onCreateOptionsMenu = function(e)	{
			if ($.tabGroup.activeTab.title === "Feed") {
				
				menuItem = e.menu.add({
					//itemId : "Photo",
					title : "Take Photo",
					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS,
					icon : Ti.Android.R.drawable.ic_menu_camera
				});
				menuItem.addEventListener('click', function(e){
					$.feedController.cameraButtonClicked();
				});
			}
		};
		
		activity.invalidateOptionsMenu();
		$.tabGroup.addEventListener('blur', function(_event) {
			$.getView().activity.invalidateOptionsMenu();
		});
	}
}



$.tabGroup.open();

