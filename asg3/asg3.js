// random image application
function randImage() {
	// create array of rand imgs
	let randimgs = ["rand/img1.png", "rand/img2.png", "rand/img3.png", "rand/img4.png", "rand/img5.png"];

	// get random src based on random index
	let randindex = Math.floor(Math.random() * randimgs.length);
	let randsrc = randimgs[randindex];

	// set src 
	let rand = document.getElementById("randimg");
	rand.src = randsrc
}
window.onload = randImage;


// slideshow application
var slideindex = 0;
function start() {
	// create array of slideshow imgs
	let slideimgs = ["slide/img1.png","slide/img2.png","slide/img3.png","slide/img4.png","slide/img5.png"];

	// restart slideshow if at end
	if (slideindex == slideimgs.length) {
		slideindex = 0;
	}

	// display slideshow
	let slide = document.getElementById("img1");
	slide.src = slideimgs[slideindex];
	slideindex++;
	timer = setTimeout(start,1500);

	// disable start button if already playing
    startButton.disabled = true; 
    stopButton.disabled = false; 
}

function stop() {
	clearTimeout(timer);
	startButton.disabled = false; 
}

// prize application
function randArray() {
	// create array for prizes and imgs respectively
	let fortunes = ["terrible luck", "bad luck", "okay luck", "good luck", "amazing luck!"];
	let fortuneimgs = ["prize/img1.png","prize/img2.png","prize/img3.png","prize/img4.png","prize/img5.png",];

	// select random fortune
	let index = Math.floor(Math.random() * fortunes.length);
	let wonf = fortunes[index];
	let wonimg = fortuneimgs[index];

	//display in new window
	const newWindow = window.open('', '_blank');
	newWindow.document.open();

	// iterate through array
	let content = "<p> the list of fortunes are: </p>";
	for (i=0; i<fortunes.length; i++) {
		content += "<p>" + fortunes[i] + "</p>";
	}

	let luck = "<h3> today you will have " + wonf + "</h3>";

	let newdoc = '<!DOCTYPE> <html> <head> <title> your fortune...</title> <meta name="author" content="Aria Nguyen"><meta charset="UTF-8"><link rel="stylesheet" href="styles.css"> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600&display=swap" rel="stylesheet"></head> <body> <h2> your fortune... </h2>';

	// display everything
	newWindow.document.write(newdoc);
	newWindow.document.write(content);
	newWindow.document.write(luck);
	newWindow.document.write("<p><img src='" + wonimg + "' height=500px >");
	newWindow.document.write('</body> <div class="footer"> &copy; 2023 Aria Nguyen</div> </html>');
	newWindow.document.close();

}
