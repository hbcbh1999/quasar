export function rightClick (e) {
  if (!e) {
    e = window.event
  }

  if (e.which) {
    return e.which == 3 // eslint-disable-line
  }
  if (e.button) {
    return e.button == 2 // eslint-disable-line
  }

  return false
}

export function position (e) {
  let posx, posy

  if (!e) {
    e = window.event
  }
  if (e.touches && e.touches[0]) {
    e = e.touches[0]
  }

  if (e.pageX || e.pageY)	{
    posx = e.pageX
    posy = e.pageY
  }
  else if (e.clientX || e.clientY) {
    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop
  }

  return {
    top: posy,
    left: posx
  }
}

export function targetElement (e) {
  let target

  if (!e) {
    e = window.event
  }

  if (e.target) {
    target = e.target
  }
  else if (e.srcElement) {
    target = e.srcElement
  }

  // defeat Safari bug
  if (target.nodeType === 3) {
    target = target.parentNode
  }

  return target
}