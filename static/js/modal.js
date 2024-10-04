let modal = {
        app: {
            page:'index'
        },
        people: {
            max:1,
            everyone:false,
            array:[
                {id:100, name:'Jhon Doe', checked:false},
                {id:101, name:'Jane Doe', checked:false},
                {id:102, name:'Jake Doe', checked:false},
                {id:103, name:'Lilly Doe', checked:false}
                ],
        },
        draw:[
            {
                time: null,
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