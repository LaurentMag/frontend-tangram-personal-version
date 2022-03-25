const shapeArray = ["pomme", "sapin", "swan", "tortue", "arrow", "abstrait"];

const square = document.querySelector(".container-general");
const shapeList = document.querySelectorAll(".js-get-shape");

// add event listener
for (shape of shapeList) {
  shape.addEventListener("click", changeShape);
}

let lastestAddedClass = "";

function changeShape(e) {
  console.log(lastestAddedClass);
  let whichShape = e.currentTarget;
  let whichShapeIndex = Array.prototype.indexOf.call(shapeList, whichShape);

  // if clicked button isnt the same as the lastest class
  if (shapeArray[whichShapeIndex] !== lastestAddedClass) {
    //clean classList from preview shape class
    if (square.classList.contains(lastestAddedClass)) {
      square.classList.remove(lastestAddedClass);
    }
    // add corresponding ( clicked button ) shape class to the Classlist
    square.classList.add(shapeArray[whichShapeIndex]);
    lastestAddedClass = shapeArray[whichShapeIndex];

    console.log(square.classList);
  } else {
    // remove class if same button clicked once again for toggle effect
    square.classList.remove(lastestAddedClass);
    //need to reset lastestclass for initial check
    lastestAddedClass = "";

  }
}

// attempt to grab with innerHTML with :
//   let whichShape = e.target.textContent.toLowerCase();
//problem was :
// need to setup particular button with a "hidden" text to grab class
// as they can be called "whatever" and still be able to set correct button name.

// let element = document.querySelectorAll('.myClass')
//   element.forEach(item => {
//     console.log(item.innerHTML = item.innerText || item.textContent)
//   })
