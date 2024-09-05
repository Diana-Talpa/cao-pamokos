/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą. Vartotojui atėjus į tinklapį, kreipsis į cars.json failą
ir atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
  
    
    function displayCars(carsData) {
      
      output.innerHTML = '';
  
      carsData.forEach(brandData => {
        
        const brandContainer = document.createElement('div');
        brandContainer.className = 'brand-container';
      
        const brandName = document.createElement('h2');
        brandName.textContent = brandData.brand;
        brandContainer.appendChild(brandName);
         
        brandData.models.forEach(model => {
          const modelCard = document.createElement('div');
          modelCard.className = 'model-card';
          modelCard.textContent = model;
          brandContainer.appendChild(modelCard);
        });
  
        output.appendChild(brandContainer);
      });
    }
  
    fetch('./cars.json')
      .then(response => response.json())
      .then(carsData => {
        displayCars(carsData);
      })
      .catch(error => {
        console.error('Error fetching the car data:', error);
      });
  });
  