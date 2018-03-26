 // main document ready function to check if dom is loaded fully or not
$(document).ready(function() {
    var myFacebookToken = 'EAACEdEose0cBAJY2IiPvDx0vBssKZAg7unImXQKZBK3mnp94fMVjVgusa3Im7bsxcmtsKoswu7gtJFC1uUqkg9Q3aOpIZBKGgz5xWTmRjir4zMSuQxv3y4UFsZBAg0rGh1SRZB3GdcKzd3niIHd6eHNM0fkZCnCC10W0L3stxxB7MQEJW4fBZAJotiqMpCg4ULdzb4znnuOIwZDZD';
    function getFacebookFeed(){
        $.ajax('https://graph.facebook.com/me?fields=feed.limit(6){picture,story,message,created_time}&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myFeed").text(""); 
                    $("#feedimage").text("");
                        $(response.feed).map(function(i,val) {
                         $(val.data).each(function(i) {
                           ;
                        $("#myFeed").append("<h2>Feed "+(i+1)+": Story:" + val.data[i].story + "</h2><br><h2> Posted On:" + val.data[i].created_time + "</h2><br>" + "<img SRC=" + val.data[i].picture+">" + "<br><hr>");
                           });
                    });
                    
                },
                error : function(request,errorType,errorMessage){
                    console.log(request);
                    console.log(errorType);
                    console.log(errorMessage);
                }
            }//end argument list 
        );// end ajax call 
    }// end get facebook info    
    $("#btnFeed").on('click',getFacebookFeed);
    $("#btnFeed").trigger('click');
  });