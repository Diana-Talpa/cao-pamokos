let company1 = {}

company1['company name'] = 'Gydomojo Masazo Centras'

company1.opened = 2006
company1.companyCode = 300137411
company1.employees = 25
company1.ceo = 'Egidijus Jakimavicius'
company1.nvo = false
company1.workingLocations = ['Lietuva', 'Lenkija']
company1.activityAreas = ['Gydomieji masazai', 'Sveikatos konsultacijos', 'Limfodrenazas', 'Pulstar proceduros']
company1.contacts = {}
company1.contacts.phone = +37052411022
company1.contacts.email = 'info@gmcentras.lt'
company1.contacts.adress = {}
company1.contacts.adress.country = 'Lithuania'
company1.contacts.adress.city = 'Vilnius'
company1.contacts.adress.street = 'Laisvės pr.'
company1.contacts.adress.apartament = 37


company1.adressStr = function() {
    let adress = 'Vilniaus st. 15, Vilnius, Lithuania.'

    return adress
}

company1.changeNvoTrue = function() {
   this.nvo = true
   return this.nvo
}


company1.changeNvoFalse = function() {
    this.nvo = false
    return this.nvo
}

company1.changeStatusNvo = function() {
    if ( this.nvo === false) {
        console.log(true)
    } else {
        console.log(false)
    }
    return this.nvo
}


company1.onePliusCountry = function(papildomaSalis) {
    this.workingLocations.push(papildomaSalis)
    return this.workingLocations
}
        
company1.onePliusActivity = function(papildomaVeikla) {
    this.activityAreas.push(papildomaVeikla)
    return this.activityAreas
}
company1.filterOneCountry = function(isFiltruoti) {
    this.workingLocations = this.workingLocations.filter(location => location !== isFiltruoti)
    return this.workingLocations
}

company1.filterOneActivity = function(isFiltruoti) {
    this.activityAreas = this.activityAreas.filter(location => location !== isFiltruoti)
    return this.activityAreas
}


console.log(company1)
console.log(company1.adressStr())
console.log(company1.changeStatusNvo())

console.log(company1.changeNvoTrue())
console.log(company1.changeNvoFalse())
console.log(company1.onePliusCountry('Latvija'))
console.log(company1.onePliusActivity('Veido valymas'))
console.log(company1.filterOneCountry('Latvija'))
console.log(company1.filterOneActivity('Veido valymas'))


let company2 = {
    ['company name']: 'Gydomojo masazo centras',
    opened: 2006,
    companyCode: 300137411,
    employees: 25,
    ceo: 'Egidijus Jakimavicius',
    nvo: false,
    workingLocations: ['Lietuva', 'Lenkija'],
    activityAreas: ['Gydomieji masazai', 'Sveikatos konsultacijos', 'Limfodrenazas', 'Pulstar proceduros'],
    contacts: {
        phone: +37052411022,
        email: 'info@gmcentras.lt',
        adress: {
            country: 'Lithuania',
            city: 'Vilnius',
            street: 'Laisves pr.',
            apartament: 37
        }
    }
}



console.log(company2)