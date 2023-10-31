export const getNoun = (number, cases) => {
    const rem100 = number % 100;
    const rem10 = number % 10;

    if (rem100 >= 11 && rem100 <= 19) {
        return cases[2]
    }
    if (rem10 === 1) {
        return cases[0]
    }
    if (rem10 >= 2 && rem10 <= 4) {
        return cases[1]
    }
    return cases[2]
}

export const calculateTime = (time) => {
    const currentTimestamp = new Date().getTime()
    const timestamp = time * 1000
    const elapsedMilliseconds = currentTimestamp - timestamp

    const minutes = Math.floor(elapsedMilliseconds / 60000)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    if (minutes < 1) {
        return 'только что'
    } else if (minutes < 60) {
        return `${minutes} ${getNoun(minutes, [
            'минуту',
            'минуты',
            'минут',
        ])} назад`
    } else if (hours < 24) {
        return `${hours} ${getNoun(hours, ['час', 'часа', "часов"])} назад`
    } else {
        return `${days} ${getNoun(days, ['день', 'дня', "дней"])} назад`
    }
}
