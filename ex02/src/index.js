// Only change code below this line

var myClothes={
    hat:"Fedora",
    shirt:"Nike",
    shoes:"Converse"

};

function myFunction(myClothes){

    var hatValue=myClothes.hat;
    var shirtValue=myClothes.shirt;
    var shoesValue=myClothes.shoes;




    return {hatValue,shirtValue,shoesValue};
}

// Only change code below this line

console.log(myFunction(myClothes));//Change this line
module.exports=myFunction(myClothes);