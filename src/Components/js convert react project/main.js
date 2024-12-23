import React from 'react'
import './main.css';

function Main() {
  return (
    <div>
         <main>
           <h1>Dashbord</h1>

           <div class="date">
             <input type="date"/> 
           </div>

        <div class="insights">

 
            <div class="sales">
               <span class="material-symbols-sharp">trending_up</span>
               <div class="middle">

                 <div class="left">
                   <h3>Total Sales</h3>
                   <h1>$25,024</h1>
                 </div>
                  <div class="progress">
                      <svg>
                         <circle  r="30" cy="40" cx="40"></circle>
                      </svg>
                      <div class="number"><p>80%</p></div>
                  </div>

               </div>
               <small>Last 24 Hours</small>
            </div>
 
              <div class="expenses">
                <span class="material-symbols-sharp">local_mall</span>
                <div class="middle">
 
                  <div class="left">
                    <h3>Total Sales</h3>
                    <h1>$25,024</h1>
                  </div>
                   <div class="progress">
                       <svg>
                          <circle  r="30" cy="40" cx="40"></circle>
                       </svg>
                       <div class="number"><p>80%</p></div>
                   </div>
 
                </div>
                <small>Last 24 Hours</small>
             </div>
       
              
               <div class="income">
                <span class="material-symbols-sharp">stacked_line_chart</span>
                <div class="middle">
 
                  <div class="left">
                    <h3>Total Sales</h3>
                    <h1>$25,024</h1>
                  </div>
                   <div class="progress">
                       <svg>
                          <circle  r="30" cy="40" cx="40"></circle>
                       </svg>
                       <div class="number"><p>80%</p></div>
                   </div>
 
                </div>
                <small>Last 24 Hours</small>
             </div>


        </div>

      <div class="recent_order">
         <h2>Recent Orders</h2>
         <table> 
             <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Number</th>
                <th>Payments</th>
                <th>Status</th>
              </tr>
             </thead>
              <tbody>
                 <tr>
                   <td>Mini USB</td>
                   <td>4563</td>
                   <td>Due</td>
                   <td class="warning">Pending</td>
                   <td class="primary">Details</td>
                 </tr>
                 <tr>
                  <td>Mini USB</td>
                  <td>4563</td>
                  <td>Due</td>
                  <td class="warning">Pending</td>
                  <td class="primary">Details</td>
                </tr>
                <tr>
                  <td>Mini USB</td>
                  <td>4563</td>
                  <td>Due</td>
                  <td class="warning">Pending</td>
                  <td class="primary">Details</td>
                </tr>
                <tr>
                  <td>Mini USB</td>
                  <td>4563</td>
                  <td>Due</td>
                  <td class="warning">Pending</td>
                  <td class="primary">Details</td>
                </tr>
              </tbody>
         </table>
         <a href="#">Show All</a>
      </div>

      </main>
    </div>
  )
}

export default Main