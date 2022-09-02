// https://www.omnicalculator.com/finance/pvifa

// calculators not working

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const PVIFARadio = document.getElementById('PVIFARadio');
const interestrateperperiodRadio = document.getElementById('interestrateperperiodRadio');
const numberofperiodsRadio = document.getElementById('numberofperiodsRadio');

let PVIFA;
let interestrateperperiod = v1;
let numberofperiods = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

PVIFARadio.addEventListener('click', function() {
  variable1.textContent = 'Interest rate per period';
  variable2.textContent = 'Number of periods';
  interestrateperperiod = v1;
  numberofperiods = v2;
  result.textContent = '';
});

interestrateperperiodRadio.addEventListener('click', function() {
  variable1.textContent = 'PVIFA';
  variable2.textContent = 'Number of periods';
  PVIFA = v1;
  numberofperiods = v2;
  result.textContent = '';
});

numberofperiodsRadio.addEventListener('click', function() {
  variable1.textContent = 'PVIFA';
  variable2.textContent = 'Interest rate per period';
  PVIFA = v1;
  interestrateperperiod = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(PVIFARadio.checked)
    result.textContent = `PVIFA = ${computePVIFA().toFixed(2)}`;

  else if(interestrateperperiodRadio.checked)
    result.textContent = `Interest rate per period = ${computeinterestrateperperiod().toFixed(2)}`;

  else if(numberofperiodsRadio.checked)
    result.textContent = `Number of periods = ${computenumberofperiods().toFixed(2)}`;
})

// calculation

function computePVIFA() {
  return (1 - Math.pow(1 + Number(interestrateperperiod.value)), -Number(numberofperiods.value)) / Number(interestrateperperiod.value);
}

function computeinterestrateperperiod() {
  return Number(PVIFA.value) / Number(numberofperiods.value);
}

function computenumberofperiods() {
  return Number(PVIFA.value) / Number(interestrateperperiod.value);
}