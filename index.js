const app = require("./app")
require('dotenv').config()
const PORT = process.env.PORT

app.listen(PORT, function () {
    console.log(`APP running in ${PORT}`);
})