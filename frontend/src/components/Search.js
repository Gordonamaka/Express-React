import {React, useState ,useEffect} from "react";
import axios from "axios";


export default function Search() {
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
      const API_URL = 'https://my.api.mockaroo.com/phonebook.json?key=9ac1c5f0'
      axios
          .get(API_URL)
          .then(res => {
              const contacts = res.data
              setContacts(contacts)
          })
  }, [])
/*
  const filteredContacts = search.length === 0 ? contacts : 
  contacts.filter(contact => contact.full_name.
              toLowerCase().includes(search.toLowerCase())) */

  return (
      <div>
              <input 
                  type="text" 
                  placeholder="Search name" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  />
                  <button onClick={useEffect}> Submit </button>
      </div>
  )
}