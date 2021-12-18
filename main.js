name_of_students_array=[];

function submit(){
    var display_student_array=[];
    for(var a=1; a<=4; a++){
        var name_of_the_student = document.getElementById("name_of_the_student_"+a).value;
        console.log(name_of_the_student);
        name_of_students_array.push(name_of_the_student);
    }
    console.log(name_of_students_array);
    var length_name=name_of_students_array.length;
    console.log(length_name);
    for(var c=0; c<length_name; c++){
        display_student_array.push("<h4>name-"+name_of_students_array[c]+"</h4>");
        console.log(display_student_array);
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var remove_commas=display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_students_array.sort();
    console.log(name_of_students_array);
    var display_sort=[];
    var length_of_name_of_students_array=name_of_students_array.length;
    console.log(length_of_name_of_students_array);
    for(var c=0; c<length_of_name_of_students_array; c++){
        display_sort.push("<h4>name-"+name_of_students_array[c]+"</h4>");
        console.log(display_sort);
        var remove_commas=display_sort.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    }
}
function searching()
{
    var s=document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people_length.length; j++)
    {
    if(s==names-pf_people[j]){
        found=found+1
    }
    }
    document.getElementById("p2").innerHTML="name found" +found+ "time/s";
    console.log("found name" +found+ "time/s");
}