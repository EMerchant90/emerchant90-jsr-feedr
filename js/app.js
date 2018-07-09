/*
  Please add all Javascript code to this file.
*/

var ign = 'sources=ign';
var tCrunch = 'sources=techcrunch';
var engadget = 'sources=engadget';

var https = 'https://newsapi.org/v2/top-headlines?';
var api = '&apiKey=a557903c3a56475285f31f2a306fb69a';

var news;
var windows;

var tCrunchURL =  https + tCrunch + api;
var ignURL = https + ign + api;
var engadgetURL = https + engadget + api;

// var title;
// var description;
// var link;

// console.log(url);
// console.log(ignURL);

function mainNews(url) {

  $.ajax({
    url: url,
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

        news = '<article class="article"><section class="featuredImage"><img src="'+imageURL+'" alt=""/></section><section class="articleContent" id="'+i+'"><a href="#"><h3>'+title+'</h3></a><h6>'+author+'</h6></section><section class="impressions">'+[i+1]+'</section><div class="clearfix"></div></article>'
        $("#newsFeedHolder").append(news);
        console.log(i);

        $(document).on("click", ".articleContent", function() {
           $("#popUp").removeClass("hidden");
           windows = '<a href="#" class="closePopUp">X</a><div class="container"><h1>'+data.articles[$(this).attr("id")].title+'</h1><p>'+data.articles[$(this).attr("id")].description+'</p><a href="'+data.articles[$(this).attr("id")].url+'" class="popUpAction" target="_blank">Read more from source</a></div>'
           console.log(i);
           console.log(windows);
           $("#popUp").empty();
           $("#popUp").append(windows);

           $(document).on("click", ".closePopUp", function() {
             $("#popUp").addClass("hidden");
           });

        });
      }
    },
    error: function(ex) {
      alert('Request Status: ' + ex.status + ' Status Text: ' + ex.statusText + ' ' + ex.responseText);
    }
  })
};

// $(document).on("click", ".article", function() {
//    document.getElementById("popUp").classList.remove("hidden");
//    windows = '<a href="#" class="closePopUp">X</a><div class="container"><h1>'+title+'</h1><p>'+description+'</p><a href="'+link+'" class="popUpAction" target="_blank">Read more from source</a></div>'
//    // console.log(i);
//    console.log(windows);
//    $("#popUp").empty();
//    $("#popUp").html(windows);
//
//    $(document).on("click", ".closePopUp", function() {
//      document.getElementById("popUp").classList.add("hidden");
//    });
//
// });

mainNews(ignURL)

function emptyNews() {
  $("#newsFeedHolder").html('');
}

$("#ign").click(function() {
  emptyNews();
  document.getElementById("source").textContent='IGN';
  return mainNews(ignURL);
})

$("#techCrunch").click(function() {
  emptyNews();
  document.getElementById("source").textContent="Tech Crunch";
  return mainNews(tCrunchURL);
})

$("#engadget").click(function() {
  emptyNews();
  document.getElementById("source").textContent="Engadget";
  return mainNews(engadgetURL);
})
