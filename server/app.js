const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({
	path : 'config/config.env'
})
const PORT = process.env.PORT || 9300 //jika port dari env tidak ditemukan maka akan menggunakan port kedua

app.get('/',(req, res)=>{
	res.send('Hello World')
})

app.listen(PORT, (err) => {
	if(!err){
		console.log(`server is runing port ${PORT}`);
	}
})