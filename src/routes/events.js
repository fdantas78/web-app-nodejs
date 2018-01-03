let express = require('express');
let eventRouter = express.Router();

let navList = [
            { link: '#services', text : 'Services' },
            { link: '#portfolio',  text : 'Portfolio' },
            { link: '#about',  text : 'About' },
            { link: '#team',  text : 'Team' },
            { link: '#contact', text : 'Contact' },
            { link: '/events', text : 'Events' }
            ];

let eventsList = [
        {
            name: 'Event 1',
            description: 'The first event',
            img: '1.jpg',
            link: 0,
            date: '2018.03.02',
            time: '2:00 PM',
            duration: '2 Hours',
            location: {
                streetAddr: '202 Main St.',
                city: 'Los Angeles',
                state: 'CA',
                zip: '87885',
                lon: 0,
                lat: 0
            },
            capacity: 100
        },
        {
            name: 'Event 2',
            description: 'The second event',
            img: '2.jpg',
            link: 1,
            date: '2018.04.02',
            time: '2:00 PM',
            duration: '2 Hours',
            location: {
                streetAddr: '202 Main St.',
                city: 'Los Angeles',
                state: 'CA',
                zip: '87885',
                lon: 0,
                lat: 0
            },
            capacity: 200
        },
        {
            name: 'Event 3',
            description: 'The third event',
            img: '3.jpg',
            link: 2,
            date: '2018.05.02',
            time: '5:00 PM',
            duration: '2 Hours',
            location: {
                streetAddr: '202 Main St.',
                city: 'Los Angeles',
                state: 'CA',
                zip: '87885',
                lon: 0,
                lat: 0
            },
            capacity: 150
        }
    ];

eventRouter.route('/')
    .get(function(req, res) {
        res.render('events', {
            nav : navList,
            events : eventsList
        });
    });

eventRouter.route('/:id')
    .get(function(req, res) {
        let id = req.params.id;
        res.render('event', {
            nav : navList,
            events : eventsList[id]
        });
    });
    
module.exports = eventRouter;