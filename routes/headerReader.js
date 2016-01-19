module.exports = function(app) {
  app.get("/", function(req, res) {
    var ipAddress =  req.headers["x-forwarded-for"];
    var language = req.headers["accept-language"].split(",")[0];
    var software = req.headers["user-agent"].split("(")[1].split(")")[0];
      res.send(JSON.stringify({"ipAddress": ipAddress, "language": language, "software": software}));
    });
};