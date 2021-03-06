// (function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // var person = {
    //     firstName: "Karen",
    //     lastName: "Rivas"
    // };

    // console.log(person.firstName);
    // console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    // var person = {
    //     firstName: "Karen",
    //     lastName: "Rivas",
    //     sayHello: function() {
    //         return "Hello from " + this.firstName + ' ' + this.lastName;
    //     }
    // };
    // console.log(person.sayHello());


    // or you can just add the last property to the previous one
    //would be just person.propertyName : yada yada yada


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
        //has two separate functions bc they have two different things they are asking for 1) DOING THE CALCULATIONS
        // 2) PRODUCTING THE FINAL OUTPUT- IE THE COMPLETE STRING.//

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    var discount = (shoppers.amount * .12);
    var totalBill = (shoppers.amount + discount);

function displayInfo(shopper) {      //DON'T FORGET TO ADD THE FUNCTION//
    shoppers.forEach(function(shopper) {
            if (shopper.amount > 200){
                console.log(shopper.name + " You get a discount of:" + discount + "Your Total is: " + totalBill.toFixed(2));
            }else {
                console.log(shopper.name + " You do not get a discount of 12%; Sorry!!! Your Total is: " + shopper.amount.toFixed(2));
            }
    });
}

/** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "Green Eggs and Ham",
            author: {
                firstName: "Theodor",
                lastName: "Seuss"
            }
        },
        {
            title: "The Very Hungry Caterpillar",
            author: {
                firstName: "Eric",
                lastName: "Carle"
            }
        },
        {
            title: "The Giving Tree",
            author: {
                firstName: "Shel",
                lastName: "Silverstein"
            }
        },
        {
            title: "Charlotte's Web",
            author: {
                firstName: "E.B",
                lastName: "White"
            }
        },
        {
            title: "Alice's Adventures in Wonderland",
            author: {
                firstName: "Lewis",
                lastName: "Carroll"
            }
    }
    ];

    // console.log(books[4].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
///have to iterate over an array of objects-USE FOR EACH//

    books.forEach(function(book, index) { //instead of the console.log use the var message to start building the actual code//
        console.log("Book # " + (index + 1));
        console.log("Title:" + book.title);
        console.log("Author: " + book.author.firstName + ' ' + book.author.lastName);
        console.log('---');
    });


    for (var i = 0;i < books.length;i += 1);

    

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     */

    // function createBook(title,author) {
    //     return books
    // }
    
    
    
    /**
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


// })();
