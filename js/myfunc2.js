 

let prs = 0, bill = 0, nop = -1;
reset = function () {
    prs = 0, bill = 0, nop = -1;
    uncheckradio();
    clearcostum();
    document.getElementById("bill").value = NaN;
    document.getElementById("nop").value = NaN;
    document.getElementById("tb").innerHTML = "$0.0";
    document.getElementById("bpp").innerHTML = "$0.0";
};
calc = function () {

    if (bill == 0) {
        reset();
        return;
    }
    if (nop == -1) return;
    if (nop == 0 || nop == undefined) {
        document.getElementById("tb").innerHTML = "$0.0";
        document.getElementById("warning").style.opacity = 1;
        document.getElementById("nop").style.borderColor="rgba(255, 0, 0, 0.7)";
        document.getElementById("bpp").innerHTML = "$0.0";
        return;
    }
    if(prs==0)return;
    let tb = (bill * prs) / 200;
    document.getElementById("nop").style.borderColor="hsl(183, 75%, 73%)";
    document.getElementById('warning').style.opacity = 0;
    document.getElementById("tb").innerHTML = "$" + (tb / nop).toFixed(2);
    document.getElementById("bpp").innerHTML = "$" + (1 * (1 * tb + 1 * bill) / nop).toFixed(2);

};

clearcostum = function(){
    document.getElementById('costip').value = NaN;
}

setbill = function (e) {
    bill = Math.abs(document.getElementById("bill").value);
    document.getElementById("bill").value=bill;
    calc();
};

settp = function (e) {
    if(e.target.name=='tip'){
        prs=e.target.value;
        clearcostum()
    }
    else{
        prs = Math.abs(document.getElementById("costip").value);
        document.getElementById("costip").value=prs;
    }
    calc();
};
setnop = function (e) {
    nop = Math.abs(document.getElementById("nop").value);
    document.getElementById("nop").value = nop;
    calc();
};
uncheckradio = function () {
    const tips = document.getElementsByName('tip');
    for (var i = 0; i < tips.length; i++) {
        tips[i].checked = false;
    }

}
