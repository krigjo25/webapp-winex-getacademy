function InsertView()
{
    //  Create a form
    document.querySelector('#winex').innerHTML = /*HTML*/`
    ${navigationMenu()}
    
    <form>
        <label for='name'>Employee name :</label>
        <input id='name' type=text oninput="${modal.inputs.push.name = this.value}"placeholder="e.g Jhon Doe" autofocus>
        <button onclick="puschEmployee()">
    </form>
    `;


}