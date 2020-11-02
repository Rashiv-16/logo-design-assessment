const form = document.querySelector('form')
const sliderTracks = document.querySelectorAll('.slider-track')
const sliderThumbs = document.querySelectorAll('.slider-thumb')

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

let mouse = {
    x: undefined,
    y: undefined
}

let sliderTrackHandler = (e) => {
    mouse.x = e.layerX
    // let rawData = getComputedStyle(e.target, 'width')
    // let data = Number(rawData.width.slice(0, -2))
    // let posPercent = Math.round((mouse.x/data) * 100);
    // console.log(e.target.className)

    // e.currentTarget.addEventListener('click', (eve) => {
    //     eve.currentTarget.children[0].style.left = `${posPercent}%`
    //     console.log(eve.currentTarget)
    // })
    // if(e.target.className === 'slider-thumb') {
    //     e.target.style.left = `${posPercent}%`
    // }
    // console.log(e.currentTarget.children[0])
}

sliderTracks.forEach((sliderTrack) => {
    sliderTrack.addEventListener('mousemove', sliderTrackHandler)
})

let sliderTrackClickHandler = (e) => {
    let rawData = getComputedStyle(e.currentTarget, 'width')
    let data = Number(rawData.width.slice(0, -2))
    let posPercent = Math.round((mouse.x/data) * 100);
    e.currentTarget.children[0].style.left = `${posPercent}%`
}

sliderTracks.forEach((sliderTrack) => {
    sliderTrack.addEventListener('click', sliderTrackClickHandler)
})

sliderThumbs.forEach((sliderThumb) => {
    sliderThumb.addEventListener('dragstart', (e) => {
        console.log(1)
        let rawData = getComputedStyle(e.currentTarget, 'width')
        let data = Number(rawData.width.slice(0, -2))
        let posPercent = Math.round((mouse.x/data) * 100);
        e.target.style.left = `${posPercent}%`
    })
})