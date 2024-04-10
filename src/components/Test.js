import React from 'react'

const Test = () => {
    const number = [1,2,3,4,5];
    const squarenumber = number.map(number => number*number);
    console.log(squarenumber);

    const users = [ 
        { name : "John", age: 20},
        { name : "Kim", age : 22},
        { name : "Lee", age: 30}
    ]

    const usersName = users.map(user => user.name);
    console.log('userName',usersName);
    const userAge=users.map(user=>user.age);
    console.log('userAge',userAge);

  return (
    <div>
      
    </div>
  )
}

export default Test
