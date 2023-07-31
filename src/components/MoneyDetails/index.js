// import {Component} from 'react'
// import './index.css'

// class MoneyDetails extends Component {

//   render() {
//     const {eachDetail} = this.props
//     const {id, imageUrl, text, classType} = eachDetail
//     return (
//       <li className="list-items">
//         <div className="money-container">
//           <div className="image-container">
//             <img src={imageUrl} className="image" alt={classType} />
//           </div>
//           <div className="rupees-container">
//             <p className="text">{text}</p>
//             <p className="rupees">
//               RS <span>0</span>
//             </p>
//           </div>
//         </div>
//       </li>
//     )
//   }
// }

// export default MoneyDetails

import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Balance</p>
          <p className="details-money" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Income</p>
          <p className="details-money" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Expenses</p>
          <p className="details-money" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
