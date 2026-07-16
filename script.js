function selectBundle(name, rarity, description) {
    const panel = document.getElementById('preview-panel');
    const title = document.getElementById('preview-title');
    const itemRarity = document.getElementById('preview-rarity');
    const desc = document.getElementById('preview-desc');

    title.textContent = name;
    itemRarity.textContent = rarity;
    desc.textContent = description;

    // Show panel
    panel.classList.remove('hidden');
}

function closePreview() {
    const panel = document.getElementById('preview-panel');
    panel.classList.add('hidden');
}
