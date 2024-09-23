// (function() {
//     emailjs.init("L9eDDdWEJmif_eUkA"); // Replace with your EmailJS user ID
// })();

const form = document.getElementById("contactForm");

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r9nr08c', 'template_zendpok', '#contactForm', 'L9eDDdWEJmif_eUkA')
        .then(() => { 
            alert("Message sent successfully!"); 
        }).catch((error) => { 
            console.error("Error sending message:", error); 
            alert("Failed to send message.");
        });
}

form.addEventListener("submit", sendEmail);
