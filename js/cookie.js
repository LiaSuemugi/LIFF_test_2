function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

    options = {
        // path: '/',
        // 必要でれば他のデフォルトを追加する
        ...options
    };

    if (options.expires.toUTCString) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}
// 使用例:
// setCookie('user', 'John', { secure: true, 'max-age': 3600 });

function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    })
}


const checkBoolean = document.getElementById("cookie_check");
const input_name = document.getElementById("input_name");
const select_faculty = document.getElementById("select_faculty");
const others_faculty = document.getElementById("others_faculty");
const select_grade = document.getElementById("select_grade");
const others_grade = document.getElementById("others_grade");
const select_date = document.getElementById("select_date");

function saveInfo(){
    const options = {secure:true,'max-age':14*24*3600};
    if(checkBoolean.checked){
        setCookie("name",input_name.value,options);
        setCookie("faculty",select_faculty.value,options);
        setCookie("others_faculty",others_faculty.value,options);
        setCookie("grade",select_grade.value,options);
        setCookie("others_grade",others_grade.value,options);
        setCookie("date",select_date.value,options);
    }else{
        deleteCookie("name");
        deleteCookie("faculty");
        deleteCookie("others_faculty");
        deleteCookie("grade");
        deleteCookie("others_grade");
        deleteCookie("date");
    }
}

function recallInfo(){
    // input_name.value = getCookie("name")||"";
    // select_faculty.value = getCookie("faculty")||"";
    // others_faculty.value = getCookie("others_faculty")||"";
    // select_grade.value = getCookie("grade")||"";
    // others_grade.value = getCookie("others_grade")||"";
    // select_date.value = getCookie("date")||"";

    input_name.value = getCookie("name");
    select_faculty.value = getCookie("faculty");
    others_faculty.value = getCookie("others_faculty");
    select_grade.value = getCookie("grade");
    others_grade.value = getCookie("others_grade");
    select_date.value = getCookie("date");
}