// what node wraps this in
// function (exports, module, require, __filename, __dirname){
    // console.log(arguments);

    exports.a = 42;
    module.exports.b = 37;
    // and it ALWAYS returns this and you don't have to be explicit
    // return module.exports;
    // } when function invoked (module.exports, ....) is the first arg passed

// this is why exports = () => {}; not okay
// it just breaks the assignment refrence between exports and module.exports
// BUT this works:
// module.exports = () => {}; //totally cool