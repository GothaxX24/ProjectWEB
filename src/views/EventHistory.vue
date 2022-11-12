<template>
    <main>
        <div>
            <h1>EVENTS</h1>
            <label class="prueba4">Search event</label>
            <div>
                <div class="prueba3">
                    <label class="letranegrita">Name </label> 
                    <input class="margeopcions1" type="text" placeholder="" name="" required> 
                </div>
                <div class="prueba3">
                    <label class="letranegrita"> Date </label> 
                    <input class="margeopcions2" type="date" placeholder="" name="" required> 
                </div>
                <div class="prueba3">
                    <label class="letranegrita">Location </label> 
                    <input class="margeopcions3" type="text" placeholder="" name="" required> 
                </div>
            </div>
            <div class="prueba2">
                <button class="buttoncreate" @click="$router.push('/createevent')" type="button">Create your own EVENT</button>
                <div class ="prueba">
                    <label>Sort by: </label>    
                    <div class="desplegable">
                        <button class="button">Select an option</button>
                        <div class="links">
                            <a href="#">Name</a>
                            <a href="#">Date</a>
                            <a href="#">Location (proximity)</a>
                            <a href="#">Rating</a>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div class="margegran">
                    <img src="https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg" width="75" height="75 ">
                    <div>
                        <div class="aaa">
                            <label class="marginnameofevent">EventName</label>
                            <img class="margefotoperfil" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg" width="45" height="45"/>
                            <div class="marge4">
                                <label class="nameofcreator">CreatorName</label>
                                <form>
                                    <div class="clasificacion">
                                        <input id="radio1" type="radio" name="estrellas" value="5">
                                        <label for="radio1">★</label>
                                        <input id="radio2" type="radio" name="estrellas" value="4">
                                        <label for="radio2">★</label>
                                        <input id="radio3" type="radio" name="estrellas" value="3">
                                        <label for="radio3">★</label>
                                        <input id="radio4" type="radio" name="estrellas" value="2">
                                        <label for="radio4">★</label>
                                        <input id="radio5" type="radio" name="estrellas" value="1">
                                        <label for="radio5">★</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div >
                            <label class="marginstreet">11/12/2022</label>
                            <label class="streetsize">c/NameStr 291, BCN</label>
                        </div>
                    </div>
                </div>
                <div class="margegran">
                    <img src="https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg" width="75" height="75 ">
                    <div>
                        <div class="aaa">
                            <label class="marginnameofevent">EventName</label>
                            <img class="margefotoperfil" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg" width="45" height="45"/>
                            <div class="marge4">
                                <label class="nameofcreator">CreatorName</label>
                                <form>
                                    <div class="clasificacion">
                                        <input id="radio1" type="radio" name="estrellas" value="5">
                                        <label for="radio1">★</label>
                                        <input id="radio2" type="radio" name="estrellas" value="4">
                                        <label for="radio2">★</label>
                                        <input id="radio3" type="radio" name="estrellas" value="3">
                                        <label for="radio3">★</label>
                                        <input id="radio4" type="radio" name="estrellas" value="2">
                                        <label for="radio4">★</label>
                                        <input id="radio5" type="radio" name="estrellas" value="1">
                                        <label for="radio5">★</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div >
                            <label class="marginstreet">11/12/2022</label>
                            <label class="streetsize">c/NameStr 291, BCN</label>
                        </div>
                    </div>
                </div>
                <div class="margegran">
                    <img src="https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg" width="75" height="75 ">
                    <div>
                        <div class="aaa">
                            <label class="marginnameofevent">EventName</label>
                            <img class="margefotoperfil" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg" width="45" height="45"/>
                            <div class="marge4">
                                <label class="nameofcreator">CreatorName</label>
                                <form>
                                    <div class="clasificacion">
                                        <input id="radio1" type="radio" name="estrellas" value="5">
                                        <label for="radio1">★</label>
                                        <input id="radio2" type="radio" name="estrellas" value="4">
                                        <label for="radio2">★</label>
                                        <input id="radio3" type="radio" name="estrellas" value="3">
                                        <label for="radio3">★</label>
                                        <input id="radio4" type="radio" name="estrellas" value="2">
                                        <label for="radio4">★</label>
                                        <input id="radio5" type="radio" name="estrellas" value="1">
                                        <label for="radio5">★</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div >
                            <label class="marginstreet">11/12/2022</label>
                            <label class="streetsize">c/NameStr 291, BCN</label>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <img src="https://img.freepik.com/iconos-gratis/numero-cuadrado-redondeado_318-10115.jpg" width="25" height="25"/>
                    <img src="https://img.freepik.com/iconos-gratis/numero-cuadrado-redondeado_318-10115.jpg" width="25" height="25"/>
                    <img src="https://img.freepik.com/iconos-gratis/numero-cuadrado-redondeado_318-10115.jpg" width="25" height="25"/>
                </div>
            </div>
        </div>
    </main>
</template>