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
        var title = JSON.stringify(data.articles[i].description);
        var source = JSON.stringify(data.articles[i].source.name);
        var impression = JSON.stringify(data.articles[i].publishedAt);
        //var link = JSON.stringify(data.articles[i].url);
        //var image = JSON.stringify(data.articles[i].urlToImage);
        var context = {title: title, body: source, impression: impression};
        var html = template(context);
        $('#main').append(html);

        //$('.articleContent h3').text(JSON.stringify(data.articles[i].title));
        //$('.articleContent a').text(JSON.stringify(data.articles[i].title));
        // $('.articleContent h6').text(JSON.stringify(data.articles[i].source.name));
        // $('.featuredImage img').src(JSON.stringify(data.articles[i].source.name));
      }
    }
  })
};

mainNews();
var source   = document.getElementById("entry").innerHTML;
var template = Handlebars.compile(source);

// $.ajax({
//   url: url,
//   method: 'GET',
//   success: function(data) {
//     var author = data.articles[0].author;
//     $('.articleContent h6').text(JSON.stringify(author));
//   },
// }).done(function(data) {
//   var articles = data.articles;
//   var title = data.articles[2].title;
//   var type = data.articles[4].source.id;
//   var author = data.articles.author;
//   console.log($(data));
//   console.log(author);
//   console.log(data);
//   //console.log(articles);
//   console.log(title);
//   //console.log($(type));
//   console.log(type);
// });
