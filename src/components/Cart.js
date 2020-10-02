import React from 'react'

export default function Cart({items}) {
  
  // showModal = () => {
  //   this.setState({ show: true });
  // };

  // hideModal = () => {
  //   this.setState({ show: false });
  // };
  return (
        <main>
          <h1>React Modal</h1>
          <button type="button" onClick={()=>console.log(items)}>
            open
          </button>
        </main>
      );
  }
