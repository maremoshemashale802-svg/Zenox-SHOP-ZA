function selectBundle(name, rarity, description) {
    const panel = document.getElementById('preview-panel');
    const title = document.getElementById('preview-title');
    const itemRarity = document.getElementById('preview-rarity');
    const desc = document.getElementById('preview-desc');

    title.textContent = name;
    itemRarity.textContent = rarity;
    desc.textContent = description;

    // Show the information panel
    panel.classList.remove('hidden');
    
    // Smooth scroll down to preview on mobile devices
    panel.scrollIntoView({ behavior: 'smooth' });
}

function closePreview() {
    const panel = document.getElementById('preview-panel');
    panel.classList.add('hidden');
}
