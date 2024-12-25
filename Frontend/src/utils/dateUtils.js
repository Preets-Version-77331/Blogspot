const formatDate = (date) => {
    return new Date(date).toLocaleString('en-US', {
        years: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })
}

export default formatDate;