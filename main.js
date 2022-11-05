let i = 0;
function changeTheme (theme) {
    // alert(tema.id);

    if (i == 0) {
        document.body.classList.toggle("blue");
        i++;
    } else if (i == 1) {
        document.body.classList.remove('blue');
        document.body.classList.toggle("green");
        i++;
    } else {
        document.body.classList.remove('green');
        i = 0;
    }

    // if (theme.id == "blue") {
    //     document.body.classList.remove('green');
    //     document.body.classList.toggle("blue"); //Cria uma classe para o body do html
    // } else if (theme.id == "green") {
    //     document.body.classList.remove('blue');
    //     document.body.classList.toggle("green"); //Cria uma classe para o body do html
    // } else {
    //     document.body.classList.remove('blue');
    //     document.body.classList.remove('green');
    // }
}

function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/${player2}.svg" alt="Bandeira do ${player2}">
        </li>
    `
}

let delay = -0.4;

function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2> ${date} <span>${day}</span></h2>

            <ul>
                ${games}
            </ul>
        </div>
    `
}

// ${createCard()} chama a função e recebe o retorno dela
// querySelector busca o termo dentro do html e ao localizar, puxa sua função, substituindo pelo declarado a seguir
document.querySelector('#cards').innerHTML = 
        createCard('24/11', "quinta", 
            createGame("brazil", "07:00", "japan") + 
            createGame("hungary", "13:00", "comoros") +
            createGame("colombia", "16:00", "india")
        ) +
        createCard('28/11', "segunda", 
            createGame("argentina", "07:00", "jordan") +
            createGame("armenia", "11:00", "british-colombia") +
            createGame("brazil", "15:00", "cameroon")
        ) +
        createCard('02/12', "sexta", 
            createGame("hungary", "08:00", "colombia") +
        createGame("india", "13:00", "brazil") +
        createGame("japan", "17:00", "colombia"))
