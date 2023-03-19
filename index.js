let hero = document.querySelector(".hero"),
layer1 = document.querySelector(".landing img:nth-child(4)"),
layer2 = document.querySelector(".landing img:nth-child(5)"),
layer3 = document.querySelector(".landing img:nth-child(3)"),
content = document.querySelector(".content")

window.onscroll = () => {
    effect = window.scrollY
    hero.style.bottom = effect / 1 + "px"
    layer1.style.bottom = effect / 1 + "px"
    layer2.style.bottom = effect / 1 + "px"
    layer3.style.bottom = effect / 1 + "px"
    content.style.bottom = effect / 1 + -860 + "px"

}