class DrinkLink
  watchClick: ->
    $('a').click (event) ->
      $(@).css('color': '#F00')