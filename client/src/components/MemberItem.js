import React, {useEffect} from 'react';
import throttle from 'lodash/throttle';

const MemberItem = ({member}) => {

    useEffect(() => {
        const revealItem = document.querySelectorAll('.members-item');
        const hideInitially = () => {
            revealItem.forEach(el => {
                el.classList.add('reveal-item');
                el.isRevealed = false;
            })
        }
        hideInitially()
        const throttleCalc = throttle(() => calcCaller(), 200);
    window.addEventListener('scroll', () => throttleCalc());

    const calcCaller = () => {
        revealItem.forEach(el => {
            if (el.isRevealed === false) {
                calcTheDistance(el);
            }
        })
    }
    const calcTheDistance = (el) => {
        let ratio = el.getBoundingClientRect().top / window.innerHeight;
        if (ratio < 0.75) {
            el.classList.add('reveal-item--visible');
            el.isRevealed = true;
        }
    }
    }, [])
    


    return (
        <div className="members-item">
            <a href={member.img} data-lightbox="member1" className="members-item__image">
            <img src={member.img} alt=""/>
            </a>
            <div className="member-item__desc">
            <h3>{member.desc}</h3>
            </div>
        </div>

    )
}

export default MemberItem
