'use strict';

var questions = require('..');
var assemble = require('assemble-core');
var store = require('base-store');
var argv = require('base-argv');

var app = assemble()
  .use(store())
  .use(argv());


var argv = app.processArgv(process.argv.slice(2));
app.use(questions(argv.options));

app.task('ask', function (cb) {
  app.ask(function (err, answers) {
    if (err) return cb(err);
    console.log(answers);
    cb();
  });
});

app.task('a', function (cb) {
  console.log('task > a!');
  cb();
});

app.task('b', function (cb) {
  console.log('task > b!');
  cb();
});

app.task('c', function (cb) {
  console.log('task > c!');
  cb();
});

app.task('choices', function (cb) {
  app.choices('run', ['a', 'b', 'c'], function (err, answers) {
    if (err) return cb(err);
    if (!answers.run.length) return cb();
    app.build(answers.run, cb);
  });
});

app.build('choices', function(err) {
  if (err) return console.log(err);
  console.log('done!');
});
