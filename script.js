class Order {
    constructor({id, prices = [0]}) {
        this.id = id;
        this.prices = prices;
    }
}

const response = [
    {id: 0, prices: [10, 20, 30]},
    {id: 1, prices: [200]},
    {id: 2, prices: [50, 60]},
    {id: 3, prices: [19, 120, 32]},
    {id: 4, prices: [11, 23, 310]},
    {id: 5},
];

const orders = []

response.forEach((item) => {
    order = new Order(item);
    orders.push(order);
});

let sum = 0;

orders
    .filter(item => item.id !== 0)
    .map(item => item.prices)
    .forEach(item => {
        sum += item.reduce((x, y) => x + y, 0);
    });

console.log(orders);
console.log(sum);
