// $(document).ready(function () {
//     $("#btn").click(function () {
//         let count = $("ul").length;
//         let max = 5;
//         let lastElement = $("ul li:last").attr("id");
//         let index = Number(lastElement) + 1;
//         $("ul").append(" <li id=" + index + ">new item added</li><button id='dl'>delete</button> ");
//     });
// });
$(document).ready(function () {
    $(".add").click(function () {

        let total_element = $(".element").length;

        let lastid = $(".element:last").attr("id");
        let split_id = lastid.split("_");
        let nextindex = Number(split_id[1]) + 1;

        let max = 5;

        if (total_element < max) {

            $(".element:last").after("<div class='element' id='div_" + nextindex + "'></div>");


            $("#div_" + nextindex).append("<input type='text' placeholder='Enter your skill' id='txt_" + nextindex + "'>&nbsp;<span id='remove_" + nextindex + "' class='remove'>X</span>");

        }

    });


    $('.container').on('click', '.remove', function () {

        let id = this.id;
        let split_id = id.split("_");
        let deleteindex = split_id[1];


        $("#div_" + deleteindex).remove();

    });
});