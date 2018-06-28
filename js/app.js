import { BinaryCalculator } from "./BinaryCalculator";
import { DecCalculator } from "./DecCalculator";

import "./style.scss";



$(document).ready(function() {
    const bitCalc = new BinaryCalculator(".binary-calculator");
    const bitCalc2= new DecCalculator(".dec-calculator")
})
