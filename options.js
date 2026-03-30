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
    if (checkPasskeysPressed()) {
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

const passKeys = ["q", "m"];
let passkeysPressed = [];
for (var i=0;i<passKeys.length;i++) {
    passkeysPressed[i] = false;
}

const checkPasskeysPressed = function() {
    let allPressed = true;
    for (var i=0;i<passkeysPressed.length;i++) {
        if (passkeysPressed[i] === false) {
            allPressed = false;
        }
    }
    return allPressed;
}

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    const keyCode = event.code; 
    if (passKeys.includes(event.key)  && passkeysPressed[passKeys.indexOf(event.key)] === false) {
        passkeysPressed[passKeys.indexOf(event.key)] = true;
    }
});
document.addEventListener('keyup', (event) => {
    const keyName = event.key;
    const keyCode = event.code; 
    if (passKeys.includes(event.key) && passkeysPressed[passKeys.indexOf(event.key)] === true) {
        passkeysPressed[passKeys.indexOf(event.key)] = false;
    }
});