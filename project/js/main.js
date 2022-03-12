const getData = async () => {
    const response = await fetch("https://api.le-systeme-solaire.net/rest/bodies/")
    const result = await response.json();

    console.log(result)

    for (let i = 0; i < result.bodies.length; i++){
    console.log(result.bodies[i]['name'])
    }

}

getData();





