import React, {useState} from 'react';
import MaterialTable from 'material-table'
import './App.css';
import { Select } from '@material-ui/core';



function App() {
   const [tableData,setTableData]=useState([
    {name: "Raj",email:"raj@gmail.com",phone:7894561230,age:null,gender:"M",city:"Chennai",fee:78456},
    {name: "Mohan",email:"mohan@gmail.com",phone:7864561230,age:35,gender:"M",city:"Delhi",fee:78231},
    {name: "Sweety",email:"sweety@gmail.com",phone:7294561230,age:17,gender:"F",city:"Noida",fee:456782},
    {name: "Vikas",email:"vikas@gmail.com",phone:7893561230,age:20,gender:"M",city:"Chennai",fee:34561},

   ])
  const columns=[
    {title:"Name",field:"name",sorting:false,cellStyle:{color:"blue"}},
    {title:"Email",field:"email",filterPlaceholder:"Filter by email"},
    {title:"Phone Number",field:"phone",align:"center"},
    {title:"Age",field:"age",emptyValue:()=><em>null</em>,render:(rowData)=><div style={{background:rowData.age>=18?"Green":"red"}}>{rowData.age}</div>,
    defaultSort:"asc"},
    {title:"Gender",field:"gender",lookup:{M:"Male",F:"Female"}},
    {title:"City",field:"city"},
    {title:"School Fee", field:"fee", type:"currency",currencySetting:{currencyCode:"INR",minimumFractionDigits:1}},
  ]
  return (
    <div className="App">
      <h1 align="center"> React-App</h1>
      <h4  align='center'>Material Table</h4>

      
      <MaterialTable columns={columns}  data={tableData}
      editable={{
        onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
          setTableData([...tableData,newRow])
         setTimeout(()=>resolve(),500)
        }),
        onRowUpdate:(newRow,oldRow)=>new Promise((resolve,reject)=>{
          const updatedData=[...tableData]
          updatedData[oldRow.tableData.id]=newRow
          setTableData(updatedData)

          setTimeout(()=>resolve(),500)
        }),
        onRowDelete:(selectedRow)=>new Promise((resolve,reject)=>{
          const updatedData=[...tableData]
          updatedData.splice(selectedRow.tableData.id,1)
          setTableData(updatedData)
          setTimeout(()=>resolve(),1000)
        })
        }}
         actions={[
           {icon:()=><button>Click me</button>,
             tooltip:"Click me",
             onClick:(e,data)=>console.log(data),
            //  isFreeAction:true

          
          }
          
         ]}
         onSelectionChange={(selectedRows)=>console.log(selectedRows)}

      options={{sorting:true,
        search:true,
        searchFieldAlignment:"right",
        searchAutoFocus:true,
        searchFieldVariant:"outlined",
        filtering:true,
        paging:true,
        pageSizeOptions:[5,10,20,25,50,100],
        exportButton:true,
        actionsColumnIndex:-1,
        selection:true,
        showSelectAllCheckbox:false,
        showTextRowsSelected:false,
        grouping:true,
        columnsButton:true,
        rowStyle:{background:"#f5f5f5"},
        headerStyle:{background:"red",fontStyle:'italic'}
        

      }}
      title="Student Information"/>
    </div>
  );
}

export default App;
