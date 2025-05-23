import { useState } from "react";


const first=()=>{

        const [inputvalue,addinputvalue]=useState('');
        const [add,addsetup]=useState([]);
        const [editindex,seteditindex]=useState(null);
        const AddValue=(e)=>{
            e.preventDefault();
            if(inputvalue.trim()==='')return;
            if(editindex!=null){
                const updateitem=[...add];
                updateitem[editindex]=inputvalue;
                addsetup(updateitem);
                seteditindex(null);
            }else{
                addsetup([...add,inputvalue]);
            }
            
            addinputvalue('');
        };
        const Delete=(indexremove)=>{

                addsetup(add.filter((_,index)=>index!==indexremove))
        };
        const Edit=(index)=>{
            seteditindex(index);
            addinputvalue(add[index]);
        };

        return(
            <>
            <h1>To-Do App</h1>
           
            <form >
                <input type="text" placeholder='enter here' value={inputvalue} onChange={(e)=>addinputvalue(e.target.value)}/>
                <button onClick={AddValue}>{editindex!==null?'Edit':'Add'}</button>
            </form>
              <ul>
        {add.map((item, index) => (
          <li key={index}>{item}
          <button onClick={()=>Edit(index)}>Edit</button>
        <button onClick={()=>Delete(index)}>Delete</button>
          </li>
          
        
        ))}
      </ul>


            </>
        );
}
export default first;