function getUUID(isAuthorized) {
    if (isAuthorized !== true) {
        return "Доступ запрещён";
    }

    return crypto.randomUUID();
}

console.log(getUUID(true));
