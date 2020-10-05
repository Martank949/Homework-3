        //Working with the DOM*****************************************
        //This is the final code
        var genPasswordEl = document.getElementById("genPassword");
        //This will generate the password
        var generatePassEl = document.getElementById("generatePass");
        //This will help users set the character count for the password
        var charCountEl = document.getElementById("charCount");
        //Number settings
        var numEl = document.getElementById("num");
        //Lower Char settings
        var lowCaseEl = document.getElementById("lowCase");
        //Upper Char settings
        var upCaseEl = document.getElementById("upCase");
        //Symbol settings
        var symEl = document.getElementById("sym");
        var copyEl = document.getElementById("copy");

        //Declaring constant objects
        const randomFunc = {
            upCase: getRandomUpperCase,
            lowCase: getRandomLowerCase,
            num: getRandomNumber,
            sym: getRandomSymbol
        };

        //Generating an event
        generatePassEl.addEventListener('click', () => {
            const charCount = +charCountEl.value;
            const upCaseCheck = upCaseEl.checked;
            const lowCaseCheck = lowCaseEl.checked;
            const numCheck = numEl.checked;
            const symCheck = symEl.checked;


            genPasswordEl.value = generatePassword(upCaseCheck, lowCaseCheck, numCheck, symCheck, charCount);
        });

        //Pulling variables from the DOM to be used for this function 
        function generatePassword(upCase, lowCase, num, sym, charCount) {
            let generatedPassword = "";

            const typesCount = upCase + lowCase + num + sym;

            const typesArr = [{
                upCase
            }, {
                lowCase
            }, {
                num
            }, {
                sym
            }].filter(item => Object.values(item)[0]);

            if (typesCount === 0) {
                return '';
            }

            for (let i = 0; i < charCount; i += typesCount) {
                typesArr.forEach(type => {
                    const funcName = Object.keys(type)[0];
                    generatedPassword += randomFunc[funcName]();
                });
            }
            const finalPassword = generatedPassword.slice(0, charCount);
            return finalPassword;
        }
        //My HTML check boxes 
        //Generating random number
        function getRandomNumber() {
            return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
        }
        //Generating random lowercase char
        function getRandomLowerCase() {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }

        //Generating random uppercase char
        function getRandomUpperCase() {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        }
        //Generating random symbol
        function getRandomSymbol() {
            var sym = "!@#$%^&*(){}[]=<>/,.|~?";
            return sym[Math.floor(Math.random() * sym.length)];
        }

        let me = document.getElementById("charCount").value;

        var btn = document.getElementById("generatePass");

        generatePass.addEventListener('click', () => {})


        function myFunction() {
            //text field
            var copyText = document.getElementById("genPassword");

            //5-add password to password history and places new one on top and pushes old PW down
            //document.getElementById("lastPass").innerHTML = myInput
            //document.getElementById("lastPass").innerHTML += myInput + "<br /> ";



            //alert and copy 
            alert("Copied to Clipboard");
        }