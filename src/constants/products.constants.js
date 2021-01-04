const testImg = require("assets/images/tshirts.jpg").default;

export const products = [
    {
        productType: "T-Shirts",
        items: [
            {
                id: "1",
                image: testImg,
                name: "Test T-shirt",
                price: "1000"
            }, {
                id: "2",
                image: testImg,
                name: "Test T-shirt 2",
                price: "1001"
            }, {
                id: "3",
                image: testImg,
                name: "Test T-shirt 3",
                price: "1002"
            }, {
                id: "4",
                image: testImg,
                name: "Test T-shirt 4",
                price: "1003"
            }, {
                id: "5",
                image: testImg,
                name: "Test T-shirt 5",
                price: "1004"
            }
        ]
    }, {
        productType: "Jeans",
        items: [
            {
                id: "1",
                image: testImg,
                name: "Test Jean",
                price: "1000"
            }, {
                id: "2",
                image: testImg,
                name: "Test Jean 2",
                price: "1001"
            }, {
                id: "3",
                image: testImg,
                name: "Test Jean 3",
                price: "1002"
            }, {
                id: "4",
                image: testImg,
                name: "Test Jean 4",
                price: "1003"
            }, {
                id: "5",
                image: testImg,
                name: "Test Jean 5",
                price: "1004"
            }
        ]
    }
];

export const prodTypes = {

}

export const getProductsByType = (type) => {
    return products.find(item => item.productType === type);
}