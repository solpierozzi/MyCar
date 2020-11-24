const express = require('express');
const config = require('./config');
const app = config(express());

const mongodb_conn_module = require('./mongodbConnModule');
var db = mongodb_conn_module.connect();

//Starting Server
//app.listen(process.env.PORT || 8081)
app.listen(app.get('port'), () => {
	console.log('Server on Port ', app.get('port'))
});

/*
var Post = require("../models/post");
var Client = require("../models/client");
*/

/*
app.get('/', (req, res) => {
	Client.find()
	.exec()
	.then(client => {
		console.log(client);
		res.status(200).json(client);
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({
			error: err
		});
	});
})

app.post('/add', (req, res) => {
	console.log(req.body);
	client = new Client({
		name: req.body.name,
		lastname: req.body.lastname,
		dni: req.body.dni,
		email: req.body.email,
		phone: req.body.phone,
	});
	client.save()
	.then(result => {
		console.log(result);
		res.redirect('/');
	})	
	.catch(err => {
		console.log(err);
		res.status(500).json({
			error: err
		});
	});
})

app.get('/posts', (req, res) => {
  Post.find({}, 'title description', function (error, posts) {
	  if (error) { console.error(error); }
	  res.send({
			posts: posts
		})
	}).sort({_id:-1})
})

app.post('/add_post', (req, res) => {
	var db = req.db;
	var title = req.body.title;
	var description = req.body.description;
	var new_post = new Post({
		title: title,
		description: description
	})

	new_post.save(function (error) {
		if (error) {
			console.log(error)
		}
		res.send({
			success: true
		})
	})
})

app.put('/posts/:id', (req, res) => {
	var db = req.db;
	Post.findById(req.params.id, 'title description', function (error, post) {
	  if (error) { console.error(error); }

	  post.title = req.body.title
	  post.description = req.body.description
	  post.save(function (error) {
			if (error) {
				console.log(error)
			}
			res.send({
				success: true
			})
		})
	})
})

app.delete('/posts/:id', (req, res) => {
	var db = req.db;
	Post.remove({
		_id: req.params.id
	}, function(err, post){
		if (err)
			res.send(err)
		res.send({
			success: true
		})
	})
})

app.get('/post/:id', (req, res) => {
	var db = req.db;
	Post.findById(req.params.id, 'title description', function (error, post) {
	  if (error) { console.error(error); }
	  res.send(post)
	})
})

*/