const directorBusinessLogics =require("./../BusinessLogics/DirectorOfBusinessLogics/directorOf-businessLogics");
//get config vars
dotenv.config();
// access config var
process.env.TOKEN_SECRET;
function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
  }
 //This can be sent back from a request to sign in or log in a user:
app.post('/api/createNewUser', (req, res) => {
  //const getDirectorInDb  =   directorBusinessLogics.getAllDirectors().find({req.username:username,req.password:password});
  const token = generateAccessToken({ username: req.body.username });
  res.json(token);
});