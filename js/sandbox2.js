var titles = document.getElementsByClassName('title')

//condole.log(Array. isArray(titles));
//condole.log(Array. isArray(Array.from(titles)));


Array.from(titles).forEach(function(item){
    console.log(item);
})