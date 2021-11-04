import { chargeGraph, SCR1Graph, SCR2Graph, sinusoidalGraph } from './controler/dataGraphGenerator.js';
import { confChargeGraph } from './controler/chartGraph.js';

function loadGraph(Vp,shootingAngleSCR1, shootingAngleSCR2, angleRange) {
    const chargeGraphChart = new Chart(
        document.getElementById('chargeGraph'),
        confChargeGraph(chargeGraph(Vp,shootingAngleSCR1, shootingAngleSCR2, angleRange), "senoide da carga")
    );

    const scr1GraphChart = new Chart(
        document.getElementById('scr1Graph'),
        confChargeGraph(SCR1Graph(Vp,shootingAngleSCR1, shootingAngleSCR2, angleRange), "senoide da SCR1")
    );

    const scr2GraphChart = new Chart(
        document.getElementById('scr2Graph'),
        confChargeGraph(SCR2Graph(Vp,shootingAngleSCR1, shootingAngleSCR2, angleRange), "senoide da SCR2")
    );
}

const Vp = 110
const anguloDisparoSCR1 = 30
const anguloDisparoSCR2 = 30

loadGraph(Vp, anguloDisparoSCR1, anguloDisparoSCR2, 1)