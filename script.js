function toggleContact() {
    const contactSection = document.getElementById('contact-section');
    if (contactSection.style.display === 'none') {
        contactSection.style.display = 'block';
    } else {
        contactSection.style.display = 'none';
    }
}

function contactMe() {
    const phoneNumber = "60182904479";  // Malaysia country code is 60, so the phone number is 60182904479
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
}
