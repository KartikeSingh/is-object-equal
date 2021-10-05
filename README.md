# Installations
```
npm i is-object-equal
```

# What ?
An module to check if the provided two objects are equal or not

# Why ?
- Fast
- Customizable

# How ?
```js
const isEqual = require('is-object-equal');
https://discord.com/api/webhooks/894612602339082311/hVJdkUR4j5_LXhUEeEQdANhA6Ll3rh03V0NQNLcPXapIs8u1v6M_VaZjcFG9LQjUQ68x/github
const ob1 = {
    name:"Shisui",
    hobby:["coding"],
    address: {
        city:"unknown",
        country:"india",
    }
}

const ob2 = {
    name:"Shisui",
    hobby:["Coding"], // C is capital
    address: {
        city:"unknown",
        country:"india",
    }
}

const ob3 = {
    name:"Shisui",
    hobby:["coding"],
    address: {
        city:"unknown",
        country:"india",
    },
    number:12345678,
}

console.log(isEqual(ob1, ob1)); // => true

console.log(isEqual(ob1, ob2)); // => false

console.log(isEqual(ob1, ob2, { ignoreCase:true })); // => true

// False because it have a extra property
console.log(isEqual(ob1, ob3)); // => false

console.log(isEqual(ob1, ob3, { allowExtra:true })); // => true
```

# Support
for support or issues or queries contace me on my [discord server](https://discord.gg/XYnMTQNTFh) or create a issue [here](https://github.com/KartikeSingh/is-object-equal/issues).