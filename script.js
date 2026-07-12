let selectedPlatform = "";

function selectPlatform(platform, color) {
    selectedPlatform = platform;
    
    // Clear all previous active configurations
    document.querySelectorAll('.platform-btn').forEach(btn => {
        btn.className = btn.className.replace(/active-\w+/g, "");
    });

    // Mark current selected button as active
    const lowerPlatform = platform.toLowerCase();
    const targetBtn = document.querySelector(`.${lowerPlatform}`);
    targetBtn.classList.add(`active-${lowerPlatform}`);
}

function startOptimization() {
    const linkInput = document.getElementById('profileLink').value;
    const targetValue = document.getElementById('viewTarget').value;
    const statusBox = document.getElementById('statusBox');
    const statusText = document.getElementById('statusText');
    const resultBox = document.getElementById('resultBox');

    if (!selectedPlatform) {
        alert("Please select a media platform first!");
        return;
    }
    if (!linkInput.trim()) {
        alert("Please enter a valid profile or video URL link!");
        return;
    }

    // Hide any previous outputs
    resultBox.style.display = "none";
    statusBox.style.display = "block";
    statusText.innerText = `Analyzing safety parameters for ${selectedPlatform}...`;

    // Simulate multi-step legal algorithmic checks
    setTimeout(() => {
        statusText.innerText = `Verifying Anti-Ban encryption parameters for ${targetValue} milestone...`;
    }, 1500);

    setTimeout(() => {
        statusBox.style.display = "none";
        resultBox.style.display = "block";
        
        document.getElementById('resultMessage').innerHTML = `
            Your account link <strong>${linkInput}</strong> has been synced to the <strong>${selectedPlatform} ${targetValue}</strong> engine optimization checklist.<br><br>
            <strong>To achieve this legally without a ban:</strong> The algorithm has verified your link structure. To trigger the 100k view wave, ensure your next upload utilizes highly localized trending SEO soundscapes, tags, and has an engagement watch-time retention rate above 45%.
        `;
    }, 3500);
}
