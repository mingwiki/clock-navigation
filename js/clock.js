class Clock {
    constructor(options) {
      this._el = $.el('#clock');
      this._delimiter = options.delimiter;
      this._leftBrace = options.leftBrace;
      this._rightBrace = options.rightBrace;
      this._twentyFourHourClock = options.twentyFourHourClock;
      this._setTime = this._setTime.bind(this);
      this._el.addEventListener('click', options.toggleHelp);
      this._start();
    }
  
    _setTime() {
      const date = new Date();
      let hours = $.pad(date.getHours());
      let amPm = '';
  
      if (!this._twentyFourHourClock) {
        hours = date.getHours();
        if (hours > 12) hours -= 12;
        else if (hours === 0) hours = 12;
  
        amPm =
          `&nbsp;<span class="am-pm">` +
          `${date.getHours() >= 12 ? 'PM' : 'AM'}</span>`;
      }
  
      const minutes = $.pad(date.getMinutes());
      const seconds = $.pad(date.getSeconds());
      this._el.innerHTML = `${this._leftBrace}${this._leftBrace} ${hours}${this._delimiter}${minutes}${this._delimiter}${seconds}${amPm} ${this._rightBrace}${this._rightBrace}`;
      this._el.setAttribute('datetime', date.toTimeString());
    }
  
    _start() {
      this._setTime();
      setInterval(this._setTime, 1000);
    }
  }