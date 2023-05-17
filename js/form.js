// // // -----------------------------------

const shortenLink = document.querySelector(".inputURL");

let messageContainer;
let message;
let warningImage;


sendContact.addEventListener('click', () => {
    
    let consulta = inputValue.value;
    let validador = messageContainer;
    
    if (consulta.length === 0) {

        if(validador) {
            message.remove();
            messageContainer.remove();
            messageContainer;
            warningImage.remove();
            warningImage;
            extraDiv.style.background = "";
        } 

    } else {

        function pruebaemail (valor){
            re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
            if(re.exec(valor)){
                // SE EJECUTA FUNCIÓN DE ENVÍO DE DATOS
                message.remove();
                messageContainer.remove();
                messageContainer;
                warningImage.remove();
                warningImage;
                inputValue.value = "";
            } else {
                if(document.body.contains(messageContainer)) {

                } else {
                    messageContainer;
                    messageContainer = document.createElement('div');

                    warningImage;
                    warningImage = document.createElement('img');
                    warningImage.className = "warningImage";
                    warningImage.src = "./images/icon-error.svg";

                    message = document.createElement('p');
                    messageContainer.className = "messageContainer";
        
                    extraDiv.style.background = "#fb5859";
                    messageContainer.style.position = "relative";
                    
                    message.className = "warning";
                    message.textContent = "Whoops, make sure it's an email";
        
                    extraDiv.appendChild(messageContainer);
                    messageContainer.appendChild(message);


                    extraDiv.appendChild(warningImage);
                }
            } 
        }
        pruebaemail(consulta);
    }
});
