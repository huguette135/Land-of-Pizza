$(document).ready(function(){
    $('#checkout').click(function() {

        var pizza = $("#size").val();
        var number = $("#number").val();

        var totalAmount = pizza * number;
    
        $("#output").text("here is the total amount  "+ totalAmount);
       
        

    })
})
