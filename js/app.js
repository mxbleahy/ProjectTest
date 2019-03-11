$(document).ready(function() {
  // axios
  //   .get(
  //     "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=WiS4zAFh6EF8oCPT1RBzIMOOE7Dd8Gjo"
  //   )
  //   .then(function(response) {
  //     newRes = response.data.results;
  //     newRes.forEach(element => {
  //       nyTitle = element.title;
  //       nyUrl = element.url;
  //       nySec = element.section;
  //       nyAbstract = element.abstract;
  //       nyImg = element.thumbnail_standard;
  //       $("#main").append(`<article class="article"><section class="featuredImage"><img src="${nyImg}" alt=""/></section><section class= "articleContent"><a href=${nyUrl}><h3>${nyTitle}</h3></a><h6>${nyAbstract}</h6></section><section class="impressions">${nySec}</section><div class="clearfix"></div></article>`);
  //     });
  //   });

  // axios
  //   .get(
  //     "https://content.guardianapis.com/search?api-key=178bae8d-4b9e-426b-97ab-ab24b2d20c8d"
  //   )
  //   .then(function(response) {
  //     newRes = response.data.response.results;
  //     // console.log(newRes)
  //     newRes.forEach(element => {
  //       guTitle = element.webTitle;
  //       guUrl = element.webUrl;
  //       guSec = element.sectionName;
  //       $("#main").append(
  //         `<article class="article"><section class="featuredImage"><img src="images/guardian.png" alt=""/></section><section class= "articleContent"><a href=${guUrl}><h3>${guTitle}</h3></a><h6>-</h6></section><section class="impressions">${guSec}</section><div class="clearfix"></div></article>`
  //       );
  //     });
  //   });

  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=bcf1ef4ea16b437c9d0b6faf797c26d5"
    )
    .then(function(response) {
      newRes = response.data.articles;
      // console.log(newRes)
      newRes.forEach(element => {
        nsTitle = element.title;
        nsDec = element.description;
        nsUrl = element.url;
        nsImg = element.urlToImage;
        $("#main").append(
          `<article class="article"><section class="featuredImage"><img src="${nsImg}" alt=""/></section><section class= "articleContent"><a href=${nsUrl}><h3>${nsTitle}</h3></a><h6>${nsDec}</h6></section><section class="impressions"></section><div class="clearfix"></div></article>`
        );
      });
    });
});