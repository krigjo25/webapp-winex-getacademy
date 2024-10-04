let modal = {
        app: { //  current page
            page:'index'
        },

        inputs : { //   Inputs from fields
            push: { // person to push
                id:null,
                name:""
            },
            modify: {
                id: null,
                name: null,
            },
            confirm: {
                id:null,
                confirmation:false
            }

        },

        data: { //  Collected data 
            max:1,
            employees:[
                {id:100, name:'Jhon Doe', checked:false},
                {id:101, name:'Jane Doe', checked:false}],
            },
            draw: [
                {
                    time: null,
                    winners: [],
                    participants: [],
                },
            ]
};