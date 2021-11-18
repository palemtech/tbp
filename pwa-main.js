function invokeServiceWorkerUpdateFlow(registration) {
    // TODO implement your own UI notification element
	var snackbarContainer = document.querySelector('#update-snackbar');
	var handler = function(event) {
		console.log("ok to update");
		
        // let waiting Service Worker know it should became active
        registration.waiting.postMessage({type:'SKIP_WAITING'})
	};
    var data = {
		message: "Klik Ok óntók update?",
		timeout: 4000,
		actionHandler: handler,
		actionText: "Ok"
	};
	
	snackbarContainer.MaterialSnackbar.showSnackbar(data);
	
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./sw.js').then(function(registration) {
		if (registration.waiting) {
			invokeServiceWorkerUpdateFlow(registration);
		}
		
		registration.addEventListener('updatefound', function(){
			if (registration.installing) {
				registration.installing.addEventListener('statechange', function() {
					if (registration.waiting) {
						if (navigator.serviceWorker.controller) {
							invokeServiceWorkerUpdateFlow(registration);
						} else {
							console.log('ServiceWorker initialized for the first time.');
						}
					}
				});
			}
		});
		
		let refreshing = false;
		
		navigator.serviceWorker.addEventListener('controllerchange', function() {
			if (!refreshing) {
				window.location.reload();
				refreshing = true;
			}
		});
		
      // Registration was successful
      // console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

