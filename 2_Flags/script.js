let a=new XMLHttpRequest();
a.open("GET","https://restcountries.com/v3.1/all");
a.send();
a.onload=function(){
    const data=JSON.parse(a.response);
    for(let i=0;i<data.length;i++){
        console.log(data[i].flags.png);
    }
}
