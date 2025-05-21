// this draw funtion needs to have an eventListener to wait until the page is fully loaded like the EventListener used here
function draw() {
    const canvas = document.getElementById('tutorial')
    
    if(canvas.getContext) {
        const ctx = canvas.getContext('2d')
        // canvas browser support here 

        let x = 0
        let y = 0
        for( let i = 21; i > 0; i--) {
            for( let i = 11; i > 0; i--) {
                ctx.fillStyle = "rgb(50, 181, 11)"
                ctx.fillRect(x, y, 25, 25 )
                x += 25
                ctx.fillStyle = "rgb(170, 255, 0)"
                ctx.fillRect(x, y, 25, 25 )
                x += 25
            }
            y += 25
            x = 0
            for( let i = 11; i > 0; i--) {
                ctx.fillStyle = "rgb(170, 255, 0)"
                ctx.fillRect(x, y, 25, 25 )
                x += 25
                ctx.fillStyle = "rgb(50, 181, 11)"
                ctx.fillRect(x, y, 25, 25 )
                x += 25
            }
            y += 25
            x = 0
        }


    } else {
        // code for non canvas support here
    }
}


window.addEventListener('load', draw)

function ScriptTest() {
    const mainHeader = document.getElementById('mainHeader')

    mainHeader.textContent = "text"
}

ScriptTest()
