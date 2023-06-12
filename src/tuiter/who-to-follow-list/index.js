import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";
const WhoToFollowList = () => {
 return(
  <div class="col-12 col-xxl-12 col-xl-12 col-lg-12 d-none d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none">

   <ul className="list-group">
     <li className="list-group-item">
       <h3>Who to follow</h3>
     </li>
     {
       whoArray.map(who =>
         <WhoToFollowListItem
           key={who._id}
           who={who}/>
       )
     }
   </ul>
   </div>
 );
};
export default WhoToFollowList;

