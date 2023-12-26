const date = new Date();


const year = () => {
  console.log(date.getFullYear() + '年');
}

year();

const month = () => {
  console.log(date.getMonth() + 1 + '月');
}

month();

const day = () =>{
  console.log(date.getDate() + '日');
}

day();




