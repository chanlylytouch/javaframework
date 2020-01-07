var gamer = () => {
    let mix1 = Math.floor(Math.random() * 6) + 1;
    let mix2 = Math.floor(Math.random() * 6) + 1;
    let mix3 = Math.floor(Math.random() * 6) + 1;
    let output1 = "";
    let output2 = "";
    let output3 = "";
    switch (mix1) {
        case 1:
            output1 = "ខ្លា";
            break;
        case 2:
            output1 = "ឃ្លោក";
            break;
        case 3:
            output1 = "មាន់";
            break;
        case 4:
            output1 = "បង្កង";
            break;
        case 5:
            output1 = "ក្ដាម";
            break;
        case 6:
            output1 = "ត្រី";
            break;
    }
    switch (mix2) {
        case 1:
            output2 = "ត្រី";
            break;
        case 2:
            output2 = "ក្ដាម";
            break;
        case 3:
            output2 = "បង្កង";
            break;
        case 4:
            output2 = "ខ្លា";
            break;
        case 5:
            output2 = "ឃ្លោក";
            break;
        case 6:
            output2 = "មាន់";
            break;
    }
    switch (mix3) {
        case 1:
            output3 = "មាន់";
            break;
        case 2:
            output3 = "ក្ដាម";
            break;
        case 3:
            output3 = "ត្រី";
            break;
        case 4:
            output3 = "ខ្លា";
            break;
        case 5:
            output3 = "បង្កង";
            break;
        case 6:
            output3 = "ឃ្លោក";
            break;
    }
    // console.log(output);
    setTimeout(function(){

        document.getElementById('result').innerHTML = output1 + " " + output2 + " "+ output3 + " " ;
    }, 1000);
}
var playGame = document.getElementById("play");
playGame.addEventListener('click', gamer);
