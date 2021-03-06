const getData = async () => {
    const response = await fetch("https://api.le-systeme-solaire.net/rest/bodies/")
    const results = await response.json();

    console.log(results)
    var planets = []
    const planetListElement = document.getElementById("planetlist");
    //renderPlanetList(data, planetListElement)

    for (let i = 0; i < results.bodies.length; i++){
        //console.log(bodies.bodies[i]['name'])
        var data = []
        data.push(results.bodies[i]['name'])
        data.push(results.bodies[i]['avgTemp'])
        data.push(results.bodies[i]['isPlanet'])
        data.push(results.bodies[i]['gravity'])
        data.push(results.bodies[i]['density'])
        data.push(results.bodies[i]['meanRadius'])
        //console.log(data)
        planets.appendChild
        renderPlanetList(results.bodies, planetListElement)
        //randomPlanet(results, planetListElement)
        
       
    }
    

}


function randomPlanet(results, planetListElement){
    console.log(results.bodies[10])
    renderRandomPlanet(results.bodies[10], planetListElement)
}


function renderRandomPlanet(planet, planetListElement) {
    const list = planetListElement.children[0];
    list.innerHTML = "";
      let listItem = document.createElement("tr");
      listItem.innerHTML = `
          <td>${planet.englishName}</td>
          <td>${planet.name}</td>
          <td>${planet.avgTemp}</td>
          <td>${planet.mass.massValue}</td>
          <td>${planet.isPlanet}</td>
          <td>${planet.gravity}</td>
          <td>${planet.density}</td>
          <td>${planet.meanRadius}</td>
          <td>${planet.meanRadius}</td>
          `;
  
      list.appendChild(listItem);
    
  }

function renderPlanetList(planets, planetListElement) {
    const list = planetListElement.children[1];
    list.innerHTML = "";
    planets.forEach(function (planet) {
        let listItem = document.createElement("button");
        listItem.className="collapsible"
        listItem.type="button"
        listItem.innerHTML = `
            ${planet.englishName}
            `;
        listItem.addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
        let listContent = document.createElement("div");
        listContent.className="colllapsibleContent"
        listContent.innerHTML = `
            <p> Name: ${planet.name}</p>
            <p> Temperature: ${planet.avgTemp}</p>
            <p> Mass: ${planet.mass.massValue}</p>
            <p> Planet: ${planet.isPlanet}</p>
            <p> Gravity: ${planet.gravity}</p>
            <p> Density: ${planet.density}</p>
            <p> Radius: ${planet.meanRadius}</p>
            `;
        
       
      list.appendChild(listItem);
      list.appendChild(listContent);
    });
  }

  



  getData();

 