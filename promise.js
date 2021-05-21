const pro = new promise((resolve,reject)=>{
    setTimeout(()=>{
        if(!frndissick){
            resolve("got Cake");
        }
        else{
            reject("dont get cake")
        }
    },2000)
});
Pro.then((data)=>console.log(data)).catch((data)=>console.log(data)).finally(()=>console.log("Parrryyyy hori haiii"));