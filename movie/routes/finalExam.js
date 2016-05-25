var express = require('express');
var FinalExam = require('../models/finalExamModel');

var router = express.Router();

router.route('/').
	post(function(req, res){
    	var finalExam = new FinalExam();
    	finalExam.val = req.body.val;

		finalExam.save(function(err,savedFinalExam){
			if (err)
				res.send(err);
			res.json(savedFinalExam);
		})
	})
    .get(function(req, res){
        FinalExam.find(function(err, finalExams) {
            if (err)
                res.send(err);
            res.json(finalExams);
        });
    });

router.route('/id/:id')
.get(function(req, res) {
	FinalExam.find({_id :req.params.id}, function(err, finalExam){
		if (err)
			res.send(err);
		res.json(finalExam);
	});
})
.put(function(req, res){
	FinalExam.find({_id:req.params.id}, function(err, finalExam) {
		if (err)
			res.send(err);
		var finalExamFind = finalExam[0];
		finalExamFind.val = req.body.val;
		//save the user
		finalExamFind.save(function(err) {
			if (err)
				res.send(err);
			res.json(finalExam);
		});
	});
})
.delete(function(req, res){
	FinalExam.remove({_id:req.params.id}, function(err, finalExam){
		if (err)
			res.send(err);
		res.json({message:'Successfully deleted'});
	});
});

module.exports = router;