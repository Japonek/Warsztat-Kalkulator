import { Calculator } from "./Calculator";

class DecCalculator extends Calculator{
    constructor(settings) {
        super(settings);
        console.log( this.getName() );
    }
    add(numberX, numberY) {

//iteruje po dwoch przeslanych tablicach
        let result = [0,0,0,0,0,0,0,0,0];
        for(let i = numberX.length - 1; i >= 0  ; i--) {
            let numberXX=parseInt(numberX[i])
            let numberYY=parseInt(numberY[i])
            let resultHH=parseInt(result[i])

            let carryBit =  numberXX + numberYY + resultHH;
            if( carryBit  >= 10) {
                result[i] = carryBit-10;
                result[i-1] = 1;
            } else {
                result[i] = carryBit;
            }
        }

        console.log(result)
        return result;
    }
    changeNumber(root) {
        let activeElement = root.find('.active');
        activeElement.attr("contenteditable", true)
        activeElement.trigger("focus")

    }
    updateResult() {
        let root =  this.$calculatorDOMElement;


        let $resultNumber = root.children(".group-number").children(".result-bit");

        for(let i =  this.resultNumberArray.length - 1, j = 1; i >= 0 ; i--, j++) {
            $(`.dec-calculator .result-${j}`).find('span').text(this.resultNumberArray[i])
         //   let valueResult = parseInt( $resultNumber.eq(j).find(".active").text() );


    /*    if( this.resultNumberArray[i] != valueResult ) {
                let activeElement = $resultNumber.eq(j).find(".active").removeClass("active");
                activeElement.siblings().addClass("active");
              //  $resultNumber.eq(j).children(":first-child").slideToggle();
            }*/
        }
    }

    initEvents() {
        this.$calculatorDOMElement.find(".add").on('click', (event) => {

            this.checkNumber();
            this.updateResult();
        })

        this.$calculatorDOMElement.find(".display-number").on('click', (event) => {
            const parentLabel = $(event.target).parent(".display-number");
            this.changeNumber(parentLabel);
        })
    }
}

export { DecCalculator  };



























