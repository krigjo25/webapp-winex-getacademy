function navigationMenu() {

   return /*HTML*/ `
    <div class="header" id="header">
            <div id="menu" class="menu">
                <button class="btn fixed" onclick="viewPeople()">People</button>
                <button class="btn fixed" onclick="viewWinners()">Winners</button>
                <button class="btn fixed" onclick="aboutProgram()">About</button>
            </div>
            <button onclick="">☰</button> 
            <span>Wine</span><span>ix🍷</span>
        </div>`;
}

function indexView() {

    document.querySelector('#winex').innerHTML = /*HTML*/
        `<div id="header" class="header">
            ${navigationMenu()}
        </div>
        <div id='main'>
            <table>
                ${tableView()}
            </table>
        </div>`;
}

function tableView()
{
    //  Initializing a html tag
    let html = /*HTML*/`<tr>
                <th>Name</th>
                <th>
                    <input type="checkbox"/>
                </th>
                <th>✎</th>
                <th><button onclick ='modal.app.page = 'insert_data'>+</button></th>
                
            </tr>`;
    for (person of modal.data.employees)
    {    
        html += /*HTML*/ `
            <tr>
                <td>${person.name}</td>
                <td><input type="checkbox"></td>

                <td><button onclick='modifyUser(${person.id})'>✎</button></td>
                <td><button onclick='Kick(${person.id})'>☒</button></td>
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

