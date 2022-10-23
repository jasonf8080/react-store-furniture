export const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(number / 100)

    return newNumber
}

export const getUniqueValues = (array, term) => {
    let unique = array.map((item) => item[term])

    if(term === 'colors'){
        unique = unique.flat();
    }
    
    return ['all', ...new Set(unique)]
}
