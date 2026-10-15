function shortenFIO(fio) {
    const parts = fio.trim().split(/\s+/);

    if (parts.length !== 3) {
        return "Некорректное ФИО";
    }
    const [surname, name, patronymic] = parts;
    return `${surname} ${name[0].toUpperCase()}.${patronymic[0].toUpperCase()}.`;
}
console.log(shortenFIO("Иванов Иван Иванович"));
