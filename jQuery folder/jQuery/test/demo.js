$(document).ready(function () {

    // Add new element
    $(".add").click(function () {

        // Finding total number of elements added
        let total_element = $(".element").length;

        // last <div> with element class id
        let lastid = $(".element:last").attr("id");
        let split_id = lastid.split("_");
        let nextindex = Number(split_id[1]) + 1;

        let max = 5;
        // Check total number elements
        if (total_element < max) {
            // Adding new div container after last occurance of element class
            $(".element:last").after("<div class='element' id='div_" + nextindex + "'></div>");

            // Adding element to <div>
            $("#div_" + nextindex).append("<input type='text' placeholder='Enter your skill' id='txt_" + nextindex + "'>&nbsp;<span id='remove_" + nextindex + "' class='remove'>X</span>");

        }

    });

    // Remove element
    $('.container').on('click', '.remove', function () {

        let id = this.id;
        let split_id = id.split("_");
        let deleteindex = split_id[1];

        // Remove <div> with id
        $("#div_" + deleteindex).remove();

    });
});