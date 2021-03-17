import React, {useEffect, useRef} from 'react';
import throttle from 'lodash/throttle';
import PropTypes from 'prop-types';

const MemberItem = ({member}) => {
    const revealItem = useRef('');
    const hideInitially = () => {
        revealItem.current.classList.add('reveal-item');
        revealItem.current.isRevealed = false;
        
    }


    useEffect(() => {
 
        hideInitially();

        const throttleCalc = throttle(() => calcCaller(), 200);
        window.addEventListener('scroll', throttleCalc);

        const calcCaller = () => {
            if (revealItem.current.isRevealed === false) {
                calcTheDistance(revealItem.current);
            }
       
        }
        const calcTheDistance = (el) => {
        let ratio = el.getBoundingClientRect().top / window.innerHeight;
        if (ratio < 0.75) {
            el.classList.add('reveal-item_visible');
            el.isRevealed = true;
        }
    }
    return () => {
        window.removeEventListener('scroll', throttleCalc);
        } 
    }, [])
    


    return (
        <div ref={revealItem} className="members-item">
            <a href={member.img} data-lightbox="member1" className="members-item__image">
            <img src={member.img} alt=""/>
            </a>
            <div className="member-item__desc">
            <h3>{member.desc}</h3>
            </div>
        </div>

    )
}

MemberItem.propTypes = {
    member: PropTypes.object
  };

export default MemberItem
