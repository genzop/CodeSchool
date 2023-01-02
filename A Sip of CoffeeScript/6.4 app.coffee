class Coffee extends Drink
  constructor: (@name, @level=0) ->
  serve: ->
    if (not @sleeve)
      false
    else
      super
      
