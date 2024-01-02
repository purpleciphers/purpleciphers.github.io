// Step 2: Define the event listener function
const alpha = "BCDFGHJKLMNPQRSTVWXZAEIOUY";

function num2letter(nums) {
    let letters = [""];
    for (let i = 0; i < nums.length; i++) {
        letters[i] = (alpha[nums[i] - 1]);
    }
    return letters;
}

function letter2num(letters) {
    let nums = [];
    for (let i = 0; i < letters.length; i++) {
        nums[i] = alpha.indexOf(letters[i]) + 1;
    }
    return nums;
}

function validateText(intext) {
    //eliminate everything but letters
    let text = [];
    intext = intext.toUpperCase();
    for (let p = 0; p < intext.length; p++) {
        if (alpha.indexOf(intext[p]) != -1) {
            text.push(intext[p]);
        }
    }
    return text;
}


function PURPLE(plain, selectmotion, plugs, starts, mode) {
    // read in files
    const E1 = [
        [4, 7, 13, 6, 17, 1, 8, 11, 10, 5, 16, 18, 9, 3, 15, 12, 20, 14, 2, 19],
        [6, 17, 9, 1, 2, 18, 20, 10, 19, 15, 12, 13, 14, 5, 8, 3, 4, 11, 16, 7],
        [2, 19, 12, 17, 20, 4, 13, 15, 18, 11, 6, 8, 3, 14, 5, 9, 1, 10, 7, 16],
        [14, 9, 1, 4, 13, 5, 17, 7, 12, 16, 15, 10, 18, 2, 19, 6, 11, 20, 8, 3],
        [19, 16, 10, 8, 6, 2, 15, 3, 20, 9, 18, 14, 5, 13, 12, 11, 17, 7, 1, 4],
        [20, 1, 8, 18, 19, 7, 5, 12, 3, 13, 2, 11, 10, 4, 14, 15, 16, 9, 6, 17],
        [8, 10, 19, 12, 11, 3, 2, 17, 5, 6, 13, 20, 7, 16, 18, 1, 9, 4, 14, 15],
        [1, 20, 14, 15, 7, 12, 3, 13, 16, 10, 17, 5, 11, 6, 9, 4, 18, 8, 19, 2],
        [9, 14, 20, 17, 12, 15, 7, 4, 2, 18, 3, 16, 19, 8, 11, 10, 1, 6, 13, 5],
        [17, 13, 5, 7, 10, 16, 11, 2, 4, 8, 20, 1, 15, 9, 19, 14, 3, 12, 18, 6],
        [2, 5, 13, 8, 16, 17, 18, 9, 7, 11, 4, 19, 12, 15, 10, 3, 6, 14, 20, 1],
        [18, 4, 16, 2, 1, 7, 12, 11, 17, 14, 19, 9, 5, 10, 3, 8, 13, 15, 6, 20],
        [16, 6, 11, 20, 17, 19, 10, 8, 9, 3, 7, 15, 14, 12, 1, 5, 2, 13, 4, 18],
        [13, 11, 4, 9, 12, 8, 3, 5, 14, 17, 1, 2, 20, 18, 6, 7, 19, 16, 15, 10],
        [10, 3, 18, 5, 9, 15, 4, 6, 12, 20, 11, 1, 17, 16, 7, 2, 14, 19, 8, 13],
        [4, 17, 15, 16, 18, 20, 14, 1, 13, 19, 6, 5, 11, 8, 2, 10, 7, 3, 12, 9],
        [15, 13, 2, 19, 3, 14, 1, 20, 11, 12, 10, 17, 6, 9, 16, 18, 5, 4, 7, 8],
        [12, 7, 6, 3, 19, 13, 16, 18, 15, 1, 9, 14, 2, 4, 17, 20, 8, 5, 10, 11],
        [11, 12, 16, 14, 15, 10, 2, 19, 3, 8, 13, 4, 1, 7, 20, 6, 18, 17, 9, 5],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        [7, 18, 12, 11, 4, 20, 9, 14, 1, 5, 16, 3, 8, 19, 10, 13, 6, 15, 17, 2],
        [5, 3, 17, 18, 8, 11, 6, 16, 13, 7, 14, 15, 4, 20, 2, 19, 10, 1, 9, 12],
        [9, 16, 19, 10, 7, 14, 13, 20, 8, 4, 5, 11, 12, 17, 18, 1, 15, 2, 3, 6],
        [3, 8, 10, 13, 1, 9, 19, 2, 6, 18, 20, 7, 16, 11, 4, 15, 12, 17, 5, 14],
        [19, 15, 7, 3, 14, 12, 18, 4, 5, 2, 8, 6, 20, 1, 13, 17, 9, 16, 11, 10]
    ];
    const E2 = [
        [3, 8, 7, 18, 4, 15, 20, 10, 2, 9, 11, 13, 16, 19, 1, 14, 5, 12, 6, 17],
        [17, 4, 20, 5, 11, 2, 14, 7, 6, 15, 12, 1, 19, 18, 3, 8, 10, 16, 9, 13],
        [6, 14, 18, 1, 3, 17, 15, 4, 16, 19, 13, 7, 11, 10, 8, 5, 12, 2, 20, 9],
        [14, 3, 10, 19, 12, 1, 6, 11, 17, 13, 2, 8, 20, 5, 9, 18, 15, 7, 16, 4],
        [9, 2, 4, 6, 17, 13, 1, 18, 5, 20, 14, 10, 3, 8, 16, 15, 7, 11, 19, 12],
        [11, 12, 14, 15, 1, 19, 4, 9, 6, 5, 17, 16, 10, 3, 20, 13, 2, 18, 7, 8],
        [18, 7, 3, 2, 20, 16, 19, 1, 8, 11, 4, 9, 6, 13, 14, 10, 12, 17, 5, 15],
        [2, 17, 11, 16, 10, 20, 12, 6, 18, 4, 8, 19, 13, 7, 5, 3, 14, 9, 15, 1],
        [10, 6, 17, 7, 5, 12, 3, 2, 1, 16, 11, 20, 8, 15, 4, 19, 9, 14, 13, 18],
        [17, 20, 12, 13, 9, 10, 16, 5, 11, 1, 3, 2, 15, 18, 19, 6, 8, 4, 14, 7],
        [8, 16, 20, 4, 13, 7, 2, 19, 14, 18, 1, 11, 9, 3, 12, 15, 17, 5, 10, 6],
        [15, 1, 2, 20, 16, 14, 9, 17, 3, 4, 10, 12, 5, 6, 7, 8, 18, 13, 19, 11],
        [4, 13, 6, 9, 15, 11, 10, 12, 8, 2, 16, 17, 7, 14, 3, 1, 5, 19, 18, 20],
        [19, 10, 5, 14, 18, 9, 15, 20, 7, 8, 13, 4, 6, 12, 17, 2, 11, 3, 1, 16],
        [5, 19, 17, 16, 11, 8, 6, 13, 12, 7, 9, 3, 18, 2, 10, 20, 15, 1, 4, 14],
        [20, 4, 2, 5, 6, 18, 16, 15, 9, 10, 7, 14, 17, 8, 13, 12, 19, 11, 3, 1],
        [13, 5, 1, 3, 8, 2, 11, 16, 15, 17, 18, 6, 19, 4, 14, 7, 20, 9, 12, 10],
        [7, 12, 19, 11, 1, 14, 13, 18, 4, 5, 15, 10, 9, 16, 2, 17, 6, 20, 8, 3],
        [12, 9, 15, 8, 5, 16, 17, 7, 13, 18, 20, 19, 3, 1, 10, 11, 4, 6, 14, 2],
        [3, 18, 10, 17, 7, 4, 19, 1, 20, 11, 2, 13, 12, 6, 15, 16, 9, 8, 5, 14],
        [4, 15, 11, 18, 19, 3, 8, 17, 10, 14, 12, 5, 13, 20, 6, 9, 1, 16, 2, 7],
        [1, 20, 13, 12, 2, 5, 10, 8, 9, 15, 6, 3, 14, 7, 19, 18, 16, 17, 11, 4],
        [16, 14, 9, 10, 8, 6, 18, 2, 19, 3, 5, 20, 4, 17, 11, 1, 13, 15, 7, 12],
        [8, 9, 16, 20, 14, 12, 7, 3, 13, 6, 19, 15, 2, 11, 18, 4, 17, 10, 1, 5],
        [2, 11, 8, 6, 10, 20, 5, 14, 16, 12, 15, 18, 1, 9, 4, 7, 3, 13, 17, 19]
    ];
    const E3 = [
        [6, 20, 4, 15, 17, 8, 1, 13, 14, 7, 3, 10, 12, 18, 19, 9, 11, 16, 2, 5],
        [9, 4, 8, 12, 20, 18, 14, 7, 11, 13, 15, 5, 6, 3, 1, 17, 2, 19, 10, 16],
        [5, 1, 14, 7, 19, 11, 15, 18, 9, 8, 2, 4, 13, 10, 12, 16, 20, 17, 6, 3],
        [16, 10, 2, 5, 11, 7, 20, 12, 4, 15, 14, 3, 19, 13, 17, 1, 18, 9, 8, 6],
        [18, 12, 6, 4, 15, 9, 13, 11, 5, 14, 20, 1, 8, 17, 7, 3, 19, 2, 16, 10],
        [19, 13, 18, 17, 3, 4, 6, 5, 2, 12, 15, 7, 1, 9, 16, 20, 8, 10, 14, 11],
        [11, 3, 13, 1, 8, 15, 2, 9, 18, 6, 19, 12, 14, 16, 4, 10, 5, 20, 7, 17],
        [12, 17, 20, 3, 9, 2, 19, 7, 1, 4, 18, 10, 15, 8, 14, 6, 11, 5, 16, 13],
        [13, 14, 11, 16, 1, 12, 9, 10, 17, 18, 7, 8, 5, 2, 6, 19, 4, 3, 20, 15],
        [10, 13, 5, 14, 7, 16, 18, 17, 3, 9, 1, 6, 19, 11, 8, 2, 12, 4, 15, 20],
        [7, 9, 3, 18, 6, 20, 16, 2, 19, 10, 8, 11, 17, 5, 4, 12, 15, 13, 1, 14],
        [1, 8, 15, 10, 11, 13, 6, 16, 5, 20, 12, 2, 4, 7, 9, 14, 3, 17, 18, 19],
        [5, 7, 1, 2, 19, 14, 12, 8, 16, 3, 20, 4, 10, 9, 15, 13, 17, 6, 11, 18],
        [17, 12, 20, 6, 4, 3, 11, 19, 1, 5, 2, 13, 9, 15, 10, 18, 7, 14, 8, 16],
        [15, 18, 10, 13, 17, 19, 8, 1, 12, 9, 16, 6, 2, 3, 11, 4, 14, 20, 5, 7],
        [16, 5, 19, 4, 14, 9, 18, 17, 15, 20, 10, 8, 7, 13, 3, 2, 6, 1, 12, 11],
        [2, 15, 16, 11, 13, 5, 3, 20, 10, 17, 14, 9, 6, 1, 18, 7, 12, 8, 19, 4],
        [3, 6, 9, 8, 12, 17, 5, 10, 16, 11, 4, 14, 18, 20, 13, 15, 1, 7, 2, 19],
        [8, 3, 12, 20, 18, 6, 7, 14, 13, 1, 5, 19, 11, 4, 2, 9, 16, 15, 17, 10],
        [20, 7, 14, 9, 8, 4, 10, 3, 2, 16, 6, 5, 17, 12, 15, 11, 13, 19, 18, 1],
        [13, 19, 17, 12, 16, 10, 15, 4, 18, 6, 1, 20, 3, 8, 11, 5, 14, 7, 9, 2],
        [9, 11, 10, 5, 2, 14, 17, 15, 20, 3, 13, 18, 16, 19, 7, 1, 8, 6, 4, 12],
        [7, 16, 19, 10, 5, 1, 13, 18, 6, 2, 11, 17, 15, 14, 20, 4, 9, 12, 3, 8],
        [4, 18, 15, 17, 3, 12, 2, 1, 7, 19, 9, 16, 20, 6, 5, 8, 10, 11, 13, 14],
        [14, 2, 7, 19, 10, 13, 4, 6, 8, 12, 17, 15, 1, 5, 16, 11, 3, 18, 20, 9]
    ];
    const E6 = [
        [2, 1, 3, 5, 4, 6],
        [5, 4, 2, 6, 3, 1],
        [1, 5, 6, 3, 2, 4],
        [4, 3, 2, 1, 6, 5],
        [3, 6, 1, 4, 5, 2],
        [2, 1, 5, 6, 4, 3],
        [5, 4, 6, 3, 2, 1],
        [3, 6, 1, 4, 5, 2],
        [6, 3, 5, 2, 1, 4],
        [5, 4, 3, 1, 2, 6],
        [2, 1, 6, 3, 4, 5],
        [6, 5, 4, 2, 1, 3],
        [2, 3, 1, 5, 6, 4],
        [4, 2, 5, 1, 3, 6],
        [1, 3, 4, 6, 5, 2],
        [5, 6, 3, 2, 1, 4],
        [6, 2, 4, 5, 3, 1],
        [4, 1, 2, 3, 5, 6],
        [1, 2, 3, 6, 4, 5],
        [2, 5, 1, 4, 6, 3],
        [3, 4, 6, 5, 2, 1],
        [1, 5, 2, 4, 6, 3],
        [4, 6, 5, 2, 3, 1],
        [3, 4, 6, 1, 5, 2],
        [6, 2, 4, 3, 1, 5]
    ];

    const D1 = [
        [6, 19, 14, 1, 10, 4, 2, 7, 13, 9, 8, 16, 3, 18, 15, 11, 5, 12, 20, 17],
        [4, 5, 16, 17, 14, 1, 20, 15, 3, 8, 18, 11, 12, 13, 10, 19, 2, 6, 9, 7],
        [17, 1, 13, 6, 15, 11, 19, 12, 16, 18, 10, 3, 7, 14, 8, 20, 4, 9, 2, 5],
        [3, 14, 20, 4, 6, 16, 8, 19, 2, 12, 17, 9, 5, 1, 11, 10, 7, 13, 15, 18],
        [19, 6, 8, 20, 13, 5, 18, 4, 10, 3, 16, 15, 14, 12, 7, 2, 17, 11, 1, 9],
        [2, 11, 9, 14, 7, 19, 6, 3, 18, 13, 12, 8, 10, 15, 16, 17, 20, 4, 5, 1],
        [16, 7, 6, 18, 9, 10, 13, 1, 17, 2, 5, 4, 11, 19, 20, 14, 8, 15, 3, 12],
        [1, 20, 7, 16, 12, 14, 5, 18, 15, 10, 13, 6, 8, 3, 4, 9, 11, 17, 19, 2],
        [17, 9, 11, 8, 20, 18, 7, 14, 1, 16, 15, 5, 19, 2, 6, 12, 4, 10, 13, 3],
        [12, 8, 17, 9, 3, 20, 4, 10, 14, 5, 7, 18, 2, 16, 13, 6, 1, 19, 15, 11],
        [20, 1, 16, 11, 2, 17, 9, 4, 8, 15, 10, 13, 3, 18, 14, 5, 6, 7, 12, 19],
        [5, 4, 15, 2, 13, 19, 6, 16, 12, 14, 8, 7, 17, 10, 18, 3, 9, 1, 11, 20],
        [15, 17, 10, 19, 16, 2, 11, 8, 9, 7, 3, 14, 18, 13, 12, 1, 5, 20, 6, 4],
        [11, 12, 7, 3, 8, 15, 16, 6, 4, 20, 2, 5, 1, 9, 19, 18, 10, 14, 17, 13],
        [12, 16, 2, 7, 4, 8, 15, 19, 5, 1, 11, 9, 20, 17, 6, 14, 13, 3, 18, 10],
        [8, 15, 18, 1, 12, 11, 17, 14, 20, 16, 13, 19, 9, 7, 3, 4, 2, 5, 10, 6],
        [7, 3, 5, 18, 17, 13, 19, 20, 14, 11, 9, 10, 2, 6, 1, 15, 12, 16, 4, 8],
        [10, 13, 4, 14, 18, 3, 2, 17, 11, 19, 20, 1, 6, 12, 9, 7, 15, 8, 5, 16],
        [13, 7, 9, 12, 20, 16, 14, 10, 19, 6, 1, 2, 11, 4, 5, 3, 18, 17, 8, 15],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        [9, 20, 12, 5, 10, 17, 1, 13, 7, 15, 4, 3, 16, 8, 18, 11, 19, 2, 14, 6],
        [18, 15, 2, 13, 1, 7, 10, 5, 19, 17, 6, 20, 9, 11, 12, 8, 3, 4, 16, 14],
        [16, 18, 19, 10, 11, 20, 5, 9, 1, 4, 12, 13, 7, 6, 17, 2, 14, 15, 3, 8],
        [5, 8, 1, 15, 19, 9, 12, 2, 6, 3, 14, 17, 4, 20, 16, 13, 18, 10, 7, 11],
        [14, 10, 4, 8, 9, 12, 3, 11, 17, 20, 19, 6, 15, 5, 2, 18, 16, 7, 1, 13]
    ];
    const D2 = [
        [15, 9, 1, 5, 17, 19, 3, 2, 10, 8, 11, 18, 12, 16, 6, 13, 20, 4, 14, 7],
        [12, 6, 15, 2, 4, 9, 8, 16, 19, 17, 5, 11, 20, 7, 10, 18, 1, 14, 13, 3],
        [4, 18, 5, 8, 16, 1, 12, 15, 20, 14, 13, 17, 11, 2, 7, 9, 6, 3, 10, 19],
        [6, 11, 2, 20, 14, 7, 18, 12, 15, 3, 8, 5, 10, 1, 17, 19, 9, 16, 4, 13],
        [7, 2, 13, 3, 9, 4, 17, 14, 1, 12, 18, 20, 6, 11, 16, 15, 5, 8, 19, 10],
        [5, 17, 14, 7, 10, 9, 19, 20, 8, 13, 1, 2, 16, 3, 4, 12, 11, 18, 6, 15],
        [8, 4, 3, 11, 19, 13, 2, 9, 12, 16, 10, 17, 14, 15, 20, 6, 18, 1, 7, 5],
        [20, 1, 16, 10, 15, 8, 14, 11, 18, 5, 3, 7, 13, 17, 19, 4, 2, 9, 12, 6],
        [9, 8, 7, 15, 5, 2, 4, 13, 17, 1, 11, 6, 19, 18, 14, 10, 3, 20, 16, 12],
        [10, 12, 11, 18, 8, 16, 20, 17, 5, 6, 9, 3, 4, 19, 13, 7, 1, 14, 15, 2],
        [11, 7, 14, 4, 18, 20, 6, 1, 13, 19, 12, 15, 5, 9, 16, 2, 17, 10, 8, 3],
        [2, 3, 9, 10, 13, 14, 15, 16, 7, 11, 20, 12, 18, 6, 1, 5, 8, 17, 19, 4],
        [16, 10, 15, 1, 17, 3, 13, 9, 4, 7, 6, 8, 2, 14, 5, 11, 12, 19, 18, 20],
        [19, 16, 18, 12, 3, 13, 9, 10, 6, 2, 17, 14, 11, 4, 7, 20, 15, 5, 1, 8],
        [18, 14, 12, 19, 1, 7, 10, 6, 11, 15, 5, 9, 8, 20, 17, 4, 3, 13, 2, 16],
        [20, 3, 19, 2, 4, 5, 11, 14, 9, 10, 18, 16, 15, 12, 8, 7, 13, 6, 17, 1],
        [3, 6, 4, 14, 2, 12, 16, 5, 18, 20, 7, 19, 1, 15, 9, 8, 10, 11, 13, 17],
        [5, 15, 20, 9, 10, 17, 1, 19, 13, 12, 4, 2, 7, 6, 11, 14, 16, 8, 3, 18],
        [14, 20, 13, 17, 5, 18, 8, 4, 2, 15, 16, 1, 9, 19, 3, 6, 7, 10, 12, 11],
        [8, 11, 1, 6, 19, 14, 5, 18, 17, 3, 10, 13, 12, 20, 15, 16, 4, 2, 7, 9],
        [17, 19, 6, 1, 12, 15, 20, 7, 16, 9, 3, 11, 13, 10, 2, 18, 8, 4, 5, 14],
        [1, 5, 12, 20, 6, 11, 14, 8, 9, 7, 19, 4, 3, 13, 10, 17, 18, 16, 15, 2],
        [16, 8, 10, 13, 11, 6, 19, 5, 3, 4, 15, 20, 17, 2, 18, 1, 14, 7, 9, 12],
        [19, 13, 8, 16, 20, 10, 7, 1, 2, 18, 14, 6, 9, 5, 12, 3, 17, 15, 11, 4],
        [13, 1, 17, 15, 7, 4, 16, 3, 14, 5, 2, 10, 18, 8, 11, 9, 19, 12, 20, 6]
    ];
    const D3 = [
        [7, 19, 11, 3, 20, 1, 10, 6, 16, 12, 17, 13, 8, 9, 4, 18, 5, 14, 15, 2],
        [15, 17, 14, 2, 12, 13, 8, 3, 1, 19, 9, 4, 10, 7, 11, 20, 16, 6, 18, 5],
        [2, 11, 20, 12, 1, 19, 4, 10, 9, 14, 6, 15, 13, 3, 7, 16, 18, 8, 5, 17],
        [16, 3, 12, 9, 4, 20, 6, 19, 18, 2, 5, 8, 14, 11, 10, 1, 15, 17, 13, 7],
        [12, 18, 16, 4, 9, 3, 15, 13, 6, 20, 8, 2, 7, 10, 5, 19, 14, 1, 17, 11],
        [13, 9, 5, 6, 8, 7, 12, 17, 14, 18, 20, 10, 2, 19, 11, 15, 4, 3, 1, 16],
        [4, 7, 2, 15, 17, 10, 19, 5, 8, 16, 1, 12, 3, 13, 6, 14, 20, 9, 11, 18],
        [9, 6, 4, 10, 18, 16, 8, 14, 5, 12, 17, 1, 20, 15, 13, 19, 2, 11, 7, 3],
        [5, 14, 18, 17, 13, 15, 11, 12, 7, 8, 3, 6, 1, 2, 20, 4, 9, 10, 16, 19],
        [11, 16, 9, 18, 3, 12, 5, 15, 10, 1, 14, 17, 2, 4, 19, 6, 8, 7, 13, 20],
        [19, 8, 3, 15, 14, 5, 1, 11, 2, 10, 12, 16, 18, 20, 17, 7, 13, 4, 9, 6],
        [1, 12, 17, 13, 9, 7, 14, 2, 15, 4, 5, 11, 6, 16, 3, 8, 18, 19, 20, 10],
        [3, 4, 10, 12, 1, 18, 2, 8, 14, 13, 19, 7, 16, 6, 15, 9, 17, 20, 5, 11],
        [9, 11, 6, 5, 10, 4, 17, 19, 13, 15, 7, 2, 12, 18, 14, 20, 1, 16, 8, 3],
        [8, 13, 14, 16, 19, 12, 20, 7, 10, 3, 15, 9, 4, 17, 1, 11, 5, 2, 6, 18],
        [18, 16, 15, 4, 2, 17, 13, 12, 6, 11, 20, 19, 14, 5, 9, 1, 8, 7, 3, 10],
        [14, 1, 7, 20, 6, 13, 16, 18, 12, 9, 4, 17, 5, 11, 2, 3, 10, 15, 19, 8],
        [17, 19, 1, 11, 7, 2, 18, 4, 3, 8, 10, 5, 15, 12, 16, 9, 6, 13, 20, 14],
        [10, 15, 2, 14, 11, 6, 7, 1, 16, 20, 13, 3, 9, 8, 18, 17, 19, 5, 12, 4],
        [20, 9, 8, 6, 12, 11, 2, 5, 4, 7, 16, 14, 17, 3, 15, 10, 13, 19, 18, 1],
        [11, 20, 13, 8, 16, 10, 18, 14, 19, 6, 15, 4, 1, 17, 7, 5, 3, 9, 2, 12],
        [16, 5, 10, 19, 4, 18, 15, 17, 1, 3, 2, 20, 11, 6, 8, 13, 7, 12, 14, 9],
        [6, 10, 19, 16, 5, 9, 1, 20, 17, 4, 11, 18, 7, 14, 13, 2, 12, 8, 3, 15],
        [8, 7, 5, 1, 15, 14, 9, 16, 11, 17, 18, 6, 19, 20, 3, 12, 4, 2, 10, 13],
        [13, 2, 17, 7, 14, 8, 3, 9, 20, 5, 16, 10, 6, 1, 12, 15, 11, 18, 4, 19]
    ];
    const D6 = [
        [2, 1, 3, 5, 4, 6],
        [6, 3, 5, 2, 1, 4],
        [1, 5, 4, 6, 2, 3],
        [4, 3, 2, 1, 6, 5],
        [3, 6, 1, 4, 5, 2],
        [2, 1, 6, 5, 3, 4],
        [6, 5, 4, 2, 1, 3],
        [3, 6, 1, 4, 5, 2],
        [5, 4, 2, 6, 3, 1],
        [4, 5, 3, 2, 1, 6],
        [2, 1, 4, 5, 6, 3],
        [5, 4, 6, 3, 2, 1],
        [3, 1, 2, 6, 4, 5],
        [4, 2, 5, 1, 3, 6],
        [1, 6, 2, 3, 5, 4],
        [5, 4, 3, 6, 1, 2],
        [6, 2, 5, 3, 4, 1],
        [2, 3, 4, 1, 5, 6],
        [1, 2, 3, 5, 6, 4],
        [3, 1, 6, 4, 2, 5],
        [6, 5, 1, 2, 4, 3],
        [1, 3, 6, 4, 2, 5],
        [6, 4, 5, 1, 3, 2],
        [4, 6, 1, 2, 5, 3],
        [5, 2, 4, 3, 6, 1]
    ];

    if (mode === true) {
        var switch1 = D1;
        var switch2 = D2;
        var switch3 = D3;
        var switch6 = D6;
    } else {
        var switch1 = E1;
        var switch2 = E2;
        var switch3 = E3;
        var switch6 = E6;
    }


    // plugboard
    const plugboard = letter2num(plugs);
    let rplugboard = [];
    for (let ii = 0; ii < 26; ii++) {
        let cur = plugboard[ii] - 1;
        rplugboard[cur] = ii + 1;
    }

    // motion
    const motion = [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1]
    ];

    const fast = motion[selectmotion - 1][0] - 1;
    const med = motion[selectmotion - 1][1] - 1;
    const slow = motion[selectmotion - 1][2] - 1;
    const six = 3;
    let pos = starts;

    // format messages
    let plaintext = letter2num(plain);

    let ciphertext = [''];

    // calculate encryption
    for (let ii = 0; ii < plaintext.length; ii++) {

        let thruP = rplugboard[plaintext[ii] - 1];


        if (thruP > 20) {
            let thru6 = (switch6[pos[six] - 1][thruP - 20 - 1]) + 20;
            var thruS = thru6;
        } else {
            if (mode === true) {
                let thru3 = switch3[pos[2] - 1][thruP - 1];
                let thru2 = switch2[pos[1] - 1][thru3 - 1];
                let thru1 = switch1[pos[0] - 1][thru2 - 1];
                var thruS = thru1;
            } else {
                let thru1 = switch1[pos[0] - 1][thruP - 1];
                let thru2 = switch2[pos[1] - 1][thru1 - 1];
                let thru3 = switch3[pos[2] - 1][thru2 - 1];
                var thruS = thru3;
            }
        }
        let thruP2 = plugboard[thruS - 1];
        ciphertext[ii] = thruP2;

        pos[six] += 1;
        if (pos[six] > 25) {
            pos[six] -= 25;
        }

        if (pos[six] === 25 && pos[med] === 25) { //=24, =25
            pos[slow] += 1;
            if (pos[slow] > 25) {
                pos[slow] -= 25;
            }
        } else if (pos[six] === 1) { //=25
            pos[med] += 1;
            if (pos[med] > 25) {
                pos[med] -= 25;
            }
        } else {
            pos[fast] += 1;
            if (pos[fast] > 25) {
                pos[fast] -= 25;
            }
        }
    }
    ciphertext = num2letter(ciphertext);
    let groups = Math.ceil(ciphertext.length/5);
    if (ciphertext == ""){
      groups = 0;
    }
    ciphertext = ciphertext.join('');
    ciphertext = ciphertext.replace(/(.{5})/g, "$1 ");
    let returnstuff = {
      text: ciphertext,
      positions: pos,
      numgroups: groups
    }
    return returnstuff;
}

