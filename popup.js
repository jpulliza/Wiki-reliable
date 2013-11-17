//var obj

//function callWikipediaAPI(wikipediaPage) {
    // http://www.mediawiki.org/wiki/API:Parsing_wikitext#parse
//$.getJSON('http://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?', { page: wikipediaPage, prop: 'text|images', uselang: 'en' });
//var json = $.getJSON('http://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?', { page: "Millard_Fillmore", prop: 'text|images', uselang: 'en' })

//$.parseJSON(obj)
    //alert(obj.pageid)
//}

//JSON.parse(obj);

//callWikipediaAPI('Millard_Fillmore');

//var json = '{"result":true,"count":1}',
    //obj = JSON.parse(json);

//alert(obj.pageid)

//$(document).ready(function () {
  //  $("button").click(function () {
    //    $.getJSON('http://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?', { page: "Millard_Fillmore", prop: 'text|images', uselang: 'en' }, function (result) {
      //      $.each(result, function (i, field) {
        //        $("div").append(field + " ");
          //  });
//        });
//    });
//});

//$(document).ready(function () {
//    $("button").click(function () {
//        $.getJSON('https://en.wikipedia.org/w/api.php?format=json&action=query&titles=Millard%20Fillmore&prop=revisions&rvprop=content'), function (result) {
//            $.each(result, function (i, field) {
//                $("div").append(field + " ");
//            });
//        };
//    });
//});

//var text = JSON.stringify(text);

var obj = JSON.parse('{"user":"JosephBenbihi","timestamp":"2013-11-17T07:37:34Z"}');

alert(obj.timestamp);

// Sandbox https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&list=abuselog&format=json&afllimit=10&aflprop=user%7Ctimestamp&pageids=19729548&redirects=