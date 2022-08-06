const PORT = process.env.PORT || 8000
const express = require("express")
const functions = require("firebase-functions")
const cors = require("cors")

require("dotenv").config()
const axios = require("axios")

const app = express()
app.use(cors())
app.use(express.json())

const url = process.env.URL
const token = process.env.ASTRA_DB_TOKEN

app.get("/customers", async (req, res) => {
	const options = {
		method: "GET",
		headers: {
			Accepts: "application/json",
			"X-Cassandra-Token": token,
		},
	}
	try {
		const response = await axios(url, options)
		res.status(200).json(response.data)
	} catch (e) {
		console.error(e)
		res.status(500).json({ message: e }) 
	}
})

app.post("/customers", async (req, res) => {
	const formData = req.body.formData

	const options = {
		method: "POST",
		headers: {
			Accepts: "application/json",
			"X-Cassandra-Token": token,
			"Content-Type": "application/json",
		},
		data: formData,
	}

	try {
		const response = await axios(url, options)
		res.status(200).json(response.data)
	} catch (e) {
		console.error(e)
		res.status(500).json({ message: e })
	}
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))

exports.app = functions.https.onRequest(app)

