function greetings() {
    let hrs = new Date().getHours();
    if(hrs > 0 && hrs < 12) {
        return "Good Morning!";
    }
    else if(hrs > 12 && hrs < 17) {
        return "Good Afternoon!";
    }
    else if(hrs > 17 && hrs < 20) {
        return "Good Evening!";
    }
    else {
        return "Good Night!"
    }
}

module.exports.greetings = greetings;
