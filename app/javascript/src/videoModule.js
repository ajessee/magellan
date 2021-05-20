export function videoModule() {

  var each = Array.prototype.forEach
  var autoplayIds = []
  
  document.addEventListener('turbolinks:before-cache', function () {
    var autoplayElements = document.querySelectorAll('[autoplay]')
    each.call(autoplayElements, function (element) {
      if (!element.id) throw 'autoplay elements need an ID attribute'
      autoplayIds.push(element.id)
      element.removeAttribute('autoplay')
    })
  })

  document.addEventListener('turbolinks:before-render', function (event) {
    autoplayIds = autoplayIds.reduce(function (ids, id) {
      var autoplay = event.data.newBody.querySelector('#' + id)
      if (autoplay) autoplay.setAttribute('autoplay', true)
      else ids.push(id)
      return ids
    }, [])
  })

}