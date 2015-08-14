// * Exam Submit *
// upon submitting exam save answers and
var userAnswers = { }
var answerKey = {
    // ajax call to json file with correct answers
}
//get selected input value from radio buttons and
//assign to userAnswers{}
$('input[type=radio]').click( function() {
    inputName = $(this).attr('name');
    if ( $('input[name='+inputName+']').is(':checked') == true ) {
        userAnswers[inputName] = $(this).val();
    }
});
// calculate score by comparing user answers to answer key
$('.submit-exam').click(function(data){
    console.log(data.toElement.id);
    console.log(data);
    
    /*inputName = $(this).attr('name');
    
    $('input[name='+inputName+']').is(':checked')
    
    for (var i; i < input.length; i++) {
        if ( $('input[name='+inputName+']').is(':checked') == true ) {
            assessment[inputName] = $(this).val();
        }
    }*/
});