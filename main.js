function revers (currentCours) 
{
  const cours = currentCours;
  return (money) => {
    const result = money * cours / 100;
    return result;
  }  
}

const exchange = revers(3.450);
const result = exchange(10000);