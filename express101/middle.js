const sup = (req,res,next) =>{
console.log("#1 in order");
next();
}

const how = (req,res,next) =>{
    console.log("#2 in order");
    next();
    }

    module.exports = {sup, how};