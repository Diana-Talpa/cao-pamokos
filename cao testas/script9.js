/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę, kuris turi 3 savybes ir 1 metodą:

Savybės:
title, director, budget

Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins:
- Jeigu true, tai atsakymą išvesti tokiu formatu: „Režisieriaus {režisieriaus vardas} sukurto filmo {filmo pavadinimas} biudžetas viršijo 100 000 000 mln USD"
- Jeigu false, tai atsakymą išvesti tokiu formatu: „Režisierius {režisieriaus vardas}, kurdamas filmą {filmo pavadinimas}, neviršijo 100 000 000 mln USD biudžeto"
------------------------------------------------------------------------------------------------------ */


const movie1 = {
    title: 'Avengers: Endgame',
    director: 'Anthony and Joe Russo',
    budget: 356000000, 
  };
  
  const movie2 = {
    title: 'The Blair Witch Project',
    director: 'Daniel Myrick and Eduardo Sánchez',
    budget: 600000, 
  };
  
  function wasExpensive(movie) {
    if (movie.budget > 100000000) {
      return `Režisieriaus ${movie.director} sukurto filmo ${movie.title} biudžetas viršijo 100 000 000 mln USD.`;
    } else {
      return `Režisierius ${movie.director}, kurdamas filmą ${movie.title}, neviršijo 100 000 000 mln USD biudžeto.`;
    }
  }
  
  console.log(wasExpensive(movie1)); // Check the expensive movie
  console.log(wasExpensive(movie2)); // Check the less expensive movie
  