function resetPlugs() {
    for (let r = 0; r < 26; r++) {
        document.getElementById(alpha[r]).value = alpha[r];
    }
    document.getElementById("PERROR").textContent = "";
    document.getElementById("P2ERROR").textContent = "";
		callPURPLE();
}

function validatePlugs(event) {

    let plugs = [];
    for (let r = 0; r < 26; r++) {
        plugs[r] = document.getElementById(alpha[r]);
    }

    let call = letter2num(event.target.id) - 1;


    fixed = validateText(plugs[call].value)[0];
    if (fixed !== undefined) {
        document.getElementById("P2ERROR").textContent = "";
        plugs[call].value = fixed;
        for (let p = 0; p < plugs.length; p++) {
            if (plugs[p].value == fixed && p !== call) {
                let message = "Two plugs can't have the same value: ";
                let spot = num2letter([p + 1]);
                let value = plugs[p].value;
                message = message + value + " at " + spot + " has been deleted;";

                document.getElementById("P2ERROR").textContent = message;
                plugs[p].value = "";
            }
        }
    } else {
        plugs[call].value = "";
    }
    let available = alpha;
    for (let r = 0; r < 26; r++) {
        available = available.replace(plugs[r].value, " ")
    }
    available = available.replace(/\s/g, "")


    if (available.length !== 0) {
        let verb = "";
        if (available.length === 1) {
            verb = " is ";
        } else if (available.length === 2) {
            verb = " are ";
            let first = available[0];
            let last = available[1];
            available = first + " and " + last;
        } else {
            verb = " are ";
            let last = available[available.length - 1];
            let bod = available.replace(/(.{1})/g, "$1, ");
            bod = bod.slice(0, bod.length - 3);
            available = bod + "and " + last;
        }

        document.getElementById("PERROR").textContent = "Input more plugs: " + available + verb + "available"
    } else {
        document.getElementById("PERROR").textContent = "";
    }
    callPURPLE();
}

