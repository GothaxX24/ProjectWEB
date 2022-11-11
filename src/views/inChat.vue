<template>
                
                 
            <div class = body_inchat1>
                <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                <label><strong>User 1</strong></label>         
            </div>
    
            <div class = body_inchat2>

                <div class = body_inchat3>
                    <label><strong>Hey!</strong></label>
                </div>
                <div class="prova1">
                    <div class = body_inchat4>
                        <label><strong>Hi! How are you?</strong></label>
                    </div>
                </div>
                <div class = body_inchat5>
                    <label><strong>Great! I went to the event you recommended.</strong></label>
                </div>
                
                
                
            </div>

</template>

<style>
.prova1{
    display: flex;
    flex-direction: row-reverse;
}
.body_inchat1{
width:70;
height:50px;
color: white;
background:rgb(0, 47, 156);
display: flex;
justify-content: flex-start;
align-items: center;
}

.body_inchat2{
width:600px;
height:400px;
background:rgb(0, 253, 245);
border: 2px solid #0d0058;
background-color: #2768ea;
border-radius: 5px;
padding: 10px;
margin: 10px 0;
}

.body_inchat3 {

width:60px;
height:30px;
background:rgb(0, 253, 245);
border-radius: 5px;
display: flex;
justify-content: center;
border: 2px solid #dedede;
background-color: #f1f1f1;
border-radius: 5px;
padding: 2px;
margin: 10px 0;
}

.body_inchat4 {

width:150px;
height:30px;
background:rgb(0, 253, 245);
border-radius: 5px;
display: flex;
justify-content: flex-end;
flex-direction: row;
border: 2px solid #dedede;
background-color: #f1f1f1;
border-radius: 5px;
padding: 2px;
margin: 10px 0;
text-align: right;
}

.body_inchat5 {

width:200px;
height:50px;
background:rgb(0, 253, 245);
border-radius: 5px;
display: flex;
justify-content: center;
flex-direction: row;
border: 2px solid #dedede;
background-color: #f1f1f1;
border-radius: 5px;
padding: 2px;
margin: 10px 0;
text-align: left;
}

</style>