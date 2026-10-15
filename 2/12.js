function generatePassword(length = 12) {
    const chars =
        "abcdefghijklmnopqrstuvwxyz" +
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "0123456789" +
        "!@#$%^&*";
    if (!Number.isInteger(length) || length < 1) {
        throw new Error("Длина пароля должна быть положительным целым числом");
    }
    let password = "";
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * chars.length);
        password += chars[index];
    }
    return password;
}
console.log(generatePassword());
console.log(generatePassword(16));
