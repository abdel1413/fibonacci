function getAllergenFriendlyMeals(meals, avoid) {
    const result = [];

    for (let [mealName, allergens] of meals) {

        // Check if meal contains any allergen to avoid
        const hasAllergen = allergens.some(allergen =>
            avoid.includes(allergen)
        );

        // If not, it's safe
        if (!hasAllergen) {
            result.push(mealName);
        }
    }

    return result;
}