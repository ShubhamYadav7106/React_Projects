import React from 'react'
import './leftDash.css'

function LeftDash() {
  return (
    <div>
            <aside>
           
           <div class="top">
             <div class="logo">
               <h2>&<span class="danger">kY</span> </h2>
             </div>
             <div class="close" id="close_btn">
              <span class="material-symbols-sharp">
                close
                </span>
             </div>
           </div>
           
            <div class="sidebar">
  
              <a href="#">
                <span class="material-symbols-sharp">grid_view </span>
                <h3>Dashbord</h3>
             </a>
             <a href="#" class="active">
                <span class="material-symbols-sharp">person_outline </span>
                <h3>custumers</h3>
             </a>
             <a href="#">
                <span class="material-symbols-sharp">insights </span>
                <h3>Analytics</h3>
             </a>
             <a href="#">
                <span class="material-symbols-sharp">mail_outline </span>
                <h3>Messages</h3>
                <span class="msg_count">14</span>
             </a>
             <a href="#">
                <span class="material-symbols-sharp">receipt_long </span>
                <h3>Products</h3>
             </a>
             <a href="#">
                <span class="material-symbols-sharp">report_gmailerrorred </span>
                <h3>Reports</h3>
             </a>
             <a href="#">
                <span class="material-symbols-sharp">settings </span>
                <h3>settings</h3>
             </a>
             <a href="#">
                <span class="material-symbols-sharp">add </span>
                <h3>Add Product</h3>
             </a>
             <a href="#">
                <span class="material-symbols-sharp">logout </span>
                <h3>logout</h3>
             </a>
               
  
  
            </div>
  
        </aside>
    </div>
  )
}

export default LeftDash; 