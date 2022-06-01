const config = require('./config')
const colorNpm = require('colors')
const jspeed = {
    /**
     *  @param {string} element Print an element
    */
    print: function print(element) {
        console.log(element)
    },
    /**
     * @param {string} element The element to return
     * @param {string} color The color to set
     * @return {string} Returns a string with the color you want
    */
    color: function printColor(element, color) {
        const colors = ["black", "red", "green", "blue", "yellow", "magenta", "cyan", "white", "gray"]
        if (!colors.includes(color)) {
            console.log(colorNpm.red(`[${config.nameModule}] ${color} color could not be set!`))
        } else {
            if (color == "black") {
                return colorNpm.black(element)
            }
            if (color == "red") {
                return colorNpm.red(element)
            }
            if (color == "green") {
                return colorNpm.green(element)
            }
            if (color == "blue") {
                return colorNpm.blue(element)
            }
            if (color == "yellow") {
                return colorNpm.yellow(element)
            }
            if (color == "magenta") {
                return colorNpm.magenta(element)
            }
            if (color == "cyan") {
                return colorNpm.cyan(element)
            }
            if (color == "white") {
                return colorNpm.white(element)
            }
            if (color == "gray") {
                return colorNpm.gray(element)
            }
        }
    },
    /**
     * @param {string} element The element to print
     * @param {string} color The color to set
     * @return {string} Prints a string with the color you want
    */
    printColor: function printColor(element, color) {
        const colors = ["black", "red", "green", "blue", "yellow", "magenta", "cyan", "white", "gray"]
        if (!colors.includes(color)) {
            console.log(colorNpm.red(`[${config.nameModule}] ${color} color could not be set!`))
        } else {
            if (color == "black") {
                console.log(colorNpm.black(element))
            }
            if (color == "red") {
                console.log(colorNpm.red(element))
            }
            if (color == "green") {
                console.log(colorNpm.green(element))
            }
            if (color == "blue") {
                console.log(colorNpm.blue(element))
            }
            if (color == "yellow") {
                console.log(colorNpm.yellow(element))
            }
            if (color == "magenta") {
                console.log(colorNpm.magenta(element))
            }
            if (color == "cyan") {
                console.log(colorNpm.cyan(element))
            }
            if (color == "white") {
                console.log(colorNpm.white(element))
            }
            if (color == "gray") {
                console.log(colorNpm.gray(element))
            }
        }
    },
    /**
     * @param {string} element The element to return
     * @return {string} Print the element with a space
    */
    printLn: function printLn(element) {
        console.log(`\n ${element} \n`)
    },
    /**
     * @param {string} n1 The smallest number
     * @param {string} n2 The largest number
     * @return {string} Returns a random number between n1 and n2.
    */
    random: function random(n1, n2) {
        return Math.floor(Math.random() * (n2 - n1) + n1);
    },
    /**
     * @param {string} element The element to be analyzed
     * @return {string} Returns the type of the element
    */
    type: function type(element) {
        return typeof element
    },
    /**
     * @param {string} String The element to be converted
     * @return {string} Returns the string converted to integer
    */
    toInt: function toInt(String) {
        return Number.parseInt(String)
    },
    /**
     * @param {string} Number The element to be converted
     * @return {string} Returns the integer converted to string
    */
    toStr: function toStr(Number) {
        return '' + Number + ''
    },
    /**
     * @param {string} length The token length
     * @return {string} Returns a randomly generated token with numbers and letters
    */
    genToken: function genToken(length) {
        let token = ''
        function gToken() {
            const letters = [
                1, 2, 3, 4,
                5, 6, 7, 8,
                9, 'a', 'b', 'c',
                'd', 'e', 'f',
                'g', 'h', 'i',
                'j', 'k', 'l',
                'm', 'n', 'o',
                'p', 'q', 'r',
                's', 't', 'u',
                'v', 'w', 'x',
                'y', 'z'
            ]
            token = token + letters[Math.floor(Math.random() * (35 - 0) + 0)]
        }
        for (let i = 0; i < length; i++) {
            gToken()
        }
        return token.toLocaleUpperCase()
    },
    /**
     * @param {string} length The token length
     * @return {string} Returns a randomly generated token with numbers only. 
    */
    genNumToken: function genNumToken(length) {
        let token = ''
        function gToken() {
            const letters = [
                1, 2, 3, 4,
                5, 6, 7, 8,
                9
            ]
            let tokena = `${token}`
            token = tokena + letters[Math.floor(Math.random() * (9 - 0) + 0)]
        }
        for (let i = 0; i < length; i++) {
            gToken()
        }
        return token
    },
    /**
     * @param {string} length The token length
     * @return {string} Returns a randomly generated token with letters only. 
    */
    genStrToken: function genStrToken(length) {
        let token = ''
        function gToken() {
            const letters = [
                'a', 'b', 'c',
                'd', 'e', 'f',
                'g', 'h', 'i',
                'j', 'k', 'l',
                'm', 'n', 'o',
                'p', 'q', 'r',
                's', 't', 'u',
                'v', 'w', 'x',
                'y', 'z'
            ]
            token = token + letters[Math.floor(Math.random() * (26 - 0) + 0)]
        }
        for (let i = 0; i < length; i++) {
            gToken()
        }
        return token.toLocaleUpperCase()
    },
    /**
     * @param {Number} port The server port
     * @param {string} file The file to send (Html)
     * @param {string} host The server host
     * @return Create a simple http server on a custom host
    */
    server: function server(port, file, host) {
        try {
            const http = require("http");
            const requestListener = function (req, res) {
                res.end(file);
            };
            const server = http.createServer(requestListener);
            if (host == undefined) {
                host = "localhost";
            }
            server.listen(port, host, () => {
                console.log(colorNpm.green(`[${config.nameModule}] Server is running on http://${host}:${port}`));
            });
        } catch (e) {
            console.log(colorNpm.red(`[${config.nameModule}] Cannot run the server`));
        }
    },
    /**
     * @param {string[]} array Data to be consulted
     * @param {string} id The property to search
     * @return {string} Returns the result of the search in array
    */
    findById: function findById(array, id) {
        
        const result = array.find(e => e.id == id);
        if (result == undefined) {
            return colorNpm.red(`[${config.nameModule}] No item found with id ${id}`)
        } else {
            return result
        }
    },
    /**
     * @param {string[]} array Data to be consulted
     * @param {string} name The property to search
     * @return {string} Returns the result of the search in array
    */
    findByName: function findByName(array, name) {
        const result = array.find(e => e.name == name);
        if (result == undefined) {
            return colorNpm.red(`[${config.nameModule}] No item found with name ${name}`)
        } else {
            return result
        }
    },
    /**
     * @param {string} string The text to be converted
     * @return {string} Returns the text with the first capital letter
    */
    firstCapital: function firstCapital(string) {
        const letter = string.slice(1);
    }
}
console.log(colorNpm.green(`[${config.nameModule}] is ready!`))
module.exports = jspeed
