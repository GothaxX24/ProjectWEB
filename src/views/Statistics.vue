<script>
    export default {
        data() {
                return {
                avgscore: "",
                numcomments: "",
                percentage: "",
                username: "",
                userimage: ""
                }

            },
            methods: {
                // Metode que realitza u fetch que retorna les estadistiques del usuari que fiquem al path (en aquest cas el nostre)
                // Es crida a aquest metode al entrar a la pagina (created).
                statistics () {
                    fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("userid") + "/statistics", {
                            headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                        })
                        .then((res) => res.json())
                        .then((data) => {
                            this.avgscore =  data[0].avg_score;
                            this.numcomments = data[0].num_comments;
                            this.percentage = data[0].percentage_commenters_below;
                        })
                },

                // Metode que realitza un fetch per rebre les dades d'un usuari en concret (en aquest cas nosaltres).
                // Es crida a aquest metode al entrar a la pagina (created).
                getCreatorUser() {
                    fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("userid"), {
                        headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                    })
                    .then((res) => res.json())
                    .then((data) => {
                        this.username = data[0].name + " " + data[0].last_name;
                        this.userimage = data[0].image;
                    })
                },
            },

            created() {
                    this.statistics()
                    this.getCreatorUser()
            }
    }


</script>

<template>
    <head>
        <link rel="stylesheet" href="style.css" />
    </head>
    <div>
        <RouterLink to = "/profile">
            <img class="back" src="https://cdn.icon-icons.com/icons2/1674/PNG/512/arrowback_111142.png">
        </RouterLink>
    </div>

    <h1>Statistics</h1>

    <div class="foto">
        <article class="articl">
            <img class="foto-perfil" v-bind:src=userimage />
        </article>
        <article class="articl">
            <h3>"Average puntuation"</h3>
            <label v-if="avgscore">{{avgscore}}</label>
            <label v-else>No punctuation yet</label>
        </article>
    </div>

    <div>
        <h4>Number of comments</h4>

        <h3>{{numcomments}}</h3>
    </div>

    <div>
        <h3 v-if="percentage">"{{ username }}" is in the top "{{percentage}}"% of users with more number of comments! </h3>
        <h3 v-else>"{{ username }}" Has never commented yet</h3>
    </div>

</template>

<style>
.foto{
    display: flex;
    align-items:center;
    justify-content: space-around;
    
}

.foto-perfil{
  border-radius: 50%;
  width: 75%;
}

.articl{
  width: 50%;
}


</style>