let url = 'https://rickandmortyapi.com/api/character';

let errMessage = "There was something wrong with the request";
let removeCharacter = function(id){
    $("#character-"+id).remove();
}


$.get(`${url}`, function (res, status, xhr) {
        if (status == 'success') {
            console.log(res)
            let characters = res.results;
            // characters.forEach(el => console.log(el))
            characters.forEach(el => {
                let imgUrl = el.image;
                let name = el.name;

                $('.article').append(
                    $(`<div class="card" id="character-${el.id}">
                        <div class="card__img-container">
                            <img class="card__img" src=${imgUrl}>
                        </div>
                        <div class="card__meta">
                            <div class="card__meta__name">${name}</div>
                            <div class="card__meta__delete btn" id="remove-ch-${el.id}">Delete</div>
                        </div>
                     </div>
                    `)
                );

                $(`#remove-ch-${el.id}`).click(function (){
                    $(`#character-${el.id}`).remove();
                })
            })
        } else {
            console.log(errMessage)
        }
    }
);





