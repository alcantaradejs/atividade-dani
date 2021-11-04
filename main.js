import { chargeGraph, SCR1Graph, SCR2Graph, sinusoidalGraph } from './controler/dataGraphGenerator.js';
import { confChargeGraph } from './controler/chartGraph.js';

function loadGraph(Vp,shootingAngleSCR1, shootingAngleSCR2, angleRange) {
    const chargeGraphChart = new Chart(
        document.getElementById('chargeGraph'),
        confChargeGraph(chargeGraph(Vp,shootingAngleSCR1, shootingAngleSCR2, angleRange), "tensão na carga resistiva")
    );

    const scr1GraphChart = new Chart(
        document.getElementById('scr1Graph'),
        confChargeGraph(SCR1Graph(Vp,shootingAngleSCR1, shootingAngleSCR2, angleRange), "tenção no SCR1")
    );

    const scr2GraphChart = new Chart(
        document.getElementById('scr2Graph'),
        confChargeGraph(SCR2Graph(Vp,shootingAngleSCR1, shootingAngleSCR2, angleRange), "tensão no SCR2")
    );
}

const Vp = 155.56
const anguloDisparoSCR1 = 30
const anguloDisparoSCR2 = 10

loadGraph(Vp, anguloDisparoSCR1, anguloDisparoSCR2, 1)