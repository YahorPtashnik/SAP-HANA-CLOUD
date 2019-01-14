// The Class "Computer". Inherited classes: ultrabook, computing server.
// Possible fields: number of processor cores, processor type, frequency,
// availability of Hyper-Threading technology, architecture bit depth,
// manufacturer, graphics card, RAM size and type, hard disk size and type,
// manufacturer, etc.
// Create function-like realization of data model in accordance with your personal variant
// Realize setter and getter for your data model realization
// Create mocks for CRUD operation (don’t send any information, only serialize/deserialize

function Computer(procCoresNumb, procType, frequency, hyperThread, manufacturer, graphCard, ramSize, ramType, hddSize, hddType) {
    procCoresNumb = procCoresNumb;
    procType = procType;
    frequency = frequency;
    hyperThread = hyperThread;
    manufacturer = manufacturer;
    graphCard = graphCard;
    ramSize = ramSize;
    ramType = ramType;
    hddSize = hddSize;
    hddType = hddType;

    this.getProcCoresNumb = function () {
        return procCoresNumb;
    }
    this.setProcCoresNumb = function (value) {
        procCoresNumb = value;
    }
    this.getProcType = function () {
        return procType;
    }
    this.setProcType = function (value) {
        procType = value;
    }
    this.getFrequency = function () {
        return frequency;
    }
    this.setFrequency = function (value) {
        frequency = value;
    }
    this.getHyperThread = function () {
        return hyperThread;
    }
    this.setHyperThread = function (value) {
        hyperThread = value;
    }
    this.getManufacturer = function () {
        return manufacturer;
    }
    this.setManufacter = function (value) {
        manufacturer = value;
    }
    this.getGraphCard = function () {
        return graphCard;
    }
    this.setGraphCard = function (value) {
        graphCard = value;
    }
    this.getRamSize = function () {
        return ramSize;
    }
    this.setRamSize = function (value) {
        ramSize = value;
    }
    this.getRamType = function () {
        return ramType;
    }
    this.setRamType = function (value) {
        ramType = value;
    }
    this.getHddSize = function () {
        return hddSize;
    }
    this.setHddSize = function (value) {
        hddSize = value;
    }
    this.getHddType = function () {
        return hddType;
    }
    this.setHddType = function (value) {
        hddType = hddType;
    }
    this.toString = function () {
        var compInfo = '';
        compInfo += '==COMPUTER CHARACTERISTICS== \n' +
            'Number of processor cores: ' + procCoresNumb + '\n' +
            'Processor type: ' + procType + '\n' +
            'Frequency: ' + frequency + '\n' +
            'Availability of Hyper-Threading technology: ' + hyperThread + '\n' +
            'Manufacturer: ' + manufacturer + '\n' +
            'Graphics card: ' + graphCard + '\n' +
            'RAM size: ' + ramSize + '\n' +
            'RAM type: ' + ramType + '\n' +
            'HDD size: ' + hddSize + '\n' +
            'HDD type: ' + hddType + '\n';
        return compInfo;
    }
}

function Server(name, numbOfClients, ipAddr, country, city) {
    name = name;
    numbOfClients = numbOfClients;
    ipAddr = ipAddr;
    country = country;
    city = city;
    this.getName = function () {
        return name;
    }
    this.setName = function (value) {
        name = value;
    }
    this.getNumbOfClients = function () {
        return numbOfClients;
    }
    this.setNumbOfClients = function (value) {
        numbOfClients = value;
    }
    this.getNumbOfClients = function () {
        return numbOfClients;
    }
    this.setNumbOfClients = function (value) {
        numbOfClients = value;
    }
    this.getCountry = function () {
        return country;
    }
    this.setCountry = function (value) {
        country = value;
    }
    this.getCity = function () {
        return city;
    }
    this.setCity = function (value) {
        city = value;
    }
    this.getInfo = function () {
        return this.toString() +
            'Server name: ' + name + '\n' +
            'Number of clients: ' + numbOfClients + '\n' +
            'IP address: ' + ipAddr + '\n' +
            'Country: ' + country + '\n' +
            'City: ' + city + '\n';
    }
    Computer.call(this);
}

function Ultrabook(companyName, name, description, cost) {
    companyName = companyName;
    name = name;
    description = description;
    cost = cost;
    this.getCompanyName = function () {
        return companyName;
    }
    this.setCompanyName = function (value) {
        companyName = value;
    }
    this.getName = function () {
        return name;
    }
    this.setName = function (value) {
        name = value;
    }
    this.getDescription = function () {
        return description;
    }
    this.setDescription = function (value) {
        description = value;
    }
    this.getCost = function () {
        return cost + '$';
    }
    this.setCost = function (value) {
        cost = value;
    }
    this.getInfo = function () {
        return this.toString() +
            'Ultrabook"s name: ' + name + '\n' +
            'Created by: ' + companyName + '\n' +
            'Description: ' + description + '\n' +
            'Cost: ' + this.getCost() + '\n';
    }
    Computer.call(this);
}


//SOME EXAMPLES OF USING THIS CODE
var comp = new Computer(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
comp.setFrequency(22);
console.log(comp.toString());
var serv = new Server('Some Server Name', 500, '172.16.192.154', 'Belarus', 'Minsk');
serv.setGraphCard('Some Graph Card');
serv.setName('EgorServerMF');
console.log(serv.getInfo());
var uBook = new Ultrabook('Apple', 'iMac 1997', 'Some description');
uBook.setCost(2000);
console.log(uBook.getInfo());