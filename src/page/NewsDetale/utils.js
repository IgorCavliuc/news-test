export const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000)

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }

    return date.toLocaleDateString('ru-RU', options)
}
