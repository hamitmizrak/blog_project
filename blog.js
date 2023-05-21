/*
JS
NAME: Blog Project
AUTHOR: By hamit Mızrak
DATE: 21/05/2023
VERSION: v.1
*/

/* DARK MODE */
darkMode = () => {
    let darkButton = document.body.classList.toggle("dark_mode_classlist")
}

/* SEARCH */
$(function () {
    const searchData = ["Adana", "Balikesir", "Ceyhan", "Diyarbakır", "Elazığ", "Malatya"];
    $("#tags").autocomplete({
        source: searchData
    });
});

/* BACK TOP */
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $("#back_top").fadeIn('slow');
        }else{
            $("#back_top").fadeOut('slow');
        }
    });
    $("#back_top").click(function(){
        $("html, body").animate({scrollTop:0},90,'easeInOutExpo');
        return false;
    })
});