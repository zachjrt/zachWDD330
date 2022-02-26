
async function getPlanet(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        const fetchJson = await response.json();
        return fetchJson;
      }
    } catch (error) {
      console.log(error);
    }
  }

  function renderplanetList(planets, planetListElement) {
    const list = planetListElement.children[1];
    list.innerHTML = "";
    planets.forEach(function (planet) {

      let listItem = document.createElement("tr");
      listItem.innerHTML = `
          <td><a href="${planet.url}">${planet.name}</a></td>
          <td>${planet.gravity}</td>
          <td>${planet.population}</td>
          <td>${planet.diameter}</td>
          <td>${planet.climate}</td>
          <td>${planet.terrain}</td>
          `;
  
      listItem.addEventListener("click", function (event) {
        event.preventDefault();
        getplanetDetails(planet.url);
      });
  
      list.appendChild(listItem);
    });
  }
  function renderplanetDetails(planetData) {
    console.log(planetData);
  }
  
  async function showplanets(url = "https://swapi.dev/api/starplanets/") {
    const results = await getPlanet(url);
  
    const planetListElement = document.getElementById("planetlist");
    renderplanetList(results.results, planetListElement);
  
    if (results.next) {
      const next = document.getElementById("next");
      next.onclick = () => {
        showplanets(data.next);
      };
    }
    if (results.previous) {
      const prev = document.getElementById("prev");
      prev.onclick = () => {
        showplanets(data.previous);
      };
    }
  }
  
  async function getplanetDetails(url) {
    const planet = await getPlanet(url);
    renderplanetDetails(planet);
  }
  showplanets();