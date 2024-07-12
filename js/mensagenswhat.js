function gotowhatsapp() {

    var name = document.getElementById("name").value;
    
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("subject").value;
    var mensagem = document.getElementById('message').value;

    var url = "https://wa.me/258857545458?text="
        + "*NOME:* " + name + "%0a"
        + "*E-MAIL:* " + email + "%0a"
        + "*ASSUNTO:* " + assunto + "%0a"
        + "%0a"
        + "%0a"
        + '*MENSAGEM:* ' + mensagem;

    window.open(url, '_blank').focus();
}

function gotowhatsappnotTT1() {

    var url = "https://wa.me/258857545458?text="
       
        + 'Olá, gostaria de comprar bilhete para a Gala de Transmissão de tarefas!';

    window.open(url, '_blank').focus();
}

function gotowhatsappnotsm() {

    var url = "https://wa.me/258857545458?text="
       
        + 'Olá, gostaria mais sobre a noticia de: ';

    window.open(url, '_blank').focus();
}

function gotowhatsappnotpart() {

    var url = "https://wa.me/258857545458?text="
       
        + 'Olá, gostaria de participar das actividades';

    window.open(url, '_blank').focus();
}

function gotowhatsappnotapoiar() {

    var url = "https://wa.me/258857545458?text="
       
        + 'Olá, gostaria de saber como apoiar a causa';

    window.open(url, '_blank').focus();
}

function gotowhatsappnotdiscon() {

    var url = "https://wa.me/258857545458?text="
       
        + 'Olá, gostaria de saber como participar de DISCON';

    window.open(url, '_blank').focus();
}

function gotowhatsappsermembro() {

    var url = "https://wa.me/258857545458?text="
       
        + 'Olá, gostaria de saber como me tornar membro do Club';

    window.open(url, '_blank').focus();
}
