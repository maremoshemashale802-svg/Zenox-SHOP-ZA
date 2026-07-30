/**
 * Rigidit Sensi - Móvel FFs
 * Frontend App Control Engine
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // =========================================================================
    // 1. SLIDER INTERACTION ENGINE
    // =========================================================================
    const sensitivitySliders = [
        { sliderId: "slider-geral", displayId: "val-geral" },
        { sliderId: "slider-ponto", displayId: "val-ponto" },
        { sliderId: "slider-mira2x", displayId: "val-mira2x" },
        { sliderId: "slider-mira4x", displayId: "val-mira4x" },
        { sliderId: "slider-sniper", displayId: "val-sniper" },
        { sliderId: "slider-dpi", displayId: "val-dpi" },
        { sliderId: "slider-botao", displayId: "val-botao" }
    ];

    sensitivitySliders.forEach(target => {
        const nativeSlider = document.getElementById(target.sliderId);
        const dynamicDisplay = document.getElementById(target.displayId);

        if (nativeSlider && dynamicDisplay) {
            nativeSlider.addEventListener("input", (event) => {
                dynamicDisplay.textContent = event.target.value;
            });
        }
    });

    // =========================================================================
    // 2. NAVIGATION AND SCREEN ROUTER
    // =========================================================================
    const systemTabs = document.querySelectorAll(".nav-item");
    const functionalScreens = document.querySelectorAll(".app-screen");

    systemTabs.forEach(tabItem => {
        tabItem.addEventListener("click", () => {
            // Remove active states from all tabs and views
            systemTabs.forEach(tab => tab.classList.remove("active"));
            functionalScreens.forEach(screen => screen.classList.remove("active"));

            // Apply active state to selected interactive nodes
            tabItem.classList.add("active");
            const targetScreenId = tabItem.getAttribute("data-target");
            
            const targetScreenElement = document.getElementById(targetScreenId);
            if (targetScreenElement) {
                targetScreenElement.classList.add("active");
            }
        });
    });

    // =========================================================================
    // 3. FONT SCALE SELECTION HOOK
    // =========================================================================
    const scaleSelectionButtons = document.querySelectorAll(".scale-btn");
    const interactiveFontPreview = document.getElementById("font-preview-box");

    scaleSelectionButtons.forEach(actionButton => {
        actionButton.addEventListener("click", () => {
            // Clear prior selection attributes
            scaleSelectionButtons.forEach(btn => btn.classList.remove("active"));
            
            // Set current state flags
            actionButton.classList.add("active");
            const structuralScaleValue = actionButton.getAttribute("data-val");
            
            if (interactiveFontPreview) {
                interactiveFontPreview.textContent = structuralScaleValue;
            }
        });
    });

    // =========================================================================
    // 4. ACTION CONTROLLERS & ALERT DIALOGS
    // =========================================================================
    const automaticAdjustmentTrigger = document.querySelector(".auto-adjust-btn");
    if (automaticAdjustmentTrigger) {
        automaticAdjustmentTrigger.addEventListener("click", () => {
            alert("Ajustando sensibilidade automaticamente para otimização...");
            
            // Override UI configuration directly to demonstrate state feedback
            const baseGeralSlider = document.getElementById("slider-geral");
            const baseGeralDisplay = document.getElementById("val-geral");
            
            if (baseGeralSlider && baseGeralDisplay) {
                baseGeralSlider.value = 195;
                baseGeralDisplay.textContent = "195";
            }
        });
    }

    const configurationsPersistenceTrigger = document.querySelector(".save-config-btn");
    if (configurationsPersistenceTrigger) {
        configurationsPersistenceTrigger.addEventListener("click", () => {
            alert("Configurações salvas no dispositivo com sucesso!");
        });
    }
});
