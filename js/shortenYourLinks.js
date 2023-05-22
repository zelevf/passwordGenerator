
// CLICK en Botón 
document.querySelector(".buttonURL").addEventListener('click', shortenYourLink);

let linkToShorten = document.querySelector(".inputURL");
let menuItemsContainer2 = document.querySelector(".menuItemsContainer");
let inputNotification = document.querySelector(".URLcontainer");


function shortenYourLink() {
    let inputToAddURL = document.querySelector(".inputURL");

    if(linkToShorten.value == "") {

        if (inputToAddURL.classList.contains('missingLink') == true) {
            let notificationLink = document.querySelector(".notificationLink");
            notificationLink.remove();
            inputToAddURL.classList.remove("missingLink");
            
        }


        inputToAddURL.classList.add('missingLink');
        inputToAddURL.style.borderColor = '#f56366';

        const notificationLink = document.createElement('h5');
        notificationLink.classList.add('notificationLink');
        notificationLink.textContent = "Please add a link";
        inputNotification.appendChild(notificationLink);
        
    } else {

        if (inputToAddURL.classList.contains('missingLink') == true) {
            let notificationLink = document.querySelector(".notificationLink");
            notificationLink.remove();
            inputToAddURL.classList.remove("missingLink");
            inputToAddURL.style.borderColor = '#3a3053';
        }



        if (`${linkToShorten.value}`.includes('http')) {

            if (`${linkToShorten.value}`.includes('9qr.de')) {
                inputToAddURL.classList.add('missingLink');
                inputToAddURL.style.borderColor = '#f56366';
        
                const notificationLink = document.createElement('h5');
                notificationLink.classList.add('notificationLink');
                notificationLink.textContent = "Please add a valid link";
                inputNotification.appendChild(notificationLink);
            } else {    
    
                let url = `https://api.shrtco.de/v2/shorten?url=${linkToShorten.value}`;
    
                if (inputToAddURL.classList.contains('missingLink') == true) {
    
                    inputToAddURL.style.borderColor = '#3a3053';
        
                    let notificationLink = document.querySelector(".notificationLink");
                    notificationLink.remove();
                    inputToAddURL.classList.remove("missingLink");
                    
                }
                
                fetch(url, {
                  method: 'POST'
                }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => {
                    showLinks(response);
                });
    
    
                function showLinks(links) {
                    const shortenedLinksContainer = document.createElement('div');
                    shortenedLinksContainer.classList.add('shortenedLinksContainer');
    
                    const linkToShorten = document.createElement('p');
                    linkToShorten.classList.add('linkToShorten');
                    linkToShorten.textContent = links.result.original_link;
    
                    const linkResult = document.createElement('div');
                    linkResult.classList.add('linkResult');
                    linkResult.id = links.result.code;
    
                    const linkShortened = document.createElement('p');
                    linkShortened.classList.add('linkShortened');
                    linkShortened.textContent = links.result.full_short_link2;
    
                    const copyLink = document.createElement('p');
                    copyLink.classList.add('copyLink');
                    copyLink.textContent = `Copy`;
    
    
                    // -------------- ADD TO HTML --------------
    
                    let linksContainer = document.querySelector(".linksContainer");
                    linksContainer.appendChild(shortenedLinksContainer);
                    shortenedLinksContainer.appendChild(linkToShorten);
                    shortenedLinksContainer.appendChild(linkResult);
                    linkResult.appendChild(linkShortened);
                    linkResult.appendChild(copyLink);
    
    
    
                    document.getElementById(`${linkResult.id}`).addEventListener('click', copyToClipboard);
    
                    function copyToClipboard() {
    
                        let element;
                        element = document.getElementById(`${linkResult.id}`);
    
                        // Selecciona el texto que deseas copiar
                        let text = `${links.result.full_short_link2}`;
    
                        // Utiliza la API del portapapeles para copiar el texto
                        navigator.clipboard.writeText(text)
                        .then(function() {
    
                            if (links.result.code == element.id) {
                                copyLink.classList.remove("copyLink");
                                copyLink.classList.add("copiedLink")
                                copyLink.textContent = `Copied!`;
                            } 
    
                        })
                        .catch(function(error) {
                            console.error("Error al copiar al portapapeles:", error);
                        });
                    }
                }
    
                linkToShorten.value = '';
            }


        } else {


            if (inputToAddURL.classList.contains('missingLink') == true) {
                let notificationLink = document.querySelector(".notificationLink");
                notificationLink.remove();
                inputToAddURL.classList.remove("missingLink");
                
            }

            
            inputToAddURL.classList.add('missingLink');
            inputToAddURL.style.borderColor = '#f56366';
    
            const notificationLink = document.createElement('h5');
            notificationLink.classList.add('notificationLink');
            notificationLink.textContent = "Please add a valid link";
            inputNotification.appendChild(notificationLink);
        }
    }
};


