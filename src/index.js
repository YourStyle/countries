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
    if ((incline !== 'genitive') && (incline !== 'accusative')) {
        throw new Error('incorrect incline');
    }
    // TODO: научится определеять по предлогу падеж
    if (checkAbbreviation(country)) {
        return country
    } else {
        if (country === 'Северная Македония') {
            if (incline === 'genitive') {
                return 'Северной Македонии'
            } else if (incline === 'accusative') {
                return 'Северную Македонию'
            }
        } else if (country.endsWith('ия')) {
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
        } else if (country === 'Афганистан' || country === 'Вьетнам' || country === 'Габон') {
            if (incline === 'genitive') {
                country = country + 'а'
                return country
            } else if (incline === 'accusative') {
                return country
            }
        } else if (country === 'Гана' || country === 'Канада' || country === 'Украина') {
            if (incline === 'genitive') {
                country = country.substring(0, country.length - 1) + 'ы'
                return country
            } else if (incline === 'accusative') {
                country = country.substring(0, country.length - 1) + 'у'
                return country
            }
        } else if (country === 'Республика Корея') {
            if (incline === 'genitive') {
                return 'Республики Кореи'
            } else if (incline === 'accusative') {
                return 'Республику Корею'
            }
        } else if (country === 'Мексика') {
            if (incline === 'genitive') {
                return 'Мексики'
            } else if (incline === 'accusative') {
                return 'Мексику'
            }
        } else if (country.endsWith('р')) {
            if (incline === 'genitive')
                return country.replace('р', 'ра')
            else if (incline === 'accusative') {
                return country
            }
        } else if (country.endsWith('ан')) {
            if (incline === 'genitive')
                return country.replace('ан', 'ана')
            else if (incline === 'accusative') {
                return country
            }
        } else if (country.endsWith('а')) {
            if (incline === 'genitive')
                return country.replace('а', country.includes('ш') ? 'и' : 'ы')
            else if (incline === 'accusative') {
                return country.replace('а', 'у')
            }
        } else if (country.endsWith('ь')) {
            if (incline === 'genitive')
                return country.replace('ь', 'я')
            else if (incline === 'accusative') {
                return country
            }
        } else if (country.endsWith('ея')) {
            if (incline === 'genitive')
                return country.replace('ея', 'еи')
            else if (incline === 'accusative') {
                return country.replace('ея', 'ею')
            }
        } else if (country.endsWith('ик')) {
            if (incline === 'genitive')
                return country.replace('ик', 'ика')
            else if (incline === 'accusative') {
                return country
            }
        } else if (country.endsWith('ай')) {
            if (incline === 'genitive')
                return country.replace('ай', 'ая')
            else if (incline === 'accusative') {
                return country
            }
        } else if (country.endsWith('о')) {
            return country
        } else if (country.endsWith('ун')) {
            if (incline === 'genitive')
                return country.replace('ун', 'уна')
            else if (incline === 'accusative') {
                return country
            }
        } else if (country.endsWith('ет')) {
            if (incline === 'genitive')
                return country.replace('ет', 'та')
            else if (incline === 'accusative') {
                return country
            }
        }

    }
}


const countries = ["Абхазия", "Австрия", "Азербайджан", "Алжир", "Аргентина", "Армения", "Афганистан", "Беларусь", "Болгария", "Бразилия", "Венгрия", "Вьетнам", "Габон", "Гана", "Германия", "Греция", "Грузия", "ДР Конго", "Египет", "Замбия", "Израиль", "Индия", "Индонезия", "Иран", "Испания", "Италия", "КНДР", "Казахстан", "Камерун", "Канада", "Кения", "Киргизия", "Китай", "Куба", "Латвия", "Литва", "Марокко", "Мексика", "Мозамбик", "Молдова", "Монголия", "Нигерия", "Пакистан", "Польша", "Португалия", "Республика Корея", "Румыния", "США", "Северная Македония", "Сербия", "Словакия", "Словения", "Таджикистан", "Тайвань", "Туркменистан", "Турция", "Узбекистан", "Украина", "Финляндия", "Франция", "Хорватия", "Чехия", "Швейцария", "Швеция", "Эстония", "ЮАР", "Япония"]
