const CARDIO_DATA = [
  {

    id: 1,
    name: 'Brown Brim',
    imageUrl: 'data:image/jpeg;base64,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',
    price: 25
  },
  {
    id: 2,
    name: 'Blue Beanie',
    imageUrl: 'data:image/jpeg;base64,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',
    price: 18
  },
  {
    id: 3,
    name: 'Brown Cowboy',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6A-iWTLdK6xQedefyMFlrBWlzUjyxclX28g&usqp=CAU',
    price: 35
  },
  {
    id: 4,
    name: 'Grey Brim',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlm77fPMLW1xvSlNlenq2A2c-ydKgfcZBfNA&usqp=CAU',
    price: 25
  },
  {
    id: 5,
    name: 'Green Beanie',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjCZyU484ySzTbqOwg1KZtdbxIe8InGSZ85Q&usqp=CAU',
    price: 18
  },
  {
    id: 6,
    name: 'Palm Tree Cap',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSg0Hykf8ryAd81Ym4Zqxvhza4oy2lJUrWjw&usqp=CAU',
    price: 14
  },
  {
    id: 7,
    name: 'Red Beanie',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQpJot7oTUKdE12qH7HvRXOva646gFC9dgw&usqp=CAU',
    price: 18
  },
  {
    id: 8,
    name: 'Wolf Cap',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivIM32GfMybAl6G42p5BAXIEebeCRCGfnBQ&usqp=CAU',
    price: 14
  },
  {
    id: 9,
    name: 'Blue Snapback',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD1HkxjoNGp_5akhM1AO54jav-cGnUdBsoaQ&usqp=CAU',
    price: 16
  }
  
  ];

export default CARDIO_DATA;