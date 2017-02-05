class GuessingGame {
    constructor() {
        this.Maxi = 0;
        this.Mini = 0;
        this.Midi = 0;
    }

    setRange(min, max) {
        this.Maxi = max;
        this.Mini = min;
    }

    guess() {
        return this.Midi = Math.round((this.Mini + this.Maxi) / 2);
    }

    lower() {
        this.Maxi = this.Midi;
        return this;
    }

    greater() {
        this.Mini = this.Midi;
        return this;
    }
}

module.exports = GuessingGame;
