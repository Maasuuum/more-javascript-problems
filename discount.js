/**
 * If ticket numbers is less than 100, per ticket price: 100
 * If ticket numbers is more than 100, but less than 200. First 100 tickets will be 100/tickets and rest tickets will be 90 tk per piece.
 * If you purchase more than 200 tickets:
    first 100 ----> 100tk
    101-200 ----> 90tk
    200+ ----> 70tk
 */

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
}
const price = ticketPrice(1);
console.log('Price: ', price);