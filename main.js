canvas=document.getElementById("Canvas1");

ctx=canvas.getContext("2d");
background_Image="mars.jpg";
rover_image="rover.png";
rover_width=100;
rover_height=90;
rover_x_position=10;
rover_y_position=10;

function add(){
    background_img=new Image();
    background_img.onload=upload_bakground;
    background_img.src=background_Image;
    rover_img=new Image();
    rover_img.onload=upload_rover;
    rover_img.src=rover_image;    
}

function upload_bakground(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);    
}

function upload_rover(){
    ctx.drawImage(rover_img,rover_x_position,rover_y_position,rover_width,rover_height);
}

window.addEventListener("keydown",keyDown);

function keyDown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
        up();
        console.log("up");        
    }
    if(keypressed=="37"){
        left();
        console.log("left");
    }
    if(keypressed=="40"){
        down();
        console.log("down");
    }
    if(keypressed=="39"){
        right();
        console.log("right");
    }
}
function up(){
    if(rover_y_position >=0){
        rover_y_position-=10;
        console.log("When up arrowkey is pressed x="+rover_x_position+" y="+rover_y_position);
        upload_bakground(); 
        upload_rover();   
    }
}
function down(){
    if(rover_y_position <=500){
        rover_y_position+=10;
        console.log("When down arrowkey is pressed x="+rover_x_position+" y="+rover_y_position);
        upload_bakground();   
        upload_rover(); 
    }
}
function left(){
    if(rover_x_position >=0){
        rover_x_position-=10;
        console.log("When left arrowkey is pressed x="+rover_x_position+" y="+rover_x_position);
        upload_bakground();
        upload_rover();
    }
}
function right(){
    if(rover_x_position <=700){
        rover_x_position+=10;
        console.log("When right arrowkey is pressed x="+rover_x_position+" y="+rover_x_position);
        upload_bakground();
        upload_rover();
    }
}
