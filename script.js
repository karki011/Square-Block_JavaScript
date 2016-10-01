
 document.addEventListener('DOMContentLoaded', function() {
     var colors = ['red', 'blue','cyan', 'green', 'yellow', 'purple', 'pink'];
     
     var btn = document.createElement('button');
     btn.innerHTML = 'Add Square';
     btn.addEventListener('click', function() {
         addSquare();
     });
     document.body.appendChild(btn);
 
     var squareContainer = document.createElement('div');
     squareContainer.id = 'square-container';
     document.body.appendChild(squareContainer);
 
     function addSquare() {
         var square = document.createElement('div');
         square.className = 'square';
        var squaresInDocument = document.getElementsByClassName('square');
         square.id = squaresInDocument.length;
         square.addEventListener('click', setRandomBackgroundColor);
         square.addEventListener('mouseover', showId);
         square.addEventListener('mouseout', hideId);
         square.addEventListener('dblclick', deleteNeighbor);
        squareContainer.appendChild(square);
     }
 
     function setRandomBackgroundColor(e) {
         
         var random = Math.floor(Math.random() * colors.length);
         e.target.style.backgroundColor = colors[random];
     }
 
     function showId(e) {
         e.target.innerHTML = e.target.id;
     }
 
     function hideId(e) {
         e.target.innerHTML = '';
     }
 
     function deleteNeighbor(e) {
         var clicked = e.target;
         if (clicked.id % 2 == 0) { 
             if (clicked.nextElementSibling) {
                 clicked.nextElementSibling.remove();
             } else {
                 alert(' Try again!');
             }
         } else {
             if (clicked.previousElementSibling) {
                 clicked.previousElementSibling.remove();
           } else {
                alert('NO NO NO...! Try again!');
            }
        }
    }
 }); 