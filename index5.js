const machines = []
function powerTotal() {
let power = 0
for (let machine of machines) power += parseInt(machine.getPower())
console.log('Total power consumption: ' + power + 'W')
return power
}
class Machine {
constructor(subcat, wattage, category, type, state, message) {
this.subcat = subcat || 'not set'
this.wattage = wattage || 0
this.category = category || 'home'
this.type = type || 'electric'
this.state = state || 'off'
this.message = message || 'Serving'
machines.push(this)
}
power() {
if (this.state === 'off') this.state = 'on'
else this.state = 'off'
console.log(`This device is ${this.state}`)
powerTotal()
}
usage(message) {
if (this.state === 'on') return message
else return 'No power'
}
getInfo() {
if (this.state === 'on') {
usage(this.message)
return `This is a ${this.category} ${this.type} machine.`
} else return 'The machine is off'
}
getPower() {
if (this.state === 'on' && this.wattage) return this.wattage
return 0
}
}
class KitchenMachine extends Machine {
constructor(name, mode, wattage, message, subcat, category, type, state) {
super(
subcat,
wattage,
category,
type,
state,
(message = message || 'Used in kitchen')
)
this.subcat = subcat || 'kitchen'
this.name = name || 'no name device'
this.wattage = wattage || 0
this.mode = mode || 0
}
getInfo() {
if (this.state === 'on') {
return `This '${this.name}' is a ${this.subcat} ${this.type} machine.
It takes ${this.wattage} watts and is set to mode "${this.mode}"
${this.usage(this.message)}`
} else return super.getInfo()
}
}
class mediaMachine extends Machine {
constructor(
name,
inputs,
dimensions,
wattage,
message,
subcat,
category,
type,
state
) {
super(
subcat,
wattage,
category,
type,
state,
(message = message || 'Playing music')
)
this.subcat = subcat || 'media'
this.name = name || 'gadget'
this.wattage = wattage || 0
this.inputs = inputs || {}
this.dimensions = dimensions || {}
}
getInfo() {
if (this.state === 'off')
return `This ${this.name} is a ${this.subcat} ${this.type} machine.
It takes ${this.wattage} watts and has ${
Object.keys(this.inputs).length
} inputs.
${this.usage(this.message)}`
else return this.usage(this.message)
}
getSize() {
console.log('The dimensions WxHxD:')
for (const [key, value] of Object.entries(this.dimensions)) {
console.log(`${key}: ${value}`)
}
}
}
console.info('\nMicrowave info and methods: \n')
const microwave = new KitchenMachine('Oven', 'pizza', 700)
console.log(microwave.getInfo())
microwave.power()
console.log(microwave.getInfo())
const blender = new KitchenMachine(
'Blender',
'blend',
50,
'Good for smoothies'
)
console.info('\nBlender info and methods: \n')
console.log(blender.getInfo())
blender.power()
console.log(blender.getInfo())
console.info('\nSoundbar info and methods: \n')
const _inputs = {
jack: {
type: '3.5mm',
format: 'stereo',
quantity: 1,
},
RCA: {
type: 'RCA',
formats: {
white: 'left',
red: 'right',
both: 'stereo',
},
quantity: 2,
},
getInputs: function () {
console.log('Inputs:')
for (const key in this) {
console.log(key, this[key])
}
},
}
const _dimensions = {
width: 850,
height: 150,
depth: 50,
}
const soundbar = new MediaMachine(
'Loud Bar',
_inputs,
_dimensions,
200,
'Playing music'
)
console.log(soundbar.getInfo())
soundbar.getSize()
soundbar.inputs.getInputs()
soundbar.power()
console.log(soundbar.getInfo())
soundbar.power()

// machines.push(microwave)
// machines.push(blender)
// machines.push(soundbar)




//Задание 5.

// Переписать консольное приложение из предыдущего юнита на классы.

// Общие требования:

// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.