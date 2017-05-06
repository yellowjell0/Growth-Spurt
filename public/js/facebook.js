var $registerBtn = $('#register');
var $loginBtn = $('#login');
var response;

function statusChangeCallback(response) {
    console.log('statusChangeCallback');
  if (response.status === 'connected') {
      document.getElementById('fb-root').innerHTML = 'Connected';
    } else if (response.status === 'not_authorized') {
      document.getElementById('fb-root').innerHTML = 'Undefined';
    } else {
      document.getElementById('fb-root').innerHTML = 'Please Log In';
    }
}

function checkLoginState() {
  console.log('checkLoginState')
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

  window.fbAsyncInit = function() {
    console.log("initializing")
    FB.init({
      appId      : '1905488863051135',
      cookie     : true,  // enable cookies to allow the server to access
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8', // use graph api version 2.8
      oauth       : true
    });

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
        console.log('statusChangeCallback');
    });
  };

  // Load the SDK asynchronously
(function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));


  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  // function testAPI(response) {
  //   console.log('Welcome!  Fetching your information.... ');
  function getUserInfo() {
    FB.api('/me', function(response) {
      var str="<b>Name</b> : "+response.name+"<br>";
          str +="<b>Link: </b>"+response.link+"<br>";
          str +="<b>Username:</b> "+response.username+"<br>";
          str +="<b>id: </b>"+response.id+"<br>";
          str +="<b>Email:</b> "+response.email+"<br>";
          str +="<input type='button' value='Get Photo' onclick='getPhoto();'/>";
          str +="<input type='button' value='Logout' onclick='Logout();'/>";
          document.getElementById("status").innerHTML=str;
        });
   }

function getPhoto()
    {
      FB.api('/me/picture?type=normal', function(response) {

          var str="<br/><b>Pic</b> : <img src='"+response.data.url+"'/>";
          document.getElementById("status").innerHTML+=str;

    });

    }


function login(callback) {
    FB.login(function(response) {
      if (response.authResponse) {
        callback(response)
        window.location.reload(true);
      } else {
        // user is not logged in
      }
    }, {scope: 'email'});
  }
//   function login(callback) {
//     FB.login(function(response) {
//         if (response.authResponse) {
//         callback(response)
//       }, {scope: 'email,public_profile', return_scopes: true};
// }, false;
//   })



  function getData(response){
    console.dir(response);
    var data = {
      id: response.authResponse.userID,
      token: response.authResponse.accessToken
    }
    $.ajax ({
      url: $('#register').attr('href'),
      method: $('#register').attr('method'),
      data: data
    })
  }



function isConnected() {
  return document.getElementById('fb-root').innerHTML === 'Connected';
}

  function logout() {
    FB.logout(function(response) {
      window.location.reload();
    });
  }













