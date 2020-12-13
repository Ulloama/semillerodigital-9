$(document).ready(() => {
    listaCursos = $("#cursos")
});

listaCursos = $("#cursos")

$.ajax({
    method: 'GET',
    url : "../assets/data/data.json",
    datatype: 'json'
}).done(function(data){
    renderCursos(data);

}).fail(function(){
    console.log("No hay datos");
});

function renderCursos(data) {
    data.forEach(function(curso, index) {
        listaCursos.append(
        `<div class="col-lg-4 col-lg-4 mb-5 bt-5">
            <div>
                <img src="" alt="curso 1">
            </div>
            <h3>${curso.title}</h3>
            <p>${curso.description}</p>
            <a href="${curso.schedule}" data-id="${index}" class="btn btn-dark">Ver Programa</a>
        </div>`
        )
    })
};