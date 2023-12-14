const requestURL = 'https://timsansone.github.io/wdd230/finalproject/data/rentals.json';

fetch(requestURL)
  .then(function (respose) {
    return respose.json();
  })
  .then(function (jsonObject) {
    const rentals = jsonObject['rentals'];
    rentals.forEach(rental => {
      let card = document.createElement('div');
      let name = document.createElement('h3');
      let capacity = document.createElement('p');
      let reservation = document.createElement('ul');
      let reservTitle = document.createElement('lh');
      let reservHalf = document.createElement('li');
      let reservFull = document.createElement('li');
      let walkin = document.createElement('ul');
      let walkinTitle = document.createElement('lh');
      let walkinHalf = document.createElement('li');
      let walkinFull = document.createElement('li');
      let image = document.createElement('img');
      let link = document.createElement('a');

      image.setAttribute('src', 'images/'+ rental.image);
      image.setAttribute('alt', 'Photo of '+ rental.name);
      name.textContent = rental.name;
      capacity.textContent = 'Max. Persons: ' + rental.maxPersons;
      reservTitle.textContent = 'Reservation';
      reservHalf.textContent = rental.reservation[0].halfDay + ' for Half Day';
      reservFull.textContent = rental.reservation[0].fullDay + ' for Full Day';
      walkinTitle.textContent = 'Walk-In';
      walkinHalf.textContent = rental.walkin[0].halfDay + ' for Half Day';
      walkinFull.textContent = rental.walkin[0].fullDay + ' for Full Day';
      link.textContent = 'Make a Reservation';
      link.setAttribute('href','reservations.html');
      link.setAttribute('class', 'btn');


      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(capacity);
      card.appendChild(reservation);
      reservation.appendChild(reservTitle);
      reservation.appendChild(reservHalf);
      reservation.appendChild(reservFull);
      card.appendChild(walkin);
      walkin.appendChild(walkinTitle);
      walkin.appendChild(walkinHalf);
      walkin.appendChild(walkinFull);
      card.appendChild(link);

      document.getElementById('rentalCards').appendChild(card);
    });

  });