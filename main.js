import { chargeGraph, SCR1Graph, SCR2Graph, sinusoidalGraph } from './controler/dataGraphGenerator.js';
import { confChargeGraph } from './controler/chartGraph.js';

const chargeGraphChart = new Chart(
    document.getElementById('chargeGraph'),
    confChargeGraph(chargeGraph(110, 30, 30, 1))
);

const scr1GraphChart = new Chart(
    document.getElementById('scr1Graph'),
    confChargeGraph(SCR1Graph(110, 30, 30, 1))
);

const scr2GraphChart = new Chart(
    document.getElementById('scr2Graph'),
    confChargeGraph(SCR2Graph(110, 30, 30, 1))
);

document.onkeydown = e => {
    if (e.key == "Enter") {
        print()
    }
};