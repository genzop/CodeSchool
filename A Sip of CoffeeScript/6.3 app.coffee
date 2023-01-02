class Coffee
  constructor: (@name, @level=0) ->
    isRussian: -> @name is 'Russian'
