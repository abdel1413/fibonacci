function medicationReminder(medications, currentTime) {

    function toMinutes(time) {
        const [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    }

    function format(minutes) {
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;
        return `${h}h ${m}m`;
    }

    const current = toMinutes(currentTime);

    let bestName = "";
    let shortest = Infinity;

    for (let [name, lastTaken] of medications) {

        let nextTimes = [];

        if (name === "Deployxitrin") {
            nextTimes = [480, 960]; // 08:00, 16:00

        } else if (name === "Debuggamanizole") {
            nextTimes = [420, 780, 1260]; // 07:00, 13:00, 21:00

        } else if (name === "Mergeflictamine") {

            const next =
                (toMinutes(lastTaken) + 240) % 1440;

            nextTimes = [next];
        }

        for (let time of nextTimes) {

            let diff = time - current;

            if (diff <= 0) {
                diff += 1440;
            }

            if (diff < shortest) {
                shortest = diff;
                bestName = name;
            }
        }
    }

    return `${bestName} in ${format(shortest)}`;
}