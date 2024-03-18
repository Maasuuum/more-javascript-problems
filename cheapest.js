const phones = [
    {name: 'Samsung', camera: 12, storage: '32GB', price: 36000, color: 'silver'},
    {name: 'Walton', camera: 10, storage: '32GB', price: 22000, color: 'silver'},
    {name: 'iPhone', camera: 18, storage: '32GB', price: 120000, color: 'silver'},
    {name: 'Xaomi', camera: 22, storage: '32GB', price: 53000, color: 'silver'},
    {name: 'Nokia', camera: 12, storage: '32GB', price: 44000, color: 'silver'},
    {name: 'HTC', camera: 10, storage: '32GB', price: 62000, color: 'silver'},
];
let cheapest = phones[0];
function cheapestPhone(phones){
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);