function validateStarts(event) {
    let starts = [document.getElementById("START1"),
        document.getElementById("START2"),
        document.getElementById("START3"),
        document.getElementById("START6")
    ];
    let startsnow = [document.getElementById("START1NOW"),
        document.getElementById("START2NOW"),
        document.getElementById("START3NOW"),
        document.getElementById("START6NOW")
    ];
    let current = document.getElementById(event.target.id);
    if (current.validity.valid == false) {
        let old = current.name;
        current.value = old;
    } else {
        saveStarts(event);
    }
    document.getElementById("SERROR").textContent = "";
    for (let s = 0; s < 4; s++) {
        if (starts[s].value == 0) {
            document.getElementById("SERROR").textContent = "Input more starts;";
            startsnow[s].textContent = "-";
        }
    }
    callPURPLE();
}

function saveStarts(event) {
    let call = document.getElementById(event.target.id);
    let old = call.value;
    call.name = old;
}

function callPURPLE() {
    work = document.getElementById("SERROR").textContent;
    work = work + document.getElementById("PERROR").textContent


    if (work == "") {
        let plugs = [];
        for (let r = 0; r < 26; r++) {
            plugs[r] = document.getElementById(alpha[r]).value;
        }
        plugs = plugs.join("");

        let starts = [Number(document.getElementById("START1").value),
            Number(document.getElementById("START2").value),
            Number(document.getElementById("START3").value),
            Number(document.getElementById("START6").value)
        ];
        let selectmotion = parseInt(document.getElementById("MOTION").value);
        let mode = document.getElementById("MODE").checked;
        let textin = validateText(document.getElementById("TEXTIN").value);

        let out = PURPLE(textin, selectmotion, plugs, starts, mode);

        let textout = out.text;
        let pos = out.positions;
        let groups = out.numgroups;
        if (groups > 1){
          plural = "s"
        }else {
          plural = ""
        }
        message = "You enciphered " + groups + " group"+plural;
        if (textout == ""){
          message="";
        }
        document.getElementById("SETS").textContent = message;

        document.getElementById("START1NOW").textContent = pos[0];
        document.getElementById("START2NOW").textContent = pos[1];
        document.getElementById("START3NOW").textContent = pos[2];
        document.getElementById("START6NOW").textContent = pos[3];

        document.getElementById("TEXTOUT").textContent = textout;

    } else {
        document.getElementById("TEXTOUT").textContent = "";
        document.getElementById("SETS").textContent = "";

    }
}



