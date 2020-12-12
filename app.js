$(document).ready(() => {
    listaCursos = $("#cursos")
});

listaCursos = $("#cursos")

$.ajax({
    method: 'GET',
    url : "./data.json",
    datatype: 'json'
}).done(function(data){
    renderCursos(data);

}).fail(function(){
    console.log("No hay datos");
});

function renderCursos(data) {
    data.forEach(function(curso, index) {
        listaCursos.append(
        `<div class="col mb-4" style="padding-top: 15px">
            <div class="card h-100 border-secondary">
                <div class="card-body text-center">
                    <h5 class="card-title">${curso.title}</h5>
                    <p class="card-text">${curso.description}</p>
                    <a href="${curso.schedule}" data-id="${index}" class="btn btn-dark">Ver Programa</a>
                </div>
            </div>
        </div>`
        )
    })
}