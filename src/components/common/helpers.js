export const getButtonStyle = (type) => {
  switch (type) {
    case 'cross':
      return 'crossStyle'
    case 'check':
      return 'checkStyle'
    case 'favourite':
      return 'favouriteStyle'
    case 'plus':
      return 'plusStyle'
  }
}

export const isItemAddedCartFav = (arr, card) => {
  return arr.find((item) => item.id === card.id)
}
