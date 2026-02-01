let analyzing = false;
let probability = 10;

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const transcript = document.getElementById("transcript");
const risk = document.getElementById("risk");
const progressBar = document.getElementById("progressBar");
const alertBox = document.getElementById("alertBox");

const fakeScamLines = [
    "Your bank account will be blocked",
    "Verify your KYC immediately",
    "Share OTP now",
    "This is an urgent security issue"
];

startBtn.onclick = () => {
    analyzing = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    simulateAnalysis();
};

stopBtn.onclick = () => {
    analyzing = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
};

function simulateAnalysis() {
    if (!analyzing) return;

    const line = fakeScamLines[Math.floor(Math.random() * fakeScamLines.length)];
    transcript.innerHTML += `<br>Caller: ${line}`;

    probability += Math.floor(Math.random() * 15);
    probability = Math.min(probability, 100);

    progressBar.style.width = probability + "%";

    if (probability < 40) {
        risk.textContent = "Low";
        alertBox.classList.add("hidden");
    } else if (probability < 70) {
        risk.textContent = "Medium";
        alertBox.classList.add("hidden");
    } else {
        risk.textContent = "High";
        alertBox.classList.remove("hidden");
    }

    setTimeout(simulateAnalysis, 2000);
}
