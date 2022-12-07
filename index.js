/**
 * Task 1
 * The following set of data contains an error, find it and correct it
 * Give a quick explanation
 */

const data = [
    {
        "name": "yellow",
        "appointments": 0,
        "invited": true,
        "confirmed": false
    },
    {
        "name": "blue",
        "appointments": 1,
        "invited": true,
        "confirmed": true
    },
    {
        "name": "green",
        "appointments": 0,
        "invited": false,
        "confirmed": false
    },
    {
        "name": "red",
        "appointments": 0,
        "invited": false,
        "confirmed": false
    },
    {
        "name": "grey",
        "appointments": 0,
        "invited": false,
        "confirmed": true
    },
    {
        "name": "orange",
        "appointments": 2,
        "invited": true,
        "confirmed": true
    },
    {
        "name": "purple",
        "appointments": 1,
        "invited": true,
        "confirmed": true
    },
    {
        "name": "black",
        "appointments": 0,
        "invited": true,
        "confirmed": true
    }
];

/**
 * Task 2
 *
 * You have to sort those customers with the following rules (the order of the rules determines the priority):
 *      - Customers with at least an appointment (the number of appointment doesn't matter)
 *      - Customers invited
 *      - Name of the customer (all customers should be ordered by name if they weight the same on another case)
 *
 */

function compare(a, b) {
    if () {
        return -1;
    }
}

let ordered = data.sort(compare);
console.log(ordered)
