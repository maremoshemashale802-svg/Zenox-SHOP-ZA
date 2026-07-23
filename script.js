function calculateSens() {
    const ram = parseInt(document.getElementById('ram').value);
    const dpi = parseInt(document.getElementById('dpi').value) || 360;
    const storage = document.getElementById('storage').value;

    // Base target values configured for optimal calculation out of a 200 ceiling limit
    let general = 192;
    let redDot = 188;
    let scope2x = 184;
    let scope4x = 180;
    let sniper = 145;
    let freeLook = 155;

    // RAM processing modifier impacts
    if (ram <= 3) {
        general += 6; redDot += 8; scope2x += 10; scope4x += 12;
    } else if (ram >= 8) {
        general -= 8; redDot -= 6; scope2x -= 4; scope4x -= 2;
    }

    // DPI layout adjustment calculations
    if (dpi > 600) {
        general -= 15; redDot -= 12; scope2x -= 10;
    } else if (dpi < 360) {
        general += 7; redDot += 9;
    }

    // Storage memory environment factor values
    if (storage === 'low') {
        general += 4; redDot += 4;
    } else if (storage === 'high') {
        general -= 3;
    }

    // Ensure value targets sit securely inside a hard structural cap of 200 max limits
    const formatVal = (num) => Math.min(200, Math.max(60, Math.round(num)));

    // Calculate structural drag surface limits for Fire Button sizing context (0% to 65%)
    let fireBtn = 46;
    
    if (general > 190) {
        fireBtn = 39;
    } else if (general < 170) {
        fireBtn = 55;
    }

    if (dpi > 550) fireBtn += 6;
    if (ram <= 3) fireBtn -= 5;
    if (storage === 'low') fireBtn += 2;

    // Restrict strictly down to user constraint spectrum definitions (0% - 65%)
    fireBtn = Math.min(65, Math.max(0, Math.round(fireBtn)));

    // Smoothly pass properties straight to layout presentation layers
    document.getElementById('valGeneral').innerHTML = `${formatVal(general)}<span class="stat-max">/200</span>`;
    document.getElementById('valRedDot').innerHTML = `${formatVal(redDot)}<span class="stat-max">/200</span>`;
    document.getElementById('val2x').innerHTML = `${formatVal(scope2x)}<span class="stat-max">/200</span>`;
    document.getElementById('val4x').innerHTML = `${formatVal(scope4x)}<span class="stat-max">/200</span>`;
    document.getElementById('valSniper').innerHTML = `${formatVal(sniper)}<span class="stat-max">/200</span>`;
    document.getElementById('valFreeLook').innerHTML = `${formatVal(freeLook)}<span class="stat-max">/200</span>`;
    document.getElementById('valFireBtn').innerText = `${fireBtn}%`;

    // Trigger visual panel disclosure properties
    document.getElementById('resultsPanel').style.display = 'block';
}
