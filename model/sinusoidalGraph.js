// sen = CO / Tg
// sen = Vt / Tg
// sen(90) * Vp = Tg
// sen * Tg = Vt

export function getVoltageFromAngle(peakVoltage, angle) {
    function getTg(peakVoltage) {
        return Math.sin(90 * Math.PI / 180) * peakVoltage ;
    }

    function getVoltage(angle, Tg) {
        return Math.sin(angle * Math.PI / 180) * Tg ;
    }

    const Tg = getTg(peakVoltage);
    return getVoltage(angle, Tg);
}