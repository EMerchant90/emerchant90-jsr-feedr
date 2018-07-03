/*
  Please add all Javascript code to this file.
*/

// var defaultURL = 'https://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=a557903c3a56475285f31f2a306fb69a';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })


var newsSource = 'country=us';
var ign = 'sources=ign';
var bReport = 'sources=bleacher-report';
var tCrunch = 'sources=techcrunch';
var engadget = 'sources=engadget';
var reddit = 'sources=reddit-r-all';
var https = 'https://newsapi.org/v2/top-headlines?'
var api = '&apiKey=a557903c3a56475285f31f2a306fb69a';

var news;

var url =  https + newsSource + api;
var ignURL = https + ign + api;
console.log(url);
console.log(ignURL);

function mainNews() {
  var url = https + newsSource + api;

  $.ajax({
    url: ignURL,
    method: 'GET',
    success: function(data) {
      console.log(data);
      console.log(data.articles);
      for (var i = 0; i < data.articles.length; i++) {
        var title = data.articles[i].description;
        var source = data.articles[i].source.name;
        var impression = data.articles[i].publishedAt;
        var link = data.articles[i].url;
        var imageURL = data.articles[i].urlToImage;
        console.log("imageURL" + i + " = "+imageURL);
        news = '<article class="article"><section class="featuredImage"><img src="'+imageURL+'" alt=""/></section><section class="articleContent"><a href="'+link+'"><h3>'+title+'</h3></a><h6>'+source+'</h6></section><section class="impressions">'+impression+'</section><div class="clearfix"></div></article>'
        $("#newsFeedHolder").append(news);
      }
    }
  })
};

mainNews();
