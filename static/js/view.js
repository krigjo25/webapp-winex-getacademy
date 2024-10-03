
mainview();

function navigationMenu() {

    document.querySelector('#winex').innerHTML = /*HTML*/ `
    <div class="header" id="header">
            <button onclick="">☰</button> 
            <span>Wine</span><span>ix🍷</span>
            <div id="menu" class="menu">
                <button class="btn fixed" onclick="viewPeople()">People</button>
                <button class="btn fixed" onclick="viewWinners()">Winners</button>
                <button class="btn fixed" onclick="">About</button>
                <button class="btn fixed" onclick="">Quit</button>
            </div>
        </div>
`;
}
function mainview() {

    document.querySelector('#winex').innerHTML = /*HTML*/`
        <div id="header" class="header">
            ${navigationMenu()}
        </div>
        <div id='main'>{viewPeople}</div>`;
}


function viewPeople()
{
    return /*HTML*/`
                <table>
                    <tr>
                        <td>
                            <input type="checkbox"/>
                        </td>
                        <td>People</td>
                        <td>+</td>
                        <td>✎</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" checked/>
                        </td>
                        <td>Per</td>
                        <td onclick="visPersonerMinusPer()">☒</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" checked/>
                        </td>
                        <td>Pål</td>
                        <td>☒</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox"/>
                        </td>
                        <td>Espen</td>
                        <td>☒</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" checked/>
                        </td>
                        <td>Ole</td>
                        <td>☒</td>
                    </tr>
                    <tr>
                        <td colspan="4">
                            <button onclick="showWinners()">Draw!</button>
                            <input type="text" size="1" value="1"/>
                            <button>▲</button>
                            <button>▼</button>
                        </td>
                    </tr>
                </table>`;
}
function viewWinners()
{
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