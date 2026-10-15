function registerUser(username, password) {
    const user = {
        username: username,
        password: password
    };

    console.log("Пользователь зарегистрирован:", user);

    return user;
}

registerUser("alex", "123456");
