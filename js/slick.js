$(function () {
  $(".w-s-why-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".w-s-why-list-left",
    nextArrow: ".w-s-why-list-right",
  });
});
$(function () {
  $(".w-s-uniqueness-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".w-s-uniqueness-list-left",
    nextArrow: ".w-s-uniqueness-list-right",
  });
});
$(function () {
  $(".w-s-faq-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".w-s-faq-list-left",
    nextArrow: ".w-s-faq-list-right",
  });
});
$(function () {
  $(".w-s-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".w-s-reviews-list-left",
    nextArrow: ".w-s-reviews-list-right",
  });
});
$(".w-s-reviews-list").on(
  "init reInit afterChange",
  function (event, slick, currentSlide) {
    let i = (currentSlide ? currentSlide : 0) + 1;
    let progress = (i / slick.slideCount) * 100;
    $(".w-s-progress-fill").css("width", progress + "%");
  }
);
