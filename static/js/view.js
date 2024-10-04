
indexView();

function navigationMenu() {

   return /*HTML*/ `
    <div class="header" id="header">
            <div id="menu" class="menu">
                <button class="btn fixed" onclick="viewPeople()">People</button>
                <button class="btn fixed" onclick="viewWinners()">Winners</button>
                <button class="btn fixed" onclick="">About</button>
                <button class="btn fixed" onclick="">Quit</button>
            </div>
            <button onclick="">☰</button> 
            <span>Wine</span><span>ix🍷</span>
        </div>`;
}


function indexView() {

    document.querySelector('#winex').innerHTML = /*HTML*/`
        <div id="header" class="header">
            ${navigationMenu()}
        </div>
        <div id='main'>
            <table>
                ${viewPeople()}
            </table>
        </div>`;
}


function viewPeople()
{
    //  Initializing a html tag
    let html = /*HTML*/`<tr>
                <th>Name</th>
                <th>
                    <input type="checkbox"/>
                </th>
                <th>✎</th>
                <th><button>+</button></th>
                
            </tr>`;
    for (person of modal.people.array       )
    {    
        html += /*HTML*/ `
            <tr>
                <td>${person.name}</td>
                <td><input type="checkbox"></td>

                <td><button>✎</button></td>
                <td><button>☒</button></td>
            </tr>
    `;
    }

    html += `<tr>
                <td colspan="4">
                    <button onclick="showWinners()">Draw!</button>
                    <input type="text" size="1" value="1"/>
                    <button>▲</button>
                    <button>▼</button>
                </td>
            </tr>`;
    return html
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
    return html
    //  Shows the winners
}