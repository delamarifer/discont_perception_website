document.getElementById("matchange").disabled = true;
document.getElementById("masschange").disabled = true;

$('#objectnum .btn').click(function(e) {
    $('#objectnum .btn').not(this).removeClass('active');    
    $(this).toggleClass('active');
    e.preventDefault();
});

$('#soundtype .btn').click(function(e) {
    $('#soundtype .btn').not(this).removeClass('active');    
    $(this).toggleClass('active');
    e.preventDefault();
});

$('#cubesize .btn').click(function(e) {
    $('#cubesize .btn').not(this).removeClass('active');    
    $(this).toggleClass('active');
    e.preventDefault();
});
$('#mat .btn').click(function(e) {
    $('#mat .btn').not(this).removeClass('active');    
    $(this).toggleClass('active');
    e.preventDefault();
});
$('#cont .btn').click(function(e) {
    $('#cont .btn').not(this).removeClass('active');    
    $(this).toggleClass('active');
    e.preventDefault();
});



$('#mass .btn').click(function(e) {
    $('#mass .btn').not(this).removeClass('active');    
    $(this).toggleClass('active');
    e.preventDefault();
});
$('#scrapemat .btn').click(function(e) {
    $('#scrapemat .btn').not(this).removeClass('active');    
    $(this).toggleClass('active');
    e.preventDefault();
});


$('#soundcont .btn').click(function(e) {
    $('#soundcont .btn').not(this).removeClass('active');    
    $(this).toggleClass('active');
    e.preventDefault();
    // if($(this).html()=="2")
    // {
    //     $('#matchange .btn').removeAttr('disabled');
    //     $('#masschange .btn').removeAttr('disabled');

        
    //     // $('#cont2 .btn').attr('disabled','disabled');
    //     // $('#sound2 .btn').attr('disabled','disabled');
    //     // $('#soundmat2 .btn').attr('disabled','disabled');
      
    // }
    // else{
    //     $('#matchange .btn').attr('disabled','disabled');
    //     $('#masschange .btn').attr('disabled','disabled');
    //     masschange = "FALSE";
    //     matchange = "FALSE";

    //     // $('#cont2 .btn').removeAttr('disabled');
    //     // $('#sound2 .btn').removeAttr('disabled');
    //     // $('#soundmat2 .btn').removeAttr('disabled');
    // }
});
$('#masschange .btn').click(function(e) {
    $('#masschange .btn').not(this).removeClass('active');    
    $(this).toggleClass('active');
    e.preventDefault();
});
$('#matchange .btn').click(function(e) {
    $('#matchange .btn').not(this).removeClass('active');    
    $(this).toggleClass('active');
    e.preventDefault();
});



var objectnum = "One";
$("#objectnum > button.btn").on("click", function(){
    objectnum = $(this).html();
    //alert("Value is " + objectnum);
});

var cubesize = "Small";
$("#cubesize > button.btn").on("click", function(){
    cubesize = $(this).html();
    // alert("Value is " + mass);
});
var mat = "Wood";
$("#mat > button.btn").on("click", function(){
    mat = $(this).html();
    //alert("Value is " + mat);
});
var cont = 0;
$("#cont > button.btn").on("click", function(){
    cont = $(this).html();
    //alert("Value is " + cont);
});
var mass = 0.1;
$("#mass > button.btn").on("click", function(){
    mass = $(this).html();
    //alert("Value is " + soundmat);
});

var scrapemat = "Wood";
$("#scrapemat > button.btn").on("click", function(){
    scrapemat = $(this).html();
    //alert("Value is " + mass);
});



var soundtype = "Physics";
$("#soundtype > button.btn").on("click", function(){
    soundtype = $(this).html();
    if ($(this).html() == 'Tones') {
        $('#masschange .btn').attr('disabled', 'disabled');
        $('#matchange .btn').attr('disabled', 'disabled');
        $('#scrapemat .btn').attr('disabled', 'disabled');
        $('#mass .btn').attr('disabled', 'disabled');

   
        
    }
    else
    {
        $('#masschange .btn').removeAttr('disabled');
        $('#matchange .btn').removeAttr('disabled');
        $('#scrapemat .btn').removeAttr('disabled');
        $('#mass .btn').removeAttr('disabled');
        
    }
    
});

var soundcont = "2";
$("#soundcont > button.btn").on("click", function(){
    soundcont = $(this).html();
    if ($(this).html() == '2') {
       

        $('#masschange .btn').removeAttr('disabled');
        $('#matchange .btn').removeAttr('disabled');
    
        
    }
    else
    {
        $('#masschange .btn').attr('disabled', 'disabled');
        $('#matchange .btn').attr('disabled', 'disabled');
       
        
    }
    
});

