var args = arguments[0] || {};

OS_IOS && $.cameraButton.addEventListener('click', function(_event) {
	$.cameraButtonClicked(_event);
});

$.cameraButtonClicked = function(_event) {
	alert("user clicked camera button");

	var photoSource = Titanium.Media.getIsCameraSupported() ?
	Titanium.Media.showCamera : Titanium.Media.openPhotoGallery;
	 
photoSource ({
	success : function(event) {
		processImage(event.media, function(_photoResp){
			photoObject = _photoResp;
		});
},
	cancel : function(){
		
	},
	error : function(error){
		if (error.code == Titanium.Media.NO_CAMERA) {
			alert('Please run this test on device');
		} else {
			alert('Unexpected error: ' + error.code);
		}
	},
	saveToPhotoGallery : false,
	allowEditing : true,
	mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO]
	});

function processImage(_mediaObject, _callback) {
	var photoObject = {
		image : mediaObject,
		title : "Sample Photo " + new Date()
	};
	_callback(photoObject);
};
