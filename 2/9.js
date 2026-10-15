function transliterate(str) {
    const map = {
        а: "a", б: "b", в: "v", г: "g", д: "d",
        е: "e", ё: "yo", ж: "zh", з: "z", и: "i",
        й: "y", к: "k", л: "l", м: "m", н: "n",
        о: "o", п: "p", р: "r", с: "s", т: "t",
        у: "u", ф: "f", х: "kh", ц: "ts", ч: "ch",
        ш: "sh", щ: "shch", ъ: "", ы: "y", ь: "",
        э: "e", ю: "yu", я: "ya"
    };
    return str.replace(/[А-Яа-яЁё]/g, char => {
        const result = map[char.toLowerCase()] ?? char;

        return char === char.toUpperCase()
            ? result.charAt(0).toUpperCase() + result.slice(1)
            : result;
    });
}
console.log(transliterate("Привет, мир!"));
console.log(transliterate("Щука"));
