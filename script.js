function main() {
    let inputUser = document.getElementById("text").value;
    let result = vocalRemover(inputUser);
    document.getElementById("hasil").innerHTML = result;
}

function vocalRemover(inputUser) {
    let regex = "[aiueo]";
    regex = new RegExp(regex, "gi");
    let matched = inputUser.replace(regex, "");
    return matched;
}

function reset() {
    document.getElementById("text").value = "";
    document.getElementById("hasil").innerHTML = "";
}