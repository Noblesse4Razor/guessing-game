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
	return this.Range[this.length>>1];
    }

    lower() {
	this.length=this.length>>1;	
	return this;
    }

    greater() {
	this.setRange(this.Range[this.length>>1],this.Range[this.length])
	return this;
    }
}

module.exports = GuessingGame;
