        function clearScreen() {
            document.getElementById("screen").value = "";
        }
        function addToScreen(value) {
            document.getElementById("screen").value += value;
        }

        function calculate() {
            let expression = document.getElementById("screen").value;
            if (expression.includes('%')) {
                expression = expression.replace(/%/g, '/100');  
            }
            try {
                let result = eval(expression);
                document.getElementById("screen").value = result;
            } catch (error) {
                document.getElementById("screen").value = "Error";
            }
        }
