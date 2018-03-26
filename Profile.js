 // main document ready function to check if dom is loaded fully or not 

$(document).ready(function() {
    var myFacebookToken = 'EAACEdEose0cBAJY2IiPvDx0vBssKZAg7unImXQKZBK3mnp94fMVjVgusa3Im7bsxcmtsKoswu7gtJFC1uUqkg9Q3aOpIZBKGgz5xWTmRjir4zMSuQxv3y4UFsZBAg0rGh1SRZB3GdcKzd3niIHd6eHNM0fkZCnCC10W0L3stxxB7MQEJW4fBZAJotiqMpCg4ULdzb4znnuOIwZDZD';
  
     $("#WorkEdu").hide();
    $("#Places").hide();
   $("#Contact").hide();
   //Work and Education 
    function getFacebookWokInfoEdu(){
        $("#Places").hide();
        $("#Contact").hide();
        $("#WorkEdu").show();
        $.ajax('https://graph.facebook.com/me/?fields=education,work&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myWork").text("");
                    $("#myColg").text("");
                    $("#mySchool").text("");
                    $.each(response.work,function(key , value){ 
                            $("#myWork").append("<b>Company:</b> " +value.employer.name + "<br>"); 
                            $("#myWork").append("<b>Location:</b> " + value.location.name + "<br>");
                            $("#myWork").append("<b>Postion:</b> " + value.position.name + "<br>");                      
                         });
                                                
                   $.map(response.education,function(element,index)
                         { 
                           for(i in element.concentration)
                           {     
                                 $("#myColg").append("<b>Degree:</b> " + element.concentration[i].name + "<br>");
                           }
                           $.each(element,function(index, value)  {
                               if(value=='College')
                               {
                                 $("#myColg").append("<b>Year:</b> " + element.year.name + "<br>");
                                $("#myColg").append("<b>Colg:</b> " + element.school.name + "<br>");
                               }
                                   
                               if(value=='High School')
                                   {
                               $("#mySchool").append("<b>Year:</b> " + element.year.name + "<br>");
                                $("#mySchool").append("<b>School:</b> " + element.school.name + "<br>");

                                   }
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
    
   //Places
function getFacebookPlacesInfo(){
    $("#WorkEdu").hide();
    $("#Contact").hide();
    $("#Places").show();
        $.ajax('https://graph.facebook.com/me/?fields=hometown,location&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                $("#myPlaces").text("");
                            $("#myPlaces").append("<b>Company:</b> " +response.hometown.name + "<br>"); 
                            $("#myPlaces").append("<b>Location:</b> " + response.location.name + "<br>");
                    
                },
                error : function(request,errorType,errorMessage){
                    console.log(request);
                    console.log(errorType);
                    console.log(errorMessage);
                }
            }//end argument list 
        );// end ajax call 
    }// end get facebook  info

    //personal Info
    function getFacebookPersonalInfo(){     
    $("#Places").hide();
    $("#WorkEdu").hide();
        $("#Contact").show();  
        $.ajax('https://graph.facebook.com/me/?fields=email,birthday,currency,gender,languages,about,favorite_athletes,quotes&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myPersonalInfo").text("");
                    $("#myPersonalInfo").append("<b>Email:</b> " +response.email + "<br>"); 
                    $("#myPersonalInfo").append("<b>BirthDay:</b> " +response.birthday+"<br>");
                    $("#myPersonalInfo").append("<b>Currency:</b> " +response.currency.user_currency+"<br>");
                    $("#myPersonalInfo").append("<b>Gender:</b> " +response.gender+"<br>");
                    $("#myPersonalInfo").append("<b>Language:</b>  ");
                     for(i in response.languages)
                           {     
                                $("#myPersonalInfo").append(response.languages[i].name + " Language "); 
                           } 
                    $("#myPersonalInfo").append("<br><b>Favourite Quotes:</b>  " +response.quotes+"<br>");
                     $("#myPersonalInfo").append("<b>Favourite Athletes:</b> ");
                    for(i in response.favorite_athletes)
                           {     
                                $("#myPersonalInfo").append(response.favorite_athletes[i].name); 
                           }
                }, 
                error : function(request,errorType,errorMessage){
                    console.log(request);
                    console.log(errorType);
                    console.log(errorMessage);
                }
            }//end argument list 
        );// end ajax call 
    }// end get facebook info
    
    $("#btnWorkEdu").on('click',getFacebookWokInfoEdu);
    $("#btnWorkEdu").trigger('click');
    $("#btnPlaces").on('click',getFacebookPlacesInfo);
    $("#btnContact").on('click',getFacebookPersonalInfo);
    
  });