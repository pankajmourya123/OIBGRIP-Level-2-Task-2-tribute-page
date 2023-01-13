   
function colorBG(n){
    document.body.style.backgroundColor=n;
    let text=document.getElementsByClassName("txt")
    if(n=='black'){
        for(let item of text){
            item.style.color='white'
        }
}
else{
    for(let item of text){
            item.style.color='black'
        }
}
}