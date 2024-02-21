const express = require("express");
const app = express();

// hospital data
//  get : user can check how many kidneyd thaey have adn their health  
//  post : user can add a new unhealthty kidney 
//  put : user can replace a kidney, make it healthy
//  delete : user can remove a kidney  

var users = [{
    name: "John",
    kidneys:[{
        healthy :false
    }] 
}] 

// qury param
app.get("/", function(req, res){
    const  johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHelathyKidneys = 0;
    for(let i = 0; i < johnKidneys.length; i++){
        if(johnKidneys.healthy){
            numberOfHelathyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHelathyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHelathyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.use(express.json());

// for post u send data in body
app.post("/", function(req, res){
    console.log(req.body);  
    const isHealthy = req.body.healthy;
    users[0].kidneys.push({
      healthy: isHealthy
    })
    res.json({
        message: "Kidney added"
    })
}
)


app.put("/", function(req, res){
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    } 
    res.json({
        message: "All kidneys are healthy"
    })
})


app.delete("/", function(req, res){
    //  only if atleast one unhealthy kidney is present  do thus else return 411
     if (isthereAtelaestOneUnhealthyKidney()){
     
    const newKidneys = [];
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({healthy:true});
        }
    } 
    users[0].kidneys = newKidneys;
    res.json({
        message: "All unhealthy kidneys removed"
    })
}
else{
    res.status(411).json({
        message: "All kidneys are healthy"
    })
}
}
)


function isthereAtelaestOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney; 

}



app.listen(3000);