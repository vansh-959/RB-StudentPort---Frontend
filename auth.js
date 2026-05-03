function getApiBaseUrl() {
    const host = window.location.hostname;
    const protocol = window.location.protocol;
    if (!host || host === 'localhost' || host === '127.0.0.1' || protocol === 'file:') {
        return 'http://localhost:8080';
    }
    return 'https://rb-studentport-backend-production.up.railway.app';
}

function showToast(message, type = 'error') {
    const container = document.getElementById('toastContainer') || document.body;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    if (!document.getElementById('toastContainer')) {
        const wrapper = document.createElement('div');
        wrapper.id = 'toastContainer';
        wrapper.style.position = 'fixed';
        wrapper.style.top = '20px';
        wrapper.style.right = '20px';
        wrapper.style.zIndex = '1000';
        wrapper.style.display = 'flex';
        wrapper.style.flexDirection = 'column';
        wrapper.style.gap = '10px';
        document.body.appendChild(wrapper);
        wrapper.appendChild(toast);
    } else {
        container.appendChild(toast);
    }

    setTimeout(() => toast.remove(), 3200);
}
