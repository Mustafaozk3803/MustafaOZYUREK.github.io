function filterOptions() {
    const env = document.getElementById('environnement').value;
    const os = document.getElementById('type_serveur').value;
    const component = document.getElementById('composant').value;
    const options = document.querySelectorAll('#NomVM option');

    options.forEach(option => {
        const optionEnv = option.getAttribute('data-environment');
        const optionOs = option.getAttribute('data-os');
        const optionComponent = option.getAttribute('data-component');
        const showOption = (!optionEnv || optionEnv === env) &&
                           (!optionOs || optionOs === os) &&
                           (!optionComponent || optionComponent === component);

        option.style.display = showOption ? '' : 'none';
    });

    document.getElementById('NomVM').value = '';
}

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".submit-btn");
    const containers = document.querySelectorAll(".text-container");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const target = this.getAttribute("data-target");
            const containerToShow = document.getElementById(target);

            // Toggle visibility for the clicked container
            containerToShow.classList.toggle("hidden");

            // Hide other containers
            containers.forEach(container => {
                if (container.id !== target) {
                    container.classList.add("hidden");
                }
            });
        });
    });
});
