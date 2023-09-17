var costs = {"website":0, "domain":1, "support":1, "turnover":1}
for (let radio of document.getElementsByTagName("input")) {
    radio.addEventListener("input", (e) => {
        costs[radio.name] = parseInt(radio.value)
        updateEstimate()
    })
}

function updateEstimate() {
    document.getElementById("result").innerText = `~ $${costs["website"]*40 + (costs["turnover"] - 1)*15}.00 one-time + $${costs["domain"]*25 + (costs["support"] - 1)*50 + (costs["website"] - 2 > 0 ? (costs["website"] - 2)*50 : 0)}.00/year** *`
}
updateEstimate()

function contact() {
    updateEstimate()
    formatted = `Website:${costs["website"]}
Domain:${costs["domain"]}
Support:${costs["support"]}
Turnover:${costs["turnover"]}
Total:${document.getElementById("result").innerText}

PLEASE ENTER YOUR NAME HERE:`
    window.open(`mailto:rockwill@rockwill.dev?subject=Commission&body=${encodeURIComponent(formatted)}`)
}