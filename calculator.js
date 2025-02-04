function calculateVanillaBeans() {
    let alcoholOz = parseFloat(document.getElementById("alcoholOz").value);
    let fold = parseFloat(document.getElementById("fold").value);
    if (!isNaN(alcoholOz) && !isNaN(fold)) {
        let beanAmount = (alcoholOz / 8) * fold;
        document.getElementById("result").innerText = `You need ${beanAmount.toFixed(2)} oz of vanilla beans.`;
    }
}

function calculateDilution() {
    let startProof = parseFloat(document.getElementById("startProof").value);
    let startVolume = parseFloat(document.getElementById("startVolume").value);
    let targetProof = parseFloat(document.getElementById("targetProof").value);
    if (!isNaN(startProof) && !isNaN(startVolume) && !isNaN(targetProof) && targetProof < startProof) {
        let waterToAdd = startVolume * ((startProof / targetProof) - 1);
        document.getElementById("dilutionResult").innerText = `Add ${waterToAdd.toFixed(2)} oz of water.`;
    }
}

function calculateAlcoholNeeded() {
    let beanWeight = parseFloat(document.getElementById("beanWeight").value);
    if (!isNaN(beanWeight)) {
        let alcoholNeeded = beanWeight * 8;
        document.getElementById("alcoholNeededResult").innerText = `You need ${alcoholNeeded.toFixed(2)} oz of alcohol.`;
    }
}