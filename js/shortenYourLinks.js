window.addEventListener("DOMContentLoaded", function(){
    console.log("La página cargó correctamente");
});



// CLICK en Botón 
document.querySelector(".buttonURL").addEventListener('click', shortenYourLink);

let linkToShorten = document.querySelector(".inputURL");
// let newLink;


function shortenYourLink() {

    if(linkToShorten.value == "") {
        console.log("Agrega un link.")
    } else {
        console.log(linkToShorten.value)
        if (`${linkToShorten.value}`.includes('http' || '9qr.de')) {
            console.log("Acortar link válido")
            console.log("Acortar link " + linkToShorten.value)


            let url = `https://api.shrtco.de/v2/shorten?url=${linkToShorten.value}`;
            console.log(url)

            
            fetch(url, {
              method: 'POST'
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log(response)
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
                console.log(linkResult.id)

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


                // newLink = links.result.full_short_link2;


                // document.querySelector(".copyLink").addEventListener('click', copyToClipboard);

                // function copyToClipboard(links) {
                //     console.log("Copiamos el link");

                //     // Selecciona el texto que deseas copiar
                //     let text = `${links.result.full_short_link2}`;

                //     // Utiliza la API del portapapeles para copiar el texto
                //     navigator.clipboard.writeText(text)
                //     .then(function() {
                //         console.log("Texto copiado al portapapeles");
                //     })
                //     .catch(function(error) {
                //         console.error("Error al copiar al portapapeles:", error);
                //     });
                // }



                document.querySelector(".copyLink").addEventListener('click', copyToClipboard);
                document.getElementById(`${linkResult.id}`).addEventListener('click', copyToClipboard);

                function copyToClipboard() {

                    let element;
                    element = document.getElementById(`${linkResult.id}`);
                    console.log(element)

                    console.log("Copiamos el link");
                    // console.log(newLink)

                    // Selecciona el texto que deseas copiar
                    let text = `${links.result.full_short_link2}`;

                    // Utiliza la API del portapapeles para copiar el texto
                    navigator.clipboard.writeText(text)
                    .then(function() {
                        console.log(links.result.full_short_link);
                        console.log(element.id);

                        if (links.result.code == element.id) {
                            console.log("Texto copiado al portapapeles");
                            copyLink.classList.remove("copyLink");
                            copyLink.classList.add("copiedLink")
                            copyLink.textContent = `Copied!`;
                        } else {
                            console.log('No es igual')
                        }

                    })
                    .catch(function(error) {
                        console.error("Error al copiar al portapapeles:", error);
                    });
                }
            }

            linkToShorten.value = '';

        } else {
            console.log("Agrega un link válido.")
        }
    }
};


