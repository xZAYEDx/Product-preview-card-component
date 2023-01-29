/*document.querySelector('button').click();
console.log(click);*/


//document.querySelector('button').onclick(console.log('click'));


const buttons = document.querySelector("button");

  buttons.addEventListener('click', function(event) {
    //console.log('done');
    //buttons.innerHTML = this.style.animation

    //buttons.style.cart.margin="5px";

    document.getElementsByClassName("img.cart").innerHTML = "animation: fade-in 1s var(--ease-5)";
  });

