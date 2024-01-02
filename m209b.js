// global constants
const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUM_WHEELS = 6;
const NUM_LUGS = 27;
const WHEEL_SIZES = [26,25,23,21,19,17]; // pins per wheel


// convert numbers to letters, A=0
function num2letter(nums) { 
    let letters = [''];
    for (let i = 0; i < nums.length; i++) {
        letters[i] = (ALPHA[nums[i]]);
    }
    return letters;
}

// convert letters to numbers, A=0
function letter2num(letters) {
    let nums = [];
    for (let i = 0; i < letters.length; i++) {
        nums[i] = ALPHA.indexOf(letters[i]);
    }
    return nums;
}


// run the actuall M209B encipherment (does not interact with document)
function M209B(plaintext, isEncipher, wheel_pos, lugs, pins){
    const WHEEL_OFFSETS = [15, 14, 13, 12, 11, 10]; // offset between pin in window and effective pin

    let ciphertext = Array(plaintext.length).fill(0); 
    for (let i=0; i<plaintext.length; i++){  
        // count how many bars bump over
        let offset = 0;
        for (let l=0;l<NUM_LUGS;l++){
            let w = lugs[l][0] -1; // wheel lug aligns with, 0 is ineffective (now -1 b/c subtract to make wheels 0 indexed)
            if (w != -1){
                if (pins[w][(wheel_pos[w] + WHEEL_OFFSETS[w]) % WHEEL_SIZES[w]]) { //check if pin is hit
                offset++;
                continue; // continue to prevent double counting bars hit by two lugs
            }
            }
            
            w = lugs[l][1]-1; // check second lug
            if (w != -1){
                if (pins[w][(wheel_pos[w] + WHEEL_OFFSETS[w]) % WHEEL_SIZES[w]]) { //check if pin is hit
                offset++;
            }
            }
        }
        ciphertext[i] = (27 - plaintext[i] + offset - 1) % 26; // subtract 1 for 0 indexed
            
        // increment the wheels
        for (let w=0; w<NUM_WHEELS; w++){
            wheel_pos[w] = (wheel_pos[w]+1) % WHEEL_SIZES[w];
        }
    }

    ciphertext = num2letter(ciphertext);
    ciphertext = ciphertext.join('');
    if (isEncipher) ciphertext = ciphertext.replace(/(.{5})/g, "$1 "); // break into letter groups of 5
    else ciphertext = ciphertext.replaceAll('Z',' '); // convert Z to spaces

    let returnstuff = {
        text: ciphertext,
        positions: num2letter(wheel_pos) // to update current wheel pos windows
    }
    return returnstuff;
}





// extract document values and call the M209B() function, update doc with outputs
function callM209B(){
    let intext = document.getElementById("TEXTIN").value;
    intext = intext.replaceAll(' ',''); // strip spaces
    intext = letter2num(intext);

    let isEncipher = document.getElementById("MODE").checked;

    let wheel_pos = Array(NUM_WHEELS).fill(0); //wheel postions (in window)
    for (let w=0;  w<NUM_WHEELS; w++){
        wheel_pos[w] = document.getElementById('START'+(w+1)).value;
    }
    wheel_pos = letter2num(wheel_pos);

    let pins = Array(6).fill(Array(26).fill(false));
    for (let p=0; p<26;p++){
        for (let w=0; w<NUM_WHEELS; w++){
            if (p >= WHEEL_SIZES[w]) break;
            
            let id = (w+1)+''+ALPHA[p];
            pins[w][p] = document.getElementById(id).checked;
        }
    }

    let lugs = Array(27).fill(Array(2).fill(0));
    for (let l=0; l<NUM_LUGS;l++){
        lugs[l][0] = document.getElementById(''+(l+1)+'-0').value;
        lugs[l][1] = document.getElementById(''+(l+1)+'-1').value;
    }

    let out = M209B(intext, isEncipher, wheel_pos, lugs, pins);
    let textout = out.text;
    let pos = out.positions;

    document.getElementById("TEXTOUT").textContent = textout;

    for (let w=0; w<NUM_WHEELS; w++){
        document.getElementById('START'+(w+1)+'NOW').textContent = pos[w];
    }
}


