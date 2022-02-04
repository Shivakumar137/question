import Questions from "./Questions/Questions";

const App = ()=>{
   const problems = [
      {
       id : "codeforces1139B",
       title : "Chocolates",
       url : "https://codeforces.com/problemset/problem/1139/B",
       platform : "Codeforces",
      },
      {
        id : "codeforces281A",
        title : "Word Capitalization",
        url : "https://codeforces.com/problemset/problem/281/A",
        platform : "Codeforces",
       },
   ];
   
  
  return(
    <div>
      <h1 style={{textAlign:'center'}}>lets Code Together</h1>
      <Questions items={problems}/>
      
      </div>
  );
};

export default App;
