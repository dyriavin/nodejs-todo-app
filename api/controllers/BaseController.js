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


module.exports = simpleResponseJSON
module.exports = anotherJSON