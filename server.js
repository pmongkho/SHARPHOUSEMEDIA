const PORT = process.env.PORT || 8000
const express = require("express")
const cors = require("cors")


require("dotenv").config()
const axios = require("axios")

const app = express()
app.use(cors())
app.use(express.json())

const url = process.env.URL
const token = process.env.ASTRA_DB_TOKEN

const client = require("twilio")(
	process.env.TWILIO_ACCOUNT_SID,
	process.env.TWILIO_AUTH_TOKEN
)

app.post("/api/messages", (req, res) => {
	res.header("Content-Type", "application/json")
   client.messages
			.create({
				from: process.env.TWILIO_PHONE_NUMBER,
				to: req.body.to,
				body: req.body.body,
			})
			.then(() => {
				res.send(JSON.stringify({ success: true }))
			})
			.catch((err) => {
				console.log(err)
				res.send(JSON.stringify({ success: false }))
			})
})

//get all customer
app.get("/customers", async (req, res) => {
	const options = {
		method: "GET",
		headers: {
			Accepts: "application/json",
			"X-Cassandra-Token": token,
		},
	}
	try {
		const response = await axios(`${url}?page-size=20`, options)
		res.status(200).json(response.data)
	} catch (e) {
		console.error(e)
		res.status(500).json({ message: e }) 
	}
})

//create customer
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

//edit a ticket
app.put('/customers/:documentId', async (req, res) => {
    const id = req.params.documentId
    const data = req.body.data

    const options = {
      method: 'PUT',
      headers: {
        Accepts: 'application/json',
        'X-Cassandra-Token': token,
      },
      data
    }
  try {
    const response = await axios(`${url}/${id}`, options)
    res.status(200).json(response.data)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err })
  }
})

//delete a ticket
app.delete('/customers/:documentId', async (req, res) => {
  const id = req.params.documentId

  const options = {
    method: 'DELETE',
    headers: {
      Accepts: 'application/json',
      'X-Cassandra-Token': token,
    },
  }

  try {
    const response = await axios(`${url}/${id}`, options)
    res.status(200).json(response.data)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err })
  }
})


app.listen(PORT, () => console.log(`server running on port ${PORT}`))


