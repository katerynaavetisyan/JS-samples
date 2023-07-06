SOLUTION #1:

function returnDay(num) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
        return null;
    } else {
        return days[num - 1];
    }
}
SOLUTION #2:

function returnDay(num) {
    const days = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
        return null;
    } else {
        return days[num];
    }
}
SOLUTION #3:

function returnDay(num) {
    if (num < 1 || num > 7) {
        return null;
    }
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days[num - 1];
}
SOLUTION #4:

function returnDay(num) {
    if (num >= 1 && num <= 7) {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        return days[num - 1];
    }
    return null;
}
SOLUTION #5:

function returnDay(num) {
    if (num < 1 || num > 7) {
        return null;
    }
    const days = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    };
    return days[num];
}
SOLUTION #6:

function returnDay(num) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const day = days[num - 1];
    // Using the JavaScript ternary operator syntax
    return day ? day : null;
}
SOLUTION #7:

// A long approach:
function returnDay(num) {
    if (num < 1 || num > 7) {
        return null;
    } else if (num === 1) {
        return ('Monday');
    } else if (num === 2) {
        return ('Tuesday');
    } else if (num === 3) {
        return ('Wednesday');
    } else if (num === 4) {
        return ('Thursday');
    } else if (num === 5) {
        return ('Friday');
    } else if (num === 6) {
        return ('Saturday');
    } else if (num === 7) {
        return ('Sunday');
    }
}
SOLUTION #8:

// A long approach with a switch statement
function returnDay(num) {
    if (num >= 1 || num <= 7) {
        switch (num) {
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
            case 7:
                return 'Sunday';
            default:
                return null;
        }
    }
}
