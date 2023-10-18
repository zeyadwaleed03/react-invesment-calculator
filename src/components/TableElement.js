function TableElement(props) {
  const options = {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  return (
    <tr>
      <td>{props.row.year}</td>
      <td>${props.row.totalSavings.toLocaleString('en-US', options)}</td>
      <td>${props.row.yearlyInterest.toLocaleString('en-US', options)}</td>
      <td>${props.row.totalInterest.toLocaleString('en-US', options)}</td>
      <td>${props.row.investedCap.toLocaleString('en-US', options)}</td>
    </tr>
  );
}

export default TableElement;
