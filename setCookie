function setCookie(name, value, days = 7) {
    const expires = new Date(
        Date.now() + days * 24 * 60 * 60 * 1000
    ).toUTCString();

    document.cookie =
        `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

setCookie("username", "Alex", 7);
