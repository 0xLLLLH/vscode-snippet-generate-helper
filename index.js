window.onload = function() {
    var input = document.querySelector('textarea[name="input"]');
    var output = document.querySelector('textarea[name="output"]');

    function transformCode() {
        output.value = input.value
            .replace(/\r?\n/g, '\n')
            .split('\n')
            .map(
                line => JSON.stringify(line.replace(/\$/g, '\\\$'))
            )
            .join(',\n');
    }

    input.onchange = transformCode;
}
