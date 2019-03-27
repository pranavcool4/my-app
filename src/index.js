import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment'
import DateTimePicker from 'react-datetime-picker';
class Assignment extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      formdata: null,
      isLoaded : false,
      date : new Date(),
      dateValid : false,
      dateEmpty : true,
      myForm : [],
      errMessage : ''
    };
this.onChange = this.onChange.bind(this);
this.onSubmit = this.onSubmit.bind(this);
  };

validateIt(validations,dt,cvs=false){
  if(cvs){
    this.state.dateEmpty = false
  }
  var q = false
  for (var i = 0 ; i<validations.length; i++){
    if (validations[i].name==='min'&&q!==true){
      let now = new Date()
      var temp = validations[i].value.split(" ");
      if(dt<now){
        let min = moment(now).add(temp[0],temp[1]);
        if(dt<min){
          this.state.dateEmpty = true
          q = true
          //alert(validations[i].message)
          this.state.errMessage = validations[i].message
        }
      }
    }
    else if (validations[i].name==='max'&&q!==true){
      let now = new Date()
      var temp = validations[i].value.split(" ");
      if(dt>now){
        let max = moment(now).add(temp[0],temp[1]);
        if(dt>max){
          q = true
          //alert(validations[i].message)
          this.state.errMessage = validations[i].message
        }
      }
    }
    else if(validations[i].name==='required'&&this.state.dateEmpty&&q!==true){
      q = true
      alert(validations[i].message)
      this.state.errMessage = validations[i].message
      }
    if(q){
      this.state.dateValid = false
    }
    else{
      this.state.dateValid = true
    }
    }
}

onChange = date => {
var {formdata} = this.state
this.setState({date})
console.log(date)
this.setState({dateEmpty:false})
console.log(this.state.dateEmpty)
this.validateIt(formdata.data[0].validations,date,true)
}
//Send state to the server code

 componentDidMount(){
  fetch('https://ca.platform.simplifii.xyz/api/v1/static/assignment9').
  then(res=>res.json()).
  then(json =>{
    this.setState({
      formdata : json.response,
      isLoaded : true
    })
  });
}

onSubmit() {
  var {formdata} = this.state
  if(!this.state.dateEmpty&&this.state.dateValid)
  {
  var i = 0
  while(i<formdata.data.length){
    if(formdata.data[i].type === 'button'){
      break;
    }
    else {
      i++;
    }
  }
  console.log(formdata.data[i].api)
  if(formdata.data[i].action==='api')
    var action = formdata.data[i].api
  var name = formdata.data[0].name
  var date = this.state.date
  var data = {}
  data[name] = date
  fetch(action.uri, {
    method: action.method,
    body: JSON.stringify(data),
  }).then(response => {
    if (response.status >= 200 && response.status < 300) {
      alert('Data Posted Successfully')
        return response;
        console.log(response);
        window.location.reload();
      } else {
       console.log('Somthing happened wrong');
      }
    }).catch(err => err);
}
else{
  console.log(this.state.dateEmpty,this.state.date)
  this.validateIt(formdata.data[0].validations,this.state.date)
}
}
setForm(data,message = ''){
  let form = []
  for (var i = 0;i<data.length;i++){
    if(data[i].type==='datetime'){
      form.push((<div class="contact1-form-title">{data[i].label}</div>))
      form.push(
      (<div>
      <DateTimePicker class = "wrap-input1 validate-input"
      onChange={this.onChange}
      value={this.state.date}></DateTimePicker>
      </div>)
    )
    }
    else if(data[i].type==='button')
    {
      form.push(
        (<div class = "container-contact1-form-btn">
        <button class = "contact1-form-btn" onClick = {this.onSubmit}>
        {data[i].label}
        </button>
        </div>
        )
      )
    }
  }
  form.push(
    (<div>
    <p>{message}</p>
  </div>)
  )
  this.state.myForm = form
}
render(){
  var {formdata,isLoaded} = this.state
  return(<div>Hello World</div>)
  if (!isLoaded)
    return <div> ..loading </div>
    else
      {
        this.setForm(formdata.data,this.state.errMessage)
        return this.state.myForm
  }
  return null
}
}
ReactDOM.render(<Assignment/>, document.getElementById('root'));