// save the current lug value
function saveLugs(event) {
    let call = document.getElementById(event.target.id);
    let old = call.value;
    call.name = old;
}
// validate lug value (revert to saved if needed), then callM209B()
function validateLugs(event) {
    let current = document.getElementById(event.target.id);
    if (!current.validity.valid) {
        let old = current.name;
        current.value = old;
    } else {
        let id = event.target.id
        let other_lug;
        if (id.indexOf('-0') == -1) other_lug = document.getElementById(id.replace('-1','-0'));
        else other_lug = document.getElementById(id.replace('-0','-1'));

        if (current.value == other_lug.value) other_lug.value = 0; // can't have 2 lugs in the same place

        saveLugs(event); // save new valid starts
    }
    
    callM209B();
}


// save the current start value
function saveStarts(event) {
    let call = document.getElementById(event.target.id);
    call.value = call.value.toUpperCase(); // uppercase all starts
    let old = call.value;
    call.name = old;
}
// validate start value (revert to saved if needed), then callM209B()
function validateStarts(event) {
    let current = document.getElementById(event.target.id);
    if (current.validity.valid == false) {
        let old = current.name;
        current.value = old;
    } else {
        saveStarts(event); // save new valid starts
    }

    callM209B();
}



// eliminate everything but letters and spaces in text box, callM209B
function validateText(event) {
    let text = [];
    element = document.getElementById(event.target.id); 
    let intext = element.value.toUpperCase(); 

    for (let p = 0; p < intext.length; p++) {
        if (ALPHA.indexOf(intext[p]) != -1 || intext[p] == ' ') {
            text.push(intext[p]);
        }
    }
    element.value = text.join('');

    callM209B();
}


// reset all fields to 0/false/empty
function reset(){
    document.getElementById("TEXTIN").textContent = "";
    document.getElementById("MODE").checked = false;

    for (let p=0; p<26;p++){
        for (let w=0; w<6; w++){
            if (p >= WHEEL_SIZES[w]) break;
            
            let id = (w+1)+''+ALPHA[p];
            document.getElementById(id).checked = false;
        }
    }

    for (let l=0; l<NUM_LUGS;l++){
        document.getElementById(''+(l+1)+'-0').value = 0;
        document.getElementById(''+(l+1)+'-1').value = 0;
    }

    for (let w=0;w<NUM_WHEELS;w++){
        document.getElementById('START'+(w+1)).value = "A";
        document.getElementById('START'+(w+1)+'NOW').textContent = "A";
    }
}


// add event listeners
document.getElementById("RESET").addEventListener("click",reset)
document.getElementById("TEXTIN").addEventListener("change", validateText,true);
document.getElementById("MODE").addEventListener("change", callM209B);

// put listeners on all pins
for (let p=0; p<26;p++){
    for (let w=0; w<6; w++){
        if (p >= WHEEL_SIZES[w]) break;
        
        let id = (w+1)+''+ALPHA[p];
        document.getElementById(id).addEventListener("change",callM209B);
    }
}

// put listeners on all lugs
for (let l=0; l<NUM_LUGS;l++){
    document.getElementById(''+(l+1)+'-0').addEventListener("focus", saveLugs, true);
    document.getElementById(''+(l+1)+'-1').addEventListener("focus", saveLugs, true);

    document.getElementById(''+(l+1)+'-0').addEventListener("input",validateLugs,true);
    document.getElementById(''+(l+1)+'-1').addEventListener("input",validateLugs,true);
}

// put listeners on wheel starting postions
for (let w=0;w<NUM_WHEELS;w++){
    document.getElementById('START'+(w+1)).addEventListener("focus",saveStarts,true);
    document.getElementById('START'+(w+1)).addEventListener("input",validateStarts,true);
}