import { useLayoutEffect, useState, useRef } from 'react';

import clockIcon from '@assets/icons/clockIcon.webp';

import type { RoleComponentPropsI, timestampTextStateI } from './types';

import './style.css';

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

const RoleComponent = (props: RoleComponentPropsI) => {

    const roleRef = useRef<HTMLDivElement | null>(null);
    const lineRef = useRef<HTMLDivElement | null>(null);

    const {title, schedule, timestamp, description} = props;
    const {dateStart, dateEnd} = timestamp;

    const [toolTipHeight, setToolTipHeight] = useState<number>(0);
    const [timeline, setTimeline] = useState<string>('')
    const [timestampText, setTimestampText] = useState<timestampTextStateI>({
        start: '',
        end: ''
    })
    useLayoutEffect(() => {
        if (roleRef.current && lineRef.current) {
            const { height } = roleRef.current.getBoundingClientRect();
            setToolTipHeight(height);
        }
        if (dateEnd && dateStart) {
            let text = '';
            const diffMonths =
                (dateEnd.getFullYear() - dateStart.getFullYear()) * 12 +
                (dateEnd.getMonth() - dateStart.getMonth());
            console.log(diffMonths);
            const years =  Math.floor(diffMonths / 12);
            let left_months = 0;
            if (years > 0) {
                left_months = diffMonths - years*12;
                if (years > 1) {
                    text += `${years} yrs`
                }
                else {
                    text += `${years} yr`
                }
                if (left_months > 0) {
                    text += `, ${left_months} mos`
                }
            }
            else {
                text += `${diffMonths} mos`
            }

            setTimeline(text);
        }
        if (dateStart && dateEnd) {
            let endText = ''
            if (months[dateEnd.getMonth()] === months[new Date().getMonth()] && dateEnd.getFullYear() === new Date().getFullYear()) {
                endText = 'Present'
            }
            else {
                endText += `${months[dateEnd.getMonth()]} ${dateEnd.getFullYear()}`
            }

            setTimestampText({
                start: `${months[dateStart.getMonth()]} ${dateStart.getFullYear()}`,
                end: `${endText}`,
            })
        }
        }, []);

    return (
        <div className={'role-component-container'}>
            <div className={'role-list-pointer-container'}>
                <div className={'list-pointer-circle'}></div>
                <div className={'list-pointer-line'} ref={lineRef} style={{height: toolTipHeight}}></div>
            </div>
            <div className={'role-content-container'} ref={roleRef}>
                <div className={'role-content-headline-container'}>
                    <div className={'title'}>
                        <p>{title}</p>
                    </div>
                    <div className={'date'}>
                        <p>{timestampText.start} - {timestampText.end} ( {timeline} )</p>
                    </div>
                </div>
                <div className={'role-content-schedule'}>
                    <img src={clockIcon} alt={'clockIcon'} width={14} height={14}/>
                    <p>{schedule}</p>
                </div>
                <div className={'role-content-description'}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export { RoleComponent };