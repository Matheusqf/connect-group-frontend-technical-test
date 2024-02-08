const MOCKED_CAR_1 = {
    "id": "Car 1",
    "description": "Premium luxury saloon, spacious and beautiful yet powerfully agile.",
    "price": "£32,000",
    "meta": {
        "passengers": 5,
        "drivetrain": [
            "AWD",
            "RWD"
        ],
        "bodystyles": [
            "saloon (SWB)",
            "saloon (LWB)"
        ],
        "emissions": {
            "template": "CO2 Emissions $value g/km",
            "value": 149
        }
    },
    "modelYear": "k17",
    "apiUrl": "/api/vehicle_xe.json",
    "media": [
        {
            "name": "vehicle",
            "url": "/images/16x9/xe_k17.jpg"
        },
        {
            "name": "vehicle",
            "url": "/images/1x1/xe_k17.jpg"
        }
    ]

}

const MOCKED_CAR_2 =
{
    "id": "Car 2",
    "description": "The most advanced, efficient and refined sports saloon that Jaguar has ever produced",
    "price": "£30,000",
    "meta": {
        "passengers": 5,
        "drivetrain": [
            "AWD",
            "RWD"
        ],
        "bodystyles": [
            "saloon"
        ],
        "emissions": {
            "template": "CO2 Emissions $value g/km",
            "value": 99
        }
    },
    "modelYear": "k17",
    "apiUrl": "/api/vehicle_xe.json",
    "media": [
        {
            "name": "vehicle",
            "url": "/images/16x9/xe_k17.jpg"
        },
        {
            "name": "vehicle",
            "url": "/images/1x1/xe_k17.jpg"
        }
    ]
}

const MOCKED_CARS = [MOCKED_CAR_1, MOCKED_CAR_2];

export {
    MOCKED_CAR_1,
    MOCKED_CAR_2,
    MOCKED_CARS
}