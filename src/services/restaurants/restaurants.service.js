import { mocks, mockImages } from "./mock/index";
import camelize from "camelize";

export const restaurantRequest = (location = '37.7749295,-122.4194155') => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if(!mock){
            reject("Location Not Found");
        }
        resolve(mock);
    })
}

export const restaurantsTranform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length -1 ))];
        });
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
        }
    });
    return camelize(mappedResults);
}

restaurantRequest()
    .then(restaurantsTranform)
    .then((transformedResponse) => {
        console.log(transformedResponse);
    })
    .catch((err) => {
    console.log(err);
})