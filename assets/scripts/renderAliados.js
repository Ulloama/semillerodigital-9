listaAliados = $("#aliados")

$.ajax({
    method: 'GET',
    url : "../assets/data/aliados.json",
    datatype: 'json'
}).done(function(data){
    renderAliados(data);

}).fail(function(){
    console.log("No hay datos");
});

function renderAliados(data) {
    data.forEach(function(aliado, index) {
        listaAliados.append(
        `<div class="col" style="padding-bottom: 20px; border-radius: 100%;">
            <a href="${aliado.url}" target="_blank">
                <img src="${aliado.img}" class="img-fluid max-width: 20% shadow" style="border-radius: 100%;" alt="${aliado.title}">
            </a>
            <h3 style="padding-top: 20px">${aliado.title}</h3>
        </div>`
        )
    })
}

