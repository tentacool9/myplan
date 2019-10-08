exports.getItems = function(items) {
    items.forEach(element => {
      let infostring = "";
      if (element.calls.amount == -1) {
        infostring += "Unlimited Calls "
      } else if (element.calls.amount != null) {
        infostring += element.calls.amount + " Call minutes, "
      }
  
      if (element.calls.range == -1) {
        infostring += "Worldwide ";
      } else if (element.calls.range != null) {
        infostring += element.calls.range + ". ";
      }
      if (element.text.amount == -1) {
        infostring += "unlimited texting "
      } else if (element.text.amount != null) {
        infostring += element.text.amount + " Text messages, "
      }
  
      if (element.data == -1) {
        infostring += "unlimited data plan "
      } else if (element.text.amount != null) {
        infostring += element.data + "GB of data."
      }
  
  
      element.information = infostring;
        
      });
    return items; 
  }

