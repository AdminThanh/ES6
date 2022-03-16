const createElement = (funcMain, string, x = "") => {
    let container = document.getElementById('container');
    let h1 = document.createElement("h1");
    if (x != "") {
        h1.innerHTML = funcMain(string, x);
    }
    else {
        h1.innerHTML = funcMain(`${string}`);
    }
    container.appendChild(h1);
}
export { createElement };