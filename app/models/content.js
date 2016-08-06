/*var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var contentSchema = mongoose.Schema({
    content             : {
	title     :String,
    content   : String,
    content   : String,
    created   : Date
    }
});
contentSchema.methods.getAll = function(request, response){

	
};
*/

/*
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;


ArticleProvider = function(host, port) {
  this.db= new Db('noondb', new Server(host, port, {auto_reconnect: true}, {}));
  this.db.open(function(){});
};


ArticleProvider.getCollection= function(callback) {
  this.db.collection('user', function(error, article_collection) {
    if( error ) callback(error);
    else callback(null, article_collection);
  });
};

ArticleProvider.findAll = function(callback) {
    this.getCollection(function(error, article_collection) {
      if( error ) callback(error)
      else {
        article_collection.find().toArray(function(error, results) {
          if( error ) callback(error)
          else callback(null, results);console.dir(doc);
        });
      }
    });
};


ArticleProvider.findById = function(id, callback) {
    this.getCollection(function(error, article_collection) {
      if( error ) callback(error)
      else {
        article_collection.findOne({_id: article_collection.db.bson_serializer.ObjectID.createFromHexString(id)}, function(error, result) {
          if( error ) callback(error)
          else callback(null, result)
        });
      }
    });
};

ArticleProvider.save = function(articles, callback) {
    this.getCollection(function(error, article_collection) {
      if( error ) callback(error)
      else {
        if( typeof(articles.length)=="undefined")
          articles = [articles];

        for( var i =0;i< articles.length;i++ ) {
          article = articles[i];
          article.created_at = new Date();
          if( article.comments === undefined ) article.comments = [];
          for(var j =0;j< article.comments.length; j++) {
            article.comments[j].created_at = new Date();
          }
        }

        article_collection.insert(articles, function() {
          callback(null, articles);
        });
      }
    });
};
*/


var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/noondb';
var ArticleProvider=function(){};

ArticleProvider.getResult=function (callback) {
   MongoClient.connect(url, function (err, db) {
     
	
	    var cursor =db.collection('articles').find().toArray(function(error, results) {
          if( error ) callback(error)
          else db.close();callback(null, results);console.dir(results);
        });
	
	   
	   
	   
   });
	
}

ArticleProvider.save = function(callback,articles) {
    /*this.getCollection(function(error, article_collection) {
      if( error ) callback(error)
      else {
        if( typeof(articles.length)=="undefined")
          articles = [articles];

        for( var i =0;i< articles.length;i++ ) {
          article = articles[i];
          article.created_at = new Date();
          if( article.comments === undefined ) article.comments = [];
          for(var j =0;j< article.comments.length; j++) {
            article.comments[j].created_at = new Date();
          }
        }
		
        article_collection.insert(articles, function() {
          callback(null, articles);
        });
      }
    });*/
	MongoClient.connect(url, function (err, db) {
		/*var cursor =db.collection('user');
	
		//article.created_at = new Date();
		//article.username = 'new user';
		//article.email = 'newuser@test.com';
		cursor.insert(article, function() {
		  //callback(null, articles);
		  console.log('Done Insert');
		  db.close();
		  callback();
		});
		*/
		
		/*var document={
			  username : "new user",
			  email : "newuser@test.com"
	    };
		db.collection('user').save(document, function(err, records){
		  //console.log("Record added as "+records['']._id);
		  console.log("Record added as ");
		});*/
					  
		
		
	});
	
};

ArticleProvider.printedd = function(callback) {
	console.log('inside.......');
};

module.exports.ArticleProvider = ArticleProvider;

//module.exports = mongoose.model('Content', contentSchema);
