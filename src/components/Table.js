import TableHead from './TableHead';
import TableElement from './TableElement';
import styles from './Table.module.css';
function Table(props) {
  return (
    <table className={styles.result}>
      <TableHead head={props.head} />

      <tbody>
        {props.tableData.map((row, ind) => {
          return <TableElement key={ind} row={row} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;
