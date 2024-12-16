const tooltips = document.querySelectorAll('.has-tooltip');
let tooltip;

function showTooltip(title, rect) {
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        document.body.appendChild(tooltip);
    }

    tooltip.textContent = title;
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.bottom}px`;
    tooltip.classList.add('tooltip_active');
}

function hideTooltip() {
    if (tooltip) {
        tooltip.classList.remove('tooltip_active');
    }
}

tooltips.forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();

        const title = this.getAttribute('title');
        const rect = this.getBoundingClientRect();

        if (tooltip && tooltip.classList.contains('tooltip_active')) {
            hideTooltip();
        } else {
            showTooltip(title, rect);
        }
    });
});

document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('has-tooltip')) {
        hideTooltip();
    }
});