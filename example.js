jQuery(function() {
  $(".text-area").readMore({lines: 2})
});

$("#apply").on("click", function() {
  var options = {
    lines: $("#lines").val(),
    readMoreLabel: $("#readMoreLabel").val(),
    readLessLabel: $("#readLessLabel").val(),
    ellipsis: $("#ellipsis").val()
  };
  $(".text-area-custom").readMore("destroy");
  $(".text-area-custom").readMore(options);
});