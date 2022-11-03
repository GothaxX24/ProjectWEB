<template>

    <h1>Statistics</h1>


    <div class="foto">
        <article>
            <img class="circular-image" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg" width="200" height="200"/>
        </article>
        <article>
            <h3>Average puntuation</h3>
            <form>
            <p class="clasificacion">
                <input id="radio1" type="radio" name="estrellas" value="5"><!--
                --><label for="radio1">★</label><!--
                --><input id="radio2" type="radio" name="estrellas" value="4"><!--
                --><label for="radio2">★</label><!--
                --><input id="radio3" type="radio" name="estrellas" value="3"><!--
                --><label for="radio3">★</label><!--
                --><input id="radio4" type="radio" name="estrellas" value="2"><!--
                --><label for="radio4">★</label><!--
                --><input id="radio5" type="radio" name="estrellas" value="1"><!--
                --><label for="radio5">★</label>
            </p>
        </form>
        </article>
    </div>

    <div>
        <h4>Number of comments</h4>

        <h3>X</h3>
    </div>

    <div>
        <h3>"User" is in the top "x"% of users with more number of comments! </h3>
    </div>

    <div>
        <h3>Lastests comments:</h3>

    </div>

</template>

<style>
.foto{
    display: flex;
    align-items:center;
    justify-content: space-around;
    
}

#form {
  width: 250px;
  margin: 0 auto;
  height: 50px;
}

#form p {
  text-align: center;
}

#form label {
  font-size: 20px;
}

input[type="radio"] {
  display: none;
}

label {
  color: grey;
}

.clasificacion {
  direction: rtl;
  unicode-bidi: bidi-override;
}

label:hover,
label:hover ~ label {
  color: orange;
}

input[type="radio"]:checked ~ label {
  color: orange;
}
</style>