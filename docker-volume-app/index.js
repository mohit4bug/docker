const fs = require("fs")

// NOTE: This path is relative to the container's file system
const fileExists = fs.existsSync("/app/data/nums.txt")

if (fileExists) {
  const data = fs.readFileSync("/app/data/nums.txt", "utf8")
  const value = parseInt(data)
  console.log("The value is " + value)
  const newValue = value + 1
  fs.writeFileSync("/app/data/nums.txt", newValue.toString())
  console.log("Value is incremented now! You can see on next run.")
} else {
  console.log("File does not exist.")
  fs.writeFileSync("/app/data/nums.txt", "0")
  console.log(" But don't worry, It is created now with value 0.")
}
