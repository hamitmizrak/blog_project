/*
JS
NAME: Blog Project
AUTHOR: By hamit Mızrak
DATE: 21/05/2023
VERSION: v.1
*/

darkMode=()=>{
    let darkButton=document.body.classList.toggle("dark_mode_classlist")
}

$(function() {
    const searchData=["Adana","Balikesir","Ceyhan","Diyarbakır","Elazığ","Malatya"];
    $("#tags").autocomplete({
        source:searchData
    });
    }
);