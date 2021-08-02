const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 1,
};

const elvenGountletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 4
}

console.log(elvenShieldRecipe);
console.log(elvenGountletsRecipe);