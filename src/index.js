export const checkAbbreviation = word => {
    return word.toUpperCase() === word;
}
/**
 * Эта функция склоняет страны по Родительному и Винительному падежам
 *
 * @param country Страна, которую нужно просклонять.
 * @param incline Падеж, в который нужно привести слово, поддерживаются genitive и accusative.
 * Буква Ё и регистр игнорируются.
 * @returns {String} Страну в правильном падеже
 */
export const returnChangedCountry = (country, incline) => {
    if ((incline !== 'genitive') && (incline !== 'accusative')){
        throw new Error('incorrect incline');
    }
    // TODO: научится определеять по предлогу падеж
    if (checkAbbreviation(country)) {
        return country
    } else {
        if (country.includes('ия')) {
            if (incline === 'genitive')
                return country.replace('ия', 'ии')
            else if (incline === 'accusative') {
                return country.replace('ия', 'ию')
            }
        } else if (country.includes('сь')) {
            if (incline === 'genitive')
                return country.replace('сь', 'си')
            else if (incline === 'accusative') {
                return country
            }
        } else if (country.includes('ан')) {
            if (incline === 'genitive')
                return country.replace('ан', 'ана')
            else if (incline === 'accusative') {
                return country
            }
        } else if (country.includes('а')) {
            if (incline === 'genitive')
                return country.replace('а', country.includes('ш') ? 'и' : 'ы')
            else if (incline === 'accusative') {
                return country.replace('а', 'у')
            }
        } else if (country.includes('ь')) {
            if (incline === 'genitive')
                return country.replace('ь', 'я')
            else if (incline === 'accusative') {
                return country
            }
        } else if (country.includes('ея')) {
            if (incline === 'genitive')
                return country.replace('ея', 'еи')
            else if (incline === 'accusative') {
                return country.replace('ея', 'ею')
            }
        } else if (country.includes('ик')) {
            if (incline === 'genitive')
                return country.replace('ик', 'ика')
            else if (incline === 'accusative') {
                return country
            }
        } else if (country.includes('ай')) {
            if (incline === 'genitive')
                return country.replace('ай', 'ая')
            else if (incline === 'accusative') {
                return country
            }
        } else if (country.includes('о')) {
            return country
        } else if (country.includes('ун')) {
            if (incline === 'genitive')
                return country.replace('ун', 'уна')
            else if (incline === 'accusative') {
                return country
            }
        } else if (country.includes('ет')) {
            if (incline === 'genitive')
                return country.replace('ет', 'та')
            else if (incline === 'accusative') {
                return country
            }
        }

    }
}
