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
                            <img class="margefotoperfil" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg" width="35" height="35"/>
                            <div class="marge4">
                                <label class="nameofcreator">CreatorName</label>
                            </div>
                        </div>
                        <div class="margetop3">
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
                            <img class="margefotoperfil" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg" width="35" height="35"/>
                            <div class="marge4">
                                <label class="nameofcreator">CreatorName</label>
                            </div>
                        </div>
                        <div class="margetop3">
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
                            <img class="margefotoperfil" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg" width="35" height="35"/>
                            <div class="marge4">
                                <label class="nameofcreator">CreatorName</label>
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
                            </div>
                        </div>
                        <div class="margetop3">
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


<style>


.centerall{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.row{
    display: flex;
    flex-direction: row;
    justify-content: end;

}

.buttoncreate{
    margin-top: 20px;
    width: 130px;
    background-color: aliceblue;
}

.aligncenter{
    display: flex;
    align-items: center;
}

.prueba4{
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
    margin-left: 60px;  
    font-size: larger;
    font-weight: bolder;
}

.margedate{
    margin-left: 10px;
    font-weight: bolder;
}

.margeopcions1{
    margin-left:10px;
    width: 228px;
}

.margeopcions2{
    margin-left:10px;
    width: 240px;
}

.margeopcions3{
    margin-left:10px;
    width: 205px;
}

.prueba3 {   
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
    margin-left: 20px;
}

.marge4{
    display: flex;
    flex-direction: column;
    margin-top: 2px;
    margin-left: 10px;
}

.margetop3{
    margin-top: 5px;
}

.margefotoperfil{
    margin-top: 5px;
}

.marginnameofevent{  
    font-size: x-small;
    font-weight: bolder;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
}

.marginstreet{
    margin-right: 15px;
    font-size: x-small;
}

.streetsize{
    font-size: x-small;
}

.nameofcreator{
    font-weight: bolder;
    font-size: x-small;
}

.aaa{
    display: flex;
    align-items:flex-start;
    justify-content: space-around;
}

.margegran{
    display: flex;
    flex-direction: row;
    padding-left: 20px; 
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;;
}

.prueba2{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    margin-left: 20px;
}

.prueba{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 28px;
}

.alignelements{
    display: inline-block;
    margin-top: 30px;
}

.column{ 
    display: flex;
    flex-direction: column;
}

.desplegable:hover .links{
    display: block;
    background-color:antiquewhite;
}

.desplegable{
    position: absolute;
    margin-top: 30px;
}

.button{
    border: none;
    padding: 10px;
    background-color:aliceblue;
}

.links a{
    color: black;
    display: block;
    padding: 8px;
}

.links{
    display: none;
}

.links a:hover{
    background-color: #f1f1f1;
}

</style>