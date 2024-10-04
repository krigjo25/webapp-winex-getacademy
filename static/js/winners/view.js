function showinners()
{
    //  Initializing variables
    let html = '';
    let cls = 'first';

    //  Iteration over model
    for (let draw of modal.draw)
    {
        //  Initializing a constant date
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