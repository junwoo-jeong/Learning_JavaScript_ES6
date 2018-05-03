function validateEmail(email) {
    return email.match(/@/) ?
        email :
        new Error('invalid email');
}
