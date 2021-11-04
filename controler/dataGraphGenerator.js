import { getVoltageFromAngle } from '../model/sinusoidalGraph.js'

export function chargeGraph(Vp,shootingAngleSCR1, shootingAngleSCR2, angleRange) {
    shootingAngleSCR2 += 180;
    const data = [];
    const angleList = [];

    for (let angle = 0 ; angle <= 360 ; angle += angleRange) {
        const voltage = getVoltageFromAngle(Vp, angle);
        if (shootingAngleSCR1 > angle || shootingAngleSCR2 > angle && angle >= 180) {
            data.push(0);
        } else if(voltage < 0) {
            data.push(voltage - voltage * 2);
        } else {
            data.push(voltage);
        }
        angleList.push(angle)
    }

    return [data, angleList];
}

export function SCR1Graph(Vp, shootingAngleSCR1, shootingAngleSCR2, angleRange) {
    shootingAngleSCR2 += 180;
    const data = [];
    const angleList = []

    for (let angle = 0 ; angle <= 360 ; angle += angleRange) {
        const voltage = getVoltageFromAngle(Vp, angle);
        if (angle < shootingAngleSCR1 || angle < shootingAngleSCR2 && angle > 180) {
            data.push(voltage);
        } else if (angle >= shootingAngleSCR1 && angle < 180) {
            data.push(0);
        } else {
            data.push(voltage * 2)
        }
        angleList.push(angle)
    }

    return [data, angleList];
}

export function SCR2Graph(Vp, shootingAngleSCR1, shootingAngleSCR2, angleRange) {
    shootingAngleSCR2 += 180;
    const data = [];
    const angleList = [];

    for (let angle = 0 ; angle <= 360 ; angle += angleRange) {
        const voltage = getVoltageFromAngle(Vp, angle);
        if (angle < shootingAngleSCR1 || angle < shootingAngleSCR2 && angle > 180) {
            data.push(voltage - voltage*2);
        } else if (angle >= shootingAngleSCR2 && angle > 180) {
            data.push(0);
        } else {
            data.push((voltage - voltage*2) * 2)
        }
        angleList.push(angle);
    }

    return [ data, angleList ];
}

export function sinusoidalGraph(Vp, angleRange) {
    const data = [];
    const angleList = [];

    for (let angle = 0 ; angle <= 360 ; angle += angleRange) {
        data.push(getVoltageFromAngle(Vp, angle));
        angleList.push(angle);
    }

    return [ data, angleList ];
}