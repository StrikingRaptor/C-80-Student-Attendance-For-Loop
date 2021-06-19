student_name_array=[];
function submit(){
var student_array_display=[];
    for(var i=1;i<=4;i++){
        var student_name=document.getElementById("student_name_"+i).value;
        console.log(student_name);
        student_name_array.push(student_name);
    }
   
    
    console.log(student_name_array);
    var array_length=student_name_array.length;
    console.log(array_length);
    for(var j=0;j<array_length;j++){
student_array_display.push("<h4> Name-"+student_name_array[j]+"</h4>");
console.log(student_array_display);
document.getElementById("Display_name_with_commas").innerHTML=student_array_display;
var remove_commas=student_array_display.join(" ");
console.log(remove_commas);
document.getElementById("Display_name_without_commas").innerHTML=remove_commas;

    
    
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}
function sort(){
    student_name_array.sort();
    console.log(student_name_array);
    var student_array_display_sorting=[];
    var array_length=student_name_array.length;
    console.log(array_length);
    for(var j=0;j<array_length;j++){
student_array_display_sorting.push("<h4> Name-"+student_array_display_sorting[j]+"</h4>");
console.log(student_array_display_sorting);
document.getElementById("Display_name_with_commas").innerHTML=student_array_display_sorting;
var remove_commas=student_array_display_sorting.join(" ");
console.log(remove_commas);
document.getElementById("Display_name_without_commas").innerHTML=remove_commas;

}

