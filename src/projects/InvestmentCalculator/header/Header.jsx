import logo from '../../../assets/InvestmentCalculatorImg/investment-calculator-logo.png'

export default function Header() {
  return (
    <header className='headerInvestment'>
        <img src={logo} alt="Logo showing a money bag" />
        <h1>Investment Calculator</h1>
    </header>
  )
}
