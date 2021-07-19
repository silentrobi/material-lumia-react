export default {
  fontFamily: [
    'Roboto'
  ].join(','),
  h1: {
    fontSize: 40,
    '@media screen and (max-width:768px)':{
      fontSize: 36 
    },
    '@media screen and (max-width:480px)':{
      fontSize: 30
    }, 
  },
  h2: {
    fontSize: 30,
    '@media screen and (max-width:768px)':{
      fontSize: 27 // 3 * 8 px
    },
    '@media screen and (max-width:480px)':{
      fontSize: 24
    }, 
  },
  h3: {
    fontSize: 24,
    '@media screen and (max-width:768px)':{
      fontSize: 22 // 3 * 8 px
    },
    '@media screen and (max-width:480px)':{
      fontSize: 20
    }, 
  },
  h4: {
    fontSize: 20,
    '@media screen and (max-width:768px)':{
      fontSize: 18 // 3 * 8 px
    },
    '@media screen and (max-width:480px)':{
      fontSize: 16
    }, 
  },
  h5: {
    fontSize: 16,
    '@media screen and (max-width:768px)':{
      fontSize: 14 // 3 * 8 px
    },
    '@media screen and (max-width:480px)':{
      fontSize: 12
    }, 
  },
  h6: {
    fontSize: 14,
    '@media screen and (max-width:768px)':{
      fontSize: 12 // 3 * 8 px
    },
    '@media screen and (max-width:480px)':{
      fontSize: 10
    }, 
  },
  overline: {
    fontWeight: 500
  }
};
