const main_menu = [
    { 
        "route": "index.html", 
        "name": "Trang chủ" 
    },
    {
        "name": "Các sản phẩm",
        "route": "products.html?bread=1",
        "subroute": [
            {
                "name": "Máy xúc bánh xích", 
                "route": "products.html?bread=1.0",
            },
            {
                "name": "Máy xúc bánh lốp", 
                "route": "products.html?bread=1.1",
            },
            {
                "name": "Máy xúc lật", 
                "route": "products.html?bread=1.2",
            },
            {
                "name": "Xe nâng Develon", 
                "route": "products.html?bread=1.3",
            },
            {
                "name": "Phụ kiện",
                "route": "products.html?bread=1.4",
                "subroute": [
                    {
                        "name": "Búa đập đá", 
                        "route": "products.html?bread=1.4.0",
                        "subroute": []
                    }
                ]
            },
            {
                "name": "Phụ tùng", 
                "route": "products.html?bread=1.5",
                "subroute": [
                    {
                        "name": "Phụ tùng Doosan", 
                        "route": "products.html?bread=1.5.0",
                        "subroute": []
                    }
                ]
            },
        ],
    }
]
