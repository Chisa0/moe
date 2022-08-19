function createbubbles() {
            const section = document.querySelector('body')
            const createElement = document.createElement('span')
            var size = Math.random() * 60;

            createElement.style.width = 15 + size + 'px';
            createElement.style.height = 15 + size + 'px';
            createElement.style.left = Math.random() * 0.9 * innerWidth + "px";
            section.appendChild(createElement);
            setTimeout(() => {
            createElement.remove()
        },4000)
        }

        setInterval(createbubbles,135)
