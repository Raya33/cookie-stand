

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

var store = [Seattle, Tokyo, Dubai, Paris, Lima]

var Seattle = {

    name: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    avgCustArray: [],
    cookiesEachHourArray: [],
    totalCookies: 0,
    numCustHourly: function () {
        for (var i = 0; i < hours.length; i++) {
            var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
            this.avgCustArray.push(singleHourCust);
        }
    },
    cookiesPerCustomer: function () {
        this.numCustHourly();
        for (var i = 0; i < hours.length; i++) {
            var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
            this.cookiesEachHourArray.push(singleHourCookies);
            this.totalCookies += singleHourCookies;
        }
    },

    render: function () {
        var SeattleList = document.getElementById('Seattle');
        this.cookiesPerCustomer();
        for (var i = 0; i < this.cookiesEachHourArray.length; i++) {
            var listElement = document.createElement('li');
            listElement.textContent = hours[i] + this.cookiesEachHourArray[i] + ' cookies';
            SeattleList.appendChild(listElement);
        }
        var listElement1 = document.createElement('li');
        listElement1.textContent = 'Total: ' + this.totalCookies + ' cookies';
        SeattleList.appendChild(listElement1);
    }


};

Seattle.render()


var Paris = {

    name: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
    avgCustArray: [],
    cookiesEachHourArray: [],
    totalCookies: 0,
    numCustHourly: function () {
        for (var i = 0; i < hours.length; i++) {
            var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
            this.avgCustArray.push(singleHourCust);
        }
    },
    cookiesPerCustomer: function () {
        this.numCustHourly();
        for (var i = 0; i < hours.length; i++) {
            var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
            this.cookiesEachHourArray.push(singleHourCookies);
            this.totalCookies += singleHourCookies;
        }
    },

    render: function () {
        var ParisList = document.getElementById('ParisList');
        this.cookiesPerCustomer();
        for (var i = 0; i < this.cookiesEachHourArray.length; i++) {
            var listElement = document.createElement('li');
            listElement.textContent = hours[i] + this.cookiesEachHourArray[i] + ' cookies';
            ParisList.appendChild(listElement);
        }
        var listElement1 = document.createElement('li');
        listElement1.textContent = 'Total: ' + this.totalCookies + ' cookies';
        ParisList.appendChild(listElement1);
    }


};

Paris.render()
var Tokyo = {

    name: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    avgCustArray: [],
    cookiesEachHourArray: [],
    totalCookies: 0,
    numCustHourly: function () {
        for (var i = 0; i < hours.length; i++) {
            var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
            this.avgCustArray.push(singleHourCust);
        }
    },
    cookiesPerCustomer: function () {
        this.numCustHourly();
        for (var i = 0; i < hours.length; i++) {
            var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
            this.cookiesEachHourArray.push(singleHourCookies);
            this.totalCookies += singleHourCookies;
        }
    },

    render: function () {
        var TokyoList = document.getElementById('TokyoList');
        this.cookiesPerCustomer();
        for (var i = 0; i < this.cookiesEachHourArray.length; i++) {
            var listElement = document.createElement('li');
            listElement.textContent = hours[i] + this.cookiesEachHourArray[i] + ' cookies';
            TokyoList.appendChild(listElement);
        }
        var listElement1 = document.createElement('li');
        listElement1.textContent = 'Total: ' + this.totalCookies + ' cookies';
        TokyoList.appendChild(listElement1);
    }


};

Tokyo.render()
var Dubai = {

    name: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    avgCustArray: [],
    cookiesEachHourArray: [],
    totalCookies: 0,
    numCustHourly: function () {
        for (var i = 0; i < hours.length; i++) {
            var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
            this.avgCustArray.push(singleHourCust);
        }
    },
    cookiesPerCustomer: function () {
        this.numCustHourly();
        for (var i = 0; i < hours.length; i++) {
            var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
            this.cookiesEachHourArray.push(singleHourCookies);
            this.totalCookies += singleHourCookies;
        }
    },

    render: function () {
        var DubaiList = document.getElementById('DubaiList');
        this.cookiesPerCustomer();
        for (var i = 0; i < this.cookiesEachHourArray.length; i++) {
            var listElement = document.createElement('li');
            listElement.textContent = hours[i] + this.cookiesEachHourArray[i] + ' cookies';
            DubaiList.appendChild(listElement);
        }
        var listElement1 = document.createElement('li');
        listElement1.textContent = 'Total: ' + this.totalCookies + ' cookies';
        DubaiList.appendChild(listElement1);
    }


};

Dubai.render()
var Lima = {

    name: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    avgCustArray: [],
    cookiesEachHourArray: [],
    totalCookies: 0,
    numCustHourly: function () {
        for (var i = 0; i < hours.length; i++) {
            var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
            this.avgCustArray.push(singleHourCust);
        }
    },
    cookiesPerCustomer: function () {
        this.numCustHourly();
        for (var i = 0; i < hours.length; i++) {
            var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
            this.cookiesEachHourArray.push(singleHourCookies);
            this.totalCookies += singleHourCookies;
        }
    },

    render: function () {
        var LimaList = document.getElementById('LimaList');
        this.cookiesPerCustomer();
        for (var i = 0; i < this.cookiesEachHourArray.length; i++) {
            var listElement = document.createElement('li');
            listElement.textContent = hours[i] + this.cookiesEachHourArray[i] + ' cookies';
            LimaList.appendChild(listElement);
        }
        var listElement1 = document.createElement('li');
        listElement1.textContent = 'Total: ' + this.totalCookies + ' cookies';
        LimaList.appendChild(listElement1);
    }


};

Lima.render()
