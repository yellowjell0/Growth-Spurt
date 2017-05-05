window.fbAsyncInit = function() {
          FB.init({
            appId      : '1905488863051135',
            xfbml      : true,
            version    : 'v2.9'
          });
          FB.AppEvents.logPageView();
          FB.getLoginStatus(function(response) {
             if (response.status === 'connected') {
            var uid = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;
          } else if (response.status === 'not_authorized') {
          } else {
              response.status === 'not_authenticated'
          }
          });
        };

        (function(d, s, id){
           var js, fjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) {return;}
           js = d.createElement(s); js.id = id;
           js.src = "//connect.facebook.net/en_US/sdk.js";
           fjs.parentNode.insertBefore(js, fjs);
         }(document, 'script', 'facebook-jssdk'));
