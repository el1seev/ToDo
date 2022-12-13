const fixDate = (date) => {
    const fixedDate = new Date(date);
    fixedDate.setDate(fixedDate.getDate() + 1);
    return fixedDate;
}

module.exports = fixDate;