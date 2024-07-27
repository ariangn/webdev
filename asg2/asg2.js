function change() {
  // Generate random hexadecimal color codes
  const randomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16);
  const bgColor = randomColor();
  const tColor = randomColor();
  const borColor = randomColor();

  // Set the new colors for body
  document.body.style.backgroundColor = bgColor;
  document.body.style.borderColor = borColor;
  document.body.style.color = tColor;

  // button
  const button = document.getElementById('button');
  button.style.backgroundColor = bgColor;
  button.style.color = tColor;
  button.style.borderColor = borColor;

  // nav bar
  const navbarLinks = document.querySelectorAll('.navbar a');
  navbarLinks.forEach(link => {
    link.style.color = tColor;
  });
}

function swapT() {
	// Get the text content of both paragraphs
	let p1 = document.getElementById("p1");
    let p2 = document.getElementById("p2");

    // Swap the text content of the two paragraphs
    let textHtml1 = p1.innerHTML;
    let textHtml2 = p2.innerHTML;
    p1.innerHTML = textHtml2;
    p2.innerHTML = textHtml1;
}

function swapImg() {
	// Get the source of both images
    let img1 = document.getElementById("img1").src;
    let img2 = document.getElementById("img2").src;

    // Swap the source attribute of the two images
    document.getElementById("img1").src = img2;
    document.getElementById("img2").src = img1;
}