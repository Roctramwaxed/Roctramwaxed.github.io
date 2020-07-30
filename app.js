let q = document.getElementById('q')
let w = document.getElementById('w')
let e = document.getElementById('e')
let quas = 'media/Quas_icon.png'
let wex = 'media/Wex_icon.png'
let exort = 'media/Exort_icon.png'
let r = document.getElementById('invoked')
let spell = document.getElementById('spell')
let spellName = document.getElementById('spellName')
let first = document.getElementById('first')
let second = document.getElementById('second')
let third = document.getElementById('third')

let elementsImg = []
let elements = {}

const elePush = (ele) => {
    if (elementsImg.length === 3) {
        elements[elementsImg[0]] -= 1
        elementsImg.shift()
    }
    if (!elements[ele]) {
        elements[ele] = 0
    }
    elementsImg.push(ele)
    elements[ele] += 1
    
    first.src = elementsImg[0]

    if (elementsImg[1]) {
        second.src = elementsImg[1]
    }

    if (elementsImg[2]) {
        third.src = elementsImg[2]
    }
}

q.addEventListener("click", () => {
    elePush(quas)
})

w.addEventListener("click", () => {
    elePush(wex)
})

e.addEventListener("click", () => {
    elePush(exort)
})

const PlaySound = () => {
    let path = 'media/Invoker_Invoke'
    let snd = new Audio(path + '.mp3')
    snd.play()
}

r.addEventListener("click", () => {
    PlaySound()
    if (elements[quas] === 3) {
        spell.src = 'media/Cold_Snap_icon.png'
        spellName.innerText = 'Cold Snap'
    } else if (elements[wex] === 3) {
        spell.src = 'media/EMP_icon.png'
        spellName.innerText = 'EMP'
    } else if (elements[exort] === 3) {
        spell.src = 'media/Sun_Strike_icon.png'
        spellName.innerText = 'Sun Strike'
    } else if (elements[quas] === 2) {
        if (elements[wex] === 1) {
            spell.src = 'media/Ghost_Walk_icon.png'
            spellName.innerText = 'Ghost Walk'
        } else {
            spell.src = 'media/Ice_Wall_icon.png'
            spellName.innerText = 'Ice Wall'
        }
    } else if (elements[wex] === 2) {
        if (elements[quas] === 1) {
            spell.src = 'media/Tornado_icon.png'
            spellName.innerText = 'Tornado'
        } else {
            spell.src = 'media/Alacrity_icon.png'
            spellName.innerText = 'Alacrity'
        }
    } else if (elements[exort] === 2) {
        if (elements[quas] === 1) {
            spell.src = 'media/Forge_Spirit_icon.png'
            spellName.innerText = 'Forge Spirit'
        } else {
            spell.src = 'media/Chaos_Meteor_icon.png'
            spellName.innerText = 'Chaos Meteor'
        }
    } else {
        spell.src = 'media/Deafening_Blast_icon.png'
        spellName.innerText = 'Deafening Blast'
    }
})