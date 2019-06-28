$( document ).ready(function() {
  $(".mdl-list__item").on("click", function() {
    $(this).animate(
      {
        height: 100
      }, 300,
      () => {
        $(this)
          .find(".message")
          .fadeIn();
      }
    );
  });
});