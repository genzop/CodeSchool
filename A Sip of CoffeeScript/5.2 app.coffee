coffeeList = 
  init: ->
    $('.drink a').click (e) ->
      e.preventDefault()
      alert $(@).text()  
  
coffeeList.init()

