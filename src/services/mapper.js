class change {
    constructor(data) {
        this.base = data.base;
        this.date = data.date;
        this.rates = data.rates;
    }
}

export function mapearChange (changeAPI) {
    const changeClass = new change(changeAPI);
    return changeClass;
}
