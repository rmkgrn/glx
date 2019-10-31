import * as React from 'react';
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
// import "ag-grid-enterprise";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class Main extends React.Component<any, any> {
    private gridApi: any;
    private gridColumnApi: any;

    constructor(props: any) {
      super(props);
  
      this.state = {
        columnDefs: [
          {
            field: "name",
            width: 100
          },
          {
            field: "gender",
            width: 90,
            // cellRenderer: "genderCellRenderer",
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
              values: ["Male", "Female"],
              // cellRenderer: "genderCellRenderer"
            }
          },
          {
            field: "country",
            width: 100,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
              cellHeight: 50,
              values: ["Ireland", "USA"]
            }
          },
          {
            field: "city",
            width: 70,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: function(params: any) {
              var selectedCountry = params.data.country;
              var allowedCities = countyToCityMap(selectedCountry);
              return {
                values: allowedCities,
                formatValue: function(value: any) {
                  return value + " (" + selectedCountry + ")";
                }
              };
            }
          },
          {
            field: "address",
            width: 200,
            cellEditor: "agLargeTextCellEditor"
          }
        ],
        rowData: [
          {
            name: "Bob Harrison",
            gender: "Male",
            address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Mary Wilson",
            gender: "Female",
            age: 11,
            address: "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Sadiq Khan",
            gender: "Male",
            age: 12,
            address: "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Jerry Mane",
            gender: "Male",
            age: 12,
            address: "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Bob Harrison",
            gender: "Male",
            address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Mary Wilson",
            gender: "Female",
            age: 11,
            address: "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Sadiq Khan",
            gender: "Male",
            age: 12,
            address: "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Jerry Mane",
            gender: "Male",
            age: 12,
            address: "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Bob Harrison",
            gender: "Male",
            address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Mary Wilson",
            gender: "Female",
            age: 11,
            address: "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Sadiq Khan",
            gender: "Male",
            age: 12,
            address: "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Jerry Mane",
            gender: "Male",
            age: 12,
            address: "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Bob Harrison",
            gender: "Male",
            address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Mary Wilson",
            gender: "Female",
            age: 11,
            address: "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Sadiq Khan",
            gender: "Male",
            age: 12,
            address: "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Jerry Mane",
            gender: "Male",
            age: 12,
            address: "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Bob Harrison",
            gender: "Male",
            address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Mary Wilson",
            gender: "Female",
            age: 11,
            address: "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Sadiq Khan",
            gender: "Male",
            age: 12,
            address: "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Jerry Mane",
            gender: "Male",
            age: 12,
            address: "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Bob Harrison",
            gender: "Male",
            address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Mary Wilson",
            gender: "Female",
            age: 11,
            address: "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Sadiq Khan",
            gender: "Male",
            age: 12,
            address: "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
            city: "Dublin",
            country: "Ireland"
          },
          {
            name: "Jerry Mane",
            gender: "Male",
            age: 12,
            address: "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
            city: "Dublin",
            country: "Ireland"
          }
        ],
        // frameworkComponents: { genderCellRenderer: GenderCellRenderer },
        defaultColDef: {
          editable: true,
          resizable: true
        }
      };
    }
  
    onGridReady = (params: any) => {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
  
      params.api.sizeColumnsToFit();
    };
  
    onCellValueChanged(params: any) {
      var colId = params.column.getId();
      if (colId === "country") {
        var selectedCountry = params.data.country;
        var selectedCity = params.data.city;
        var allowedCities = countyToCityMap(selectedCountry);
        var cityMismatch = allowedCities.indexOf(selectedCity) < 0;
        if (cityMismatch) {
          params.node.setDataValue("city", null);
        }
      }
    }
    render() {
      return (
        <div style={{ width: "100%", height: "100vh" }}>
          <div
            id="myGrid"
            style={{
              height: "100%",
              width: "100%"
            }}
            className="ag-theme-balham"
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}
              // frameworkComponents={this.state.frameworkComponents}
              defaultColDef={this.state.defaultColDef}
              onGridReady={this.onGridReady}
              onCellValueChanged={this.onCellValueChanged.bind(this)}
            />
          </div>
        </div>
      );
    }
  }
  
  function countyToCityMap(match: any) {
    var map: any = {
      Ireland: ["Dublin", "Cork", "Galway"],
      USA: ["New York", "Los Angeles", "Chicago", "Houston"]
    };
    return map[match];
  }
  
 
export default Main;
