/* ── Section 4 demo — click event ── */
    const clickBtn    = document.querySelector('#demo-click-btn');
    const clickOutput = document.querySelector('#demo-click-output');
    let   clickCount  = 0;

    clickBtn.addEventListener('click', function() {
        clickCount++;
        clickOutput.textContent = 'Button clicked ' + clickCount + ' time' + (clickCount === 1 ? '' : 's') + '!';
    });

    /* ── Section 5a demo — textContent ── */
    const textBtn    = document.querySelector('#demo-text-btn');
    const textReset  = document.querySelector('#demo-text-reset');
    const textTarget = document.querySelector('#demo-text-target');

    textBtn.addEventListener('click', function() {
        textTarget.textContent = 'You clicked the button!';
    });
    textReset.addEventListener('click', function() {
        textTarget.textContent = 'Original text';
    });

    /* ── Section 5b demo — style ── */
    const styleBtn   = document.querySelector('#demo-style-btn');
    const styleReset = document.querySelector('#demo-style-reset');
    const styleBox   = document.querySelector('#demo-style-box');

    styleBtn.addEventListener('click', function() {
        styleBox.style.backgroundColor = '#ff6b6b';
        styleBox.style.transform       = 'rotate(20deg)';
        styleBox.style.borderRadius    = '50%';
    });
    styleReset.addEventListener('click', function() {
        styleBox.style.backgroundColor = 'var(--accent)';
        styleBox.style.transform       = '';
        styleBox.style.borderRadius    = '8px';
    });

    /* ── Section 6 demo — classList toggle ── */
    const classBtn = document.querySelector('#demo-class-btn');
    const classBox = document.querySelector('#demo-class-box');

    classBtn.addEventListener('click', function() {
        classBox.classList.toggle('highlighted');
        if (classBox.classList.contains('highlighted')) {
            classBox.style.background  = 'rgba(245,166,35,0.15)';
            classBox.style.borderColor = 'var(--accent)';
            classBox.style.color       = 'var(--accent)';
            classBox.textContent       = 'Class "highlighted" has been added ✓';
        } else {
            classBox.style.background  = 'var(--surface2)';
            classBox.style.borderColor = 'var(--border)';
            classBox.style.color       = 'var(--muted)';
            classBox.textContent       = 'I change when a class is toggled on me.';
        }
    });

    /* ── Section 7 demo — input value ── */
    const inputField  = document.querySelector('#demo-input-field');
    const inputOutput = document.querySelector('#demo-input-output');

    inputField.addEventListener('input', function() {
        const val = inputField.value;
        inputOutput.textContent = val.length > 0 ? 'Hello, ' + val + '!' : 'Hello, ...';
    });

    /* ── Section 8 demo — querySelectorAll tabs ── */
    const tabBtns   = document.querySelectorAll('.demo-tab-btn');
    const tabOutput = document.querySelector('#demo-tab-output');

    tabBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            tabBtns.forEach(function(b) {
                b.classList.add('secondary');
                b.classList.remove('active-tab');
            });
            btn.classList.remove('secondary');
            tabOutput.textContent = 'You selected: ' + btn.textContent;
        });
    });