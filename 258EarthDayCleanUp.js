function getCleanupScore(items) {
    const values = {
        bottle: 10,
        can: 6,
        bag: 8,
        tire: 35,
        straw: 4,
        cardboard: 3,
        newspaper: 3,
        shoe: 12,
        electronics: 25,
        battery: 18,
        mattress: 38
    };

    let total = 0;
    let lastItem = null;
    let streak = 0;

    for (let i = 0; i < items.length; i++) {
        let score;

        // Rare item
        if (Array.isArray(items[i]) && items[i][0] === "rare") {
            score = items[i][1];

            // Rare items break streaks
            lastItem = null;
            streak = 0;
        } else {
            const item = items[i];

            if (item === lastItem) {
                streak++;
            } else {
                streak = 0;
            }

            score = values[item] + streak;

            lastItem = item;
        }

        // Every 5th item multiplier
        const position = i + 1;

        if (position % 5 === 0) {
            const multiplier = position / 5 + 1;
            score *= multiplier;
        }

        total += score;
    }

    return total;
}