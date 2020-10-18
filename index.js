function init() {
    //頁首
    var menu_option = document.getElementsByClassName("menu_option");
    //設計menu事件
    for (var i = 0; i < menu_option.length; i++) {
        // 滑鼠進入超連結時的事件
        menu_option[i].onmouseenter = function() {
            changeParentBgColor(this, "#000");
        }

        // 滑鼠離開超連結時的事件
        menu_option[i].onmouseleave = function() {
            changeParentBgColor(this, "#07cbc9");
        }
    }
    var sentBtn = document.getElementById("sent");
    sentBtn.onclick = function() {
        showInfo()
    }

    function showInfo() {
        var name = document.getElementById("name");
        var phone = document.getElementById("phone");
        var email = document.getElementById("e-mail");
        var comment = document.getElementById("comment");
        alert("此網站為靜態網站，顯示JS功能，並不會儲存您的數據，請放心測試!");
        alert("您的姓名: " + name.value + " " + "\n" + "您的電話: " + phone.value + "\n" + "您的電子信箱: " + email.value + "\n" + "您的評論: " + "\n" + comment.value);
    }


    //內文

    //banner區
    //文本框設定
    var user_info = document.getElementsByClassName("user_info");
    for (var i = 0; i < user_info.length; i++) {
        // 設定文本框預設文字
        default_message(i, user_info[i]);

        //滑鼠移入文本框的事件
        user_info[i].onmouseenter = function() {
            changeBorderColor(this, "#07cbc9");
        }

        //滑鼠移出文本框的事件
        user_info[i].onmouseleave = function() {
            changeBorderColor(this, "gray");
        }
    }
    //Sent Message
    var enter_user_info = document.getElementsByClassName("enter_user_info");
    enter_user_info[0].onmouseenter = function() {
        cancelBorder(this);
    }
    enter_user_info[0].onmouseleave = function() {
        recoverBorder(this);
    }

    //explore按鈕
    var explore = document.getElementsByClassName("explore");
    for (var i = 0; i < explore.length; i++) {
        explore[i].onmouseenter = function() {
            changeTextColor(this, "#000");
            changeBgcolor(this, "transparent");
        }

        explore[i].onmouseleave = function() {
            changeTextColor(this, "#fff");
            changeBgcolor(this, "#000");
        }
    }
}

function changeBgcolor(obj, colorCode) {
    obj.style.backgroundColor = colorCode;
}

function changeTextColor(obj, colorCode) {
    obj.style.color = colorCode;
}


function cancelBorder(obj) {
    obj.style.borderStyle = "none";
    obj.style.color = "#fff";
    obj.style.backgroundColor = "#07cbc9";
}

function recoverBorder(obj) {
    obj.style.backgroundColor = "transparent";
    obj.style.color = "gray";
    obj.style.border = "2px solid gray";
}

//設定邊框
function changeBorderColor(obj, color) {
    obj.style.borderColor = color;
}

//填入預設文字
function default_message(index, obj) {
    var message;
    switch (index) {
        case 0:
            message = "your Name";
            break;
        case 1:
            message = "your Phone";
            break;
        case 2:
            message = "your Email";
            break;
        case 3:
            message = "Write Your Comment Here";
    }
    obj.placeholder = message;
}


//改變li背景色的函數
function changeParentBgColor(obj, colorCode) {
    (obj.parentNode).style.backgroundColor = colorCode;
}