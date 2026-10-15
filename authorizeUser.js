function authorizeUser(username, password) {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (
        username === savedUsername &&
        password === savedPassword
    ) {
        return crypto.randomUUID();
    }

    return "Ошибка авторизации";
}
