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
