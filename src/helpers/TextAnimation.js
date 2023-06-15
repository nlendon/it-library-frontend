import React, {useEffect} from 'react';

const TextAnimation = ({data}) => {
    let TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        let that = this;
        let delta = 150 - Math.random() * 10;

        if (this.isDeleting) {
            delta /= 0;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    function callTextAnimate() {
        let elements = document.getElementsByClassName('anim-typewriter');
        for (let i = 0; i < elements.length; i++) {
            let toRotate = elements[i].getAttribute('data-type');
            let period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        let css = document.createElement("style");
        css.innerHTML = ".anim-typewriter  > .wrap { border-right: 0.08em solid black}";
        document.body.appendChild(css);
    }

    useEffect(() => {
        callTextAnimate();
    }, [])

    return (
        <>
            <h2 data-aos="highlight-text" className="anim-typewriter anim" data-period={data.period}
                data-type={`[${data.text.toString()}]`}>
                <span className="wrap"> </span>
            </h2>
        </>
    );
}

export default TextAnimation;