import { mocks } from "./mock/index";
import camelize from "camelize";
import { transform } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export const restaurantRequest = (location = '37.7749295,-122.4194155') => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if(!mock){
            reject("Location Not Found");
        }
        resolve(mock);
    })
}

const restaurantsTranform = (result) => {
    const newResult = camelize(result);
    return newResult;
}

restaurantRequest()
    .then(restaurantsTranform)
    .then((transformedResponse) => {
        console.log(transformedResponse);
    })
    .catch((err) => {
    console.log(err);
})