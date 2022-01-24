if ($("#name").val() === '') {
    console.log("no change")
    let url = 'https://rickandmortyapi.com/api/character';
    $.get(`${url}`, function (res, status) {
            if (status === 'success') {
                let characters = res.results;
                characters.forEach(el => {
                    let imgUrl = el.image;
                    let name = el.name;

                    $('.article').append(
                        $(`<div class="card" id="character-${el.id}">
                        <div class="card__img-container">
                            <img class="card__img" src=${imgUrl} alt="img">
                        </div>
                        <div class="card__meta">
                            <div class="card__meta__name">${name}</div>
                            <div class="card__meta__delete btn" id="remove-ch-${el.id}">Delete</div>
                        </div>
                     </div>
                    `)
                    );

                    $(`#remove-ch-${el.id}`).click(function () {
                        $(`#character-${el.id}`).remove();
                    })
                })
            }
        }
    );
}

$("#name").change(function () {
    let searchText = $('#name').val();
    console.log("there is a change")
    $(".article").remove();
    $(".article-container").append(`<div class="article"></div>`)
    let url = `https://rickandmortyapi.com/api/character/?name=` + searchText;
    $.get(`${url}`, function (res, status) {
            if (status === 'success') {
                let characters = res.results;
                characters.forEach(el => {
                    let imgUrl = el.image;
                    let name = el.name;

                    $('.article').append(
                        $(`<div class="card" id="character-${el.id}">
                        <div class="card__img-container">
                            <img class="card__img" src=${imgUrl} alt="img">
                        </div>
                        <div class="card__meta">
                            <div class="card__meta__name">${name}</div>
                            <div class="card__meta__delete btn" id="remove-ch-${el.id}">Delete</div>
                        </div>
                     </div>
                    `)
                    );

                    $(`#remove-ch-${el.id}`).click(function () {
                        $(`#character-${el.id}`).remove();
                    })
                })
            }
        }
    );
})



let removeCharacter = function (id) {
    $("#character-" + id).remove();
}



