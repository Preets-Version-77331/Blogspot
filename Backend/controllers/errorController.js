exports.get404 = (req, res, next) => {
  console.log("Req : ",req.body);
  res.status(404).json({message:' Page Not Found'});
}; 