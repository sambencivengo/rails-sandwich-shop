module Constants
  Meats = {
    Category: "meats",
    Options: [
      SALAMI = 'salami',
      PROSCIUTTO = 'prosciutto',
      HAM = 'ham',
      TURKEY = 'turkey',
      CHICKEN = 'chicken',
      ROAST_BEEF = 'roast beef',
      PASTRAMI = 'pastrami'
    ].freeze, 
  } 

  Condiments = {
    Category: 'condiments',
    Options: [
      OLIVE_OIL = 'olive oil', 
      VINEGAR = 'vinegar', 
      YELLOW_MUSTARD = 'yellow mustard', 
      DIJON_MUSTARD = 'dijon mustard',
      MAYONNAISE = 'mayonnaise'
    ].freeze,
  }

  Cheeses = {
    Category: "cheeses",
    Options: [
          PROVOLONE = 'provolone',
          SWISS = 'swiss',
          CHEDDAR = 'cheddar',
          SHARP_CHEDDAR = 'sharp cheddar',
          AMERICAN = 'american',
          JACK = 'jack',
        ].freeze
  }  

  Vegetables = {
    Category: "vegetables",
    Options: [
          ONIONS = 'onions',
          SWEET_PEPPERS = 'sweet peppers',
          HOT_PEPPERS = 'hot peppers',
          LETTUCE = 'lettuce',
          ARUGULA = 'ARUGULA',
          PICKLES = 'PICKLES',
          TOMATO = 'tomato',
        ].freeze
  }  

  Breads = {
    Category: "bread",
    Options: [
          CIABATTA = 'ciabatta',
          BAGUETTE = 'baguette',
          FOCOCCIA = 'focaccia',
          RYE = 'rye', 
          SOURDOUGH = 'sourdough',      
        ].freeze
  }  
end