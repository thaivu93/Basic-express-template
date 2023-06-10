import app from "./app.js"


app.get('/', (req,res) => {
	res.render('login')
})



app.listen(3000, () => {console.log("App lives on port 3000")})
