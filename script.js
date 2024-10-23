// JavaScript untuk menampilkan atau mengolah data Excel
document.addEventListener('DOMContentLoaded', function() {
    const dataContainer = document.getElementById('excel-data');
    const tableHeaders = document.querySelectorAll('th');
  
    // Add event listeners to table headers
    tableHeaders.forEach(header => {
      header.addEventListener('click', function() {
        // Add animation class to the table
        dataContainer.classList.add('animate');
  
        // Remove animation class after 1 second
        setTimeout(function() {
          dataContainer.classList.remove('animate');
        }, 1000);
      });
    });
  
    // Contoh data
    const data = [
      ['Nama', 'Nilai', 'Kelas'],
      ['Andi', 80, 'A'],
      ['Budi', 75, 'B'],
      ['Citra', 90, 'A']
    ];
  
// ...

// ...

// Create table headers
let table = '<table border="1" cellpadding="5" cellspacing="0"><thead><tr>';
data[0].forEach(header => {
  table += `<th>${header}</th>`;
});
table += '</tr></thead><tbody>';

// Create table body with input fields only in "Nilai" column
for (let i = 1; i < data.length; i++) {
  table += '<tr>';
  data[i].forEach((cell, j) => {
    if (j === 1) { // only add input field to "Nilai" column
      table += `<td><input type="number" value="${cell}" id="cell-${i}-${j}" /></td>`;
    } else {
      table += `<td>${cell}</td>`;
    }
  });
  table += '</tr>';
}

table += '</tbody><tfoot><tr><th>Formula</th><th>Contoh</th><th>Hasil</th></tr>';
table += '<tr><td>SUM</td><td>=SUM(B2:B4)</td><td id="sum-result">245</td></tr>'; // SUM
table += '<tr><td>MAX</td><td>=MAX(B2:B4)</td><td id="max-result">90</td></tr>'; // MAX
table += '<tr><td>MIN</td><td>=MIN(B2:B4)</td><td id="min-result">75</td></tr>'; // MIN
table += '<tr><td>COUNT</td><td>=COUNT(B2:B4)</td><td id="count-result">3</td></tr>'; // COUNT
table += '<tr><td>AVERAGE</td><td>=AVERAGE(B2:B4)</td><td id="average-result">81.67</td></tr>'; // AVERAGE
table += '<tr><td>IF</td><td>=IF(B2>80,"Lulus","Tidak Lulus")</td><td id="if-result">Lulus</td></tr>'; // IF
table += '</tfoot></table>';

dataContainer.innerHTML = table;

// Add event listeners to input fields
const inputFields = document.querySelectorAll('input[type="number"]');
inputFields.forEach(input => {
  input.addEventListener('input', updateFormulas);
});

// Function to update formulas when input fields change
function updateFormulas() {
  const values = [];
  inputFields.forEach(input => {
    values.push(parseFloat(input.value));
  });

  // Update SUM formula
  const sumResult = values.reduce((a, b) => a + b, 0);
  document.getElementById('sum-result').textContent = sumResult;

  // Update MAX formula
  const maxResult = Math.max(...values);
  document.getElementById('max-result').textContent = maxResult;

  // Update MIN formula
  const minResult = Math.min(...values);
  document.getElementById('min-result').textContent = minResult;

  // Update COUNT formula
  const countResult = values.length;
  document.getElementById('count-result').textContent = countResult;

  // Update AVERAGE formula
  const averageResult = sumResult / countResult;
  document.getElementById('average-result').textContent = averageResult.toFixed(2);

  // Update IF formula
  const ifResult = values[0] > 80 ? 'Lulus' : 'Tidak Lulus';
  document.getElementById('if-result').textContent = ifResult;
}
});
document.addEventListener('DOMContentLoaded', function() {
  const dataContainer = document.getElementById('excel-data');
  const tableHeaders = document.querySelectorAll('th');

  // Add event listeners to table headers
  tableHeaders.forEach(header => {
    header.addEventListener('click', function() {
      header.classList.add('animate-th');
      header.classList.toggle('active');
      setTimeout(function() {
        header.classList.remove('animate-th');
      }, 500);
    });
  });

  // ... rest of the code ...
});
tableHeaders.forEach(header => {
  header.addEventListener('click', function() {
    header.classList.add('animate-th');
    header.classList.toggle('active');
    setTimeout(function() {
      header.classList.remove('animate-th');
    }, 500);
  });
});
