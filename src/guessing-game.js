class GuessingGame {
    constructor() {
		
	}

    setRange(min, max) {
	this.Range = new Array();
	for(let i=0;i<=max-min;i++)
	{
		this.Range[i]=i+min;
	}
	this.length = max - min; // not sure about my right to access default props of the Array class
    }

    guess() {
	return this.Range[Math.ceil(this.length/2)];
    }

    lower() {
	this.length=Math.ceil(Math.ceil(this.length/2));	
	return this;
    }

    greater() {
	this.setRange(this.Range[Math.ceil(this.length/2)],this.Range[this.length])
	return this;
    }
}

module.exports = GuessingGame;
