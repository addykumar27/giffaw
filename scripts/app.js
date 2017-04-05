var giphy_api = "http://api.giphy.com/v1/gifs/search";

$(document).on("ready", function(){
  searchGifs();

  $("form").on("submit", function(e) {
    e.preventDefault();

    searchGifs();
  });
});

function searchGifs() {
  $.ajax({
    method: "GET",
    url: "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC",
    data: $("form").serialize(),
    success: onSuccess,
    error: onError
  });
}

function onSuccess(json) {
  $(".gif-img").remove();
  json.data.forEach(function(data,i){
    $(".gif-gallery").append($("<img class='gif-img' src="+data.images.fixed_height.url+">"));
  });
}

function onError(xhr, status, errorThrown) {
  alert("Sorry, there was a problem!");
  console.log("Error: " + errorThrown);
  console.log("Status: " + status);
  console.dir(xhr);
}