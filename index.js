$("h1").css("color", "red");

$("button").text("yes");

console.log($("img").attr("src"));

$("a").attr("href", "https//www.yahoo.com/")

$("h1").click(function(){
    $("h1").css("color", "green")
});


$("button").click(function(){
    $("h1").text("no");
});

$(document).keypress(function(event) {
    $("h1").text(event.key);
});

var userInput = $("#textInput").val();



// $("#textInput").on("keyup", function() {
//     var userInput = $("#textInput").val();
//     $("#font1").text(userInput);
// })



$(document).ready(function() {
    // When an option is selected in the dropdown
    $("#test2").change(function() {
        // Get the font family of the selected option
        var selectedFont = $(this).children("option:selected").css("font-family");

        // Apply the font family to the textarea for text preview
        $("#textPreview").css("font-family", selectedFont);
    });
});