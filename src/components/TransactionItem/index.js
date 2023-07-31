// import './index.css'

// const TransactionItem = props => {
//   const {eachItem} = props
//   const {title, amount, type} = eachItem

//   return (
//     <li className="list-items">
//       <div className="bottom-contianer">
//         <p>{title}</p>
//         <p>{amount}</p>
//         <p>{type}</p>
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
//           className="delete"
//           alt="delete"
//         />
//       </div>
//     </li>
//   )
// }

// export default TransactionItem

import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="table-row">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">Rs {amount}</p>
      <p className="transaction-text">{type}</p>
      <div className="delete-container">
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteTransaction}
          //   testid="delete"
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            data-testid="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
