
function maxCharacterLength(textarea) {
        const maxchar = textarea.target.getAttribute('maxLength');

        const maxCharacter = document.getElementById(`${textarea.target.id}-maxCharacter`);
        maxCharacter.innerHTML = `${maxchar} characters left`;

        const len = textarea.target.value.length;
        if (len >= maxchar) {
            maxCharacter.innerHTML = `Maximum characters reached`;
        } else {
            maxCharacter.innerHTML = `${maxchar - len} characters left`;
        }
    }
    document.querySelectorAll('textarea').forEach((el) => {
        el.addEventListener('keyup', maxCharacterLength);
    }); });}