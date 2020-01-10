 togglePic=true;

let init = function(){

    //.createElement() creates a new element to be added to the HTML file. This method accepts a parameter of the elements name you wish to add.
     //To use this method you need to first create a variable that represents the element we wish to add

    // let btn =document.createElement( "BUTTON"); // this only creates the element it dose not add to the page.

   // //btn=<button></button>

   // btn.innerHTML= "click me";
   // btn.onclick= togglePicture;

    image=document.createElement("IMG");
    image.onclick=togglePicture;
    image.src="save2.jpg";

    //.appendChild() will add the parameter element to the existing element

     let content =document.getElementById("content");
     //content = <section></section>

     //content.appendChild(btn);
    content.appendChild(image);
};
let createTable = function() {
    let table = document.createElement("TABLE");
    let row1 = document.createElement("TR");
    let row2 = document.createElement("TR");
    let row3 = document.createElement("TR");
    let row4 = document.createElement("TR");
    let colHeading1 = document.createElement("TH");
    let colHeading2 = document.createElement("TH");
    colHeading2.innerText = "McDonalds";
    let colHeading3 = document.createElement("TH");
    colHeading3.innerText = "taco Bell";
    let colHeading4 = document.createElement("TH");
    colHeading4.innerText = "wendys";
    let rowHeading2 = document.createElement("TH");
    rowHeading2.innerText = "sophmores";
    let rowHeading3 = document.createElement("TH");
    rowHeading3.innerText = "Juniors";
    let rowHeading4 = document.createElement("TH");
    let rowHeading5 = innerText = "seniors";
    let data1 = document.createElement("TD");
    let data2 = document.createElement("TD");
    let data3 = document.createElement("TD");
    let data4 = document.createElement("TD");
    let data5 = document.createElement("TD");
    let data6 = document.createElement("TD");
    let data7 = document.createElement("TD");
    let data8 = document.createElement("TD");
    let data9 = document.createElement("TD");
    data1.innerText = "20";
    data2.innerText = "50";
    data3.innerText = "30";
    data4.innerText = "80";
    data5.innerText = "10";
    data6.innerText = "10";
    data7.innerText = "10";
    data8.innerText = "30";
    data9.innerText = "60";

//Create the table with appendages
    row1.appendChild(colHeading1);
    row1.appendChild(colHeading2);
    row1.appendChild(colHeading3);
    row1.appendChild(colHeading4);

    row2.appendChild(rowHeading2);
    row2.appendChild(data1);
    row2.appendChild(data2);
    row2.appendChild(data3);

    row3.appendChild(rowHeading3);
    row3.appendChild(data4);
    row3.appendChild(data5);
    row3.appendChild(data6);

    row4.appendChild(rowHeading4);
    row4.appendChild(data7);
    row4.appendChild(data8);
    row4.appendChild(data9);

    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);
    table.appendChild(row4);

    let content = document.getElementById("content");
    content.appendChild(table);
}

 let togglePicture = function() {
     if(togglePic===true) {
         image.src = "image1.jpg";
         togglePic = false;

     }else {
             image.src = "save2.jpg";
             togglePic = true;
     }

 }










