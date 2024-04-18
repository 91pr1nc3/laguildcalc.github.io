document.addEventListener('DOMContentLoaded', function () {
    const roundsSelect = document.getElementById('rounds');
    const goldInput = document.getElementById('gold');
    const siegeInput = document.getElementById('siege');
    const outputsDiv = document.getElementById('outputs');
    const calculateBtn = document.getElementById('calculateBtn');

    function calculateOutputs() {
        const maxRounds = parseInt(roundsSelect.value);
        const totalGold = parseFloat(goldInput.value);
        const maxSiege = parseInt(siegeInput.value);

        if (isNaN(maxRounds) || isNaN(totalGold) || isNaN(maxSiege)) {
            outputsDiv.innerHTML = '';
            return;
        }

        outputsDiv.innerHTML = '';

        for (let i = 1; i <= maxRounds; i++) {
            const output = document.createElement('p');
            output.textContent = `Distribution for ${i} runs: ${Math.round(totalGold / maxSiege * i)}`;
            outputsDiv.appendChild(output);
        }
    }

    calculateBtn.addEventListener('click', calculateOutputs);
});
