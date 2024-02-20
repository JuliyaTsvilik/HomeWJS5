// Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять
//  у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.


// const square = document.querySelector(".square")
// const button = document.querySelector("button")

// button.addEventListener("click", function() {
//     square.style.backgroundColor = "green"
//     square.style.width = '100px'
//     square.style.height ='100px'
// })

// Создать кнопку и розовый квадрат с размерами 200х200px.
//  При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет 
//  квадрата.


// const square = document.querySelector(".square2")
// const button = document.querySelector("button")



// button.addEventListener("click", function() {
//     square.style.backgroundColor = "blue"
//     console.log("blue")   
// })

// Создать кнопку и квадрат с размерами 150х150px.
//  При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

// const square = document.querySelector(".square3")
// const button = document.querySelector("button")

// button.addEventListener("click", function() {
//     square.style.backgroundColor = "black"
//     square.style.width = '170px'
//     square.style.height ='170px'
// })

// Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.

// const root = document.querySelector(".root")
// const button = document.querySelector("button")
// button.addEventListener("click", function(){
//     root.style.display = "block"
      //root.style.color = "blue"
//     

// const click = document.querySelector(".click");
// const root = document.querySelector(".root");

// click.addEventListener("click", function() {
//     const paragraph = document.createElement("p");
//     paragraph.innerText = "Создаем текст синего цвета";
//     paragraph.style.color = "blue";
//     root.appendChild(paragraph);
// });



// Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.

// const textblue = document.querySelector(".textblue")
// const textgreen = document.querySelector(".textgreen")
// const button = document.querySelector("button")
// button.addEventListener("click", function(){
//     textblue.style.display = "block"
//     textblue.style.color = "blue"
    
//     textgreen.style.display = "block"
//     textgreen.style.color = "green"
   
// }
// )

const square = document.querySelector(".square");
const textblue = document.querySelector(".textblue");
const textgreen = document.querySelector (".textgreen")

square.addEventListener("click", function() {
    const paragraphblue = document.createElement("p");
    paragraphblue.innerText = "Создаем текст синего цвета";
    paragraphblue.style.color = "blue";
    textblue.appendChild(paragraphblue);

const paragraphgreen = document.createElement("p");
    paragraphgreen.innerText = "Создаем текст зеленого цвета";
    paragraphgreen.style.color = "green";
    textgreen.appendChild(paragraphgreen);
});


