function myData() {
    const XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const obj = JSON.parse(this.responseText);
            //services section
            const servicesSec = obj["services-section"];
            for (let i = 0; i < servicesSec.length; i++) {
                let content = `
                <div class='bord'>
                    <h2>${servicesSec[i].h2}</h2>
                    <p>${servicesSec[i].p}</p>
                    <button>${servicesSec[i].button}</button>
                </div>
                `
               $(".services.parent .content").append(content)
            }
        }
    }
    XHR.open("GET","javascript/data/data.json");
    XHR.send();
}
export default myData();