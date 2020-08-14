const express = require('express');
const router = express.Router();

let Exercise = require('../models/exercise.model');

router.get('/', (req, res) => {
	Exercise.find()
		.then(exercise => res.json(exercise))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
	const username = req.body.username;
	const description = req.body.description;
	const duration = Number(req.body.duration);
	const date = Date.parse(req.body.date);

	const newExcercise = new Exercise({
		username,
		description,
		duration,
		date
	});

	newExcercise.save()
		.then(() => res.json('Exercise added.'))
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
