//Pixel Art Maker

//define variables
let color = document.getElementById('colorPicker');
let table = document.getElementById('pixelCanvas');
let sizePicker = document.getElementById('sizePicker');

//define entered values of gridHeight and gridWidth
let gridHeight = document.getElementById('inputHeight');
let gridWidth = document.getElementById('inputgridWidth');
makeGrid(gridHeight, gridWidth);

//size input from user
sizePicker.addEventListener('submit', (input) => {
	input.preventDefault();
	let gridHeight = document.getElementById('inputHeight').value;
	let gridWidth = document.getElementById('inputWidth').value;
	makeGrid(gridHeight, gridWidth);

});

//create Gid and setup color
function makeGrid(gridWidth, gridHeight) {
table.innerHTML = "";
for (let height = 0; height < gridHeight; height++){
	let row = table.insertRow(height);
	for (let cells = 0; cells < gridWidth; cells++){
		let cell = row.insertCell(cells);
		cell.addEventListener('click', (e) => {
			cell.style.backgroundColor = color.value;
		});
	}
}
}