/* ============================================
   SEO & Web Analytics — script.js
   Handles:
   1. SEO Checklist with live score
   2. Meta Tag Builder with live Google preview
   ============================================ */


/* ════════════════════════════════
   1. SEO CHECKLIST
════════════════════════════════ */

const checkInputs   = document.querySelectorAll('.check-input');
const scoreNum      = document.querySelector('#score-num');
const scoreTotal    = document.querySelector('#score-total');
const scoreMsg      = document.querySelector('#score-msg');
const resetBtn      = document.querySelector('#reset-checklist');

const total = checkInputs.length;
scoreTotal.textContent = total;

function updateScore() {
    let count = 0;
    checkInputs.forEach(function(input) {
        if (input.checked) count++;
    });

    scoreNum.textContent = count;

    const pct = Math.round((count / total) * 100);

    if (count === 0) {
        scoreMsg.textContent = 'Start checking items above.';
        scoreNum.style.color = '';
    } else if (pct < 40) {
        scoreMsg.textContent = 'Your page needs some SEO work — focus on HTML structure first.';
        scoreNum.style.color = '#dc2626';
    } else if (pct < 70) {
        scoreMsg.textContent = 'Good start — keep going. Hit the HTML items if you haven\'t yet.';
        scoreNum.style.color = '#d97706';
    } else if (pct < 100) {
        scoreMsg.textContent = 'Looking solid — almost there!';
        scoreNum.style.color = '#2d8a5e';
    } else {
        scoreMsg.textContent = '✓ All items checked — your page is well optimised!';
        scoreNum.style.color = '#2d8a5e';
    }
}

checkInputs.forEach(function(input) {
    input.addEventListener('change', updateScore);
});

resetBtn.addEventListener('click', function() {
    checkInputs.forEach(function(input) {
        input.checked = false;
    });
    updateScore();
});


/* ════════════════════════════════
   2. META TAG BUILDER
════════════════════════════════ */

const metaTitle     = document.querySelector('#meta-title');
const metaDesc      = document.querySelector('#meta-desc');
const metaUrl       = document.querySelector('#meta-url');
const titleCount    = document.querySelector('#title-count');
const descCount     = document.querySelector('#desc-count');
const previewTitle  = document.querySelector('#preview-title');
const previewDesc   = document.querySelector('#preview-desc');
const previewUrl    = document.querySelector('#preview-url');
const metaCodeOut   = document.querySelector('#meta-code-output');

const TITLE_LIMIT = 60;
const DESC_LIMIT  = 160;

function truncate(str, max) {
    if (str.length <= max) return str;
    return str.substring(0, max - 1) + '…';
}

function updateCounter(el, current, limit) {
    el.textContent = current + ' / ' + limit;
    el.classList.remove('warn', 'over');
    if (current > limit) {
        el.classList.add('over');
    } else if (current > limit * 0.85) {
        el.classList.add('warn');
    }
}

function updatePreview() {
    const title   = metaTitle.value.trim() || 'Your Page Title';
    const desc    = metaDesc.value.trim()  || 'Your meta description will appear here. Write something that makes people want to click your result.';
    const url     = metaUrl.value.trim()   || 'yourname.ca';

    /* update counters */
    updateCounter(titleCount, metaTitle.value.length, TITLE_LIMIT);
    updateCounter(descCount,  metaDesc.value.length,  DESC_LIMIT);

    /* update google preview */
    previewTitle.textContent = truncate(title, TITLE_LIMIT);
    previewDesc.textContent  = truncate(desc,  DESC_LIMIT);
    previewUrl.textContent   = url;

    /* update generated code */
    const safeTitle = title.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeDesc  = desc.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    metaCodeOut.innerHTML =
        '<code>' +
        '&lt;title&gt;' + safeTitle + '&lt;/title&gt;\n' +
        '&lt;meta name="description" content="' + safeDesc + '"&gt;' +
        '</code>';
}

metaTitle.addEventListener('input', updatePreview);
metaDesc.addEventListener('input',  updatePreview);
metaUrl.addEventListener('input',   updatePreview);

/* initialise on load */
updatePreview();



const pt_dialog = document.querySelector("#pt-dialog");
const close_dialog = document.querySelector("#closeDialog");
const show_dialog = document.querySelector("#show-pt");

show_dialog.addEventListener('click', (event)=> {
    pt_dialog.showModal();
});

close_dialog.addEventListener('click', (event)=> {
    pt_dialog.close();
});