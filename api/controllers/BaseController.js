const simpleModel = require('../models/BaseModel')

const simpleResponseJSON = {
    message: "This message was created by controller",
    id: Math.random() * 100,
    author: "Alexander"
}
const anotherJSON = {
    message: [
        { type: "success" },
        { text: "it worked" }
    ],
    text: "This is simple text"
}

function createDbRecord(data) {
    firstRecord = new simpleModel(...data)
    console.log(firstRecord)
}

module.exports = simpleResponseJSON
module.exports = anotherJSON
    //Todo: fix issue with export and import
module.exports = createDbRecord