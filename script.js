const sendButton = document.querySelector(".message-box button");
const messageInput = document.querySelector(".message-box input");
const chatContainer = document.querySelector("#chat-container");

function sendmessage() {
    const message = messageInput.value.trim();

    if (message === "") {
        return;
    }

    const lowerMessage = message.toLowerCase();

    // USER MESSAGE
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = message;
    chatContainer.appendChild(userMessage);

    // AI MESSAGE
    const aiMessage = document.createElement("div");
    aiMessage.classList.add("ai-message");

    // GREETING
    if (
        lowerMessage.includes("hello") ||
        lowerMessage.includes("hlo") ||
        lowerMessage.includes("hi")
    ) {
        aiMessage.textContent = "Hello Divya! How is your Day 😊";

    // HOW ARE YOU
    } else if (lowerMessage.includes("how are you")) {
        aiMessage.textContent = "I am doing great! 😍 How are You? 🥰";

    // NAME
    } else if (lowerMessage.includes("your name")) {
        aiMessage.textContent = "My name is My AI Chat. 😃";

    // TIME
    } else if (
        lowerMessage.includes("what is the time") ||
        lowerMessage.includes("what time is it") ||
        lowerMessage.includes("time now") ||
        lowerMessage === "time"
    ) {
        const currentTime = new Date().toLocaleTimeString();

        aiMessage.textContent =
            "The current time is " + currentTime;

    // DATE
    } else if (
        lowerMessage.includes("what is today's date") ||
        lowerMessage.includes("what is the date") ||
        lowerMessage.includes("today's date") ||
        lowerMessage.includes("today date") ||
        lowerMessage.includes("what is today date") ||
        lowerMessage.includes("date today")
    ) {
        const currentDate = new Date().toLocaleDateString();

        aiMessage.textContent =
            "Today's date is " + currentDate;

    // SQUARE ROOT
    } else if (lowerMessage.includes("sqrt")) {

        const sqrtMatch = lowerMessage.match(
            /^\s*sqrt\s*\(\s*(-?\d+(?:\.\d+)?)\s*\)\s*$/
        );

        if (sqrtMatch) {
            const number = Number(sqrtMatch[1]);

            if (number < 0) {
                aiMessage.textContent =
                    "Square root of a negative number is not a real number. ❌";
            } else {
                const result = Math.sqrt(number);

                aiMessage.textContent =
                    "The answer is " + result + " 😊";
            }
        } else {
            aiMessage.textContent =
                "Please enter something like sqrt(144).";
        }    // =========================
    // SIN
    // =========================
    } else if (lowerMessage.startsWith("sin")) {

        const match = lowerMessage.match(
            /^\s*sin\s*\(\s*(-?\d+(?:\.\d+)?)\s*\)\s*$/
        );

        if (match) {

            const angle = Number(match[1]);

            const radians = angle * Math.PI / 180;

            let result = Math.sin(radians);

            if (Math.abs(result) < 1e-10) {
                result = 0;
            }

            aiMessage.textContent =
                "sin(" + angle + "°) = " + result + " 😊";

        } else {

            aiMessage.textContent =
                "Use sin like this: sin(30).";
        }


    // =========================
    // COS
    // =========================
    } else if (lowerMessage.startsWith("cos")) {

        const match = lowerMessage.match(
            /^\s*cos\s*\(\s*(-?\d+(?:\.\d+)?)\s*\)\s*$/
        );

        if (match) {

            const angle = Number(match[1]);

            const radians = angle * Math.PI / 180;

            let result = Math.cos(radians);

            if (Math.abs(result) < 1e-10) {
                result = 0;
            }

            aiMessage.textContent =
                "cos(" + angle + "°) = " + result + " 😊";

        } else {

            aiMessage.textContent =
                "Use cos like this: cos(60).";
        }


    // =========================
    // TAN
    // =========================
    } else if (lowerMessage.startsWith("tan")) {

        const match = lowerMessage.match(
            /^\s*tan\s*\(\s*(-?\d+(?:\.\d+)?)\s*\)\s*$/
        );

        if (match) {

            const angle = Number(match[1]);

            const radians = angle * Math.PI / 180;

            const cosine = Math.cos(radians);

            if (Math.abs(cosine) < 1e-10) {

                aiMessage.textContent =
                    "tan(" + angle + "°) is undefined. ❌";

            } else {

                let result = Math.tan(radians);

                if (Math.abs(result) < 1e-10) {
                    result = 0;
                }

                aiMessage.textContent =
                    "tan(" + angle + "°) = " + result + " 😊";
            }

        } else {

            aiMessage.textContent =
                "Use tan like this: tan(45).";
        }


    // =========================
    // CSC
    // csc(x) = 1 / sin(x)
    // =========================
    } else if (lowerMessage.startsWith("csc")) {

        const match = lowerMessage.match(
            /^\s*csc\s*\(\s*(-?\d+(?:\.\d+)?)\s*\)\s*$/
        );

        if (match) {

            const angle = Number(match[1]);

            const radians = angle * Math.PI / 180;

            const sine = Math.sin(radians);

            if (Math.abs(sine) < 1e-10) {

                aiMessage.textContent =
                    "csc(" + angle + "°) is undefined. ❌";

            } else {

                const result = 1 / sine;

                aiMessage.textContent =
                    "csc(" + angle + "°) = " + result + " 😊";
            }

        } else {

            aiMessage.textContent =
                "Use csc like this: csc(30).";
        }


    // =========================
    // SEC
    // sec(x) = 1 / cos(x)
    // =========================
    } else if (lowerMessage.startsWith("sec")) {

        const match = lowerMessage.match(
            /^\s*sec\s*\(\s*(-?\d+(?:\.\d+)?)\s*\)\s*$/
        );

        if (match) {

            const angle = Number(match[1]);

            const radians = angle * Math.PI / 180;

            const cosine = Math.cos(radians);

            if (Math.abs(cosine) < 1e-10) {

                aiMessage.textContent =
                    "sec(" + angle + "°) is undefined. ❌";

            } else {

                const result = 1 / cosine;

                aiMessage.textContent =
                    "sec(" + angle + "°) = " + result + " 😊";
            }

        } else {

            aiMessage.textContent =
                "Use sec like this: sec(60).";
        }


    // =========================
    // COT
    // cot(x) = cos(x) / sin(x)
    // =========================
    } else if (lowerMessage.startsWith("cot")) {

        const match = lowerMessage.match(
            /^\s*cot\s*\(\s*(-?\d+(?:\.\d+)?)\s*\)\s*$/
        );

        if (match) {

            const angle = Number(match[1]);

            const radians = angle * Math.PI / 180;

            const sine = Math.sin(radians);
            const cosine = Math.cos(radians);

            if (Math.abs(sine) < 1e-10) {

                aiMessage.textContent =
                    "cot(" + angle + "°) is undefined. ❌";

            } else {

                const result = cosine / sine;

                aiMessage.textContent =
                    "cot(" + angle + "°) = " + result + " 😊";
            }

        } else {

            aiMessage.textContent =
                "Use cot like this: cot(45).";
        }


    // =========================
    // ASIN
    // =========================
    } else if (lowerMessage.startsWith("asin")) {

        const match = lowerMessage.match(
            /^\s*asin\s*\(\s*(-?\d+(?:\.\d+)?)\s*\)\s*$/
        );

        if (match) {

            const value = Number(match[1]);

            if (value < -1 || value > 1) {

                aiMessage.textContent =
                    "asin only accepts values from -1 to 1. ❌";

            } else {

                const radians = Math.asin(value);

                const degrees = radians * 180 / Math.PI;

                aiMessage.textContent =
                    "asin(" + value + ") = " +
                    degrees + "° 😊";
            }

        } else {

            aiMessage.textContent =
                "Use asin like this: asin(0.5).";
        }


    // =========================
    // ACOS
    // =========================
    } else if (lowerMessage.startsWith("acos")) {

        const match = lowerMessage.match(
            /^\s*acos\s*\(\s*(-?\d+(?:\.\d+)?)\s*\)\s*$/
        );

        if (match) {

            const value = Number(match[1]);

            if (value < -1 || value > 1) {

                aiMessage.textContent =
                    "acos only accepts values from -1 to 1. ❌";

            } else {

                const radians = Math.acos(value);

                const degrees = radians * 180 / Math.PI;

                aiMessage.textContent =
                    "acos(" + value + ") = " +
                    degrees + "° 😊";
            }

        } else {

            aiMessage.textContent =
                "Use acos like this: acos(0.5).";
        }


    // =========================
    // ATAN
    // =========================
    } else if (lowerMessage.startsWith("atan")) {

        const match = lowerMessage.match(
            /^\s*atan\s*\(\s*(-?\d+(?:\.\d+)?)\s*\)\s*$/
        );

        if (match) {

            const value = Number(match[1]);

            const radians = Math.atan(value);

            const degrees = radians * 180 / Math.PI;

            aiMessage.textContent =
                "atan(" + value + ") = " +
                degrees + "° 😊";

        } else {

            aiMessage.textContent =
                "Use atan like this: atan(1).";
        }


    // =========================
    // POWER
    // =========================
    } else if (lowerMessage.includes("^")) {

        const powerMatch = lowerMessage.match(
            /^\s*(-?\d+(?:\.\d+)?)\s*\^\s*(-?\d+(?:\.\d+)?)\s*$/
        );

        if (powerMatch) {

            const base = Number(powerMatch[1]);

            const exponent = Number(powerMatch[2]);

            const result = Math.pow(base, exponent);

            aiMessage.textContent =
                "The answer is " + result + " 😊";

        } else {

            aiMessage.textContent =
                "Please enter something like 2 ^ 5.";
        }


    // =========================
    // BASIC CALCULATOR
    // =========================
    } else if (
        lowerMessage.includes("+") ||
        lowerMessage.includes("-") ||
        lowerMessage.includes("*") ||
        lowerMessage.includes("/")
    ) {

        const calculationMatch = lowerMessage.match(
            /^\s*(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)\s*$/
        );

        if (calculationMatch) {

            const num1 = Number(calculationMatch[1]);

            const operator = calculationMatch[2];

            const num2 = Number(calculationMatch[3]);

            let result;

            if (operator === "+") {

                result = num1 + num2;

            } else if (operator === "-") {

                result = num1 - num2;

            } else if (operator === "*") {

                result = num1 * num2;

            } else if (operator === "/") {

                if (num2 === 0) {

                    aiMessage.textContent =
                        "You cannot divide by zero! ❌";

                } else {

                    result = num1 / num2;
                }
            }

            if (result !== undefined) {

                aiMessage.textContent =
                    "The answer is " + result + " 😊";
            }

        } else {

            aiMessage.textContent =
                "Please enter a calculation like 25 + 75.";
        }

    // UNKNOWN MESSAGE
    } else {
        aiMessage.textContent =
            "Sorry, I don't understand that yet.";
    }

    chatContainer.appendChild(aiMessage);

    // CLEAR INPUT
    messageInput.value = "";
}

// BUTTON CLICK
sendButton.addEventListener("click", sendmessage);

// ENTER KEY
messageInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendmessage();
    }
});
