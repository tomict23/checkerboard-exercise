function generateCheckerboard(){

    let checkerboard = document.createElement(`div`);
    let head = document.getElementsByTagName(`head`);
    let style = document.createElement(`style`);
    head[0].append(style);
    style.innerHTML = `
    .on {
        background-color: #460070;
        width: 11.1%;
        height: 115px;
        float: left;
        bottomPadding: 11.1%;
        }
    .off {
        background-color: #003500;
        width: 11.1%;
        height: 115px;
        float: left;
        bottomPadding: 11.1%;
        }`

    for (let i = 0; i < 45; i++) {
        var square = document.createElement("div");
        if(i % 2 === 0){
            square.className = `on`;
        } else {
            square.className = `off`;
        }
        checkerboard.appendChild(square);
    }
    document.body.appendChild(checkerboard);

        console.log(head)
};
//-----------------------------------------
generateCheckerboard();