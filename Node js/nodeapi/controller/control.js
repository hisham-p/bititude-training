let body;
exports.createPost =(req, res , next) => {
    body = req.body;
    console.log("New post request recieved");
    return res.send(req.body)
}
exports.retrieve=(req,res)=>{
    console.log("Data retrieved");
    return res.send(body)   
}