// Step 3: Attach event listener to element
document.getElementById("START6").addEventListener("focus", saveStarts, true);
document.getElementById("START1").addEventListener("focus", saveStarts, true);
document.getElementById("START2").addEventListener("focus", saveStarts, true);
document.getElementById("START3").addEventListener("focus", saveStarts, true);

document.getElementById("START6").addEventListener("input", validateStarts, true);
document.getElementById("START1").addEventListener("input", validateStarts, true);
document.getElementById("START2").addEventListener("input", validateStarts, true);
document.getElementById("START3").addEventListener("input", validateStarts, true);

document.getElementById("MOTION").addEventListener("change", callPURPLE);
document.getElementById("MODE").addEventListener("change", callPURPLE);
document.getElementById("TEXTIN").addEventListener("input", callPURPLE);

document.getElementById("RESETPLUGS").addEventListener("click", resetPlugs);


document.getElementById("B").addEventListener("input", validatePlugs, true);
document.getElementById("C").addEventListener("input", validatePlugs, true);
document.getElementById("D").addEventListener("input", validatePlugs, true);
document.getElementById("F").addEventListener("input", validatePlugs, true);
document.getElementById("G").addEventListener("input", validatePlugs, true);
document.getElementById("H").addEventListener("input", validatePlugs, true);
document.getElementById("J").addEventListener("input", validatePlugs, true);
document.getElementById("K").addEventListener("input", validatePlugs, true);
document.getElementById("L").addEventListener("input", validatePlugs, true);
document.getElementById("M").addEventListener("input", validatePlugs, true);
document.getElementById("N").addEventListener("input", validatePlugs, true);
document.getElementById("P").addEventListener("input", validatePlugs, true);
document.getElementById("Q").addEventListener("input", validatePlugs, true);
document.getElementById("R").addEventListener("input", validatePlugs, true);
document.getElementById("S").addEventListener("input", validatePlugs, true);
document.getElementById("T").addEventListener("input", validatePlugs, true);
document.getElementById("V").addEventListener("input", validatePlugs, true);
document.getElementById("W").addEventListener("input", validatePlugs, true);
document.getElementById("X").addEventListener("input", validatePlugs, true);
document.getElementById("Z").addEventListener("input", validatePlugs, true);
document.getElementById("A").addEventListener("input", validatePlugs, true);
document.getElementById("E").addEventListener("input", validatePlugs, true);
document.getElementById("I").addEventListener("input", validatePlugs, true);
document.getElementById("O").addEventListener("input", validatePlugs, true);
document.getElementById("U").addEventListener("input", validatePlugs, true);
document.getElementById("Y").addEventListener("input", validatePlugs, true);
