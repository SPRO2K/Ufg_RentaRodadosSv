document.getElementById('saveSettings').addEventListener('click', function () {
    let notifications = document.getElementById('notifications').checked;
    let language = document.getElementById('language').value;
    let privacy = document.getElementById('privacy').value;
    let notificationsEmail = document.getElementById('notificationsEmail').checked;

    let statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = "Configuraciones guardadas con exito.";

    console.log("Notificaciones: " + (notifications ? "Activadas" : "Desactivadas"));
    console.log("Idioma: " + language);
    console.log("Privacidad: " + privacy);
    console.log("Notificaciones por Email: " + (notificationsEmail ? "Activadas" : "Desactivadas"));

    // Aquí puedes agregar lógica para aplicar las configuraciones
});
