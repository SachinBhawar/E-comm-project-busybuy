const data = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 1099,
        description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            rate: 3.9,
            count: 120,
        },
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 300,
        description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
            rate: 4.1,
            count: 259,
        },
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 1155,
        description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: {
            rate: 4.7,
            count: 500,
        },
    },
    {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 900,
        description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: {
            rate: 2.1,
            count: 430,
        },
    },
    {
        id: 5,
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 6950,
        description:
            "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        rating: {
            rate: 4.6,
            count: 400,
        },
    },
    {
        id: 6,
        title: "Solid Gold Petite Micropave ",
        price: 7500,
        description:
            "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        rating: {
            rate: 3.9,
            count: 70,
        },
    },
    {
        id: 7,
        title: "White Gold Plated Princess",
        price: 3999,
        description:
            "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        rating: {
            rate: 3,
            count: 400,
        },
    },
    {
        id: 8,
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10999,
        description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        rating: {
            rate: 1.9,
            count: 100,
        },
    },
    {
        id: 9,
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        price: 999,
        description:
            "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        rating: {
            rate: 3.3,
            count: 203,
        },
    },
    {
        id: 10,
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 699,
        description:
            "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        rating: {
            rate: 2.9,
            count: 470,
        },
    },
    {
        id: 11,
        title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        price: 5000,
        description:
            "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        category: "electronics",
        image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        rating: {
            rate: 4.8,
            count: 319,
        },
    },
    {
        id: 12,
        title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        price: 25000,
        description:
            "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        rating: {
            rate: 4.8,
            count: 400,
        },
    },
    {
        id: 13,
        title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        price: 19999,
        description:
            "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        rating: {
            rate: 2.9,
            count: 250,
        },
    },
    {
        id: 14,
        title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        price: 70000,
        description:
            "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: {
            rate: 2.2,
            count: 140,
        },
    },
    {
        id: 15,
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 2599,
        description:
            "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        rating: {
            rate: 2.6,
            count: 235,
        },
    },
    {
        id: 16,
        title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 2599,
        description:
            "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        rating: {
            rate: 2.9,
            count: 340,
        },
    },
    {
        id: 17,
        title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price: 3333,
        description:
            "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        rating: {
            rate: 3.8,
            count: 679,
        },
    },
    {
        id: 18,
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 799,
        description:
            "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        rating: {
            rate: 4.7,
            count: 130,
        },
    },
    {
        id: 19,
        title: "Opna Women's Short Sleeve Moisture",
        price: 699,
        description:
            "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        rating: {
            rate: 4.5,
            count: 146,
        },
    },
    {
        id: 20,
        title: "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 999,
        description:
            "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        rating: {
            rate: 3.6,
            count: 145,
        },
    },
    {
        id: 21,
        title: "Essence Mascara Lash Princess",
        price: 829,
        description:
            "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
        rating: {
            rate: 2.56,
            count: 99,
        },
    },
    {
        id: 22,
        title: "Eyeshadow Palette with Mirror",
        price: 1659,
        description:
            "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        category: "beauty",
        image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
        rating: {
            rate: 2.86,
            count: 34,
        },
    },
    {
        id: 23,
        title: "Powder Canister",
        price: 1244,
        description:
            "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
        category: "beauty",
        image: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
        rating: {
            rate: 4.64,
            count: 89,
        },
    },
    {
        id: 24,
        title: "Red Lipstick",
        price: 1078,
        description:
            "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
        category: "beauty",
        image: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
        rating: {
            rate: 4.36,
            count: 91,
        },
    },
    {
        id: 25,
        title: "Red Nail Polish",
        price: 746,
        description:
            "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
        category: "beauty",
        image: "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
        rating: {
            rate: 4.32,
            count: 79,
        },
    },
    {
        id: 26,
        title: "Calvin Klein CK One",
        price: 4149,
        description:
            "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
        category: "fragrances",
        image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
        rating: {
            rate: 4.37,
            count: 29,
        },
    },
    {
        id: 27,
        title: "Chanel Coco Noir Eau De",
        price: 10789,
        description:
            "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
        category: "fragrances",
        image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
        rating: {
            rate: 4.26,
            count: 58,
        },
    },
    {
        id: 28,
        title: "Dior J'adore",
        price: 7469,
        description:
            "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
        category: "fragrances",
        image: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
        rating: {
            rate: 3.8,
            count: 98,
        },
    },
    {
        id: 29,
        title: "Dolce Shine Eau de",
        price: 5809,
        description:
            "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
        category: "fragrances",
        image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp",
        rating: {
            rate: 3.96,
            count: 4,
        },
    },
    {
        id: 30,
        title: "Gucci Bloom Eau de",
        price: 6639,
        description:
            "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
        category: "fragrances",
        image: "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp",
        rating: {
            rate: 2.74,
            count: 91,
        },
    },
    {
        id: 31,
        title: "Annibale Colombo Bed",
        price: 157699,
        description:
            "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
        category: "furniture",
        image: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
        rating: {
            rate: 4.77,
            count: 88,
        },
    },
    {
        id: 32,
        title: "Annibale Colombo Sofa",
        price: 207499,
        description:
            "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
        category: "furniture",
        image: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
        rating: {
            rate: 3.92,
            count: 60,
        },
    },
    {
        id: 33,
        title: "Bedside Table African Cherry",
        price: 24899,
        description:
            "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
        category: "furniture",
        image: "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp",
        rating: {
            rate: 2.87,
            count: 64,
        },
    },
    {
        id: 34,
        title: "Knoll Saarinen Executive Conference Chair",
        price: 41499,
        description:
            "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
        category: "furniture",
        image: "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp",
        rating: {
            rate: 4.88,
            count: 26,
        },
    },
    {
        id: 35,
        title: "Wooden Bathroom Sink With Mirror",
        price: 66399,
        description:
            "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
        category: "furniture",
        image: "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp",
        rating: {
            rate: 3.59,
            count: 7,
        },
    },
    {
        id: 36,
        title: "Apple",
        price: 165,
        description: "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp",
        rating: {
            rate: 4.19,
            count: 8,
        },
    },
    {
        id: 37,
        title: "Beef Steak",
        price: 1078,
        description:
            "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp",
        rating: {
            rate: 4.47,
            count: 86,
        },
    },
    {
        id: 38,
        title: "Cat Food",
        price: 746,
        description: "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp",
        rating: {
            rate: 3.13,
            count: 46,
        },
    },
    {
        id: 39,
        title: "Chicken Meat",
        price: 829,
        description: "Fresh and tender chicken meat, suitable for various culinary preparations.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp",
        rating: {
            rate: 3.19,
            count: 97,
        },
    },
    {
        id: 40,
        title: "Cooking Oil",
        price: 414,
        description:
            "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp",
        rating: {
            rate: 4.8,
            count: 10,
        },
    },
    {
        id: 41,
        title: "Cucumber",
        price: 124,
        description: "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp",
        rating: {
            rate: 4.07,
            count: 84,
        },
    },
    {
        id: 42,
        title: "Dog Food",
        price: 912,
        description:
            "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp",
        rating: {
            rate: 4.55,
            count: 71,
        },
    },
    {
        id: 43,
        title: "Eggs",
        price: 248,
        description: "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp",
        rating: {
            rate: 2.53,
            count: 9,
        },
    },
    {
        id: 44,
        title: "Fish Steak",
        price: 1244,
        description: "Quality fish steak, suitable for grilling, baking, or pan-searing.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp",
        rating: {
            rate: 3.78,
            count: 74,
        },
    },
    {
        id: 45,
        title: "Green Bell Pepper",
        price: 107,
        description:
            "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp",
        rating: {
            rate: 3.25,
            count: 33,
        },
    },
    {
        id: 46,
        title: "Green Chili Pepper",
        price: 82,
        description: "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp",
        rating: {
            rate: 3.66,
            count: 3,
        },
    },
    {
        id: 47,
        title: "Honey Jar",
        price: 580,
        description:
            "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp",
        rating: {
            rate: 3.97,
            count: 34,
        },
    },
    {
        id: 48,
        title: "Ice Cream",
        price: 456,
        description: "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp",
        rating: {
            rate: 3.39,
            count: 27,
        },
    },
    {
        id: 49,
        title: "Juice",
        price: 331,
        description: "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp",
        rating: {
            rate: 3.94,
            count: 50,
        },
    },
    {
        id: 50,
        title: "Kiwi",
        price: 207,
        description: "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp",
        rating: {
            rate: 4.93,
            count: 99,
        },
    },
    {
        id: 51,
        title: "Lemon",
        price: 66,
        description: "Zesty and tangy lemons, versatile for cooking, baking, or making refreshing beverages.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/lemon/thumbnail.webp",
        rating: {
            rate: 3.53,
            count: 31,
        },
    },
    {
        id: 52,
        title: "Milk",
        price: 290,
        description: "Fresh and nutritious milk, a staple for various recipes and daily consumption.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/milk/thumbnail.webp",
        rating: {
            rate: 2.61,
            count: 27,
        },
    },
    {
        id: 53,
        title: "Mulberry",
        price: 414,
        description: "Sweet and juicy mulberries, perfect for snacking or adding to desserts and cereals.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/mulberry/thumbnail.webp",
        rating: {
            rate: 4.95,
            count: 99,
        },
    },
    {
        id: 54,
        title: "Nescafe Coffee",
        price: 663,
        description:
            "Quality coffee from Nescafe, available in various blends for a rich and satisfying cup.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/nescafe-coffee/thumbnail.webp",
        rating: {
            rate: 4.82,
            count: 57,
        },
    },
    {
        id: 55,
        title: "Potatoes",
        price: 190,
        description: "Versatile and starchy potatoes, great for roasting, mashing, or as a side dish.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/potatoes/thumbnail.webp",
        rating: {
            rate: 4.81,
            count: 13,
        },
    },
    {
        id: 56,
        title: "Protein Powder",
        price: 1659,
        description:
            "Nutrient-packed protein powder, ideal for supplementing your diet with essential proteins.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/protein-powder/thumbnail.webp",
        rating: {
            rate: 4.18,
            count: 80,
        },
    },
    {
        id: 57,
        title: "Red Onions",
        price: 165,
        description: "Flavorful and aromatic red onions, perfect for adding depth to your savory dishes.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/red-onions/thumbnail.webp",
        rating: {
            rate: 4.2,
            count: 82,
        },
    },
    {
        id: 58,
        title: "Rice",
        price: 497,
        description: "High-quality rice, a staple for various cuisines and a versatile base for many dishes.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/rice/thumbnail.webp",
        rating: {
            rate: 3.18,
            count: 59,
        },
    },
    {
        id: 59,
        title: "Soft Drinks",
        price: 165,
        description: "Assorted soft drinks in various flavors, perfect for refreshing beverages.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/soft-drinks/thumbnail.webp",
        rating: {
            rate: 4.75,
            count: 53,
        },
    },
    {
        id: 60,
        title: "Strawberry",
        price: 331,
        description:
            "Sweet and succulent strawberries, great for snacking, desserts, or blending into smoothies.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/strawberry/thumbnail.webp",
        rating: {
            rate: 3.08,
            count: 46,
        },
    },
    {
        id: 61,
        title: "Tissue Paper Box",
        price: 207,
        description: "Convenient tissue paper box for everyday use, providing soft and absorbent tissues.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/thumbnail.webp",
        rating: {
            rate: 2.69,
            count: 86,
        },
    },
    {
        id: 62,
        title: "Water",
        price: 82,
        description: "Pure and refreshing bottled water, essential for staying hydrated throughout the day.",
        category: "groceries",
        image: "https://cdn.dummyjson.com/product-images/groceries/water/thumbnail.webp",
        rating: {
            rate: 4.96,
            count: 53,
        },
    },
    {
        id: 63,
        title: "Decoration Swing",
        price: 4979,
        description:
            "The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.",
        category: "home-decoration",
        image: "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/thumbnail.webp",
        rating: {
            rate: 3.16,
            count: 47,
        },
    },
    {
        id: 64,
        title: "Family Tree Photo Frame",
        price: 2489,
        description:
            "The Family Tree Photo Frame is a sentimental and stylish way to display your cherished family memories. With multiple photo slots, it tells the story of your loved ones.",
        category: "home-decoration",
        image: "https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/thumbnail.webp",
        rating: {
            rate: 4.53,
            count: 77,
        },
    },
    {
        id: 65,
        title: "House Showpiece Plant",
        price: 3319,
        description:
            "The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.",
        category: "home-decoration",
        image: "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/thumbnail.webp",
        rating: {
            rate: 4.67,
            count: 28,
        },
    },
    {
        id: 66,
        title: "Plant Pot",
        price: 1244,
        description:
            "The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.",
        category: "home-decoration",
        image: "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/thumbnail.webp",
        rating: {
            rate: 3.01,
            count: 59,
        },
    },
    {
        id: 67,
        title: "Table Lamp",
        price: 4149,
        description:
            "The Table Lamp is a functional and decorative lighting solution for your living space. With a modern design, it provides both ambient and task lighting, enhancing the atmosphere.",
        category: "home-decoration",
        image: "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/thumbnail.webp",
        rating: {
            rate: 3.55,
            count: 9,
        },
    },
    {
        id: 68,
        title: "Bamboo Spatula",
        price: 663,
        description:
            "The Bamboo Spatula is a versatile kitchen tool made from eco-friendly bamboo. Ideal for flipping, stirring, and serving various dishes.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/thumbnail.webp",
        rating: {
            rate: 3.27,
            count: 37,
        },
    },
    {
        id: 69,
        title: "Black Aluminium Cup",
        price: 497,
        description:
            "The Black Aluminium Cup is a stylish and durable cup suitable for both hot and cold beverages. Its sleek black design adds a modern touch to your drinkware collection.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/thumbnail.webp",
        rating: {
            rate: 4.46,
            count: 75,
        },
    },
    {
        id: 70,
        title: "Black Whisk",
        price: 829,
        description:
            "The Black Whisk is a kitchen essential for whisking and beating ingredients. Its ergonomic handle and sleek design make it a practical and stylish tool.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-whisk/thumbnail.webp",
        rating: {
            rate: 3.9,
            count: 73,
        },
    },
    {
        id: 71,
        title: "Boxed Blender",
        price: 3319,
        description:
            "The Boxed Blender is a powerful and compact blender perfect for smoothies, shakes, and more. Its convenient design and multiple functions make it a versatile kitchen appliance.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/thumbnail.webp",
        rating: {
            rate: 4.56,
            count: 9,
        },
    },
    {
        id: 72,
        title: "Carbon Steel Wok",
        price: 2489,
        description:
            "The Carbon Steel Wok is a versatile cooking pan suitable for stir-frying, sautéing, and deep frying. Its sturdy construction ensures even heat distribution for delicious meals.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/carbon-steel-wok/thumbnail.webp",
        rating: {
            rate: 4.05,
            count: 40,
        },
    },
    {
        id: 73,
        title: "Chopping Board",
        price: 1078,
        description:
            "The Chopping Board is an essential kitchen accessory for food preparation. Made from durable material, it provides a safe and hygienic surface for cutting and chopping.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/chopping-board/thumbnail.webp",
        rating: {
            rate: 3.7,
            count: 14,
        },
    },
    {
        id: 74,
        title: "Citrus Squeezer Yellow",
        price: 746,
        description:
            "The Citrus Squeezer in Yellow is a handy tool for extracting juice from citrus fruits. Its vibrant color adds a cheerful touch to your kitchen gadgets.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/citrus-squeezer-yellow/thumbnail.webp",
        rating: {
            rate: 4.63,
            count: 22,
        },
    },
    {
        id: 75,
        title: "Egg Slicer",
        price: 580,
        description:
            "The Egg Slicer is a convenient tool for slicing boiled eggs evenly. It's perfect for salads, sandwiches, and other dishes where sliced eggs are desired.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/egg-slicer/thumbnail.webp",
        rating: {
            rate: 3.09,
            count: 40,
        },
    },
    {
        id: 76,
        title: "Electric Stove",
        price: 4149,
        description:
            "The Electric Stove provides a portable and efficient cooking solution. Ideal for small kitchens or as an additional cooking surface for various culinary needs.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/thumbnail.webp",
        rating: {
            rate: 4.11,
            count: 21,
        },
    },
    {
        id: 77,
        title: "Fine Mesh Strainer",
        price: 829,
        description:
            "The Fine Mesh Strainer is a versatile tool for straining liquids and sifting dry ingredients. Its fine mesh ensures efficient filtering for smooth cooking and baking.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/fine-mesh-strainer/thumbnail.webp",
        rating: {
            rate: 3.04,
            count: 85,
        },
    },
    {
        id: 78,
        title: "Fork",
        price: 331,
        description:
            "The Fork is a classic utensil for various dining and serving purposes. Its durable and ergonomic design makes it a reliable choice for everyday use.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/fork/thumbnail.webp",
        rating: {
            rate: 3.11,
            count: 7,
        },
    },
    {
        id: 79,
        title: "Glass",
        price: 414,
        description:
            "The Glass is a versatile and elegant drinking vessel suitable for a variety of beverages. Its clear design allows you to enjoy the colors and textures of your drinks.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/glass/thumbnail.webp",
        rating: {
            rate: 4.02,
            count: 46,
        },
    },
    {
        id: 80,
        title: "Grater Black",
        price: 912,
        description:
            "The Grater in Black is a handy kitchen tool for grating cheese, vegetables, and more. Its sleek design and sharp blades make food preparation efficient and easy.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/grater-black/thumbnail.webp",
        rating: {
            rate: 3.21,
            count: 84,
        },
    },
    {
        id: 81,
        title: "Hand Blender",
        price: 2904,
        description:
            "The Hand Blender is a versatile kitchen appliance for blending, pureeing, and mixing. Its compact design and powerful motor make it a convenient tool for various recipes.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/hand-blender/thumbnail.webp",
        rating: {
            rate: 3.86,
            count: 84,
        },
    },
    {
        id: 82,
        title: "Ice Cube Tray",
        price: 497,
        description:
            "The Ice Cube Tray is a practical accessory for making ice cubes in various shapes. Perfect for keeping your drinks cool and adding a fun element to your beverages.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/ice-cube-tray/thumbnail.webp",
        rating: {
            rate: 4.71,
            count: 13,
        },
    },
    {
        id: 83,
        title: "Kitchen Sieve",
        price: 663,
        description:
            "The Kitchen Sieve is a versatile tool for sifting and straining dry and wet ingredients. Its fine mesh design ensures smooth results in your cooking and baking.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/kitchen-sieve/thumbnail.webp",
        rating: {
            rate: 3.09,
            count: 68,
        },
    },
    {
        id: 84,
        title: "Knife",
        price: 1244,
        description:
            "The Knife is an essential kitchen tool for chopping, slicing, and dicing. Its sharp blade and ergonomic handle make it a reliable choice for food preparation.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/knife/thumbnail.webp",
        rating: {
            rate: 3.26,
            count: 7,
        },
    },
    {
        id: 85,
        title: "Lunch Box",
        price: 1078,
        description:
            "The Lunch Box is a convenient and portable container for packing and carrying your meals. With compartments for different foods, it's perfect for on-the-go dining.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/lunch-box/thumbnail.webp",
        rating: {
            rate: 4.93,
            count: 94,
        },
    },
    {
        id: 86,
        title: "Microwave Oven",
        price: 7469,
        description:
            "The Microwave Oven is a versatile kitchen appliance for quick and efficient cooking, reheating, and defrosting. Its compact size makes it suitable for various kitchen setups.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/thumbnail.webp",
        rating: {
            rate: 4.82,
            count: 59,
        },
    },
    {
        id: 87,
        title: "Mug Tree Stand",
        price: 1327,
        description:
            "The Mug Tree Stand is a stylish and space-saving solution for organizing your mugs. Keep your favorite mugs easily accessible and neatly displayed in your kitchen.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/thumbnail.webp",
        rating: {
            rate: 2.64,
            count: 88,
        },
    },
    {
        id: 88,
        title: "Pan",
        price: 2074,
        description:
            "The Pan is a versatile and essential cookware item for frying, sautéing, and cooking various dishes. Its non-stick coating ensures easy food release and cleanup.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/pan/thumbnail.webp",
        rating: {
            rate: 2.79,
            count: 90,
        },
    },
    {
        id: 89,
        title: "Plate",
        price: 331,
        description:
            "The Plate is a classic and essential dishware item for serving meals. Its durable and stylish design makes it suitable for everyday use or special occasions.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/plate/thumbnail.webp",
        rating: {
            rate: 3.65,
            count: 66,
        },
    },
    {
        id: 90,
        title: "Red Tongs",
        price: 580,
        description:
            "The Red Tongs are versatile kitchen tongs suitable for various cooking and serving tasks. Their vibrant color adds a pop of excitement to your kitchen utensils.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/red-tongs/thumbnail.webp",
        rating: {
            rate: 4.42,
            count: 82,
        },
    },
    {
        id: 91,
        title: "Silver Pot With Glass Cap",
        price: 3319,
        description:
            "The Silver Pot with Glass Cap is a stylish and functional cookware item for boiling, simmering, and preparing delicious meals. Its glass cap allows you to monitor cooking progress.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/silver-pot-with-glass-cap/thumbnail.webp",
        rating: {
            rate: 3.22,
            count: 40,
        },
    },
    {
        id: 92,
        title: "Slotted Turner",
        price: 746,
        description:
            "The Slotted Turner is a kitchen utensil designed for flipping and turning food items. Its slotted design allows excess liquid to drain, making it ideal for frying and sautéing.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/slotted-turner/thumbnail.webp",
        rating: {
            rate: 3.4,
            count: 88,
        },
    },
    {
        id: 93,
        title: "Spice Rack",
        price: 1659,
        description:
            "The Spice Rack is a convenient organizer for your spices and seasonings. Keep your kitchen essentials within reach and neatly arranged with this stylish spice rack.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/spice-rack/thumbnail.webp",
        rating: {
            rate: 4.87,
            count: 79,
        },
    },
    {
        id: 94,
        title: "Spoon",
        price: 414,
        description:
            "The Spoon is a versatile kitchen utensil for stirring, serving, and tasting. Its ergonomic design and durable construction make it an essential tool for every kitchen.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/spoon/thumbnail.webp",
        rating: {
            rate: 4.03,
            count: 59,
        },
    },
    {
        id: 95,
        title: "Tray",
        price: 1410,
        description:
            "The Tray is a functional and decorative item for serving snacks, appetizers, or drinks. Its stylish design makes it a versatile accessory for entertaining guests.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/tray/thumbnail.webp",
        rating: {
            rate: 4.62,
            count: 71,
        },
    },
    {
        id: 96,
        title: "Wooden Rolling Pin",
        price: 995,
        description:
            "The Wooden Rolling Pin is a classic kitchen tool for rolling out dough for baking. Its smooth surface and sturdy handles make it easy to achieve uniform thickness.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/wooden-rolling-pin/thumbnail.webp",
        rating: {
            rate: 2.92,
            count: 80,
        },
    },
    {
        id: 97,
        title: "Yellow Peeler",
        price: 497,
        description:
            "The Yellow Peeler is a handy tool for peeling fruits and vegetables with ease. Its bright yellow color adds a cheerful touch to your kitchen gadgets.",
        category: "kitchen-accessories",
        image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/yellow-peeler/thumbnail.webp",
        rating: {
            rate: 4.24,
            count: 35,
        },
    },
    {
        id: 98,
        title: "Apple MacBook Pro 14 Inch Space Grey",
        price: 165999,
        description:
            "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
        category: "laptops",
        image: "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp",
        rating: {
            rate: 3.65,
            count: 24,
        },
    },
    {
        id: 99,
        title: "Asus Zenbook Pro Dual Screen Laptop",
        price: 149399,
        description:
            "The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
        category: "laptops",
        image: "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/thumbnail.webp",
        rating: {
            rate: 3.95,
            count: 45,
        },
    },
    {
        id: 100,
        title: "Huawei Matebook X Pro",
        price: 116199,
        description:
            "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
        category: "laptops",
        image: "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/thumbnail.webp",
        rating: {
            rate: 4.98,
            count: 75,
        },
    },
    {
        id: 101,
        title: "Lenovo Yoga 920",
        price: 91299,
        description:
            "The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.",
        category: "laptops",
        image: "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/thumbnail.webp",
        rating: {
            rate: 2.86,
            count: 40,
        },
    },
    {
        id: 102,
        title: "New DELL XPS 13 9300 Laptop",
        price: 124499,
        description:
            "The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.",
        category: "laptops",
        image: "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp",
        rating: {
            rate: 2.67,
            count: 74,
        },
    },
    {
        id: 103,
        title: "Blue & Black Check Shirt",
        price: 2489,
        description:
            "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
        category: "mens-shirts",
        image: "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/thumbnail.webp",
        rating: {
            rate: 3.64,
            count: 38,
        },
    },
    {
        id: 104,
        title: "Gigabyte Aorus Men Tshirt",
        price: 2074,
        description:
            "The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.",
        category: "mens-shirts",
        image: "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/thumbnail.webp",
        rating: {
            rate: 3.18,
            count: 90,
        },
    },
    {
        id: 105,
        title: "Man Plaid Shirt",
        price: 2904,
        description:
            "The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.",
        category: "mens-shirts",
        image: "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/thumbnail.webp",
        rating: {
            rate: 3.46,
            count: 82,
        },
    },
    {
        id: 106,
        title: "Man Short Sleeve Shirt",
        price: 1659,
        description:
            "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
        category: "mens-shirts",
        image: "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp",
        rating: {
            rate: 2.9,
            count: 2,
        },
    },
    {
        id: 107,
        title: "Men Check Shirt",
        price: 2323,
        description:
            "The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.",
        category: "mens-shirts",
        image: "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/thumbnail.webp",
        rating: {
            rate: 2.72,
            count: 95,
        },
    },
    {
        id: 108,
        title: "Nike Air Jordan 1 Red And Black",
        price: 12449,
        description:
            "The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.",
        category: "mens-shoes",
        image: "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/thumbnail.webp",
        rating: {
            rate: 4.77,
            count: 7,
        },
    },
    {
        id: 109,
        title: "Nike Baseball Cleats",
        price: 6639,
        description:
            "Nike Baseball Cleats are designed for maximum traction and performance on the baseball field. They provide stability and support for players during games and practices.",
        category: "mens-shoes",
        image: "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/thumbnail.webp",
        rating: {
            rate: 3.88,
            count: 12,
        },
    },
    {
        id: 110,
        title: "Puma Future Rider Trainers",
        price: 7469,
        description:
            "The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.",
        category: "mens-shoes",
        image: "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/thumbnail.webp",
        rating: {
            rate: 4.9,
            count: 90,
        },
    },
    {
        id: 111,
        title: "Sports Sneakers Off White & Red",
        price: 9959,
        description:
            "The Sports Sneakers in Off White and Red combine style and functionality, making them a fashionable choice for sports enthusiasts. The red and off-white color combination adds a bold and energetic touch.",
        category: "mens-shoes",
        image: "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/thumbnail.webp",
        rating: {
            rate: 4.77,
            count: 17,
        },
    },
    {
        id: 112,
        title: "Sports Sneakers Off White Red",
        price: 9129,
        description:
            "Another variant of the Sports Sneakers in Off White Red, featuring a unique design. These sneakers offer style and comfort for casual occasions.",
        category: "mens-shoes",
        image: "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/thumbnail.webp",
        rating: {
            rate: 4.69,
            count: 62,
        },
    },
    {
        id: 113,
        title: "Brown Leather Belt Watch",
        price: 7469,
        description:
            "The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.",
        category: "mens-watches",
        image: "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/thumbnail.webp",
        rating: {
            rate: 4.19,
            count: 32,
        },
    },
    {
        id: 114,
        title: "Longines Master Collection",
        price: 124499,
        description:
            "The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.",
        category: "mens-watches",
        image: "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/thumbnail.webp",
        rating: {
            rate: 3.87,
            count: 100,
        },
    },
    {
        id: 115,
        title: "Rolex Cellini Date Black Dial",
        price: 746999,
        description:
            "The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.",
        category: "mens-watches",
        image: "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/thumbnail.webp",
        rating: {
            rate: 4.97,
            count: 40,
        },
    },
    {
        id: 116,
        title: "Rolex Cellini Moonphase",
        price: 1078999,
        description:
            "The Rolex Cellini Moonphase is a masterpiece of horology, featuring a moon phase complication and exquisite design. It reflects Rolex's commitment to precision and elegance.",
        category: "mens-watches",
        image: "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/thumbnail.webp",
        rating: {
            rate: 2.58,
            count: 36,
        },
    },
    {
        id: 117,
        title: "Rolex Datejust",
        price: 912999,
        description:
            "The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.",
        category: "mens-watches",
        image: "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/thumbnail.webp",
        rating: {
            rate: 3.66,
            count: 86,
        },
    },
    {
        id: 118,
        title: "Rolex Submariner Watch",
        price: 1161999,
        description:
            "The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.",
        category: "mens-watches",
        image: "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/thumbnail.webp",
        rating: {
            rate: 2.69,
            count: 55,
        },
    },
    {
        id: 119,
        title: "Amazon Echo Plus",
        price: 8299,
        description:
            "The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.",
        category: "mobile-accessories",
        image: "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/thumbnail.webp",
        rating: {
            rate: 4.99,
            count: 61,
        },
    },
    {
        id: 120,
        title: "Apple Airpods",
        price: 10789,
        description:
            "The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.",
        category: "mobile-accessories",
        image: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/thumbnail.webp",
        rating: {
            rate: 4.15,
            count: 67,
        },
    },
];

export default data;
