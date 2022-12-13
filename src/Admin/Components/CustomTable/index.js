import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {BiCaretDown, BiCaretUp} from 'react-icons/bi'
import './customTable.css';

const CustomTable = (props) => {
      
      const getCaret=(direction)=>{
            if (direction === 'asc') {
                  return (
                    <span> <BiCaretDown /></span>
                  );
                }
                if (direction === 'desc') {
                  return (
                    <span> <BiCaretUp /></span>
                  );
                }
                return (
                  <span> <BiCaretDown /><BiCaretUp /></span>
                );
      }
     

            
      return (
            <>
                  <BootstrapTable
                        data={props.data}
                        tableHeaderClass="custom-table-header-container"
                        tableBodyClass="custom-table-body-container"
                        tableContainerClass='custom-table-container'
                  >
                        {props.fields.map((field) => (
                              <TableHeaderColumn
                                    className="custom-table-header"
                                    dataField={field.name}
                                    isKey={field.isKey}
                                    key={field.name}
                                    dataSort={field.dataSort}
                                    caretRender={field.dataSort && getCaret }
                              >
                                    {field.title}
                              </TableHeaderColumn>
                        ))}
                  </BootstrapTable>
            </>
      );
};

export default CustomTable;
