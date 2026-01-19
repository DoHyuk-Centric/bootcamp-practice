const layoutContainer = document.getElementById('layoutContainer');
const layoutInfo = document.getElementById('layoutInfo');
const codeBlock = document.getElementById('codeBlock');
const toggleBtns = document.querySelectorAll('.toggle-btn');

let currentLayout = 'flex';

toggleBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const layout = this.dataset.layout;
        
        // 활성 버튼 업데이트
        toggleBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // 레이아웃 변경
        if (layout === 'flex') {
            layoutContainer.classList.remove('grid');
            layoutInfo.textContent = '현재: Flexbox (1차원 레이아웃) - 자유로운 흐름';
            codeBlock.innerHTML = `
                <code>
                    <span class="keyword">.container</span> {<br>
                    &nbsp;&nbsp;<span class="keyword">display</span>: <span class="value">flex</span>;<br>
                    &nbsp;&nbsp;<span class="keyword">gap</span>: <span class="value">15px</span>;<br>
                    &nbsp;&nbsp;<span class="keyword">flex-wrap</span>: <span class="value">wrap</span>;<br>
                    }<br>
                    <br>
                    <span class="keyword">.item</span> {<br>
                    &nbsp;&nbsp;<span class="keyword">flex</span>: <span class="value">1</span>;<br>
                    &nbsp;&nbsp;<span class="keyword">min-width</span>: <span class="value">150px</span>;<br>
                    }
                </code>
            `;
        } else {
            layoutContainer.classList.add('grid');
            layoutInfo.textContent = '현재: Grid (2차원 레이아웃) - 격자형 배치';
            codeBlock.innerHTML = `
                <code>
                    <span class="keyword">.container</span> {<br>
                    &nbsp;&nbsp;<span class="keyword">display</span>: <span class="value">grid</span>;<br>
                    &nbsp;&nbsp;<span class="keyword">grid-template-columns</span>: <span class="value">repeat(auto-fit, minmax(200px, 1fr))</span>;<br>
                    &nbsp;&nbsp;<span class="keyword">gap</span>: <span class="value">15px</span>;<br>
                    }<br>
                    <br>
                    <span class="keyword">.item</span> {<br>
                    &nbsp;&nbsp;/* 그리드 내에서 자동 배치 */<br>
                    }
                </code>
            `;
        }
        currentLayout = layout;
    });
});
