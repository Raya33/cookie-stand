"use strict";

var hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

var storeLocations = [];

function Store(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  storeLocations.push(this);
}
Store.prototype.setCookiesPerHour = function (cookiesPH) {
  this.cookiesPerHour = cookiesPH;
};

Store.prototype.getTotalCookies = function () {
  var total = 0;
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    total += this.cookiesPerHour[i];
  }
  return total;
};
/*
Data 
*/
new Store("Seattle", 2, 16, 4.6);
new Store("Tokyo", 3, 24, 1.2);
new Store("Dubai", 11, 38, 3.7);
new Store("Paris", 20, 38, 2.3);
new Store("Lima", 23, 65, 6.3);

function renderStore(store, table) {
  var tableRow = document.createElement("tr");
  var cookiesPH = store.cookiesPerHour;
  for (var i = 0; i < cookiesPH.length; i++) {
    if (i == 0) {
      var name = document.createElement("th");
      name.textContent = store.name;
      tableRow.append(name);
    }
    var tableData = document.createElement("td");
    tableData.textContent = cookiesPH[i];
    tableRow.append(tableData);
  }
  var totalCell = document.createElement("td");
  totalCell.textContent = store.getTotalCookies();
  tableRow.append(totalCell);
  table.append(tableRow);
}
function headerRow() {
  var headerRow = document.createElement("tr");
  for (var i = 0; i < hours.length; i++) {
    if (i == 0) {
      var emptyCell = document.createElement("td");
      emptyCell.textContent = "  ";
      headerRow.append(emptyCell);
    
    }
    var td=document.createElement("th")
    td.textContent = hours[i];
    headerRow.append(td);
  }
  var th=document.createElement("th")
    th.textContent = 'Daily Total';
    headerRow.append(th);
 
  return headerRow ;
}
function computeCookiesPerHoure(store) {
  var cookiesPerHour=[];
  for (var i =0; i<hours.length; i++){
    cookiesPerHour[i]=getComutedCookies(store.minCust,store.maxCust,store.avgCookie);
    }
    store.setCookiesPerHour(cookiesPerHour);
  
}
function getComutedCookies (minCust,maxCust,avgCookie){
  var number =  Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
  return Math.round(number*avgCookie);

}
function footerRow() {
  var footerRow=document.createElement("tr");
  var td=document.createElement("th");
  td.textContent="Hourly Total"
  footerRow.append(td);
  var num=storeLocations[0].cookiesPerHour.length;
  for (var i =0; i<num; i++){
    var sum=0;
    var td1=document.createElement('td');
    for(var j=0; j< storeLocations.length; j++);{
      console.log(j);
      console.log(i);
     sum+=storeLocations[j].cookiesPerHour[i];
    }
    td1.textContent=sum;
    footerRow.append(td1);
    }
  return footerRow;
}
function render(num) {
 var table =document.getElementById('salmonTable') ;
 
 if (num==1){
   while(table.firstChild) {
    table.removeChild(table.lastChild);
   };
 }
 table.append(headerRow())
//  compute cookies per hure for aech sotre in storeLocations[]
  for (let index = 0; index < storeLocations.length; index++) {
    computeCookiesPerHoure(storeLocations[index]);
    renderStore(storeLocations[index],table);

    
  }
// table.append(footerRow());
}
render(0);

var salesInput = document.getElementById("salesInput");

salesInput.addEventListener("submit", submitter);
function submitter(event) {
  event.preventDefault();
  // console.log(event);
  var name = event.target.name.value;
  console.log("name", name);

  var minCustomers =parseInt( event.target.minCustomers.value);

  console.log("minCustomers", minCustomers);


  var maxCustomers =parseInt( event.target.maxCustomers.value);
  console.log("maxCustomers", maxCustomers);

  var avgCookies =parseInt( event.target.avgCookies.value);
  console.log("avgCookies", avgCookies);
  new Store(name,minCustomers,maxCustomers,avgCookies);
  render(1);
  console.log(storeLocations)
}