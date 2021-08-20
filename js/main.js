var TAG = "[main]";
var clog = console.log;

$(function () {
    clog(TAG + "[starts]");
    $(".slider-button").click(function () {
        let total_slides = $(this).parent().children().length - 2;
        let section_id = $(this).parent().parent().attr("id");
        let type = $(this).attr("type");
        let slide_item = $(this).siblings(".current-item");
        current_slide_id = Number.parseInt($(slide_item).attr("item-id"));
        if (type == "left") {
            new_slide_id = (current_slide_id - 1) % total_slides;
        } else if (type == "right") {
            new_slide_id = (current_slide_id + 1) % total_slides;
        }
        if (new_slide_id < 0) {
            new_slide_id += total_slides;
        }
        $(slide_item).removeClass("current-item");
        let selector = `#${section_id} .slider-item[item-id=${new_slide_id}]`;
        $(selector).addClass("current-item");
    });
    clog(TAG + "[ends]");
});