function viewWinners()
{
    // Initializing an object   
    let modal = {
        people: {
            maks:1,
            everyone:false,
            array: [
                {id:100, name:'Jhon Doe', bolean:true},
                {id:101, name:'Jane Doe', bolean:true},
                {id:102, name:'Jake Doe', bolean:false},
                {id:103, name:'Lilly Doe', bolean:true}
                ],
        },
        draw: [
            {
                time:'2024-08-02 16:55',
                winners: ['Jane Doe'],
                participants: ['Jhon Doe', 'Jane Doe', 'Jake Doe', 'Lilly Doe'],
            },
            {
                time:'2024-08-02 16:55',
                winners: ['Jane Doe', 'Jane Doe', 'Jake Doe', 'Lilly Doe'],
                participants: ['Jhon Doe', 'Jane Doe', 'Jake Doe', 'Lilly Doe', 'Jonny McDonald', 'Donald Duck'],
            }
        ]
    };
    
    //  Initializing variables
    let html = '';
    let cls = 'first';

    //  Iteration over model
    for (let draw of modal.draw)
    {
        //  Initializing constant variables
        const time = new Date(draw.time);
        const wdn = dateToString(time);
        const wd = dayName[time.getDay()];
        const winners = draw.winners;
        const participants = trekning.participants;
        const word = winners.length == 1 ? 'vinneren': 'Vinnere';
        
        // Generating the html code
        html += `
            <p>
                <small>
                    <time timedata='${wd}'>${wdn}</time>
                </small>
                <b> class='${cls}'> ${word} is ${generatelist(winners)}!</b>
                <small> Draw of total ${participants.length} People : ${generatelist(participants)}</small>
            </p>`
            delete cls;
    }

    //  Shows the winners
    document.querySelector('#main').innerHTML = html;
}

function viewPeople()
{

    document.querySelector('#main').innerHTML = `
                <table>
                    <tr><td><input type="checkbox"/></td><td>People</td><td>+</td><td>✎</td></tr>
                    <tr><td><input type="checkbox" checked/></td><td>Per</td><td onclick="visPersonerMinusPer()">☒</td></tr>
                    <tr><td><input type="checkbox" checked/></td><td>Pål</td><td>☒</td></tr>
                    <tr><td><input type="checkbox"/></td><td>Espen</td><td>☒</td></tr>
                    <tr><td><input type="checkbox" checked/></td><td>Ole</td><td>☒</td></tr>
                    <tr><td colspan="4"><button onclick="showWinners()">Draw!</button> <input type="text" size="1" value="1"/>
                        <button>▲</button>
                        <button>▼</button></td></tr>
                </table>`;
}
