import { getCalculator, ICalculator } from './index';

describe('Calculator', (): void => {
  let calculator: ICalculator;

  beforeEach(async (): Promise<void> => {
    const Calculator: any = await getCalculator();
    calculator = new Calculator();
  });

  it('should display `1` when pressOne() is invoked', (): void => {

    calculator.pressOne();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('1');

  });

  it('should display `8+2` when `4*2+2` is invoked', (): void => {

    calculator.pressFour();
    calculator.pressMult();
    calculator.pressTwo();
    calculator.pressPlus();
    calculator.pressTwo();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('8+2');

  });

  it('should display `3` when `1.+2=` is invoked', (): void => {

    calculator.pressOne();
    calculator.pressDot();
    calculator.pressPlus();
    calculator.pressTwo();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('3');

  });

  it('should display `4/` when `8/2/` is invoked', (): void => {

    calculator.pressEight();
    calculator.pressDiv();
    calculator.pressTwo();
    calculator.pressDiv();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('4/');

  });

  it('should display `3` when `-1+4=` is invoked', (): void => {

    calculator.pressMinus();
    calculator.pressOne();
    calculator.pressPlus();
    calculator.pressFour();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('3');

  });

  it('should display `-2+` when `-4/2+` is invoked', (): void => {

    calculator.pressMinus();
    calculator.pressFour();
    calculator.pressDiv();
    calculator.pressTwo();
    calculator.pressPlus();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-2+');

  });

  it('should display `22` when `10*2+20/10` is invoked', (): void => {

    calculator.pressOne();
    calculator.pressZero();
    calculator.pressMult();
    calculator.pressTwo();
    calculator.pressPlus();
    calculator.pressTwo();
    calculator.pressZero();
    calculator.pressDiv();
    calculator.pressOne();
    calculator.pressZero();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('22');

  });

});
