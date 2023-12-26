document.getElementById('copy-button').addEventListener('click', function() {
    // Get the text content that needs to be copied
    var textToCopy = document.getElementById('text-to-copy');

    // Create a temporary textarea element to hold the text
    var textarea = document.createElement('textarea');
    textarea.value = textToCopy.innerText;

    // Make the textarea out of view by setting the position to absolute
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';

    // Append the textarea to the DOM
    document.body.appendChild(textarea);

    // Select the text within the textarea
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Provide some feedback to the user (optional)

});