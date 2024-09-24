 const groceryData=[ {
    "groceryItems": [
      {
        "name": "Apple",
        "image": "https://www.wallpaperflare.com/static/947/293/305/pple-leaves-tail-slice-wallpaper.jpg",
        "rate": 120,
        "inStock": true
      },
      {
        "name": "Banana",
        "image": "https://c0.wallpaperflare.com/preview/923/294/410/bananas-fruit-delicious-sweet.jpg",
        "rate": 40,
        "inStock": true
      },
      {
        "name": "Tomato",
        "image": "https://study.com/cimages/multimages/16/adobestock_34617669.jpeg",
        "rate": 30,
        "inStock": false
      },
      {
        "name": "Milk",
        "image":"https://th.bing.com/th/id/OIP.MS0WMcv0nG9p99uEgpNzZgHaFc?rs=1&pid=ImgDetMain",
        "rate": 50,
        "inStock": true
      },
      {
        "name": "Rice",
        "image":"https://assets.epicurious.com/photos/568eb0bf7dc604b44b5355ee/master/pass/rice.jpg",
        "rate": 60,
        "inStock": false
      },
      {
        "name": "Bread",
        "image": "https://th.bing.com/th/id/OIP.oCGfdttRamtu9d--AT0VCQHaEK?rs=1&pid=ImgDetMain",
        "rate": 40,
        "inStock": true
      },
      {
        "name": "Eggs",
        "image": "https://th.bing.com/th/id/OIP.3gdYsJd4w-Nt-WXZ-b8-PAHaGN?rs=1&pid=ImgDetMain",
        "rate": 100,
        "inStock": true
      },
      {
        "name": "Butter",
        "image": "https://th.bing.com/th/id/OIP.ajWG--KOZKFMguY63sAqIwHaHa?rs=1&pid=ImgDetMain",
        "rate": 80,
        "inStock": false
      },
      {
        "name": "Cheese",
        "image": "https://thumbs.dreamstime.com/b/transparent-packet-slices-cheese-yellow-250661363.jpg",
        "rate": 150,
        "inStock": true
      },
      {
        "name": "Potato",
        "image": "https://th.bing.com/th/id/OIP.zB7AATBDNYVwv3rUfXbYcwHaE8?rs=1&pid=ImgDetMain",
        "rate": 20,
        "inStock": true
      },
      {
        "name": "Onion",
        "image": "https://wallpaperaccess.com/full/1912934.jpg",
        "rate": 25,
        "inStock": false
      },
      {
        "name": "Carrot",
        "image": "https://th.bing.com/th/id/R.a00f32795283bec47221854b722c501c?rik=gQsGCaqyO4MI0Q&riu=http%3a%2f%2fyesofcorsa.com%2fwp-content%2fuploads%2f2017%2f04%2fCarrot-Wallpaper.jpg&ehk=FvF%2bcVYqHob9dvhCkqogxQmPGuJGPLq%2bOEb5w1ZfkZw%3d&risl=&pid=ImgRaw&r=0",
        "rate": 35,
        "inStock": true
      },
      {
        "name": "Chicken",
        "image": "https://5.imimg.com/data5/IQ/NS/MY-11305339/whole-uncooked-raw-chicken-500x500.jpg",
        "rate": 250,
        "inStock": true
      },
      {
        "name": "Fish",
        "image":"https://th.bing.com/th/id/OIP.NpmqHzmjSS09J7oqzzN9vQHaE8?rs=1&pid=ImgDetMain",
        "rate": 300,
        "inStock": true
      },
      {
        "name": "Pasta",
        "image": "https://foreignfork.com/wp-content/uploads/2022/09/61384775-uncooked-pasta-on-white.webp",
        "rate": 60,
        "inStock": false
      },
      {
        "name": "Flour",
        "image": "https://www.shutterstock.com/image-photo/uncooked-raw-sorghum-flour-also-260nw-1526779562.jpg",
        "rate": 40,
        "inStock": true
      },
      {
        "name": "Salt",
        "image": "https://static.toiimg.com/photo/msid-65754092/65754092.cms",
        "rate": 10,
        "inStock": true
      },
      {
        "name": "Sugar",
        "image": "https://th.bing.com/th/id/OIP.BQ9JkWVKIOSq4eIahlT5AgHaE8?rs=1&pid=ImgDetMain",
        "rate": 45,
        "inStock": false
      },
      {
        "name": "Coconut Oil",
        "image": "https://th.bing.com/th/id/OIP.TS5R2FptGIbvpuvkWjvfuAAAAA?rs=1&pid=ImgDetMain",
        "rate": 180,
        "inStock": true
      },
      {
        "name": "Olive Oil",
        "image": "https://cdn.britannica.com/55/157155-050-D07F5610/Containers-olive-oil.jpg",
        "rate": 350,
        "inStock": true
      },
      
      {
        "name": "Beans",
        "image": "https://www.seriouseats.com/thmb/Q_pe8B0iSnvzAY-dXzC0UZNG5X8=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__07__20160707-legumes-red-kidney-beans-vicky-wasik-4-7835e58628a94f3fba1ad8d2defc3137.jpg",
        "rate": 60,
        "inStock": false
      },
      {
        "name": "Lentils",
        "image": "https://thumbs.dreamstime.com/b/brown-uncooked-lentils-plate-16174369.jpg",
        "rate": 70,
        "inStock": true
      },
      {
        "name": "Yogurt",
        "image": "https://www.womansworld.com/wp-content/uploads/2020/07/how-to-make-yogurt-1.jpg?resize=768",
        "rate": 40,
        "inStock": true
      },
      {
        "name": "Orange Juice",
        "image": "https://jooinn.com/images/fresh-orange-juice-4.jpg",
        "rate": 100,
        "inStock": false
      },
      {
        "name": "Jam",
        "image": "https://th.bing.com/th/id/OIP.22Qt2Laj9q_onsll6CtmMAHaFS?rs=1&pid=ImgDetMain",
        "rate": 250,
        "inStock": false
      },
    ]
  }
]

export default groceryData;