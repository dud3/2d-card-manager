(function(CardsManager) {

	function load(src) {
		return new Promise(function(resolve, reject) {
			var image = new Image();

			image.onload = function(e) {
				resolve({ e, image })
			}

			image.src = src
		})
	}

	CardsManager.Image = load;

})(CardsManager);
