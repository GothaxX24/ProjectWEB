<template>
    <main>
        <h1>EVENTS</h1>
        <label class="prueba4">Search event</label>
        <div>
            <div class="prueba3">
                <label class="letranegrita">Name </label> 
                <input class="margeopcions" type="text" placeholder="" name="" required> 

                <label class="margedate"> Date </label> 
                <input class="margeopcions" type="date" placeholder="" name="" required> 
            </div>
            <div class="prueba3">
                <label class="letranegrita">Location </label> 
                <input class="margeopcions" type="text" placeholder="" name="" required> 
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
            <div class="margegran">
                <img class="margeright" src="https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg" width="135" height="135">
                <div>
                    <div class="aaa">
                        <label class="marginnameofevent">Name of event </label>
                        <img class="margefotoperfil" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg" width="70" height="70"/>
                        <div class="marge4">
                            <label class="nameofcreator"> Name of creator</label>
                        </div>
                    </div>
                    <div class="margetop3">
                        <label class="marginstreet">11/12/2022</label>
                        <label>c/NameStr 291, BCN</label>
                    </div>
                </div>
            </div>
            <div class="margegran">
                <img class="margeright" src="https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg" width="135" height="135">
                <div>
                    <div class="aaa">
                        <label class="marginnameofevent">Name of event </label>
                        <img class="margefotoperfil" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg" width="70" height="70"/>
                        <div class="marge4">
                            <label class="nameofcreator"> Name of creator</label>
                        </div>
                    </div>
                    <div class="margetop3">
                        <label class="marginstreet">11/12/2022</label>
                        <label>c/NameStr 291, BCN</label>
                    </div>
                </div>
            </div>
            <div class="margegran">
                <img class="margeright" src="https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg" width="135" height="135">
                <div>
                    <div class="aaa">
                        <label class="marginnameofevent">Name of event </label>
                        <img class="margefotoperfil" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg" width="70" height="70"/>
                        <div class="marge4">
                            <label class="nameofcreator"> Name of creator</label>
                        </div>
                    </div>
                    <div class="margetop3">
                        <label class="marginstreet">11/12/2022</label>
                        <label>c/NameStr 291, BCN</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <img src="https://img.freepik.com/iconos-gratis/numero-cuadrado-redondeado_318-10115.jpg" width="25" height="25"/>
                <img src="https://img.freepik.com/iconos-gratis/numero-cuadrado-redondeado_318-10115.jpg" width="25" height="25"/>
                <img src="https://img.freepik.com/iconos-gratis/numero-cuadrado-redondeado_318-10115.jpg" width="25" height="25"/>
            </div>
    </main>
</template>


<style>

.row{
    display: flex;
    flex-direction: row;
    justify-content: end;

}

.buttoncreate{
    margin-top: 20px;
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

.margeopcions{
    margin-left:10px;
}

.prueba3 {   
    display: flex;
    align-items: flex-start;
    margin-top: 20px;
    margin-left: 20px;
}

.marge4{
    margin-top: 10px;
    margin-left: 20px;
}

.margetop3{
    margin-top: 20px;
}

.margefotoperfil{
    margin-top: 5px;
}

.marginnameofevent{
    margin-left: 20px;
    margin-right: 30px;
    font-weight: bolder;
    margin-top: 15px;
}

.marginstreet{
    margin-right: 120px;
    margin-left: 20px;
}

.nameofcreator{
    font-weight: bolder;
}

.aaa{
    display: flex;
    align-items:flex-start;
    justify-content: space-around;
}

.margegran{
    display: flex;
    flex-direction: row; 
    padding: 20px;
}

.prueba2{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 30px;
}

.prueba{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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