/*
  Please add all Javascript code to this file.
*/

var newsSource = 'country=us';
var ign = 'sources=ign';
var bReport = 'sources=bleacher-report';
var tCrunch = 'sources=techcrunch';
var engadget = 'sources=engadget';
var reddit = 'sources=reddit-r-all';
var https = 'https://newsapi.org/v2/top-headlines?';
var api = '&apiKey=a557903c3a56475285f31f2a306fb69a';

var news;

var tCrunchURL =  https + tCrunch + api;
var ignURL = https + ign + api;
var engadgetURL = https + engadget + api;

// console.log(url);
// console.log(ignURL);

function mainNews() {

  $.ajax({
    url: ignURL,
    method: 'GET',
    success: function(data) {
      console.log(data);
      console.log(data.articles);
      for (var i = 0; i < data.articles.length; i++) {
        var title = data.articles[i].title;
        var author = data.articles[i].author
        var description = data.articles[i].description
        var impression = data.articles[i].publishedAt;
        var link = data.articles[i].url;
        var imageURL = data.articles[i].urlToImage;
        //console.log("imageURL" + i + " = "+imageURL);
        news = '<article class="article"><section class="featuredImage"><img src="'+imageURL+'" alt=""/></section><section class="articleContent"><a href="#"><h3>'+title+'</h3></a><h6>'+author+'</h6></section><section class="impressions">'+impression+'</section><div class="clearfix"></div></article>'
        $("#newsFeedHolder").append(news);

        $(document).on("click", ".articleContent", function() {
           document.getElementById("popUp").classList.remove("hidden");
           var windows = '<a href="#" class="closePopUp">X</a><div class="container"><h1>'+title+'</h1><p>'+description+'</p><a href="'+link+'" class="popUpAction" target="_blank">Read more from source</a></div>'

           $("#popUp").empty();
           $("#popUp").append(windows);

           $(document).on("click", ".closePopUp", function() {
             document.getElementById("popUp").classList.add("hidden");
           });
           
        });
      }
    }
  })
};





mainNews();
