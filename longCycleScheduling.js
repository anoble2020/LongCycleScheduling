import { LightningElement, api, track } from "lwc";
export default class DepotTest extends LightningElement {
  //@api horizontalAlign = "space";
  //@api flexipageRegionWidth;
  @track firstDate;
  @track secondDate;

  @api
  options = [
    { label: "Policy 1", value: "new" },
    { label: "Policy 2", value: "inProgress" },
    { label: "Policy 3", value: "finished" }
  ];

  handleCalendarChange(event){
    let clickedDate = event.detail.value;
    console.log('clicked date: ', clickedDate);
    console.log('first date before ifs', this.firstDate);
      console.log('second date before ifs', this.secondDate);
    if(this.firstDate && this.secondDate){
      console.log('clearing dates...');
      this.firstDate = null;
      this.secondDate = null;
      this.firstDate = clickedDate;
      console.log('reset first date to:', clickedDate);
    }
    else if(!this.firstDate && !this.secondDate){
      this.firstDate = clickedDate;
      console.log('setting first date...');
      console.log('first date', this.firstDate);
      console.log('second date', this.secondDate);
      return;
    }
    else if(this.firstDate && !this.secondDate){
      this.secondDate = clickedDate;
      console.log('setting second date...');
      console.log('first date', this.firstDate);
      console.log('second date', this.secondDate);
      return;
    }
  }
  /*handleData(event){

    console.log('first date', this.firstDate);
      console.log('second date', this.secondDate);
      console.log(event.detail.value);
      this.firstDate = event.detail.value;
      console.log(event.detail.multiValue);
  }*/
}