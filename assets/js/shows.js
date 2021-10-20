const fetchData = function(){
  fetch('https://api.tvmaze.com/shows')
    .then(function(response){
      // JSON that is returned from the server must be converted to a JS object asynchronously.
      if (!response.ok) {
        throw new Error('Not 200 OK');
      }
      return response.json();
    })
    .then(function(data){

      console.log(data)

      function randomNumber(){
        return Math.floor(Math.random() * data.length)
      }

      const randomOne = randomNumber()
      const randomTwo = randomNumber()
      const randomThree = randomNumber()

      document.querySelector('.show-one').innerHTML = `
    <h2>${data[randomOne].name}</h2>
    <a href="${data[randomOne].image.original}" target="_blank">
      <img src="${data[randomOne].image.medium}" alt="${data[randomOne].name}">
    </a>
    <p>Premiered: ${data[randomOne].premiered}</p>
    <p>Rating: ${data[randomOne].rating.average}/10</p>
    <p>Genre: ${data[randomOne].genres[0]}</p>
    <a class="learn" href="${data[randomOne].officialSite}" target="_blank">Learn More</a>
    `

    document.querySelector('.show-two').innerHTML = `
    <h2>${data[randomTwo].name}</h2>
    <a href="${data[randomTwo].image.original}" target="_blank">
      <img src="${data[randomTwo].image.medium}" alt="${data[randomTwo].name}">
    </a>
    <p>Premiered: ${data[randomTwo].premiered}</p>
    <p>Rating: ${data[randomTwo].rating.average}/10</p>
    <p>Genre: ${data[randomTwo].genres[0]}</p>
    <a class="learn" href="${data[randomTwo].officialSite}" target="_blank">Learn More</a>
    `

    document.querySelector('.show-three').innerHTML = `
    <h2>${data[randomThree].name}</h2>
    <a href="${data[randomThree].image.original}" target="_blank">
      <img src="${data[randomThree].image.medium}" alt="${data[randomThree].name}">
    </a>
    <p>Premiered: ${data[randomThree].premiered}</p>
    <p>Rating: ${data[randomThree].rating.average}/10</p>
    <p>Genre: ${data[randomThree].genres[0]}</p>
    <a class="learn" href="${data[randomThree].officialSite}" target="_blank">Learn More</a>
    `

    })
    .catch(function(err){
      // An error or `reject` from any of the above `.then()` blocks will end up here.
     document.querySelector('.no-data').innerHTML = `
     <h2>Oops! There is a problem with displaying TV shows right now.</h2>
     <p>Please come back later</p>
     <img src="assets/images/tv.png" alt="No TV Shows Avaliable">
     `
      console.log(err);
    });
  }

  document.querySelector('button').addEventListener('click', fetchData);

  