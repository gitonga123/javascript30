// You probably know the "like" system from Facebook and other pages.People can "like" blog posts, pictures or other items.We want to create the text that should be displayed next to such an item.

function likesy(names) {
    let message = '';
    if (names.length === 0) {
        message = "no one likes this";
    } else if (names.length === 1) {
        message = names[0] + " likes this";
    } else if (names.length >= 4) {
        message = names[0] + ", " + names[1] + " " + "and " + (names.length - 2) + " others like this";
    } else {
        for (let i = 0; i < names.length; i++) {
            if (names.length - 1 === i) {
                message += " and " + names[i] + " like this";
            } else {
                if (i == 1) {
                    message += ", "
                }
                message += names[i];
                message += "";
            }
        }
    }

    return message;
}

// solution 2

function likes(names) {
    names = names || [];
    switch (names.length) {
        case 0: return 'no one likes this'; break;
        case 1: return names[0] + ' likes this'; break;
        case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
        case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
        default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
}

// console.log(likes([])); // must be "no one likes this"
// console.log(likes(["Peter"])); // must be "Peter likes this"
// console.log(likes(["Jacob", "Alex"])); // must be "Jacob and Alex like this"
// console.log(likes(["Max", "John", "Mark"]));// must be "Max, John and Mark like this"
//console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // must be "Alex, Jacob and 2 others like this"