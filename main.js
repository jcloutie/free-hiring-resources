// * Filtering *
// technology filter
$('#outlook-filter').on('click',function(){
    $('.excel').css('display','none'); 
    $('.outlook').css('display','block');
});
$('#excel-filter').on('click',function(){
    $('.outlook').css('display','none');
    $('.excel').css('display','block');
});
// proficiency filters
$('#basic-filter').on('click',function(){
    $('.basic').css('display','block');
    $('.intermediate').css('display','none');
    $('.expert').css('display','none');
});
$('#intermediate-filter').on('click',function(){
    $('.basic').css('display','none');
    $('.intermediate').css('display','block');
    $('.expert').css('display','none');
});
$('#expert-filter').on('click',function(){
    $('.basic').css('display','none');
    $('.intermediate').css('display','none');
    $('.expert').css('display','block');
});
// filter reset
$('#reset-filter').on('click',function(){
    $('.exam').css('display','block'); 
});

// * Enable Launch *
var pinStatus;
$('input').keyup(function(){
    var _this = $(this);
    var _nextInput = _this.next('input');
    pinValue = _this.val();
    if ( pinValue.length !== 0 ) {
        pinStatus = true;
        _nextInput.removeClass('btn-default').addClass('btn-success').attr('data-toggle','modal').attr('data-target','#myModal');
        $('.step3').addClass('block'); 
    } else if ( pinValue.length <= 0 ) {
        pinStatus = false;
        _nextInput.removeClass('btn-success').addClass('btn-default').attr('data-toggle','').attr('data-target','');
        $('.step3').removeClass('block'); 
    }
});

// * Exam Modals *
var pin;
$('.launch-btn').click(function(){
    if ( pinStatus === true ) {
        pin = pinValue;
    }
    $('#startExam').attr("href",'exams.html#/' + this.id);
});

// hide start link
function hideStart(){
    $('#startExam').css('display','none');
}


console.log('main.js loaded');