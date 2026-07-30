/**
 * Rigidit Sensi - Móvel FFs
 * Frontend App Control Engine (English Translation)
 * 
 * Features:
 * - Simulated Hardware Scanning Sequence
 * - Simulated 0-200 Optimization Output (Headshot / Zero Recoil Profile)
 * - Automatic Auxiliary Toggle Operations
 * - Interactive Preview Controllers
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // Core Layout Control DOM Elements
    const scanTriggerBtn = document.getElementById("scan-trigger-btn");
    const saveTriggerBtn = document.getElementById("save-trigger-btn");
    const scanningBox = document.getElementById("scanning-box");
    const scanProgress = document.getElementById("scan-progress");
    const scanTitle = document.getElementById("scan-title");
    const scanSubtitle = document.getElementById("scan-subtitle");

    // Zero Recoil / Headshot Pro Calibration Matrices mapped up to 200 units
    const targetCalibrations = [
        { id: "slider-general", displayId: "val-general", perfectVal: 184 },
        { id: "slider-red-dot", displayId: "val-red-dot", perfectVal: 172 },
        { id: "slider-2x-scope", displayId: "val-2x-scope", perfectVal: 168 },
        { id: "slider-4x-scope", displayId: "val-4x-scope", perfectVal: 155 },
        { id: "slider-sniper-scope", displayId: "val-sniper-scope", perfectVal: 110 },
        { id: "slider-suggested-dpi", displayId: "val-suggested-dpi", perfectVal: 580 },
        { id: "slider-fire-button", displayId: "val-fire-button", perfectVal: 44 }
    ];

    // Initialize all input metrics as empty placeholders (?) per user images
    targetCalibrations.forEach(target => {
        const nativeSlider = document.getElementById(target.id);
        const dynamicDisplay = document.getElementById(target.displayId);
        
        if (nativeSlider && dynamicDisplay) {
            dynamicDisplay.textContent = "?";
            
            // Allow manual interactive tuning tracking override
            nativeSlider.addEventListener("input", (event) => {
                dynamicDisplay.textContent = event.target.value;
            });
        }
    });

    // =========================================================================
    // AUTOMATED DEVICE TELEMETRY HARDWARE SCANNING LOOP
    // =========================================================================
    if (scanTriggerBtn) {
        scanTriggerBtn.addEventListener("click", () => {
            // Unhide overlay frame container variables
            scanningBox.style.display = "flex";
            scanProgress.style.width = "0%";
            
            scanTitle.textContent = "INITIALIZING CORE TELEMETRY...";
            scanSubtitle.textContent = "Connecting to device touchscreen driver layers...";

            let progressPercentage = 0;
            const timelineInterval = setInterval(() => {
                progressPercentage += 2;
                scanProgress.style.width = `${progressPercentage}%`;

                // Update real-time process tracker text feedback
                if (progressPercentage === 24) {
                    scanTitle.textContent = "SCANNING SYSTEM CORE...";
                    scanSubtitle.textContent = "Analyzing processor frequency and GPU rendering clocks...";
                }
                if (progressPercentage === 52) {
                    scanTitle.textContent = "CALCULATING ANTI-RECOIL RATIOS...";
                    scanSubtitle.textContent = "Compiling smooth touch movement coefficients (0 - 200)...";
                }
                if (progressPercentage === 80) {
                    scanTitle.textContent = "APPLYING HEADSHOT LAYERS...";
                    scanSubtitle.textContent = "Configuring crosshair trajectory correction thresholds...";
                }

                // Scanning Cycle Concluded
                if (progressPercentage >= 100) {
                    clearInterval(timelineInterval);
                    
                    setTimeout(() => {
                        // Push perfect target metrics to range values
                        targetCalibrations.forEach(target => {
                            const nativeSlider = document.getElementById(target.id);
                            const dynamicDisplay = document.getElementById(target.displayId);
                            
                            if (nativeSlider && dynamicDisplay) {
                                nativeSlider.value = target.perfectVal;
                                dynamicDisplay.textContent = target.perfectVal;
                            }
                        });

                        // Flip auxiliary helper options toggles instantly
                        const boostToggle = document.getElementById("toggle-more-sensi");
                        const limitToggle = document.getElementById("toggle-max-sensi");
                        if (boostToggle) boostToggle.checked = true;
                        if (limitToggle) limitToggle.checked = true;

                        // Authorize configuration save state classes
                        saveTriggerBtn.classList.add("ready-to-save");
                        scanningBox.style.display = "none";
                    }, 400);
                }
            }, 35); // Loops sequentially to run for roughly ~1.75 seconds
        });
    }

    // =========================================================================
    // PERSISTENCE ACTIONS TRIGGER HANDLER
    // =========================================================================
    if (saveTriggerBtn) {
        saveTriggerBtn.addEventListener("click", () => {
            if (saveTriggerBtn.classList.contains("ready-to-save")) {
                alert("Success: Recoil optimization profiles compiled and loaded into device buffer memory space!");
            } else {
                alert("Error: Operation blocked. Please run 'Auto-tune' to map device hardware first.");
            }
        });
    }

    // =========================================================================
    // FONT SELECTION INTERFACE MATRIX MANAGEMENT
    // =========================================================================
    const gridActionButtons = document.querySelectorAll(".scale-btn");
    const structuralPreviewContainer = document.getElementById("font-preview-box");
    
    gridActionButtons.forEach(actionButton => {
        actionButton.addEventListener("click", () => {
            gridActionButtons.forEach(btn => btn.classList.remove("active"));
            actionButton.classList.add("active");
            
            if (structuralPreviewContainer) {
                structuralPreviewContainer.textContent = actionButton.getAttribute("data-val");
            }
        });
    });
});
