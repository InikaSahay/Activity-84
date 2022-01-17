// Create a reference for the canvas
canvas=document.getElementById();

ctx=canvas.getContext("2d");
Alpkey_Image="Alpkey.png";
Arrkey_Image="Arrkey.png";
numkey_Image="numkey.png";
other_Image="otherkey.png";
spkey_Image="spkey.png";

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}
window.addEventListener("keydown",my_keydown);
//Write a code to grab the key-pressed event

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			aplhabetkey();
			document.getElementById("d1").innerHTML="You have preesed a Alphabet";
			console.log("alphabet key");}
		else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}


if(keyPressed >=48 && keyPressed<=57){
	numberkey();
	document.getElementById("d1").innerHTML="You have preesed a Number";
	console.log("number key");}
else{
otherkey();
document.getElementById("d1").innerHTML="You pressed symbol or other key";
}


if(keyPressed >=37 && keyPressed<=40){
	arrowkey();
	document.getElementById("d1").innerHTML="You have preesed a arrow ";
	console.log("arrow key");}
else{
otherkey();
document.getElementById("d1").innerHTML="You pressed symbol or other key";
}


if((keyPressed ==17,18,27){
	specialkey();
	document.getElementById("d1").innerHTML="You have preesed a specail key";
	console.log("special key");}
else{
otherkey();
document.getElementById("d1").innerHTML="You pressed symbol or other key";
}

function add(){
	other_img=new Image();
    other_img.onload=otherkey;
	other_img.src=other_Image;
	special_img=new Image();
    special_img.onload=specialkey;
	special_img.src=spkey_Image;
	arrow_img=new Image();
    arrow_img.onload=arrowkey;
	arrow_img.src=Arrkey_Image;
	alpkey_img=new Image();
    alpkey_img.onload=arrowkey;
	alpkey_img.src=Alpkey_Image;
	num_img=new Image();
    num_img.onload=arrowkey;
	num_img.src=numkey_Image;
}
function aplhabetkey()
{
	ctx.drawImage(alpkey_img,0,0,canvas.width,canvas.height);
}
function numberkey()
{
	ctx.drawImage(num_img,0,0,canvas.width,canvas.height);
}
function arrowkey()
{
	ctx.drawImage(arrow_img,0,0,canvas.width,canvas.height);
}
function specialkey()
{
	ctx.drawImage(special_img,0,0,canvas.width,canvas.height);
}

function otherkey()
{
	ctx.drawImage(other_img,0,0,canvas.width,canvas.height);
}
