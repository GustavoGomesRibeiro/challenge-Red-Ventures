function getValue(){
    const sun = document.getElementById('sun').value;
    const water =  document.getElementById('water').value;
    const pets = document.getElementById('pets').value;

    const url = 'https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service'
    let config = {
        method: 'GET',
        url: `${url}?sun=${sun}&water=${water}&pets=${pets}`, 
    }

    $.ajax({
        url: config.url
    })
    .done((data) => {
        let results = "";

        data.forEach(element => {
            results += `<div class="typePlant">
                            <img src="${element.url}" class='imgPlant'/>
                            <p class='textPlantName'>${element.name}<p>
                            <p class='textPlantPrice'>$${element.price}<p>
                            <div class='container-PlantsResults'>
                                <img src="/Assets/img/Pet.png" class='typeimgPlants'></img>
                                <img src="/Assets/img/Water.png" class='typeimgPlants'></img>
                                <img src="/Assets/img/HighSun.png" class='typeimgPlants'></img>
                            </div>
                        </div>`
        });

        $("#containerResult").html(`
            <div class='container-findPlantjs'>
                <div id='findPlant'>
                    <img src="/Assets/img/pick.png" alt='pick'>
                    <h1>Our picks for you</h1>
                </div>
            </div>
            <div class="containerTypePlantjs">${results}</div>
        `)
    })
}



