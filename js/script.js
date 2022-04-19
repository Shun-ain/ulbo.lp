"use strict";

// $("input[type='checkbox']").change(function () {
// 	if ($('.--list01:checked').length > 0 && $('input[name="qa2"]:checked').length > 0 && $$('input[name="qa3"]:checked').length > 0) {
// 		$('.info').addClass('is-open');
// 	}
// });
$("input[type='checkbox']").change(function () {
  if ($('.--list01 :checked').length > 0 && $('.--list02 :checked').length > 0 && $('.--list03 :checked').length > 0) {
    $('.info').addClass('is-open');
  }
});
$("[name='qa2']").on('click', function () {
  if ($(this).prop('checked')) {
    $("[name='qa2']").prop('checked', false);
    $(this).prop('checked', true);
  }
});