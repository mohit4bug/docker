const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()
dotenv.config()

// Mongo connection
mongoose.set("strictQuery", true)
const MONGO_URI = process.env.MONGO_URI
const MONGO_DB = process.env.MONGO_DB
mongoose
  .connect(MONGO_URI, {
    dbName: MONGO_DB,
  })
  .then(() => {
    console.log("Connected to Mongo")
  })
  .catch((err) => {
    console.log("Mongo connection err", err)
  })

const schema = mongoose.Schema({
  num: {
    type: Number,
    default: 0,
  },
})
const Model = mongoose.models.Num || mongoose.model("Num", schema)

// Express
app.get("/", async (req, res) => {
  const nums = await Model.find()
  if (nums.length === 0) {
    await Model.create({ num: 0 })
    return res.send("We have created a new number 0")
  }
  const num = nums[0].num // prev number
  await Model.updateOne({}, { num: num + 1 })
  return res.send(num + " This is prev number. We have updated +1")
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT)
})
