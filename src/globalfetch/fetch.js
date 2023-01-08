export default {

    searchuser() {
        fetch ('http://puigmal.salle.url.edu/api/v2/users/search?s=' + this.email ,{
            headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
        })
        .then((res) => res.json())
        .then((data) => {
            window.localStorage.setItem("userid" ,data.id);
        })
    }




}

