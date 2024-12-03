function calculateBMI() {
    const age = Number(document.getElementById('age').value);
    const height = Number(document.getElementById('height').value);
    const weight = Number(document.getElementById('weight').value);

    if (age <= 0 || height <= 0 || weight <= 0) {
        alert('Harap mengisi semua data yang valid!');
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let category = '';
    let explanation = '';
    let position = 0;

    // Reset table before filling results
    document.getElementById('resultKurus').textContent = '-';
    document.getElementById('resultNormal').textContent = '-';
    document.getElementById('resultGemuk').textContent = '-';
    document.getElementById('resultObesitas').textContent = '-';

    if (bmi < 18.5) {
        category = 'Kurus';
        explanation = 'Anda berada di bawah berat badan normal. Disarankan untuk meningkatkan asupan kalori dan melakukan olahraga teratur.';
        position = 10;
        document.getElementById('resultKurus').textContent = '<';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal';
        explanation = 'Anda memiliki berat badan normal. Pertahankan gaya hidup sehat dan olahraga teratur.';
        position = 35;
        document.getElementById('resultNormal').textContent = '<';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Gemuk';
        explanation = 'Anda berada di atas berat badan normal. Disarankan untuk mengatur pola makan dan meningkatkan aktivitas fisik.';
        position = 65;
        document.getElementById('resultGemuk').textContent = '<';
    } else {
        category = 'Obesitas';
        explanation = 'Anda berada dalam kategori obesitas. Konsultasikan dengan dokter atau ahli gizi untuk program penurunan berat badan.';
        position = 90;
        document.getElementById('resultObesitas').textContent = '<';
    }

    // Update needle position
    document.getElementById('needle').style.left = `${position}%`;

    // Display results
    document.getElementById('bmiValue').textContent = bmi;
    document.getElementById('status').textContent = category;
    document.getElementById('penjelasan-text').textContent = explanation;

    document.getElementById('resultBox').style.display = 'block';
    document.getElementById('penjelasanBMI').style.display = 'block';
}

function resetBMI() {
    document.getElementById('bmiForm').reset();

    document.getElementById('resultBox').style.display = 'none';
    document.getElementById('penjelasanBMI').style.display = 'none';

    document.getElementById('needle').style.left = '0%';

    document.getElementById('bmiValue').textContent = '0';
    document.getElementById('status').textContent = '-';
    document.getElementById('penjelasan-text').textContent = '';

    document.getElementById('calculateButton').disabled = true;
    document.getElementById('resetButton').disabled = true;
}

document.getElementById('bmiForm').addEventListener('input', function () {
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const calculateButton = document.getElementById('calculateButton');
    const resetButton = document.getElementById('resetButton');

    if (age && height && weight) {
        calculateButton.disabled = false;
        resetButton.disabled = false;
    } else {
        calculateButton.disabled = true;
        resetButton.disabled = true;
    }
});

function toggleDescription(tab) {
    const description = tab.querySelector('.tab-description');
    const sign = tab.querySelector('.toggle-sign');

    // Close other tabs
    const allDescriptions = document.querySelectorAll('.tab-description');
    allDescriptions.forEach(desc => {
        if (desc !== description) {
            desc.style.display = 'none';
        }
    });

    // Toggle description visibility
    if (description.style.display === 'none' || !description.style.display) {
        description.style.display = 'block';
        sign.textContent = '-';
    } else {
        description.style.display = 'none';
        sign.textContent = '+';
    }
}

function validatePositiveInput(input) {
    // Prevent negative values
    if (input.value < 0) {
        input.value = 0; // Set to 0 if negative
    }
}

document.getElementById('downloadButton').addEventListener('click', function (e) {
    setTimeout(function () {
        alert('File terunduh');
    }, 500); // Short delay to ensure file download starts
});
