
let form = document.querySelector('.form-contact')
form.addEventListener('submit', e =>{
    e.preventDefault()
    let firstName = document.querySelector('#firstName').value
    let lastName = document.querySelector('#lastName').value
    let email = document.querySelector('#email').value
    let phone = document.querySelector('#phone').value
    let message = document.querySelector('#message').value
    console.log(firstName,lastName,email,phone,message);
    Email.send({
        SecureToken : "058a27c0-e769-4fc7-ad1a-fe00f5f8a5e5",
        To : 'galalalmaghraby01@gmail.com',
        From : "galalalmaghraby01@gmail.com",
        Subject : "This is the subject",
        Body : `<div>first name : ${firstName}
                    <br />
                    last name : ${lastName}
                    <br />
                    email : ${email}
                    <br />
                    phone : ${phone}
                    <br />
                    message : ${message}
                    <br />

        </div>`
    }).then(
      message => {
        alert("Done Send Thanks")
       document.querySelector('#firstName').value = ""
       document.querySelector('#lastName').value = ""
       document.querySelector('#email').value = ""
       document.querySelector('#phone').value = ""
       document.querySelector('#message').value = ""
    }
    );
})