var masschange = "FALSE";
$("#masschange > button.btn").on("click", function(){
    masschange = $(this).html();
    //alert("Value is " + mass);
});

var matchange = "FALSE";
$("#matchange > button.btn").on("click", function(){
    matchange = $(this).html();
    //alert("Value is " + mass);
});



var dict = {
    "0.1": "0",
    "0":"0",
    "1":"1",
    "2":"2",
    "1000":"1",
    "Glass": "2",
    "TRUE": "True",
    "ON": "True",
    "OFF": "False",
    "FALSE": "False",
    "Wood": "1",
    "One": "1",
    "Two": "2",
    "Small":"0",
    "Large":"1"
  };


//   demoname = str(ast.literal_eval(configs['audiovisual'])) + \
//   '_' + str(ast.literal_eval(configs['object_num'])[obj]) + \
//   '_' + str(ast.literal_eval(configs['mass'])[mass1]) + \
//   '_' + str(ast.literal_eval(configs['secondmass'])[mass1]) + \
//   '_' + str(ast.literal_eval(configs['table1mat'])[table]) + \
//   '_' + str(ast.literal_eval(configs['table2mat'])[table]) + \
//   '_' + str(ast.literal_eval(configs['continuity_obj1'])[cont]) + \
//   '_' + str(ast.literal_eval(configs['scrape1'])[scrape1]) + \
//   '_' + str(ast.literal_eval(configs['scrape2'])[scrape1]) + \
//   '_' + str(ast.literal_eval(configs['change_mass_mid'])[changemass]) + \
//   '_' + str(ast.literal_eval(configs['change_mat_mid'])[changemat]) + \
//   '_' + str(ast.literal_eval(configs['cube_size'])[cubesize])


var videoname = null;
function setVideo() {
    
    // visual_1_0_0_1_2_0_1_1_True_True_0_audio_1_0_0_1_1_0_2_2_True_True_0.mp4
    videoname = "videos/visual_" 
                + dict[objectnum]  
                + '_0' 
                + '_0_' 
                + dict[mat]  + '_' 
                + '1_' 
                + dict[cont] 
                + '_1' 
                + '_1' 
                + '_False' 
                + '_False_'
                + dict[cubesize] 
                + "_audio" 
                + '_1_' 
                + dict[mass] + '_' 
                + '0'
                + '_1' 
                + '_1_' 
                + dict[soundcont] + '_'
                + dict[scrapemat] + '_' 
                + dict[scrapemat] + '_' 
                + dict[masschange] + '_' 
                + dict[matchange] + '_'
                + '0.mp4'
    
    var changemass = "False";
    var changemat = "False";
   
    if($('#soundcont .btn').html() == "2"){
        changemass = dict[masschange];
        changemat = dict[matchange];
    }

    var cube2size = "Small";
    var table2 = "Wood";
    var cube2discont = "0";

    if(objectnum == "One")
    {
        var cube2size = "NA";
        var table2 = "NA";
        var cube2discont = "NA";

    }
                
    videoinfo = "<br/>" + "<br/>" + "Visual  \n".bold() + "<br/>"
    + "Object Number:   " + objectnum + "<br/>"
    + "Cube1 Size:   " + cubesize + "<br/>"
    + "Table1 Material:   " + mat + "<br/>"
    + "Cube1 Discontinuities:   " + cont + "<br/>"
    + "Cube2 Size:   " + cube2size + "<br/>"
    + "Table2 Material:   " + table2 + "<br/>"
    + "Cube2 Discontinuities:   " + cube2discont + "<br/>" + "<br/>" + "<br/>"

    + "Audio  \n".bold() + "<br/>"
    + "Currently only one object in all sounds" + "<br/>"
    + "Cube Mass:   " + mass + "<br/>"
    + "Scrape material:    " + scrapemat + "<br/>"
    + "Discontinuities:   " + soundcont + "<br/>"
    + "Mass changes mid-motion:   " + changemass + "<br/>"
    + "Material changes mid-motion:   " + changemat + "<br/>"


    if(soundtype == "Tones"){
        videoname =  "videos/visual_" 
        + dict[objectnum]  
        + '_0' 
        + '_0_' 
        + dict[mat]  + '_' 
        + '1_' 
        + dict[cont] 
        + '_1' 
        + '_1' 
        + '_False' 
        + '_False_'
        + dict[cubesize] 
        + "__" + (parseInt(soundcont) + 1).toString() +"_.m4a.mp4";
    }
    

                  
    console.log(videoname);
    document.getElementById("showvideo").src = videoname;
    document.getElementById("video-info").innerHTML = videoinfo;
    // What to do
} 


$(window).on('load', function(){
    $('.modal.fade').appendTo('body');
  })

