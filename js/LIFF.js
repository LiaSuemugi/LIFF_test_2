window.onload = function () {
    recallInfo();
    try {
        const myLiffId = secrets.LIFF_ID;
        initializeLiff(myLiffId);
    }
    catch (err) {
        console.log('init failed' + err);
    }
    others('faculty');
    others('grade');
}

function initializeLiff(myLiffId) {
    liff.init({
        liffId: myLiffId
    }).then(promise => {
    }).catch((err) => {
        console.log('LIFF Initialization failed ', err);
    });
}

function sendText(text) {
    liff.sendMessages([{
        'type': 'text',
        'text': text
    }]).then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        console.log('Failed to send message ' + error);
    });
}

function send(select) {
    if(select==="send"){
        const name = document.getElementById('input_name').value;
        const faculty = document.getElementById('select_faculty').value === "その他"
            ? document.getElementById('others_faculty').value
            :document.getElementById('select_faculty').value;
        const grade = (document.getElementById('select_grade').value === "その他"
            ?document.getElementById('others_grade').value
            :document.getElementById('select_grade').value);
        const date = document.getElementById('select_date').value;
        const msg = `${name}\n${faculty}\n${grade}\n${date}`;
        sendText(msg);
    }
    else if(select==="cancel"){
        sendText("キャンセル");
    }
    return false;
}
