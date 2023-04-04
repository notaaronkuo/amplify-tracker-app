import React, { useState } from 'react';
import items from './data-list';
import items2 from './data-users';

import './searchBar.css';
import {API} from "aws-amplify";
var selectType = 0;


// they were used as a reference for sorting for the about me page,
// but i didnt use em in the home page if i recall correctly -Ari
// const all_Items = [...new Set(items.map((item) => item.category))]
// const all_Items2 = [...new Set(items2.map((item2) => item2.category))]


const Team = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((memberInfo) => {
        const { LocationListID, LocationListName, LocationName, LocationListDescription, LocationID, UserID} = memberInfo

        return (

          <article key={LocationListID}
          className="member-section">

            <div className="lists-info">
              <header>
                <h3>
                  Location List name: {LocationListName}
                </h3>
                <h4 className="location-name">
                  Location Name: {LocationName}
                </h4>
              </header>
              <p className="location-list-desc">
                {LocationListDescription}
              </p>
              <h4 className="location-id">
                  Location ID: {LocationID}
                </h4>
                <h4 className="user-id">
                  User ID: {UserID}
                </h4>

            </div>

          </article>

              )
            })
           }
    </div>
  )
}

const Users = ({ items2 }) => {
  return (
    <div className="section-center">
      {items2.map((UsersInfo) => {
        const { UserID, Username, Name, Email, Password, isPublic} = UsersInfo

        return (

          <article key={UserID}
          className="member-section">

            <div className="users-info">
              <header>
                <h3>
                  Username: {Username}
                </h3>
                <h4 className="users-name">
                  Name: {Name}
                </h4>
              </header>
              <p className="users-email">
                {Email}
              </p>
              <h4 className="users-password">
                  Password: {Password}
                </h4>
                <h4 className="user-public">
                  isPublic: {isPublic}
                </h4>

            </div>

          </article>

              )
            })
           }
    </div>
  )
}

function SearchBar() {
  const [param1, setParam1] = useState('');
  const [param2, setParam2] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedParamValue, setSelectedParamValue] = useState('');

  const [memberInfos] = useState(items)
  const [UsersInfos] = useState(items2)
  
  const [listItems1, setListItems1] = useState([]);
  const [listItems2, setListItems2] = useState([]);

 


  const handleChangeParam1 = (event) => {
    const selectedValue = event.target.value;
    console.log(`Selected parameter 1: ${selectedValue}`);
    setParam1(selectedValue);


    if(selectedValue == 'value1') {
      selectType = 1;
      console.log(`List selected` + selectType);
      setSelectedParamValue("");
      //setSelectedParamValue(<Team items={memberInfos} />);

    } else if(selectedValue == 'value2') {
      selectType = 1;
      console.log(`User selected:` + selectType);
      //setSelectedParamValue(<Users items2={UsersInfos} />);
    } else{
      selectType = 0;
      console.log("Nothing selected" + selectType);
      setSelectedParamValue("");
      //Default selection

    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // if(param1 == 'value1' && searchTerm){
    //   console.log(`Search term: ${searchTerm}`);
    //   setSelectedParamValue(<Team items={memberInfos.filter(memberInfo => memberInfo.LocationListName.includes(searchTerm))} />);
    //   console.log("this is line 127 of searchbar.jsx");
    // }
    // else if(param1 == 'value2' && searchTerm){
    //   console.log(`Search term: ${searchTerm}`);
    //   setSelectedParamValue(<Users items2={UsersInfos.filter(UsersInfo => UsersInfo.Username.includes(searchTerm))} />)
    //   console.log("This is line 132 of searchbar.jsx");
    // }
    let myAPI = "api1dc1e643";
    let searchItem = null;

    if (selectType === 0){
      setSelectedParamValue("Please choose a list type");
      console.log("2. Nothing selected" + selectType);
    }

//ORIGINAL VERSION NOT COMMENTED OUT

    if(param1 == 'value1' && searchTerm){
      API.get(myAPI,"/search/" + searchTerm)
      .then(res => {
          //for(let i = 0; i < res.result.length; i++){
            //searchItem = res.result[i];
            // You can call individual items like the above, or you can add by their attributes like below:
            // searchItem = res.result[i].username;
            // TODO: Parse item and format it for front end
          //}
          console.log("Original API format");
      }).catch(err => {
          console.log(err);
      });
  }
  

////////////////////////////////////DIVIDER//////////////////////////////
  
  /** FIRST VERSION WITHOUT THE RES.THEN FORMAT */
  //Uncomment to use, but its not tested yet!
  //Map values will show as undefined without the database
  /*
  console.log("Second Version Format");
  if(param1 == 'value1' && searchTerm){
    API.get(myAPI, "/search/" + searchTerm)
    .then(response => {
      const data1 = Object.values(response).map(item => ({
            LocationListID: item.LocationListID,
            LocationListName: item.LocationListName,
            LocationListDescription: item.LocationListDescription,
            LocationName: item.LocationName,
            UserID: item.UserID,
            LocationID: item.LocationID,
          }));
    setSelectedParamValue(<Team listItems1={data1} />);
  })
  .catch(error => {
    console.log(error);
  });
  } 
  
  else if (param1 === 'value2' && searchTerm) {
    API.get(myAPI, "/search/" + searchTerm)
      .then(response => {
        const data2 = Object.values(response).map(item => ({
          UserID: item.UserID,
          Username: item.Username,
          Name: item.Name,
          Email: item.Email,
          Password: item.Password,
          isPublic: item.isPublic,
        }));
        setSelectedParamValue(<Users listItems2={data2} />);
      })
      .catch(error => {
        console.log(error);
      });
  }
*/

////////////////////////////////////DIVIDER//////////////////////////////

//console.log("third Version Format");
  /**SECOND VERSION WITH THE RES.THEN FORMATT */
    //Uncomment to use, but its not tested yet!
 //Map values will show as undefined without the database
  /*
  if(param1 == 'value1' && searchTerm){

    API.get(myAPI,"/search/" + searchTerm)
    .then(res => {
      setListItems1(res.data);
    })
    .catch(error => {
      console.log(error);
    });
    setSelectedParamValue(<Team listItems1={[]} />);
  } else if(param1 == 'value2' && searchTerm){

    API.get(myAPI,"/search/" + searchTerm)
    .then(res => {
      setListItems2(res.data);
    })
    .catch(error => {
      console.log(error);
    });
    setSelectedParamValue(<Users listItems2={[]} />);
  }
  */

////////////////////////////////////DIVIDER//////////////////////////////

    // perform search using selected parameters and search term
    // ...
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="param1">Search by Type:</label>
      <select id="param1" name="param1" value={param1} onChange={handleChangeParam1}>
        <option value="">-- Select search type --</option>
        <option value="value1">List Name</option>
        <option value="value2">User</option>
      </select>

      <label htmlFor="search">Search:</label>
        <input type="text" id="search" name="search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />

        <button type="submit">Search</button>
      </form>

      {selectedParamValue && (
        <div>{selectedParamValue}</div>
      )}
    </div>
  );
}

export default SearchBar;