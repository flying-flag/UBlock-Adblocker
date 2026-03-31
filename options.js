chrome.storage.local.get(["blockedsites"]).then(result => {
    if (result.blockedsites === undefined) {
        chrome.storage.local.set({blockedsites: ["not configured"]})
    }
})
chrome.storage.local.get(["enabled"]).then(result => {
    if (result.enabled === undefined) {
        chrome.storage.local.set({enabled: true})
    }
})
chrome.storage.local.get(["blockedsites"]).then((result) => {
    const blocked = result.blockedsites;
    let liststring = "[";
    for (let i=0;i<blocked.length-1;i++) {
        liststring = liststring.concat('\"', blocked[i], '\", ');
    }
    liststring = liststring.concat('\"', blocked[blocked.length-1], '\"]');
    liststring = liststring.toString();
    document.getElementById("blockedlist").setAttribute("value", liststring);
});
chrome.storage.local.get(["enabled"]).then((result) => {
    const enabled = result.enabled;
    document.getElementById("enabled").setAttribute("checked", enabled);
});

const save = function() {
    if (checkpassKeysPressed()) {
        try {
            chrome.storage.local.set({blockedsites: JSON.parse(document.getElementById("blockedlist").value)});
            chrome.storage.local.set({enabled: document.getElementById("enabled").checked});
            document.getElementById("status").textContent = 'Saved.';
            setTimeout(() => {
                document.getElementById("status").textContent = '';
            }, 2000);
        } catch (error) {
            document.getElementById("status").textContent = error;
            setTimeout(() => {
                document.getElementById("status").textContent = '';
            }, 10000);
        }
    } else {
        document.getElementById("status").textContent = 'Saved';
            setTimeout(() => {
                document.getElementById("status").textContent = '';
            }, 2000);
    }
}

document.getElementById("save").addEventListener("click", save);

const showKeys = ["z", "i"];
let showKeysPressed = [];
for (var i=0;i<showKeys.length;i++) {
    showKeysPressed[i] = false;
}
let showOptions = false;

const passKeys = ["q", "m"];
let passKeysPressed = [];
for (var i=0;i<passKeys.length;i++) {
    passKeysPressed[i] = false;
}

const checkpassKeysPressed = function() {
    let allPressed = true;
    for (var i=0;i<passKeysPressed.length;i++) {
        if (passKeysPressed[i] === false) {
            allPressed = false;
        }
    }
    return allPressed;
}

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    const keyCode = event.code; 
    if (passKeys.includes(event.key) && passKeysPressed[passKeys.indexOf(event.key)] === false) {
        passKeysPressed[passKeys.indexOf(event.key)] = true;
    }
    if (showKeys.includes(event.key) && showKeysPressed[showKeys.indexOf(event.key)] === false) {
        showKeysPressed[showKeys.indexOf(event.key)] = true;
        let allShowKeysPressed = true;
        for (var i=0;i<showKeysPressed.length;i++) {
            if (showKeysPressed[i] === false) {
                allShowKeysPressed = false;
            }
        }
        if (allShowKeysPressed === true) {
            showOptions = 1 - showOptions;
            showOptions = (showOptions === 1);
            if (showOptions) {
                document.getElementsByTagName('body')[0].style = "";
            } else {
                document.getElementsByTagName('body')[0].style = "display: none;";
            }
        }
    }
});
document.addEventListener('keyup', (event) => {
    const keyName = event.key;
    const keyCode = event.code; 
    if (passKeys.includes(event.key) && passKeysPressed[passKeys.indexOf(event.key)] === true) {
        passKeysPressed[passKeys.indexOf(event.key)] = false;
    }
    if (showKeys.includes(event.key) && showKeysPressed[showKeys.indexOf(event.key)] === true) {
        showKeysPressed[showKeys.indexOf(event.key)] = false;
    }
});