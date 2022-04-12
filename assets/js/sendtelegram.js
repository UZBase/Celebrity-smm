var telegram_bot_id = "5029508020:AAEVAd3hZa5m5TEbTs1f7c2zddexiAvwWEo";
var chat_id = 1073336360;
var u_name, u_email, u_subject, u_message;
var ready = function () {
    u_name = document.getElementById("name").value;
    u_email = document.getElementById("email").value;
    u_subject = document.getElementById("subject").value;
    u_message = document.getElementById("message").value;
    message = "Имя: " + u_name + "\nПочта: " + u_email + "\nТема: " + u_subject + "\nСообщение: " + u_message;
};
var sendtelegram = function () {
    ready();
    console.log(`work ${message}`);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    return false;
};
