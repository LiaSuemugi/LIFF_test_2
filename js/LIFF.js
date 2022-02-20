window.onload = function () {
    window.alert("loaded")
    try{
        recallInfo();
    }catch(err){
        window.alert('cookie recall failed' + err);
    }
    try {
        const myLiffId = "1656883857-9gzWWAmR";
        initializeLiff(myLiffId);
    }
    catch (err) {
        window.alert('init failed' + err);
    }
}

function initializeLiff(myLiffId) {
    liff.init({
        liffId: myLiffId
    }).then(promise => {
    }).catch((err) => {
        window.alert('LIFF Initialization failed ', err);
    });
}

function sendText(text) {
    liff.sendMessages([{
        'type': 'text',
        'text': text
    }]).then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
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

const params = (new URL(document.location)).searchParams;
const key = params.get('key');