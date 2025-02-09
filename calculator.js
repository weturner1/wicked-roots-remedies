
function calculateVanillaBeans() {
    let alcoholOz = parseFloat(document.getElementById("alcoholOz").value);
    let fold = parseFloat(document.getElementById("fold").value);
    let resultElement = document.getElementById("result");

    if (!isNaN(alcoholOz) && !isNaN(fold)) {
        let beanAmount = (alcoholOz / 8) * fold;
        resultElement.innerText = `You need ${beanAmount.toFixed(2)} oz of vanilla beans.`;
    } else {
        resultElement.innerText = "Please enter valid numbers.";
    }
}

function calculateDilution() {
    let startProof = parseFloat(document.getElementById("startProof").value);
    let startVolume = parseFloat(document.getElementById("startVolume").value);
    let targetProof = parseFloat(document.getElementById("targetProof").value);
    let resultElement = document.getElementById("dilutionResult");

    if (!isNaN(startProof) && !isNaN(startVolume) && !isNaN(targetProof) && targetProof < startProof) {
        let waterToAdd = startVolume * ((startProof / targetProof) - 1);
        resultElement.innerText = `Add ${waterToAdd.toFixed(2)} oz of water.`;
    } else {
        resultElement.innerText = "Please enter valid numbers.";
    }
}

function calculateAlcoholNeeded() {
    let beanWeight = parseFloat(document.getElementById("beanWeight").value);
    let alcoholProof = parseFloat(document.getElementById("alcoholProofForBeans").value);
    let resultElement = document.getElementById("alcoholNeededResult");

    if (!isNaN(beanWeight) && !isNaN(alcoholProof)) {
        let alcoholNeeded = beanWeight * 8;
        resultElement.innerText = `You need ${alcoholNeeded.toFixed(2)} oz of alcohol.`;
    } else {
        resultElement.innerText = "Please enter valid numbers.";
    }
}