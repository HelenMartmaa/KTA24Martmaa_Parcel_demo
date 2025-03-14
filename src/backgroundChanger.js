export function initBackgroundChanger() {
    const radios = document.querySelectorAll('input[name="bgcolor"]');

    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            document.body.style.backgroundColor = e.target.value;
        });
    });
}
