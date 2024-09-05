document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const searchInput = document.getElementById('search');
    const outputDiv = document.getElementById('output');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      const kg = parseFloat(searchInput.value); 
  
      if (isNaN(kg) || kg <= 0) {
        outputDiv.innerHTML = `<p>Please enter a valid positive number for kilograms.</p>`;
        return;
      }
  
      
      const pounds = (kg * 2.20462).toFixed(2);  
      const grams = (kg * 1000).toFixed(2);     
      const ounces = (kg * 35.274).toFixed(2);  
  
      
      outputDiv.innerHTML = `
        <p><strong>${kg} kg</strong> is equivalent to:</p>
        <ul>
          <li><strong>${pounds}</strong> pounds (lb)</li>
          <li><strong>${grams}</strong> grams (g)</li>
          <li><strong>${ounces}</strong> ounces (oz)</li>
        </ul>
      `;
    });
  });
  