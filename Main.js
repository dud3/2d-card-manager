(function(cm) {
	"use strict";

	cm.Entities.load(cm.serverData).then(function() {
		cm.Events.register();
		cm.MainLoop.main();
	});

})(CardsManager);
