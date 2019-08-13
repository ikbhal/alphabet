$(document).ready(function(){

     // client id of the project

     var clientId = "724670417426-8btdgn2uf3igob7u25490bq75kknts1f.apps.googleusercontent.com";

     // redirect_uri of the project

     var redirect_uri = "https://rawcdn.githack.com/ikbhal/alphabet/6a2332f6e0ef8b4e4d5a9f351a9a869389a79083/gdrive/upload.html";

     // scope of the project

     var scope = "https://www.googleapis.com/auth/drive";

     // the url to which the user is redirected to

     var url = "https://rawcdn.githack.com/ikbhal/alphabet/6a2332f6e0ef8b4e4d5a9f351a9a869389a79083/gdrive/upload.html";

     // this is event click listener for the button
     $("#login").click(function(){
        // this is the method which will be invoked it takes four parameters
        signIn(clientId,redirect_uri,scope,url);
     });

     function signIn(clientId,redirect_uri,scope,url){
        // the actual url to which the user is redirected to
        url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
        +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
        +"&access_type=offline";
        // this line makes the user redirected to the url
        window.location = url;
     }
});