export const convertCurrency = (value: number | string | undefined) => {
  if (value)
    return new Intl.NumberFormat('en-US', {//Объект Intl является пространством имён для API интернационализации ECMAScript
      style: 'currency',
      currency: 'USD'
    }).format(+value)

  else
    return
}

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl