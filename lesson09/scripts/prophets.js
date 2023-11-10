const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(prophet => {
      let card = document.createElement('section');
      let pName = document.createElement('h2');
      let pBirthDate = document.createElement('p');
      let pBirthPlace = document.createElement('p');
      let pPortrait = document.createElement('img');

      pName.textContent = `${prophet.name} ${prophet.lastname}`;
      pBirthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
      pBirthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
      pPortrait.src = prophet.imageurl;
      pPortrait.alt = `${prophet.name} ${prophet.lastname} - ${prophet.order}`

      card.appendChild(pName);
      card.appendChild(pBirthDate);
      card.appendChild(pBirthPlace);
      card.appendChild(pPortrait);

      document.querySelector('div.cards').appendChild(card);
  });
});