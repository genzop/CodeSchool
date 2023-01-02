angular.module('NoteWrangler', ['ngRoute'])
  .config(function (TweetableProvider){
    TweetableProvider.setLength(40);
})
;